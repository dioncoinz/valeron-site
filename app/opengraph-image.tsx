import { ImageResponse } from "next/og";

export const alt = "Valeron — operational software built around real work";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(<div style={{ display: "flex", width: "100%", height: "100%", background: "#f7f3eb", color: "#171714", padding: "76px", fontFamily: "Arial, sans-serif", flexDirection: "column", justifyContent: "space-between" }}>
    <div style={{ display: "flex", alignItems: "center", gap: "18px", fontSize: 34, fontWeight: 700 }}><span style={{ color: "#dd622d", fontSize: 58 }}>{"{"}</span>Valeron</div>
    <div style={{ display: "flex", flexDirection: "column", maxWidth: 930 }}><div style={{ display: "flex", color: "#b94d21", fontSize: 18, letterSpacing: "0.16em", textTransform: "uppercase" }}>Australian operational software</div><div style={{ display: "flex", marginTop: 22, fontSize: 66, lineHeight: 1.03, letterSpacing: "-0.04em", fontWeight: 700 }}>Built around the way work actually happens.</div></div>
    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 18, color: "#66635b" }}><span>Assets · People · Work</span><span>valeron.com.au</span></div>
  </div>, size);
}
