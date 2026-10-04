import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { siteConfig } from "@/content/site";

export const alt = `${siteConfig.legalName} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logo = await readFile(join(process.cwd(), "public/brand/logo-dark.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "#292320", color: "#f5f3f1", fontFamily: "sans-serif" }}>
        <img src={logoSrc} alt="" width={520} height={129} />
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 30, letterSpacing: 6, textTransform: "uppercase", color: "#bfbdbc" }}>Labs · Studio · Private Office</div>
          <div style={{ fontSize: 24, color: "#8f8680" }}>{`Abuja · Lagos · London · ${siteConfig.rcNumber}`}</div>
        </div>
      </div>
    ),
    size,
  );
}
