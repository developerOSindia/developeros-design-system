"""
Unit Tests for DeveloperOS Universal Promotional Banner Configuration and System.
"""

import json
import unittest
from pathlib import Path

SYSTEM_ROOT = Path(__file__).resolve().parent.parent


class TestBannerSystem(unittest.TestCase):
    def setUp(self):
        self.config_path = SYSTEM_ROOT / "banner.config.json"
        self.assertTrue(self.config_path.exists(), "banner.config.json must exist")
        with open(self.config_path, "r", encoding="utf-8") as f:
            self.config = json.load(f)

    def test_banner_config_structure(self):
        """Verifies banner.config.json contains all required schema keys and URLs."""
        self.assertIn("version", self.config)
        self.assertIn("brand", self.config)
        self.assertIn("variants", self.config)

        brand = self.config["brand"]
        self.assertEqual(brand["home_url"], "https://developeros.in")
        self.assertEqual(brand["tools_url"], "https://toolkit.developeros.in")
        self.assertEqual(brand["github_url"], "https://github.com/developerOSindia")
        self.assertEqual(brand["privacy_url"], "https://developeros.in/privacy")

    def test_variants_content(self):
        """Verifies the three mandatory banner variants are properly configured."""
        variants = self.config["variants"]
        self.assertIn("main_promotional", variants)
        self.assertIn("compact_header", variants)
        self.assertIn("footer", variants)
        self.assertIn("extension_compact", variants)

        # Variant 1: Main Promotional
        main = variants["main_promotional"]
        self.assertEqual(main["heading"], "Enjoying this free tool?")
        self.assertEqual(main["primary_cta"]["text"], "Explore DeveloperOS")
        self.assertEqual(main["secondary_cta"]["text"], "More Free Tools")
        self.assertEqual(main["primary_cta"]["url"], "https://developeros.in")
        self.assertEqual(main["secondary_cta"]["url"], "https://toolkit.developeros.in")

        # Variant 2: Compact Header
        compact = variants["compact_header"]
        self.assertEqual(compact["text"], "Powered by DeveloperOS ↗")
        self.assertEqual(compact["url"], "https://developeros.in")

        # Variant 3: Footer
        footer = variants["footer"]
        self.assertIn("Built with ❤️ by DeveloperOS", footer["tagline"])
        self.assertEqual(footer["home_url"], "https://developeros.in")
        self.assertEqual(footer["tools_url"], "https://toolkit.developeros.in")

    def test_utm_parameters_privacy(self):
        """Ensures UTM tracking parameters contain zero PII and zero tracking cookies."""
        utm = self.config.get("utm", {})
        self.assertTrue(utm.get("enabled"))
        self.assertEqual(utm.get("source"), "developeros_tools")

        variants = self.config["variants"]
        for v_name, v_data in variants.items():
            if isinstance(v_data, dict):
                for key, val in v_data.items():
                    if isinstance(val, dict) and "url" in val:
                        # Ensure no tracking IDs or cookies
                        self.assertNotIn("session_id", str(val))
                        self.assertNotIn("user_id", str(val))
                        self.assertNotIn("cookie", str(val))

    def test_react_banner_components_exist(self):
        """Verifies React design system banner components exist and contain safe links."""
        react_dir = SYSTEM_ROOT / "react"
        banner_file = react_dir / "Banner.tsx"
        compact_file = react_dir / "CompactHeader.tsx"
        footer_file = react_dir / "FooterBanner.tsx"

        for f in (banner_file, compact_file, footer_file):
            self.assertTrue(f.exists(), f"React component {f.name} must exist")
            content = f.read_text(encoding="utf-8")
            self.assertIn("https://developeros.in", content)
            self.assertIn('target="_blank"', content)
            self.assertIn('rel="noopener noreferrer"', content)


if __name__ == "__main__":
    unittest.main()
