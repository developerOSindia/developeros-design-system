import React from "react";
import { devosTokens } from "../dist/react/tokens";

export interface FooterBannerProps {
  tagline?: string;
  homeUrl?: string;
  toolsUrl?: string;
  githubUrl?: string;
  privacyUrl?: string;
}

export const FooterBanner: React.FC<FooterBannerProps> = ({
  tagline = "Built with ❤️ by DeveloperOS",
  homeUrl = "https://developeros.in?utm_source=developeros_tools&utm_medium=footer_link&utm_campaign=ecosystem_referral",
  toolsUrl = "https://toolkit.developeros.in?utm_source=developeros_tools&utm_medium=footer_link&utm_campaign=ecosystem_referral",
  githubUrl = "https://github.com/developerOSindia",
  privacyUrl = "https://developeros.in/privacy?utm_source=developeros_tools&utm_medium=footer_link&utm_campaign=ecosystem_referral",
}) => {
  return (
    <footer
      role="contentinfo"
      style={{
        borderTop: `1px solid ${devosTokens.colors.surfaceBorder}`,
        marginTop: "3.5rem",
        padding: "2rem 0 1.25rem 0",
        textAlign: "center",
        color: devosTokens.colors.textMuted,
        fontSize: "0.875rem",
      }}
    >
      <p style={{ fontSize: "1rem", fontWeight: 600, color: devosTokens.colors.textPrimary, margin: "0 0 0.85rem 0" }}>
        Built with ❤️ by{" "}
        <a
          href={homeUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: devosTokens.colors.primary, textDecoration: "none", fontWeight: 700 }}
        >
          DeveloperOS
        </a>
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1.25rem",
          flexWrap: "wrap",
          marginBottom: "0.85rem",
        }}
      >
        <a href={homeUrl} target="_blank" rel="noopener noreferrer" style={{ color: devosTokens.colors.accent, textDecoration: "none" }}>
          DeveloperOS Home
        </a>
        <span style={{ color: "rgba(255, 255, 255, 0.2)" }}>•</span>
        <a href={toolsUrl} target="_blank" rel="noopener noreferrer" style={{ color: devosTokens.colors.accent, textDecoration: "none" }}>
          All Tools Directory
        </a>
        <span style={{ color: "rgba(255, 255, 255, 0.2)" }}>•</span>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" style={{ color: devosTokens.colors.accent, textDecoration: "none" }}>
          GitHub Organization
        </a>
        <span style={{ color: "rgba(255, 255, 255, 0.2)" }}>•</span>
        <a href={privacyUrl} target="_blank" rel="noopener noreferrer" style={{ color: devosTokens.colors.accent, textDecoration: "none" }}>
          Privacy Policy
        </a>
      </div>
      <p style={{ margin: "0.35rem 0", color: "#94a3b8", fontSize: "0.8rem" }}>
        DeveloperOS Open-Source Tools Ecosystem • Licensed under MIT • Zero Telemetry Guarantee
      </p>
      <p style={{ margin: 0, color: "#6b7c94", fontSize: "0.78rem" }}>
        All processing occurs strictly client-side or in ephemeral in-memory sessions. Zero payload data is persisted.
      </p>
    </footer>
  );
};
