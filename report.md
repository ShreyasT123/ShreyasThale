# Project Status Report: Helius

## Overview
The current project is a Next.js application consisting of a high-end corporate landing page for an AI/ML company named "Helius". It features a dark, futuristic aesthetic with advanced animations (parallax, scroll-driven transitions).

## Pages
### 1. Home (`/app/page.tsx`)
-   **Purpose**: Main landing page.
-   **Key Sections**:
    -   **Video Hero**: Full-screen video background with "See It First" CTA.
    -   **Main Hero**: "Building autonomous machine learning systems" with futuristic architectural imagery.
    -   **Announcements**: Scrolling ticker of company updates.
    -   **Infinite Carousel**: Client/Partner logos or tech stack.
    -   **Parallax Services**: A scroll-locked section detailing services (Compute, Training, etc.).
    -   **Featured Models**: Showcase of top AI models.
    -   **Enterprise CTA**: "Scale with Helius".
    -   **Footer**: Standard navigation and links.

### 2. Dashboard (`/app/dashboard/page.tsx`)
-   **Purpose**: Mock "Developer Console".
-   **Content**: Static statistics (Inference Rate, Global Status), "Authentication Required" placeholder, and an "Upgrade Plan" upsell.

### 3. Documentation (`/app/docs/page.tsx`)
-   **Purpose**: Mock Documentation hub.
-   **Content**: Cards for "Quickstart", "API Reference", "Legal", "Technical Reports". Most links are placeholders.

### 4. Models (`/app/models/page.tsx`)
-   **Purpose**: Product listing page.
-   **Content**: Detailed list of models (Helius.2 Max, Helius.2, Helius.1 Kontext) with pricing and feature lists.

## Context & Aesthetic
-   **Theme**: "Cybernetic/Futuristic". Heavy use of black backgrounds (`bg-black`), white text, glassmorphism (`backdrop-blur-md`, `bg-white/5`), and smooth framer-motion animations.
-   **Brand Identity**: High-tech, research-oriented, "SOTA deep learning".
-   **Visual Language**: Grid overlays, fine borders (`border-white/10`), "lucide-react" icons, and serif fonts for headings (likely `Inter` or similar sans for body, but `font-serif` used for titles).

## Transformation Scope (Company -> Portfolio)
To transform this into a Personal Portfolio, the following conceptual shifts are recommended:
-   **Brand**: Replace "Helius" with **[Your Name]**.
-   **Products**: Replace "Models" with **"Projects"** or **"Case Studies"**.
-   **Services**: Retain "Parallax Services" but adapted to **"My Skills"** or **"What I Do"** (e.g., Full Stack Dev, UI/UX Design, AI Engineering).
-   **Dashboard**: Could be repurposed as a **"Contact"** page or a live **"Stats"** page (Github commits, WakaTime, etc.), or removed.
-   **Docs**: Convert to **"Blog"**, **"Resume"**, or **"Notes"**.
