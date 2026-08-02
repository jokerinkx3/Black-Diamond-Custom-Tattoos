export type FormValue = string | boolean;

export type FormField = {
  target: string;
  label: string;
  type: "text" | "email" | "phone" | "textarea" | "select" | "radio" | "checkbox";
  required?: boolean;
  description?: string;
  options?: readonly string[];
};

export type FormStep = {
  title: string;
  fields: readonly FormField[];
};

export type ArtistFormManifest = {
  artist: "Joker" | "Linda";
  formId: string;
  successUrl: string;
  steps: readonly FormStep[];
};

export const jokerForm: ArtistFormManifest = {
  artist: "Joker",
  formId: "d9cc00bc-95cd-4bc4-a4ec-f6f12e230d15",
  successUrl: "/thankyou-joker",
  steps: [
    {
      title: "About you",
      fields: [
        { target: "first_name_e0e4", label: "First name", type: "text", required: true },
        { target: "last_name_ba56", label: "Last name", type: "text", required: true },
        { target: "email_d837", label: "Email", type: "email", required: true },
        { target: "phone_9c86", label: "Phone", type: "phone", required: true, description: "For faster response" },
        {
          target: "style_interest",
          label: "Style Interest",
          type: "select",
          required: true,
          options: ["Black & Grey Realism", "Norse/Viking Designs", "Dark/Moody Aesthetic", "Other (please describe below)"]
        },
        { target: "brief_description_optional", label: "Brief Description (optional)", type: "text" }
      ]
    },
    {
      title: "Project scope",
      fields: [
        { target: "is_this_a_cover_up_1", label: "Is this a cover-up?", type: "radio", required: true, options: ["Yes", "No"] },
        {
          target: "placement",
          label: "Placement",
          type: "select",
          required: true,
          options: ["Arm (upper/lower/full sleeve)", "Leg (thigh/calf/full leg)", "Back (upper/full)", "Chest", "Ribs", "Other"]
        },
        {
          target: "investment_level",
          label: "Investment Level",
          type: "radio",
          required: true,
          options: [
            " 500−1,000 (smaller, simpler pieces)",
            "1,000−2,000 (quality custom work)\n",
            "2,000−4,000 (detailed statement pieces) ⭐",
            "$4,000+ (major projects / large scale) ⭐⭐",
            "I'm not sure yet (help me understand pricing)"
          ]
        },
        {
          target: "are_you_local_to_las_vegas_or_willing_to_travel_to_las_vegas_to",
          label: "Are you local to Las Vegas or willing to travel to Las Vegas to get tattooed?",
          type: "radio",
          options: ["Yes", "No"]
        },
        {
          target: "timeline",
          label: "Timeline",
          type: "radio",
          required: true,
          options: ["Ready within 1 month (ready to commit soon)", "1-3 months (actively planning)", "3-6 months (planning ahead)", "6+ months (gathering ideas)"]
        }
      ]
    },
    {
      title: "Your vision",
      fields: [
        { target: "tell_us_about_your_vision_optional", label: "Tell us about your vision (optional)", type: "textarea" },
        {
          target: "how_did_you_hear_about_us",
          label: "How did you hear about us?",
          type: "select",
          required: true,
          options: ["Instagram", "Facebook", "Google Search", "Friend/Family Referral", "Walk-By", "Other"]
        },
        {
          target: "sms_text_consent",
          label: "Yes, Black Diamond Custom Tattoos may text me at the number provided about this tattoo inquiry. Message frequency varies. Msg & data rates may apply. Reply STOP to opt out or HELP for help. Consent is not a condition of purchase.",
          type: "checkbox"
        }
      ]
    }
  ]
};

export const lindaForm: ArtistFormManifest = {
  artist: "Linda",
  formId: "b47a12b0-2ee8-4bda-9429-1b8a35eda515",
  successUrl: "/thankyou-linda",
  steps: [
    {
      title: "About you",
      fields: [
        { target: "first_name_3241", label: "First name", type: "text", required: true },
        { target: "last_name_bdfe", label: "Last name", type: "text", required: true },
        { target: "email_3248", label: "Email", type: "email", required: true },
        { target: "phone_eaf5", label: "Phone", type: "phone", required: true },
        {
          target: "style_interest",
          label: "Style Interest",
          type: "select",
          required: true,
          options: ["Cover-Up Transformation", "Vivid Floral Realism", " Color Realism (other subjects)", "Other (please describe)"]
        },
        { target: "brief_description_optional", label: "Brief Description (optional)", type: "text" }
      ]
    },
    {
      title: "Project scope",
      fields: [
        { target: "is_this_a_cover_up", label: "Is this a cover-up?", type: "radio", required: true, options: ["Yes, it is a coverup", "No, fresh skin!"] },
        {
          target: "placement",
          label: "Placement",
          type: "select",
          required: true,
          options: ["Arm (upper/lower/full sleeve)", "Leg (thigh/calf/full leg)", "Back (upper/full)", "Chest", "Ribs", "Other"]
        },
        {
          target: "investment_level",
          label: "Investment Level",
          type: "radio",
          required: true,
          options: ["1,000-1500 (smaller, simpler pieces)", "1,500−2,500 (quality custom work)", "2,500−4,000 (detailed statement pieces) ⭐", "$4,000+ (major projects / large scale) ⭐⭐"]
        },
        {
          target: "timeline",
          label: "Timeline",
          type: "radio",
          required: true,
          options: ["Ready within 1 month (ready to commit soon)", "1-3 months (actively planning)", "3-6 months (planning ahead)", "6+ months (gathering ideas)"]
        }
      ]
    },
    {
      title: "Your vision",
      fields: [
        {
          target: "are_you_local_to_las_vegas_or_willing_to_travel_to_las_vegas_to",
          label: "Are you local to Las Vegas or willing to travel to Las Vegas to get tattooed?",
          type: "radio",
          required: true,
          options: ["Yes, will be in Vegas for the tattoo", "No, I cannot make the trip"]
        },
        { target: "tell_us_about_your_vision_optional", label: "Tell us about your vision (optional)", type: "textarea" },
        {
          target: "how_did_you_hear_about_linda",
          label: "How did you hear about Linda?",
          type: "select",
          required: true,
          options: ["Instagram", "Facebook", "Google Search", "Friend/Family Referral", "Walk-By", "Other"]
        },
        {
          target: "sms_text_consent",
          label: "Yes, Black Diamond Custom Tattoos may text me at the number provided about this tattoo inquiry. Message frequency varies. Msg & data rates may apply. Reply STOP to opt out or HELP for help. Consent is not a condition of purchase.",
          type: "checkbox"
        }
      ]
    }
  ]
};
