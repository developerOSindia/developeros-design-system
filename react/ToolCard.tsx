import React from "react";
import { devosTokens } from "../dist/react/tokens";

export interface ToolCardProps {
  id: string;
  name: string;
  description: string;
  category: string;
  tags?: string[];
  status?: "active" | "planned" | "in_development";
  url: string;
}

export const ToolCard: React.FC<ToolCardProps> = ({
  name,
  description,
  category,
  tags = [],
  status = "active",
  url,
}) => {
  const isPlanned = status === "planned";
  const statusBg = isPlanned ? "rgba(148, 163, 184, 0.12)" : "rgba(34, 197, 94, 0.12)";
  const statusColor = isPlanned ? devosTokens.colors.textMuted : devosTokens.colors.semantic.success;
  const statusLabel = isPlanned ? "Roadmap" : "Active";

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "flex",
        flexDirection: "column",
        textDecoration: "none",
        background: devosTokens.colors.surface,
        border: `1px solid ${devosTokens.colors.surfaceBorder}`,
        borderRadius: devosTokens.radii.md,
        padding: "20px",
        transition: "all 0.15s ease",
        color: "inherit",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
        <span style={{
          textTransform: "uppercase",
          fontSize: "0.75rem",
          fontWeight: 700,
          color: devosTokens.colors.accent,
          letterSpacing: "0.05em",
        }}>
          {category}
        </span>
        <span style={{
          background: statusBg,
          color: statusColor,
          padding: "2px 8px",
          borderRadius: devosTokens.radii.full,
          fontSize: "0.7rem",
          fontWeight: 600,
        }}>
          {statusLabel}
        </span>
      </div>

      <h3 style={{
        margin: "0 0 8px 0",
        fontSize: "1.15rem",
        fontWeight: 700,
        color: devosTokens.colors.textPrimary,
      }}>
        {name}
      </h3>

      <p style={{
        margin: "0 0 16px 0",
        fontSize: "0.9rem",
        color: devosTokens.colors.textMuted,
        lineHeight: 1.5,
        flex: 1,
      }}>
        {description}
      </p>

      {tags.length > 0 && (
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "6px",
          paddingTop: "10px",
          borderTop: `1px solid ${devosTokens.colors.surfaceBorder}`,
        }}>
          {tags.map(tag => (
            <span
              key={tag}
              style={{
                fontSize: "0.75rem",
                background: "rgba(255, 255, 255, 0.05)",
                color: devosTokens.colors.textMuted,
                padding: "2px 6px",
                borderRadius: devosTokens.radii.sm,
              }}
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </a>
  );
};
