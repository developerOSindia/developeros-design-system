"""
DeveloperOS Reusable Streamlit Design System Components
Built using native Streamlit widgets and carefully scoped semantic containers.
Does NOT rely on fragile CSS selectors targeting internal Streamlit DOM elements.
"""

from typing import List, Dict, Any, Optional
import streamlit as st

BRAND_NAME = "DeveloperOS"
BRAND_URL = "https://developeros.in"
GITHUB_URL = "https://github.com/developerOSindia"
ACCENT_COLOR = "#38bdf8"
SURFACE_BORDER = "#334155"
TEXT_MUTED = "#94a3b8"


def render_header(
    title: str,
    description: str,
    category: str = "Tools",
    version: str = "1.0.0",
    repo_url: Optional[str] = None
):
    """Renders standardized DeveloperOS header with brand pill and category breadcrumb."""
    github_link = f'<a href="{repo_url}" target="_blank" style="color: {TEXT_MUTED}; text-decoration: none; margin-left: 12px; font-size: 0.85rem;">Source on GitHub &rarr;</a>' if repo_url else ""

    st.markdown(
        f"""
        <div style="border-bottom: 1px solid {SURFACE_BORDER}; padding-bottom: 14px; margin-bottom: 24px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
            <div>
                <a href="{BRAND_URL}" target="_blank" style="text-decoration: none; color: {ACCENT_COLOR}; font-weight: 700; font-size: 0.85rem; letter-spacing: 0.05em; text-transform: uppercase;">
                    {BRAND_NAME}
                </a>
                <span style="color: {TEXT_MUTED}; margin: 0 8px;">/</span>
                <span style="color: {TEXT_MUTED}; font-size: 0.85rem;">{category}</span>
                <h1 style="margin: 4px 0 0 0; font-size: 1.85rem; font-weight: 800; color: #f8fafc;">{title}</h1>
            </div>
            <div style="display: flex; align-items: center;">
                <span style="background: rgba(56, 189, 248, 0.12); color: {ACCENT_COLOR}; border: 1px solid rgba(56, 189, 248, 0.3); border-radius: 9999px; padding: 3px 12px; font-size: 0.75rem; font-weight: 600;">
                    v{version}
                </span>
                {github_link}
            </div>
        </div>
        <p style="color: {TEXT_MUTED}; font-size: 1rem; margin-top: -12px; margin-bottom: 24px;">{description}</p>
        """,
        unsafe_allow_html=True
    )


def render_footer():
    """Renders standardized DeveloperOS footer with zero-trust privacy notice and ecosystem links."""
    st.markdown(
        f"""
        <div style="border-top: 1px solid {SURFACE_BORDER}; margin-top: 48px; padding-top: 16px; display: flex; justify-content: space-between; align-items: center; font-size: 0.85rem; color: {TEXT_MUTED}; flex-wrap: wrap; gap: 12px;">
            <div>
                <span>🛡️ <strong>Zero-Trust Privacy:</strong> Evaluated in local runtime memory. Zero logs or database persistence.</span>
            </div>
            <div>
                <a href="{BRAND_URL}" target="_blank" style="color: {ACCENT_COLOR}; text-decoration: none; margin-left: 16px;">developeros.in</a>
                <a href="{GITHUB_URL}" target="_blank" style="color: {TEXT_MUTED}; text-decoration: none; margin-left: 16px;">GitHub</a>
            </div>
        </div>
        """,
        unsafe_allow_html=True
    )


def render_privacy_badge():
    """Renders a standalone zero-trust privacy badge."""
    st.markdown(
        """
        <div style="display: inline-flex; align-items: center; gap: 6px; background: rgba(34, 197, 94, 0.12); border: 1px solid rgba(34, 197, 94, 0.25); color: #4ade80; padding: 4px 10px; border-radius: 9999px; font-size: 0.75rem; font-weight: 600;">
            <span>🛡️</span>
            <span>Zero-Trust / Ephemeral Processing</span>
        </div>
        """,
        unsafe_allow_html=True
    )


def render_category_navigation(categories: List[Dict[str, str]], current_category_id: str) -> str:
    """Renders native category selector using Streamlit radio pills."""
    names = [c["name"] for c in categories]
    ids = [c["id"] for c in categories]

    selected_index = ids.index(current_category_id) if current_category_id in ids else 0
    selected_name = st.radio("Select Suite Category", names, index=selected_index, horizontal=True)

    return ids[names.index(selected_name)]


def render_status_alert(message: str, alert_type: str = "success"):
    """Renders semantic notifications using native Streamlit alert APIs."""
    if alert_type == "success":
        st.success(message)
    elif alert_type == "warning":
        st.warning(message)
    elif alert_type == "error":
        st.error(message)
    else:
        st.info(message)


def render_related_tools(tools: List[Dict[str, str]]):
    """Renders related tools recommendations."""
    if not tools:
        return

    st.markdown("---")
    st.markdown("#### 🔗 Related Utilities")
    cols = st.columns(len(tools))
    for idx, tool in enumerate(tools):
        with cols[idx]:
            st.markdown(
                f"""
                <div style="background: #1e293b; border: 1px solid {SURFACE_BORDER}; border-radius: 8px; padding: 12px;">
                    <strong style="color: #f8fafc; font-size: 0.95rem;">{tool['name']}</strong>
                    <p style="color: {TEXT_MUTED}; font-size: 0.8rem; margin: 4px 0 8px 0;">{tool['description']}</p>
                    <a href="{tool.get('url', '#')}" target="_blank" style="color: {ACCENT_COLOR}; font-size: 0.8rem; text-decoration: none;">Launch Utility &rarr;</a>
                </div>
                """,
                unsafe_allow_html=True
            )
