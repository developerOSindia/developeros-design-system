import React from "react";
import { devosTokens } from "../dist/react/tokens";

export const Footer: React.FC = () => {
  return (
    <footer style={{
      borderTop: `1px solid ${devosTokens.colors.surfaceBorder}`,
      marginTop: devosTokens.spacing[12],
      paddingTop: devosTokens.spacing[4],
      paddingBottom: devosTokens.spacing[6],
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: devosTokens.spacing[4],
      fontSize: "0.85rem",
      color: devosTokens.colors.textMuted,
    }}>
      <div>
        <span>🛡️ <strong>Zero-Trust Privacy:</strong> All computation executes ephemerally in memory. No user data is stored.</span>
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        <a
          href={devosTokens.brand.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: devosTokens.colors.accent, textDecoration: "none" }}
        >
          {devosTokens.brand.name} Official
        </a>
        <a
          href={devosTokens.brand.github}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: devosTokens.colors.textMuted, textDecoration: "none" }}
        >
          GitHub Org
        </a>
      </div>
    </footer>
  );
};
