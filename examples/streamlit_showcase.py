"""
DeveloperOS Design System - Streamlit Page Showcase Example
Demonstrates application of all 12 design system components using native Streamlit APIs.
"""

import streamlit as st
import sys
from pathlib import Path

# Ensure design-system package is accessible
CURRENT_DIR = Path(__file__).resolve().parent.parent
if str(CURRENT_DIR) not in sys.path:
    sys.path.insert(0, str(CURRENT_DIR))

from streamlit.components import (
    render_header,
    render_footer,
    render_privacy_badge,
    render_category_navigation,
    render_status_alert,
    render_related_tools,
)

st.set_page_config(
    page_title="DeveloperOS Design System — Streamlit Showcase",
    page_icon="🎨",
    layout="wide",
)


def main():
    # 1. DeveloperOS Header & Logo with Category Breadcrumb and GitHub Link
    render_header(
        title="Design System Showcase: JSON Contract Validator",
        description="Reference implementation demonstrating the DeveloperOS design system applied to an interactive Streamlit page.",
        category="API & Network",
        version="1.0.0",
        repo_url="https://github.com/developerOSindia/devos-suite-api-network"
    )

    # 2. Tool Category Navigation
    categories = [
        {"id": "api", "name": "API & Network"},
        {"id": "web", "name": "Web Craft"},
        {"id": "security", "name": "Crypto & Security"},
        {"id": "data", "name": "Data Convert"},
    ]
    selected_cat = render_category_navigation(categories, "api")
    st.caption(f"Currently active category filter: **{selected_cat}**")

    # 3. Privacy Notice
    st.markdown("#### Privacy Architecture")
    render_privacy_badge()
    st.write("")

    # 4. Input and Output Panels (Workbench)
    col_input, col_output = st.columns([1, 1], gap="large")

    with col_input:
        st.subheader("📥 Input Panel")
        user_json = st.text_area(
            "Paste JSON Payload:",
            value='{\n  "service": "DeveloperOS Tools",\n  "status": "operational",\n  "version": 1\n}',
            height=160
        )
        col_btn1, col_btn2 = st.columns([1, 1])
        with col_btn1:
            validate_clicked = st.button("Validate JSON", type="primary", use_container_width=True)
        with col_btn2:
            st.button("Format & Minify", use_container_width=True)

    with col_output:
        st.subheader("📤 Output Panel")
        if validate_clicked:
            # 5. Semantic Success Message
            render_status_alert("JSON Payload is 100% valid according to RFC 8259.", "success")
        else:
            render_status_alert("Ready for inspection. Click Validate JSON to test.", "info")

        st.code(user_json, language="json")

        # 6. Download Control & Copy simulation
        col_down, col_copy = st.columns([1, 1])
        with col_down:
            st.download_button(
                label="💾 Download JSON",
                data=user_json,
                file_name="payload.json",
                mime="application/json",
                use_container_width=True,
            )
        with col_copy:
            st.button("📋 Copy Snippet", use_container_width=True)

    # 7. Related-Tool Suggestions
    related = [
        {"name": "cURL to Code", "description": "Convert cURL commands to Python and JS.", "url": "#"},
        {"name": "JWT Inspector", "description": "Decode and validate token signatures.", "url": "#"},
        {"name": "Base64 Encoder", "description": "Encode images and payloads to data URIs.", "url": "#"},
    ]
    render_related_tools(related)

    # 8. Footer linking to developeros.in
    render_footer()


if __name__ == "__main__":
    main()
