# Outfit Preview UI (React Native Web via Expo Snack)

A pixel-accurate recreation of the UI and interaction flow shown in the provided reference video.  
The app is built entirely with *Expo Snack, runs on **React Native Web, and uses **mock data + client-side state* only (no backend).

---

## How to Run

### Snack Link
[Open in Snack](https://snack.expo.dev/@moumitamondal/assignment-i)

The app runs directly in the browser (React Native Web target).  
No local setup is required.

> If fonts or shadows render differently, it’s due to platform variations between web & mobile.

---

## What’s Replicated from the Video

- *Items Preview Screen:*  
  Displays grid/list of mock items with image, category, color, and style badges.  

- *Outfits Section:*  
  Shows a preset combination of top, bottom, and footwear (and optional outerwear).  
  Includes *springy swipe transitions* when navigating between outfits.  

- *Footer Navigation:*  
  Persistent bottom bar with Home, Collection, and Saved tabs — visually identical to the reference layout.  

- *Filter Chips:*  
  Interactive category filter chips with *press scale animation* and active color highlight.

- *Empty/Loading Placeholders:*  
  Visual placeholders appear when data is not loaded or filtered out.

---

## Component Structure
src/
├── components/
│ ├── Badge.tsx # Displays small category or tag labels
│ ├── Chip.tsx # Animated filter chip component
│ ├── OutfitCard.tsx # Visual card showing top/bottom/footwear parts
│ ├── CardItem.tsx # Reusable grid item (image + badges)
│ ├── Skeleton.tsx # Placeholder loader blocks
│ └── FilterBar.tsx # Dynamic filter chip bar
│
├── screens/
│ ├── ItemsPreview.tsx # Main product/item grid
│ ├── Outfits.tsx # Preset outfit swiper
│ └── Collections.tsx # Saved/collection screen
│
├── navigation/
│ └── ScreenManager.tsx # Tab navigation + screen rendering
│
├── data/
│ └── items.ts # Mock inventory (JSON)
│
├── store.ts # Zustand store for filters, active index, etc.
└── theme.tsx # Theme + color tokens + typography


---

## State Management

- *Zustand* manages:
  - Active outfit index
  - Current filters and selected chips
  - Mock “saved” state for demonstration

- *React Hooks (useMemo, useState)* are used for:
  - Derived data (filtered lists)
  - UI updates based on selections

---

## Animations & Interactions

| Feature | Animation | Library |
|----------|------------|----------|
| Filter Chip press | Scale down/up micro-animation | Reanimated |
| Outfit swipe | Horizontal spring transition | Reanimated |
| Screen transitions | Simple conditional render | React |
| Footer tab press | Color highlight & label | RN base |
| Skeleton loader | Fade/opacity placeholder | RN Animated |

> All animations are client-side and tuned for *buttery-smooth feel* using withTiming and withSpring.

---

## Assumptions & Limitations

- Fonts (InterRegular, InterSemiBold) fallback to *system fonts* on Snack due to asset upload limitations.  
- Real API data is replaced with hardcoded *mock JSON* (10–30 items).  
- Swipe gestures (left/right) are limited to *button-based navigation* for web consistency.  
- Mobile spacing, shadows, and borders may slightly vary depending on platform renderer.  
- Accessibility labels and hit areas (≥ 44px) included per guidelines.

---

## Tech Stack

| Tool | Purpose |
|------|----------|
| Expo Snack | Web target runtime |
| React Native Web | Cross-platform UI |
| Zustand | Lightweight store |
| Reanimated | Animations |
| Expo Vector Icons | Footer icons |
| Expo Font | (Optional) Google Fonts Inter |

---

## Evaluation Checklist

| Criteria | Status |
|----------|---------|
| Pixel fidelity | Matched layout and spacing |
| Smooth animations | Reanimated spring/timing |
| Responsive (Web/Mobile) | Works in Snack browser |
| Accessibility | ARIA roles & hit areas |
| State updates in real-time | Client-side Zustand |
| Code structure | Modular, reusable components |

---

## Repository

A public GitHub repo mirrors this Snack codebase:
[GitHub Repository Link](<PASTE-YOUR-GITHUB-URL-HERE>)

---

## Author
Developed as part of *React Native UI Replication Assignment (Expo Snack Web)*  
Focus: Pixel accuracy, interactivity, and smooth transitions.

---