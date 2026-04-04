import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string;
  schema?: object | object[];
}

const SEO = ({ title, description, keywords, canonical, schema }: SEOProps) => {
  useEffect(() => {
    // Update Title
    document.title = `${title} | Rajamani Transport Chennai`;
    
    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    } else {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      metaDescription.setAttribute("content", description);
      document.head.appendChild(metaDescription);
    }

    // Update Meta Keywords
    const defaultKeywords = "debris removal chennai, construction waste transport chennai, building junk disposal, demolition scrap clearance, old cement concrete transport, broken brick removal, earth soil shifting, renovation trash, malba removal chennai, site clearance services, garbage hauling, builder waste disposal, Tata 407 transport chennai, sand transport, P-sand delivery, M-sand delivery, rubish clearance, rubble removal, cebris removal, concrete disposal";
    const finalKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute("content", finalKeywords);
    } else {
      metaKeywords = document.createElement("meta");
      metaKeywords.setAttribute("name", "keywords");
      metaKeywords.setAttribute("content", finalKeywords);
      document.head.appendChild(metaKeywords);
    }

    // Handle canonical
    if (canonical) {
      let linkCanonical = document.querySelector('link[rel="canonical"]');
      if (linkCanonical) {
        linkCanonical.setAttribute("href", canonical);
      } else {
        linkCanonical = document.createElement("link");
        linkCanonical.setAttribute("rel", "canonical");
        linkCanonical.setAttribute("href", canonical);
        document.head.appendChild(linkCanonical);
      }
    }

    // Handle Structured Data (JSON-LD)
    const existingScript = document.getElementById('seo-schema');
    if (existingScript) {
      existingScript.remove();
    }

    if (schema) {
      const script = document.createElement('script');
      script.id = 'seo-schema';
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    }
  }, [title, description, keywords, canonical, schema]);

  return null;
};

export default SEO;
