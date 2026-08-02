import { useMemo, useState } from "react";
import { existingBdctClient } from "../lib/bdct-client";
import type { ArtistFormManifest, FormField, FormValue } from "../data/forms";

function inputValue(value: FormValue | undefined): string {
  return typeof value === "string" ? value : "";
}

export default function WixProjectForm({ manifest }: { manifest: ArtistFormManifest }) {
  const [stepIndex, setStepIndex] = useState(0);
  const [values, setValues] = useState<Record<string, FormValue>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");

  const step = manifest.steps[stepIndex];
  const progress = useMemo(() => ((stepIndex + 1) / manifest.steps.length) * 100, [stepIndex, manifest.steps.length]);

  const setValue = (target: string, value: FormValue) => {
    setValues((current) => ({ ...current, [target]: value }));
    setErrors((current) => {
      const next = { ...current };
      delete next[target];
      return next;
    });
  };

  const validateStep = () => {
    const nextErrors: Record<string, string> = {};
    for (const field of step.fields) {
      const value = values[field.target];
      if (field.required && (value === undefined || value === "" || value === false)) {
        nextErrors[field.target] = "This field is required.";
      }
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const nextStep = () => {
    if (!validateStep()) return;
    setStepIndex((current) => Math.min(current + 1, manifest.steps.length - 1));
    document.getElementById("project-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!validateStep()) return;
    setStatus("submitting");

    try {
      const result = await existingBdctClient.submissions.createSubmission({
        formId: manifest.formId,
        submissions: values
      });
      const submissionStatus = (result as any)?.status ?? (result as any)?.submission?.status;
      if (submissionStatus === "PENDING" || submissionStatus === "CONFIRMED") {
        window.location.assign(manifest.successUrl);
        return;
      }
      throw new Error(`Unexpected submission status: ${String(submissionStatus)}`);
    } catch (error) {
      console.error(`Unable to submit ${manifest.artist} project form`, error);
      setStatus("error");
    }
  };

  const renderField = (field: FormField) => {
    const error = errors[field.target];
    const common = {
      id: field.target,
      name: field.target,
      required: field.required,
      "aria-invalid": Boolean(error),
      "aria-describedby": error ? `${field.target}-error` : undefined
    };

    if (field.type === "textarea") {
      return <textarea {...common} rows={6} value={inputValue(values[field.target])} onChange={(event) => setValue(field.target, event.target.value)} />;
    }

    if (field.type === "select") {
      return (
        <select {...common} value={inputValue(values[field.target])} onChange={(event) => setValue(field.target, event.target.value)}>
          <option value="">Select one</option>
          {field.options?.map((option) => <option key={option} value={option}>{option.trim()}</option>)}
        </select>
      );
    }

    if (field.type === "radio") {
      return (
        <div className="choice-group" role="radiogroup" aria-labelledby={`${field.target}-label`}>
          {field.options?.map((option) => (
            <label className="choice" key={option}>
              <input
                type="radio"
                name={field.target}
                value={option}
                checked={values[field.target] === option}
                onChange={() => setValue(field.target, option)}
              />
              <span>{option.trim()}</span>
            </label>
          ))}
        </div>
      );
    }

    if (field.type === "checkbox") {
      return (
        <label className="consent">
          <input
            type="checkbox"
            name={field.target}
            checked={values[field.target] === true}
            onChange={(event) => setValue(field.target, event.target.checked)}
          />
          <span>{field.label}</span>
        </label>
      );
    }

    return (
      <input
        {...common}
        type={field.type === "email" ? "email" : field.type === "phone" ? "tel" : "text"}
        value={inputValue(values[field.target])}
        onChange={(event) => setValue(field.target, event.target.value)}
        autoComplete={field.type === "email" ? "email" : field.type === "phone" ? "tel" : undefined}
      />
    );
  };

  return (
    <form id="project-form" className="project-form" onSubmit={submit} noValidate>
      <div className="form-progress" aria-label={`Step ${stepIndex + 1} of ${manifest.steps.length}`}>
        <span style={{ width: `${progress}%` }} />
      </div>
      <div className="form-step-label">Step {stepIndex + 1} of {manifest.steps.length}</div>
      <h3>{step.title}</h3>

      <div className="form-fields">
        {step.fields.map((field) => {
          const isConsent = field.type === "checkbox";
          return (
            <div className={`field ${isConsent ? "field-consent" : ""}`} key={field.target}>
              {!isConsent && (
                <label id={`${field.target}-label`} htmlFor={field.target}>
                  {field.label}{field.required ? <span aria-hidden="true"> *</span> : null}
                </label>
              )}
              {field.description ? <p className="field-description">{field.description}</p> : null}
              {renderField(field)}
              {errors[field.target] ? <p className="field-error" id={`${field.target}-error`}>{errors[field.target]}</p> : null}
            </div>
          );
        })}
      </div>

      <div className="form-actions">
        {stepIndex > 0 ? <button type="button" className="button button-secondary" onClick={() => setStepIndex((current) => current - 1)}>Back</button> : <span />}
        {stepIndex < manifest.steps.length - 1 ? (
          <button type="button" className="button" onClick={nextStep}>Next</button>
        ) : (
          <button type="submit" className="button" disabled={status === "submitting"}>{status === "submitting" ? "Submitting…" : "Submit Your Project"}</button>
        )}
      </div>

      {status === "error" ? <p className="form-submit-error" role="alert">Your project could not be submitted. Nothing was lost—please try again.</p> : null}
    </form>
  );
}
