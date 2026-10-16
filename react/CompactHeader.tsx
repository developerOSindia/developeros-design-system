import React from "react";
import { devosTokens } from "../dist/react/tokens";

export interface CompactHeaderProps {
  text?: string;
  url?: string;
  className?: string;
}

export const CompactHeader: React.FC<CompactHeaderProps> = ({
  text = "Powered by DeveloperOS ↗",
  url = "https://developeros.in?utm_source=developeros_tools&utm_medium=header_banner&utm_campaign=powered_by",
  className,
}) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.35rem",
        background: "rgba(249, 115, 22, 0.1)",
        border: "1px solid rgba(249, 115, 22, 0.3)",
        color: devosTokens.colors.primary,
        fontSize: "0.78rem",
        fontWeight: 600,
        padding: "0.25rem 0.65rem",
        borderRadius: devosTokens.radii.full,
        textDecoration: "none",
        letterSpacing: "0.01em",
        transition: "all 0.15s ease-in-out",
      }}
    >
      <span>⚡</span>
      <span>{text}</span>
    </a>
  );
};
