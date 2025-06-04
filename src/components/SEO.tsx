import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
}

/**
 * A component for dynamically updating document metadata for SEO
 */
export function SEO({
  title = "FreeWhisper - Free & Private Speech-to-Text App for macOS",
  description = "Transform your voice into text with unprecedented accuracy and privacy. Built on advanced Whisper AI, runs entirely on your device, free forever.",
  canonical = "https://freewhisper.furkanksl.com/",
  ogImage = "/free-whisper.png",
  noindex = false,
}: SEOProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const metaTags = {
      description: description,
      "og:title": title,
      "og:description": description,
      "og:image": ogImage.startsWith("http")
        ? ogImage
        : `https://freewhisper.furkanksl.com${ogImage}`,
      "og:url": canonical,
      "twitter:title": title,
      "twitter:description": description,
      "twitter:image": ogImage.startsWith("http")
        ? ogImage
        : `https://freewhisper.furkanksl.com${ogImage}`,
      "twitter:url": canonical,
      robots: noindex ? "noindex, nofollow" : "index, follow",
    };

    // Update or create meta tags
    Object.entries(metaTags).forEach(([name, content]) => {
      let meta: HTMLMetaElement | null;

      if (name.startsWith("og:")) {
        meta = document.querySelector(`meta[property="${name}"]`);
        if (!meta) {
          meta = document.createElement("meta");
          meta.setAttribute("property", name);
          document.head.appendChild(meta);
        }
      } else {
        meta = document.querySelector(`meta[name="${name}"]`);
        if (!meta) {
          meta = document.createElement("meta");
          meta.setAttribute("name", name);
          document.head.appendChild(meta);
        }
      }

      meta.setAttribute("content", content);
    });

    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonical);

    // Cleanup function
    return () => {
      // Optional: Revert to default values on unmount if needed
    };
  }, [title, description, canonical, ogImage, noindex]);

  // This component doesn't render anything
  return null;
}
