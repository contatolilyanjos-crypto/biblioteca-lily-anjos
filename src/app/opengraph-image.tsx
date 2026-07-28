import { ImageResponse } from "next/og";

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
          alignItems: "center",
          justifyContent: "center",
          background: "#0c110d",
          color: "#f4efe2",
          fontFamily: "Georgia, serif",
          padding: 80,
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 28, color: "#c9a95c", letterSpacing: 4 }}>
          BIBLIOTECA LILY ANJOS
        </div>
        <div style={{ fontSize: 56, marginTop: 24, lineHeight: 1.2 }}>
          Guia do Decorador e Florista
        </div>
        <div style={{ fontSize: 28, marginTop: 32, color: "#b9c0b6" }}>
          5 volumes digitais • Mais de 550 páginas • Acesso imediato
        </div>
      </div>
    ),
    { ...size }
  );
}
