import React from "react";
import { devosTokens } from "../dist/react/tokens";

export interface CategoryNavProps {
  categories: { id: string; name: string }[];
  activeCategoryId: string;
  onSelectCategory: (id: string) => void;
}

export const CategoryNav: React.FC<CategoryNavProps> = ({
  categories,
  activeCategoryId,
  onSelectCategory,
}) => {
  return (
    <nav style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "8px",
      marginBottom: "24px",
    }}>
      <button
        type="button"
        onClick={() => onSelectCategory("all")}
        style={{
          background: activeCategoryId === "all" ? devosTokens.colors.primary : devosTokens.colors.surface,
          color: activeCategoryId === "all" ? "#ffffff" : devosTokens.colors.textMuted,
          border: `1px solid ${activeCategoryId === "all" ? devosTokens.colors.primary : devosTokens.colors.surfaceBorder}`,
          borderRadius: devosTokens.radii.full,
          padding: "6px 14px",
          fontSize: "0.85rem",
          fontWeight: 500,
          cursor: "pointer",
          transition: "all 0.15s ease",
        }}
      >
        All Suites
      </button>

      {categories.map(cat => {
        const isActive = activeCategoryId === cat.id;
        return (
          <button
            key={cat.id}
            type="button"
            onClick={() => onSelectCategory(cat.id)}
            style={{
              background: isActive ? devosTokens.colors.primary : devosTokens.colors.surface,
              color: isActive ? "#ffffff" : devosTokens.colors.textMuted,
              border: `1px solid ${isActive ? devosTokens.colors.primary : devosTokens.colors.surfaceBorder}`,
              borderRadius: devosTokens.radii.full,
              padding: "6px 14px",
              fontSize: "0.85rem",
              fontWeight: 500,
              cursor: "pointer",
              transition: "all 0.15s ease",
            }}
          >
            {cat.name}
          </button>
        );
      })}
    </nav>
  );
};
