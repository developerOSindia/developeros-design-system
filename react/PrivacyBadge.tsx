import React from "react";
import { devosTokens } from "../dist/react/tokens";

export const PrivacyBadge: React.FC = () => {
  return (
    <div
      title="Zero-Trust Privacy: Compute executes ephemerally in browser memory without persistent logs."
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        background: "rgba(34, 197, 94, 0.12)",
        border: "1px solid rgba(34, 197, 94, 0.25)",
        color: "#4ade80",
        padding: "4px 10px",
        borderRadius: devosTokens.radii.full,
        fontSize: "0.75rem",
        fontWeight: 600,
        userSelect: "none",
      }}
    >
      <span>🛡️</span>
      <span>Zero-Trust Privacy</span>
    </div>
  );
};
