import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/* Generated at build with next/og. Matches the site: paper ground, ink type,
   one hairline. No gradient wash, no blob. */
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
          backgroundColor: "#f6f5f2",
          padding: "72px",
          color: "#15171a",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 22, color: "#0b5d52" }}>
          {profile.role} · {profile.location}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ display: "flex", fontSize: 92, fontWeight: 600, lineHeight: 1 }}>
            Flávio Garcia
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 34,
              color: "#3c4147",
              maxWidth: 940,
              lineHeight: 1.35,
            }}
          >
            Cadete da 42 Luanda e Técnico Médio em Informática. Desenvolvimento
            de software, backend, Linux, Docker e bases de dados.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            borderTop: "1px solid #dcd9d2",
            paddingTop: 26,
            fontSize: 22,
            color: "#6b7178",
          }}
        >
          github.com/FlavioFj20
        </div>
      </div>
    ),
    size,
  );
}