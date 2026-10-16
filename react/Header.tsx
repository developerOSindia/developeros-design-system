import React from "react";
import { devosTokens } from "../dist/react/tokens";

export interface HeaderProps {
  title: string;
  description: string;
  category?: string;
  version?: string;
  githubUrl?: string;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  description,
  category = "Tools",
  version = "1.0.0",
  githubUrl,
}) => {
  return (
    <header style={{
      borderBottom: `1px solid ${devosTokens.colors.surfaceBorder}`,
      paddingBottom: devosTokens.spacing[4],
      marginBottom: devosTokens.spacing[6],
    }}>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: devosTokens.spacing[2],
      }}>
        <div>
          <a
            href={devosTokens.brand.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: devosTokens.colors.accent,
              fontWeight: 700,
              fontSize: "0.85rem",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            {devosTokens.brand.name}
          </a>
          <span style={{ color: devosTokens.colors.textMuted, margin: "0 8px" }}>/</span>
          <span style={{ color: devosTokens.colors.textMuted, fontSize: "0.85rem" }}>{category}</span>
          <h1 style={{
            margin: "4px 0 0 0",
            fontSize: "1.85rem",
            fontWeight: 800,
            color: devosTokens.colors.textPrimary,
          }}>
            {title}
          </h1>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{
            background: "rgba(56, 189, 248, 0.12)",
            color: devosTokens.colors.accent,
            border: "1px solid rgba(56, 189, 248, 0.3)",
            borderRadius: devosTokens.radii.full,
            padding: "3px 10px",
            fontSize: "0.75rem",
            fontWeight: 600,
          }}>
            v{version}
          </span>
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: devosTokens.colors.textMuted,
                textDecoration: "none",
                fontSize: "0.85rem",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              GitHub &rarr;
            </a>
          )}
        </div>
      </div>
      <p style={{
        color: devosTokens.colors.textMuted,
        fontSize: "1rem",
        marginTop: "8px",
        marginBottom: 0,
        maxWidth: "800px",
      }}>
        {description}
      </p>
    </header>
  );
};
