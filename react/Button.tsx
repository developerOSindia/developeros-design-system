import React, { useState } from "react";
import { devosTokens } from "../dist/react/tokens";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  style,
  ...props
}) => {
  const isPrimary = variant === "primary";
  const isSecondary = variant === "secondary";

  const padding = size === "sm" ? "6px 12px" : size === "lg" ? "12px 24px" : "8px 16px";
  const fontSize = size === "sm" ? "0.8rem" : size === "lg" ? "1rem" : "0.9rem";

  return (
    <button
      style={{
        background: isPrimary
          ? devosTokens.colors.primary
          : isSecondary
          ? devosTokens.colors.surface
          : "transparent",
        color: isPrimary ? "#ffffff" : devosTokens.colors.textPrimary,
        border: isPrimary
          ? "none"
          : `1px solid ${devosTokens.colors.surfaceBorder}`,
        borderRadius: devosTokens.radii.sm,
        padding,
        fontSize,
        fontWeight: 600,
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        transition: "all 0.15s ease",
        ...style,
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export interface CopyButtonProps {
  textToCopy: string;
  label?: string;
}

export const CopyButton: React.FC<CopyButtonProps> = ({
  textToCopy,
  label = "Copy",
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error("Clipboard write failed", e);
    }
  };

  return (
    <Button
      variant="secondary"
      size="sm"
      onClick={handleCopy}
      type="button"
      title="Copy to clipboard"
    >
      {copied ? "✓ Copied!" : `📋 ${label}`}
    </Button>
  );
};
