"use client";

import { useEffect, useRef } from "react";

const ENABLED = false;
const ORGANIZER_ID = "YOUR_ORG_ID";

declare global {
  interface Window {
    EBWidgets?: {
      createWidget: (config: {
        widgetType: string;
        eventbriteOrgId: string;
        iframeContainerId: string;
        iframeContainerHeight: number;
      }) => void;
    };
  }
}

export default function EventbriteWidget() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ENABLED) return;

    const script = document.createElement("script");
    script.src = "https://www.eventbrite.com/static/widgets/eb_widgets.js";
    script.async = true;
    script.onload = () => {
      if (window.EBWidgets) {
        window.EBWidgets.createWidget({
          widgetType: "checkout",
          eventbriteOrgId: ORGANIZER_ID,
          iframeContainerId: "eventbrite-widget-container",
          iframeContainerHeight: 520,
        });
      }
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  if (!ENABLED) {
    return (
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-semibold mb-3">
            Tickets &amp; Registration
          </h2>
          <p className="text-gray-500 mb-4">
            Online ticketing is being set up and will be available soon.
          </p>
          <p className="text-sm text-gray-400">
            Eventbrite integration pending activation
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <div
        id="eventbrite-widget-container"
        ref={containerRef}
        className="min-h-[520px]"
      />
      <p className="text-center text-sm text-gray-500 mt-4">
        <a
          href="https://www.eventbrite.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:opacity-80"
        >
          Tickets via Eventbrite
        </a>
      </p>
    </section>
  );
}
