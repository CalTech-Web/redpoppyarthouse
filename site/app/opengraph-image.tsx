import { ImageResponse } from "next/og";

export const alt = "Red Poppy Art House - Community Arts Venue in San Francisco";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #5C0E0E 0%, #7A1313 30%, #8B1A1A 60%, #5C0E0E 100%)",
          position: "relative",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: "-60px",
            left: "-60px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "rgba(196, 30, 58, 0.15)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            right: "-40px",
            width: "350px",
            height: "350px",
            borderRadius: "50%",
            background: "rgba(184, 134, 11, 0.1)",
          }}
        />

        {/* Poppy flower icon */}
        <div
          style={{
            display: "flex",
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            background: "rgba(196, 30, 58, 0.3)",
            border: "2px solid rgba(232, 128, 128, 0.4)",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "#C41E3A",
            }}
          />
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: 700,
            color: "#FFF8F0",
            textAlign: "center",
            lineHeight: 1.1,
            marginBottom: "16px",
            letterSpacing: "-1px",
          }}
        >
          Red Poppy Art House
        </div>

        {/* Divider */}
        <div
          style={{
            width: "80px",
            height: "3px",
            background: "linear-gradient(90deg, transparent, #E88080, transparent)",
            marginBottom: "20px",
          }}
        />

        {/* Subtitle */}
        <div
          style={{
            fontSize: "24px",
            color: "#E8D5BC",
            textAlign: "center",
            maxWidth: "700px",
            lineHeight: 1.4,
          }}
        >
          Community Arts Venue in San Francisco&apos;s Mission District
        </div>

        {/* Bottom tag */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <div
            style={{
              fontSize: "14px",
              color: "#E88080",
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            Since 2003 - 2698 Folsom Street, SF
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
