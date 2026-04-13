# Logo Placement & Specification Report

This report identifies all current and recommended logo placements for the **LIC Advisor Portfolio**, specifying brand requirements, dimensions, and styling rules to ensure a professional, high-trust visual identity.

## 1. Logo Placement Map

| Section | Location | Current State | Requirement |
| :--- | :--- | :--- | :--- |
| **Header** | Left-aligned (Brand) | LIC Logo (45px) | **Primary Brand**. Standalone. |
| **Solutions Section** | Individual Cards | SVG Icons Only | **Provider Logo**. Badge style in card header. |
| **Popular Plans** | Individual Cards | SVG Icons Only | **Sub-brand Logo**. Small badge (LIC). |
| **Service Modals** | Top-left of Header | Placeholder `modalLogo` | **Provider Logo**. Standalone visibility. |
| **Agent Section** | Below Profile Card | None | **Trust Strip**. Horizontal row of partners. |
| **Footer** | Bottom Branding | None | **Provider Strip**. Grayscale supporting strip. |

---

## 2. Required Logos & Purpose

### Primary Brand
- **LIC (Life Insurance Corporation of India)**
  - **Purpose**: Main identity. Establishing authority and government-backed trust.
  - **Usage**: Header, Popular Plans cards, Life Insurance modal, Home Loan modal.

### Partner Brands (Supporting)
- **Star Health Insurance**
  - **Purpose**: Specialization proof for health products.
  - **Usage**: Health Insurance solution card, Health modal, Trust strip.
- **United India Insurance**
  - **Purpose**: Specialization proof for general/motor products.
  - **Usage**: General Insurance solution card, General modal, Trust strip.
- **LIC Housing Finance**
  - **Purpose**: Specific branding for mortgage/finance services.
  - **Usage**: Loans & Finance solution card, Loans modal.

---

## 3. Display Styles

### A. Standalone Brand Logo
- Used in **Header** and **Modals**.
- **Style**: Full color, high resolution, clear whitespace.
- **Alignment**: Left-aligned or center-aligned within header container.

### B. Inline Provider Badge
- Used inside **Service Cards** (replacing or next to SVG icons).
- **Style**: Small, boxed or circular background, consistent with card UI.
- **Alignment**: Top-right or centered near the title.

### C. Trust Strip
- Used in **Agent Section** or **Hero Section**.
- **Style**: Horizontal row of logos, uniform height, evenly spaced.
- **Filter**: Optional low-opacity (0.7) or grayscale, turning to full color on hover.

---

## 4. Size & Dimension Specifications

| Placement | Height (px) | Width | Spacing | Constraints |
| :--- | :--- | :--- | :--- | :--- |
| **Header Logo** | 45px - 50px | Auto | N/A | Max-width: 180px |
| **Modal Logo** | 48px | Auto | N/A | Vertical center aligned |
| **Card Badges** | 32px | Auto | 12px margin | Must not crowd the title |
| **Trust Strip** | 28px - 32px | Auto | 40px gap | All shared baseline |
| **Footer Strip** | 24px | Auto | 30px gap | Opacity: 0.5 - 0.7 |

---

## 5. Styling Guidelines

1. **Aspect Ratio**: Always use `height: [X]px; width: auto;` to prevent distortion. Use `object-fit: contain`.
2. **Format**: **SVG** is highly preferred for sharpness. If using PNG, use 2x resolution with transparent backgrounds.
3. **Consistency**: All logos within a "Strip" must be normalized to a shared optical height (circular logos often need to be slightly taller than wide rectangular ones to look "equal").
4. **Interactivity**: 
   - Logo hover: `transform: scale(1.05); transition: var(--transition);`
   - Trust strip: Start grayscale (`filter: grayscale(100%)`) and transition to color on hover.

---

## 6. Mobile Behavior

- **Stacking**: Trust strips larger than 3 logos should wrap to a second row or become a horizontal scrollable container.
- **Scaling**: Reduce logo height by ~15% on mobile (e.g., Header 45px -> 38px).
- **Visibility**: Ensure small badges in cards remain legible at 24px height.

> [!TIP]
> **Implementation Note**: When generating or selecting assets for the Trust Strip, ensure they have transparent backgrounds to blend seamlessly with the `var(--bg-light)` and `var(--white)` backgrounds used in the current design system.
