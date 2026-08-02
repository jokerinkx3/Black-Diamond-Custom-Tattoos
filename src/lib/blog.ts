import { media } from "@wix/sdk";
import { existingBdctClient } from "./bdct-client";

export type BlogPostView = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  coverImageUrl?: string;
  richContent?: unknown;
};

function resolveImage(item: any): string | undefined {
  const image = item?.media?.wixMedia?.image;
  if (!image) return undefined;
  try {
    return media.getImageUrl(image).url;
  } catch {
    return typeof image?.url === "string" ? image.url : undefined;
  }
}

function normalizePost(item: any): BlogPostView {
  const published = item?.firstPublishedDate ? new Date(item.firstPublishedDate) : undefined;
  return {
    id: item?._id ?? item?.id ?? "",
    slug: item?.slug ?? "",
    title: item?.title ?? "Untitled",
    excerpt: item?.excerpt ?? "",
    date: published && !Number.isNaN(published.valueOf())
      ? published.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
      : "",
    coverImageUrl: resolveImage(item),
    richContent: item?.richContent
  };
}

export async function queryBlogPosts(limit = 12): Promise<BlogPostView[]> {
  try {
    const response = await existingBdctClient.posts
      .queryPosts({ fieldsets: ["RICH_CONTENT", "CONTENT_TEXT", "URL"] })
      .descending("firstPublishedDate")
      .limit(limit)
      .find();

    return (response.items ?? []).map(normalizePost).filter((post) => post.slug);
  } catch (error) {
    console.error("Unable to retrieve the existing Black Diamond Wix Blog", error);
    return [];
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPostView | null> {
  try {
    const response = await existingBdctClient.posts
      .queryPosts({ fieldsets: ["RICH_CONTENT", "CONTENT_TEXT", "URL"] })
      .eq("slug", slug)
      .limit(1)
      .find();

    const item = response.items?.[0];
    return item ? normalizePost(item) : null;
  } catch (error) {
    console.error(`Unable to retrieve blog post: ${slug}`, error);
    return null;
  }
}
