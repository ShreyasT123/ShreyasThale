# Helius Website Content and UI Report

This report outlines the text content, UI components, and visual assets found on the Helius website.

## Helius Landing Page (`app/page.tsx`)

### Navbar

*   **Text:**
    *   "Helius" (Logo)
    *   "Models"
    *   "Research"
    *   "Documentation"
    *   "Pricing"
    *   "Get Started" (Button)
*   **UI Components:**
    *   Navigation links
    *   "Get Started" button
*   **Visuals:**
    *   `lucide-react` icons: `ArrowRight`, `ChevronDown`, `Github`, `Globe`

### Hero Section (Video)

*   **Text:**
    *   "See It First"
    *   "Experience the future of autonomous machine learning"
*   **UI Components:**
    *   `ChevronDown` icon button to scroll down.
*   **Visuals:**
    *   Background video: `/hero-video.mp4`

### Hero Section (Image)

*   **Text:**
    *   "Laying the foundations for visual intelligence"
    *   "Building autonomous machine learning systems."
    *   "Using novel SOTA deep learning models to redefine the frontier of visual and cognitive intelligence."
    *   "Learn More" (Button)
    *   "Try Helius.1" (Button)
    *   "GitHub"
    *   "Hugging Face"
*   **UI Components:**
    *   "Learn More" button
    *   "Try Helius.1" button
    *   Links to GitHub and Hugging Face
*   **Visuals:**
    *   Background image: `/futuristic-black-machine-learning-architecture.png`
    *   `lucide-react` icons: `ArrowRight`, `Github`, `Globe`, `ChevronDown`

---

## Components

### Announcements (`components/announcements.tsx`)

*   **Text:**
    *   "November 11, 2025"
    *   "HELIUS.2: Frontier Visual Intelligence"
    *   "Today, we release HELIUS.2, our most capable model to date."
    *   "December 1, 2025"
    *   "Laying the Foundations for Visual Intelligence—Our $300M Series B"
    *   "Our $300M Series B"
    *   "November 25, 2025"
    *   "Technical Report - HELIUS.2: Analyzing and Enhancing the Latent Space of HELIUS"
    *   "HELIUS.2"
*   **UI Components:**
    *   Three announcement cards that are links.
*   **Visuals:**
    *   Image: `/dev.png`
    *   Image: `/planet_sys.png`
    *   Image: `/cinematic-ai-landscape.png`

### Infinite Carousel (`components/infinite-carousel.tsx`)

*   **Text:**
    *   "Research Showcase"
    *   "Prompt"
    *   "a cinematic landscape of a futuristic AI city at dusk, hyperrealistic"
    *   "a neural network flowing with energy, blue and white glowing nodes"
    *   "a massive digital monolith standing in a desert, black stone with glowing data lines"
    *   "intricate black machine learning hardware, high tech obsidian finish"
*   **UI Components:**
    *   Carousel of images with prompts.
*   **Visuals:**
    *   Image: `/cinematic-ai-landscape.png`
    *   Image: `/abstract-neural-network-flow.png`
    *   Image: `/digital-monolith-architecture.png`
    *   Image: `/futuristic-black-machine-learning-architecture.png`

### Parallax Services (`components/parallax-services.tsx`)

*   **Text:**
    *   "Built to fit."
    *   "Ready to run."
    *   "Whether you're scaling through API, running open weights on your own infrastructure, or just experimenting – our models work wherever you do."
    *   "Open Weights"
    *   "FULL MODEL ACCESS", "DEPLOY ANYWHERE", "CUSTOMIZABLE"
    *   "Run Helius models on your own infrastructure. Full control over deployment, fine-tuning, and customization."
    *   "API"
    *   "PREMIUM QUALITY", "EASE OF USE", "BUILT FOR SCALE"
    *   "Simple-to-integrate API to access the latest and most powerful Helius models. Built to handle production workloads at any scale."
    *   "Playground"
    *   "TRY INSTANTLY", "NO CODE REQUIRED", "EXPERIMENT"
    *   "Test ideas and iterate on prompts in our browser environment. Zero setup required to start exploring visual intelligence."
    *   "Enterprise"
    *   "DEDICATED SUPPORT", "CUSTOM MODELS", "SLA GUARANTEES"
    *   "Tailored solutions for scaling AI operations. Includes custom fine-tuning and priority access to research."
    *   "Contact Sales"
