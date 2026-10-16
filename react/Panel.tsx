import React from "react";
import { devosTokens } from "../dist/react/tokens";

export interface PanelProps {
  title: string;
  subtitle?: string;
  badge?: string;
  actions?: React.ReactNode;
  children: React.ReactNode;
}

export const Panel: React.FC<PanelProps> = ({
  title,
  subtitle,
  badge,
  actions,
  children,
}) => {
  return (
    <div style={{
      background: devosTokens.colors.surface,
      border: `1px solid ${devosTokens.colors.surfaceBorder}`,
      borderRadius: devosTokens.radii.md,
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      gap: "12px",
    }}>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: `1px solid ${devosTokens.colors.surfaceBorder}`,
        paddingBottom: "10px",
      }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <h2 style={{
              margin: 0,
              fontSize: "1.05rem",
              fontWeight: 700,
              color: devosTokens.colors.textPrimary,
            }}>
              {title}
            </h2>
            {badge && (
              <span style={{
                fontSize: "0.7rem",
                padding: "2px 6px",
                background: "rgba(56, 189, 248, 0.15)",
                color: devosTokens.colors.accent,
                borderRadius: devosTokens.radii.full,
              }}>
                {badge}
              </span>
            )}
          </div>
          {subtitle && (
            <p style={{ margin: "2px 0 0 0", fontSize: "0.8rem", color: devosTokens.colors.textMuted }}>
              {subtitle}
            </p>
          )}
        </div>
        {actions && <div>{actions}</div>}
      </div>

      <div>{children}</div>
    </div>
  );
};
