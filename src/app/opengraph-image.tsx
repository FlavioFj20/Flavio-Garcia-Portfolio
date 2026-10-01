import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#06080b",
          backgroundImage:
            "radial-gradient(900px circle at 22% 0%, rgba(56,189,248,0.16), transparent 60%)",
          padding: "72px",
          color: "#e9eef6",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 52,
              height: 52,
              borderRadius: 12,
              border: "1px solid #26364b",
              backgroundColor: "#0d1219",
              color: "#38bdf8",
              fontSize: 22,
              fontWeight: 600,
            }}
          >
            FG
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              color: "#94a3b6",
              letterSpacing: 2,
            }}
          >
            {profile.role}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", fontSize: 68, fontWeight: 700 }}>
            Flávio Garcia
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 34,
              color: "#b7c3d3",
              maxWidth: 900,
              lineHeight: 1.3,
            }}
          >
            Finalista da 42 Luanda — desenvolvimento de software, backend e
            aplicações web.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            borderTop: "1px solid #1a2331",
            paddingTop: 28,
            fontSize: 22,
            color: "#94a3b6",
          }}
        >
          github.com/FlavioFj20
          <div
            style={{ display: "flex", width: 4, height: 4, borderRadius: 99 }}
          />
          linkedin.com/in/flávio-garcia
        </div>
      </div>
    ),
    size,
  );
}