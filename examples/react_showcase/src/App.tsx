import React, { useState } from "react";
import { devosTokens } from "../../../dist/react/tokens";
import { Header } from "../../../react/Header";
import { Footer } from "../../../react/Footer";
import { Panel } from "../../../react/Panel";
import { Button, CopyButton } from "../../../react/Button";
import { CategoryNav } from "../../../react/CategoryNav";
import { StatusMessage } from "../../../react/StatusMessage";
import { PrivacyBadge } from "../../../react/PrivacyBadge";
import { ToolCard } from "../../../react/ToolCard";

export const App: React.FC = () => {
  const [activeCat, setActiveCat] = useState("api");
  const [inputVal, setInputVal] = useState('{"tool": "JWT Inspector", "safe": true}');
  const [outputVal, setOutputVal] = useState("{\n  \"valid\": true,\n  \"claims\": {\n    \"sub\": \"developer_123\",\n    \"role\": \"admin\"\n  }\n}");
  const [status, setStatus] = useState<{ type: "success" | "error" | "info"; msg: string }>({
    type: "info",
    msg: "Ready to inspect tokens. Zero server transmission.",
  });

  const categories = [
    { id: "api", name: "API & Network" },
    { id: "web", name: "Web Craft" },
    { id: "crypto", name: "Crypto & Security" },
    { id: "data", name: "Data Convert" },
  ];

  const handleInspect = () => {
    try {
      JSON.parse(inputVal);
      setStatus({ type: "success", msg: "Token format valid and verified locally!" });
    } catch (err: any) {
      setStatus({ type: "error", msg: `Syntax Error: ${err.message}` });
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: devosTokens.colors.background,
      color: devosTokens.colors.textPrimary,
      fontFamily: devosTokens.fonts.base,
      padding: "32px 24px",
      boxSizing: "border-box",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* 1. Header with Logo, Breadcrumb, Version, and GitHub Source Link */}
        <Header
          title="React Design System Showcase: Token Inspector"
          description="Production-grade React component implementation consuming DeveloperOS design tokens without runtime dependencies on the main website."
          category="API & Network"
          version="1.0.0"
          githubUrl="https://github.com/developerOSindia"
        />

        {/* 2. Privacy Notice Pill */}
        <div style={{ marginBottom: "20px" }}>
          <PrivacyBadge />
        </div>

        {/* 3. Category Navigation */}
        <CategoryNav
          categories={categories}
          activeCategoryId={activeCat}
          onSelectCategory={(id) => setActiveCat(id)}
        />

        {/* 4. Semantic Status Message */}
        <div style={{ marginBottom: "24px" }}>
          <StatusMessage type={status.type} message={status.msg} />
        </div>

        {/* 5. Input and Output Panels (Workbench) */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
          gap: "24px",
          marginBottom: "32px",
        }}>
          {/* Input Panel */}
          <Panel
            title="📥 Input Payload"
            subtitle="Paste raw token or JSON string"
            actions={
              <Button
                variant="outline"
                size="sm"
                onClick={() => setInputVal('{"test": true, "timestamp": ' + Date.now() + '}')}
              >
                Load Sample
              </Button>
            }
          >
            <textarea
              rows={8}
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              style={{
                width: "100%",
                boxSizing: "border-box",
                background: "#0b1120",
                color: "#e2e8f0",
                fontFamily: devosTokens.fonts.mono,
                padding: "12px",
                borderRadius: devosTokens.radii.sm,
                border: `1px solid ${devosTokens.colors.surfaceBorder}`,
                fontSize: "0.85rem",
                outline: "none",
                resize: "vertical",
              }}
            />
            <div style={{ marginTop: "12px" }}>
              <Button variant="primary" onClick={handleInspect}>
                Inspect Token
              </Button>
            </div>
          </Panel>

          {/* Output Panel */}
          <Panel
            title="📤 Decoded Output"
            subtitle="Evaluated client-side in browser"
            badge="0ms Latency"
            actions={<CopyButton textToCopy={outputVal} />}
          >
            <pre style={{
              background: "#0b1120",
              color: devosTokens.colors.accent,
              fontFamily: devosTokens.fonts.mono,
              padding: "12px",
              borderRadius: devosTokens.radii.sm,
              border: `1px solid ${devosTokens.colors.surfaceBorder}`,
              fontSize: "0.85rem",
              lineHeight: 1.5,
              maxHeight: "220px",
              overflowY: "auto",
              margin: 0,
            }}>
              {outputVal}
            </pre>
          </Panel>
        </div>

        {/* 6. Related Tools Section */}
        <section style={{ marginTop: "40px" }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "16px" }}>
            🔗 Related Developer Utilities
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "16px",
          }}>
            <ToolCard
              id="cURL"
              name="cURL to Python / JS"
              description="Convert raw cURL shell commands into clean requests and fetch code."
              category="api"
              tags={["curl", "python", "http"]}
              status="active"
              url="https://api.toolkit.developeros.in"
            />
            <ToolCard
              id="hasher"
              name="Multi-Algorithm Hasher"
              description="Compute SHA-256, SHA-512, MD5, and HMAC signatures in memory."
              category="security"
              tags={["hash", "sha256", "crypto"]}
              status="active"
              url="https://crypto.toolkit.developeros.in"
            />
            <ToolCard
              id="json-yaml"
              name="JSON <-> YAML Converter"
              description="Bidirectional data structure converter with validation."
              category="data"
              tags={["json", "yaml", "format"]}
              status="active"
              url="https://data.toolkit.developeros.in"
            />
          </div>
        </section>

        {/* 7. Footer linking to developeros.in */}
        <Footer />
      </div>
    </div>
  );
};
