import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";

export const alt = `${profile.name} | ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/* Generated at build with next/og. Matches the site: paper ground, ink type,
   one hairline, no gradient wash. */
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
          backgroundColor: "#f2f3ee",
          padding: "72px",
          color: "#16191a",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 22, color: "#0e5c4c" }}>
          {profile.role} · {profile.location}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{ display: "flex", fontSize: 92, fontWeight: 600, lineHeight: 1 }}
          >
            Flávio Garcia
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 34,
              color: "#3d4340",
              maxWidth: 960,
              lineHeight: 1.35,
            }}
          >
            Desenvolvimento de software, backend, sistemas, infraestrutura e
            redes de computadores.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            borderTop: "1px solid #d5d8d0",
            paddingTop: 26,
            fontSize: 22,
            color: "#6b716c",
          }}
        >
          github.com/FlavioFj20
        </div>
      </div>
    ),
    size,
  );
}
