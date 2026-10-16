"""
Unit tests for DeveloperOS Design System adapter generation and token schema.
"""

import json
import unittest
from pathlib import Path

SYSTEM_ROOT = Path(__file__).resolve().parent.parent
TOKENS_PATH = SYSTEM_ROOT / "tokens.json"
DIST_DIR = SYSTEM_ROOT / "dist"


class TestDesignSystemAdapters(unittest.TestCase):
    def test_canonical_tokens_structure(self):
        self.assertTrue(TOKENS_PATH.exists(), "tokens.json missing")
        with open(TOKENS_PATH, "r", encoding="utf-8") as f:
            tokens = json.load(f)

        self.assertIn("color", tokens)
        self.assertIn("brand", tokens["color"])
        self.assertIn("primary", tokens["color"]["brand"])
        self.assertIn("typography", tokens)
        self.assertIn("spacing", tokens)
        self.assertIn("radii", tokens)
        self.assertIn("shadows", tokens)

    def test_compiled_adapters_exist(self):
        self.assertTrue((DIST_DIR / "css" / "tokens.css").exists())
        self.assertTrue((DIST_DIR / "react" / "tokens.ts").exists())
        self.assertTrue((DIST_DIR / "streamlit" / "theme.toml").exists())
        self.assertTrue((DIST_DIR / "streamlit" / "devos_theme.py").exists())
        self.assertTrue((DIST_DIR / "extension" / "tokens.css").exists())

    def test_css_tokens_contain_variables(self):
        css = (DIST_DIR / "css" / "tokens.css").read_text(encoding="utf-8")
        self.assertIn("--devos-color-primary", css)
        self.assertIn("--devos-color-bg", css)
        self.assertIn(".devos-card", css)

    def test_streamlit_theme_valid(self):
        toml = (DIST_DIR / "streamlit" / "theme.toml").read_text(encoding="utf-8")
        self.assertIn("primaryColor", toml)
        self.assertIn("backgroundColor", toml)
        self.assertIn("textColor", toml)


if __name__ == "__main__":
    unittest.main()