*   **UI Components:**
    *   Four parallax scrolling cards.
    *   "Contact Sales" button on each card.
*   **Visuals:**
    *   `lucide-react` icons: `Github`, `Terminal`, `Play`, `Globe`
    *   Image: `/cinematic-ai-landscape.png`
    *   Image: `/futuristic-black-machine-learning-architecture.png`
    *   Image: `/abstract-neural-network-flow.png`
    *   Image: `/digital-monolith-architecture.png`

### Featured Models (`components/featured-models.tsx`)

*   **Text:**
    *   "Featured models"
    *   "Compare HELIUS Models"
    *   "Explore All Models"
    *   "01. HELIUS.2 [MAX]"
    *   "02. HELIUS.2"
    *   "03. HELIUS.1 [PRO]"
    *   "04. HELIUS.1 [FLEX]"
    *   "HELIUS.2 [MAX]": "Highest editing consistency across tasks.", "Vast amounts of world knowledge.", "Strongest prompt following and faithful representation of various styles."
    *   "HELIUS.2": "Optimized for high-speed inference.", "State-of-the-art vision architecture.", "Balanced performance for real-time applications and complex reasoning."
    *   "HELIUS.1 [PRO]": "Professional-grade visual generation.", "Ultra-high resolution output.", "Advanced latent space manipulation for precise artistic control."
    *   "HELIUS.1 [FLEX]": "Lightweight and versatile.", "Deployable on edge devices.", "Highly efficient distillation of our frontier cognitive models."
    *   "Learn More" (Button)
*   **UI Components:**
    *   Tabs for each model.
    *   Variant selector for each model.
    *   "Learn More" button.
*   **Visuals:**
    *   `lucide-react` icon: `ArrowUpRight`
    *   Videos and thumbnails for each model variant.

### Enterprise CTA (`components/enterprise-cta.tsx`)

*   **Text:**
    *   "What hasn't been can now be — with Helius"
    *   "Try Helius" (Button)
    *   "Talk to Sales" (Button)
*   **UI Components:**
    *   "Try Helius" button
    *   "Talk to Sales" button
*   **Visuals:**
    *   Background image: `/digital-monolith-architecture.png`

### Footer (`components/footer.tsx`)

*   **Text:**
    *   "Models": "Helius.2 Max", "Helius.2", "Helius.1 Kontext", "Helius 1.1 Pro Ultra", "Helius 1.1 Pro"
    *   "API": "Documentation", "Pricing", "Dashboard", "Status"
    *   "Open Weights": "Licensing", "Hugging Face", "GitHub"
    *   "Resources": "Documentation", "Help Desk", "Blog", "Brand", "GitHub"
    *   "Connect": "Meet the Developer", "LinkedIn"
    *   "Company": "About Us", "Careers", "Trust and Security", "Contact Us"
    *   "ISO 27001 ↗"
    *   "View Pricing"
    *   "Empowering Visual Intelligence"
    *   "HELIUS"
    *   "Legal": "Imprint", "Terms of Service", "Usage Policy", "Privacy Policy", "Intellectual Property Policy", "Developer Terms of Service", "Helius API Service Terms", "Self-Hosted Terms of Service", "Non-Commercial License Terms", "Responsible AI Development Policy"
    *   "© 2024 Helius. All rights reserved."
*   **UI Components:**
    *   Footer links
*   **Visuals:**
    *   Background image: `/dark-forest.png`
    *   `lucide-react` icon: `ArrowUpRight`
