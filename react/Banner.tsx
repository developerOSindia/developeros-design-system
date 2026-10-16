import React from "react";
import { devosTokens } from "../dist/react/tokens";

export interface BannerProps {
  toolName?: string;
  heading?: string;
  description?: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
  primaryUrl?: string;
  secondaryUrl?: string;
}

export const Banner: React.FC<BannerProps> = ({
  toolName,
  heading = "Enjoying this free tool?",
  description = "Discover more developer tools, AI resources, and automation solutions from DeveloperOS.",
  primaryCtaText = "Explore DeveloperOS",
  secondaryCtaText = "More Free Tools",
  primaryUrl = "https://developeros.in?utm_source=developeros_tools&utm_medium=main_banner&utm_campaign=ecosystem_referral",
  secondaryUrl = "https://toolkit.developeros.in?utm_source=developeros_tools&utm_medium=secondary_cta&utm_campaign=tools_directory",
}) => {
  const displayHeading = toolName && heading === "Enjoying this free tool?" ? `Enjoying ${toolName}?` : heading;

  return (
    <section
      role="region"
      aria-label="DeveloperOS Promotion"
      style={{
        background: `linear-gradient(135deg, rgba(249, 115, 22, 0.08) 0%, rgba(244, 63, 94, 0.04) 50%, rgba(6, 182, 212, 0.06) 100%), ${devosTokens.colors.surface}`,
        border: `1px solid ${devosTokens.colors.surfaceBorder}`,
        borderRadius: devosTokens.radii.md,
        padding: "1.5rem 1.75rem",
        margin: "2.5rem 0 1.5rem 0",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.35)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1.25rem",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", maxWidth: "650px" }}>
        <svg viewBox="0 0 64 64" width="40" height="40" fill="none" style={{ flexShrink: 0 }} aria-hidden="true">
          <defs>
            <linearGradient id="reactPromoGrad" x1="10%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff3b30" />
              <stop offset="48%" stopColor="#ff5a3d" />
              <stop offset="100%" stopColor="#ff914d" />
            </linearGradient>
            <linearGradient id="reactPanelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1b1b1f" />
              <stop offset="100%" stopColor="#242428" />
            </linearGradient>
          </defs>
          <rect x="34" y="12" width="22" height="10" rx="2.5" fill="url(#reactPanelGrad)" stroke="rgba(255,255,255,0.06)" />
          <rect x="34" y="26" width="22" height="10" rx="2.5" fill="url(#reactPanelGrad)" stroke="rgba(255,255,255,0.06)" />
          <rect x="34" y="40" width="22" height="10" rx="2.5" fill="url(#reactPanelGrad)" stroke="rgba(255,255,255,0.06)" />
          <path d="M15 20.5L33.5 14V49.5L15 46Z" fill="#05070a" stroke="url(#reactPromoGrad)" strokeWidth="2.8" strokeLinejoin="round" />
          <path d="M15 20.5V46" stroke="url(#reactPromoGrad)" strokeWidth="2.8" strokeLinecap="round" />
          <path d="M33.5 14V49.5" stroke="url(#reactPromoGrad)" strokeWidth="2.8" strokeLinecap="round" />
          <path d="M22 23L27 25.8L22 28.6" stroke="#f8fafc" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="23.5" y1="34.2" x2="29.2" y2="34.2" stroke="#f8fafc" strokeWidth="2.8" strokeLinecap="round" />
        </svg>
        <div>
          <h3 style={{ margin: "0 0 0.35rem 0", fontSize: "1.2rem", fontWeight: 700, color: devosTokens.colors.textPrimary, letterSpacing: "-0.01em" }}>
            {displayHeading}
          </h3>
          <p style={{ margin: 0, color: devosTokens.colors.textMuted, fontSize: "0.95rem", lineHeight: 1.5 }}>
            {description}
          </p>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "0.85rem", flexWrap: "wrap" }}>
        <a
          href={primaryUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: devosTokens.colors.primary,
            color: "#ffffff",
            fontWeight: 600,
            fontSize: "0.9rem",
            padding: "0.55rem 1.25rem",
            borderRadius: devosTokens.radii.sm,
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            boxShadow: "0 2px 4px rgba(249, 115, 22, 0.25)",
          }}
        >
          {primaryCtaText} &rarr;
        </a>
        <a
          href={secondaryUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.06)",
            border: `1px solid ${devosTokens.colors.surfaceBorder}`,
            color: devosTokens.colors.textPrimary,
            fontWeight: 600,
            fontSize: "0.9rem",
            padding: "0.55rem 1.15rem",
            borderRadius: devosTokens.radii.sm,
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
          }}
        >
          {secondaryCtaText}
        </a>
      </div>
    </section>
  );
};
