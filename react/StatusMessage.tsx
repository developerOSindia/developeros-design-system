import React from "react";
import { devosTokens } from "../dist/react/tokens";

export interface StatusMessageProps {
  type?: "success" | "warning" | "error" | "info";
  message: string;
}

export const StatusMessage: React.FC<StatusMessageProps> = ({
  type = "info",
  message,
}) => {
  const isSuccess = type === "success";
  const isWarning = type === "warning";
  const isError = type === "error";

  const borderColor = isSuccess
    ? devosTokens.colors.semantic.success
    : isWarning
    ? devosTokens.colors.semantic.warning
    : isError
    ? devosTokens.colors.semantic.error
    : devosTokens.colors.semantic.info;

  const bg = isSuccess
    ? "rgba(34, 197, 94, 0.12)"
    : isWarning
    ? "rgba(245, 158, 11, 0.12)"
    : isError
    ? "rgba(239, 68, 68, 0.12)"
    : "rgba(56, 189, 248, 0.12)";

  const textColor = isSuccess
    ? "#4ade80"
    : isWarning
    ? "#fbbf24"
    : isError
    ? "#f87171"
    : devosTokens.colors.accent;

  const icon = isSuccess ? "✓" : isWarning ? "⚠️" : isError ? "✕" : "ℹ";

  return (
    <div
      role="alert"
      style={{
        background: bg,
        borderLeft: `4px solid ${borderColor}`,
        borderRadius: `0 ${devosTokens.radii.sm} ${devosTokens.radii.sm} 0`,
        padding: "10px 14px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        color: textColor,
        fontSize: "0.875rem",
        fontWeight: 500,
      }}
    >
      <span>{icon}</span>
      <span>{message}</span>
    </div>
  );
};
