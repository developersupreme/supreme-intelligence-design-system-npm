import React, { useEffect } from "react";
import { Banner } from "@/components/ui/banner";

export default function BannerDemo() {
  useEffect(() => {
    // Add BugHerd script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://www.bugherd.com/sidebarv2.js?apikey=ljnm33lvqfgml4sr9fwffa";
    script.async = true;
    document.head.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      const existingScript = document.querySelector(
        'script[src*="bugherd.com"]'
      );
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  const handleCtaClick = () => {
    console.log("CTA button clicked!");
  };

  return (
    <div className="bg-gray-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            Banner Component Demo
          </h1>
          <p className="text-base md:text-lg text-gray-600">
            Based on the provided image design
          </p>
        </div>
        {/* Variant examples */}
        <div className="space-y-4">
          <h2 className="text-lg md:text-2xl font-semibold text-gray-800">
            Banner Variants
          </h2>
          <div className="space-y-4">
            <Banner
              variant="primary"
              title="Primary variant banner"
              ctaText="Get Started"
              onCtaClick={handleCtaClick}
            />
            <Banner
              variant="secondary"
              title="Secondary variant banner"
              ctaText="Learn More"
              onCtaClick={handleCtaClick}
            />
            <Banner
              variant="dark"
              title="Dark variant banner"
              ctaText="Sign Up"
              onCtaClick={handleCtaClick}
            />
          </div>
        </div>

        {/* Size examples */}
        <div className="space-y-4">
          <h2 className="text-lg md:text-2xl font-semibold text-gray-800">Banner Sizes</h2>
          <div className="space-y-4">
            <Banner
              size="sm"
              title="Small banner with compact spacing"
              ctaText="Action"
              onCtaClick={handleCtaClick}
            />
            <Banner
              size="default"
              title="Default size banner"
              ctaText="Action"
              onCtaClick={handleCtaClick}
            />
            <Banner
              size="lg"
              title="Large banner with more padding"
              ctaText="Action"
              onCtaClick={handleCtaClick}
            />
          </div>
        </div>

        {/* Banner without CTA */}
        <div className="space-y-4">
          <h2 className="text-lg md:text-2xl font-semibold text-gray-800">
            Banner Without CTA
          </h2>
          <Banner
            title="This banner has no call-to-action button"
            showCta={false}
          />
        </div>
      </div>
    </div>
  );
}
