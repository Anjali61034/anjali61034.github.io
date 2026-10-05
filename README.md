<div align="center">

<img src="public/about/anjali.webp" alt="Anjali" width="110" height="110" style="border-radius:50%" />

# Anjali — Shopify & Full Stack Developer Portfolio

### Building Shopify Stores, Websites, and Apps People Love to Use

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Shopify](https://img.shields.io/badge/Shopify-Developer-7AB55C?style=for-the-badge&logo=shopify&logoColor=white)](https://www.shopify.com/)

[![GitHub](https://img.shields.io/badge/GitHub-Anjali61034-181717?style=for-the-badge&logo=github)](https://github.com/Anjali61034)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/anjali-sharma610)
[![Email](https://img.shields.io/badge/Email-Say_Hello-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:anjalisharmaaa656@gmail.com)

![License](https://img.shields.io/badge/license-MIT-22c55e?style=flat-square)

</div>

---

## About

I'm **Anjali**, a Shopify and Full Stack Developer from Delhi, India, pursuing a B.Sc (Prog.) Physical Science with Computer Science at **Maitreyi College, University of Delhi**.

I build and launch Shopify stores for fashion brands, create fast and responsive websites, and develop Android and Flutter apps. Because I know both code and Shopify, I can create stores and sites that look great, load fast, and turn visitors into customers.

This repository is my personal portfolio: an interactive site that showcases my work, experience, skills, and the way I build.

---

## What I Do

| Service | Details |
|---------|---------|
| **Shopify Development** | Store setup, theme customization with Liquid, custom sections, product & collection pages |
| **Web Development** | Responsive, cross-browser websites with clean, maintainable code |
| **App Development** | Android apps (Java, Kotlin) and cross-platform apps (Flutter, Dart) with Firebase & Django backends |
| **UI/UX Design** | Wireframes, prototypes, and polished interfaces in Figma |
| **Growth** | SEO, speed optimization, and Meta (Facebook & Instagram) ad campaigns |

---

## Featured Work

### Shopify Stores

| Store | Role | Highlights |
|-------|------|------------|
| [**Agedarc**](https://agedarc.com/) | Shopify Store Developer, Full-time | Built and launched the store for a fashion brand with 115K+ Instagram followers |
| [**FT Grails**](https://ftgrails.com/) | Shopify Store Developer | Building and maintaining a vintage drop store |
| [**Allbirds**](https://www.allbirds.com/) | Shopify Store Developer | Theme customization and storefront components |
| [**Dopamean**](https://dopamean.in/) | Web Developer Intern | Responsive layouts and UI improvements |

### Projects

| Project | Description | Tech | Code |
|---------|-------------|------|------|
| **Canary** | Indoor navigation app with landmark-based voice guidance | Java, Kotlin, Firebase, BLE Beacons, Navigine SDK | [GitHub](https://github.com/Anjali61034/CANARY-an-initiative) |
| **UniWay** | Campus information app, live on the Google Play Store | Flutter, Dart, Django, Firebase | [GitHub](https://github.com/Anjali61034/Maitreyi-Uniway) |
| **Achieve-X** | Student merit and academic management portal | JavaScript, REST APIs | [GitHub](https://github.com/Anjali61034/Achieve-X) |
| **IoT AQI Monitoring System** | ESP32-based real-time campus air-quality monitoring, presented at Equinox 2025 | ESP32, C++, IoT sensors | [GitHub](https://github.com/Anjali61034/Iot-Based-AQI-Monitoring-System) |

---

## Built With

### Core Framework
- **Next.js 16 (App Router)** with server-side rendering and static generation
- **React 19 & TypeScript** across 50+ custom UI components

### 3D & Motion
- **Three.js & React Three Fiber** for WebGL scenes, including an interactive 3D ID-card lanyard
- **Rapier Physics** for real-time physics simulation
- **Framer Motion & GSAP** for scroll-driven animations and page transitions
- **Lenis** for smooth scrolling

### Design System
- **Tailwind CSS & shadcn/ui** (Radix UI primitives) with full light and dark mode

### Integrations
- **AI chatbot** (`/api/chat`) using Groq with automatic fallback to Google Gemini, answering questions from the portfolio data
- **Contact form** (`/api/contact`) that delivers messages to my Gmail via Nodemailer
- **GitHub & WakaTime APIs** for live coding statistics

---

## Project Structure

```text
Portfolio/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── api/                # API routes (chat, contact, GitHub, WakaTime)
│   │   ├── projects/           # Projects and project detail pages
│   │   ├── experience/         # Experience timeline
│   │   ├── skills/             # Skills and tools
│   │   ├── achievements/       # Certificates
│   │   ├── gallery/            # Photo gallery
│   │   ├── contact/            # Contact page and FAQ
│   │   ├── resume/             # Resume viewer and download
│   │   └── workspace/          # One-page profile overview
│   ├── components/
│   │   ├── three/              # WebGL components (lanyard, scenes)
│   │   ├── sections/           # Page sections
│   │   └── ui/                 # Reusable UI components
│   ├── data/
│   │   └── portfolio.ts        # All portfolio content in one place
│   ├── hooks/                  # Custom React hooks
│   └── styles/                 # Global styles
├── messages/en.json            # Site text
├── public/                     # Images, 3D models, resume PDF
└── tailwind.config.ts          # Design tokens
```

Most content (profile, projects, experience, skills, tools, certificates) lives in `src/data/portfolio.ts`, and most page text lives in `messages/en.json`.

---

## Local Development

### Prerequisites
- Node.js 18 or newer
- npm 9 or newer

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Anjali61034/<repo-name>.git
   cd <repo-name>
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add environment variables** in a `.env.local` file at the project root:
   ```env
   # Contact form (Gmail App Password, not your normal password)
   EMAIL_USER=your_gmail_address
   EMAIL_APP_PASSWORD=your_gmail_app_password
   CONTACT_TO_EMAIL=inbox_that_receives_messages

   # Optional integrations
   NEXT_PUBLIC_GITHUB_USERNAME=your_github_username
   GITHUB_TOKEN=your_github_token
   WAKATIME_API_KEY=your_wakatime_key
   GROQ_API_KEY=your_groq_key
   GEMINI_API_KEY=your_gemini_key
   ```

4. **Start the dev server**
   ```bash
   npm run dev
   ```
   Then open http://localhost:3000.

### Production Build
```bash
npm run build
npm start
```

---

## Updating Content

| To change | Edit |
|-----------|------|
| Profile, projects, experience, skills, tools, certificates | `src/data/portfolio.ts` |
| Page text and FAQs | `messages/en.json` |
| Resume | Replace `public/resume.pdf` |
| Profile photo | Replace `public/about/anjali.webp` |
| Gallery photos | Add images to `public/gallery/` |
| Project screenshots | Add images to `public/project/` |

---

## License

This project is licensed under the [MIT License](LICENSE). It is built on an open-source portfolio template by Syahril Arfian Almazril, used under the MIT License.

<div align="center">
  <p>Designed & built by Anjali</p>
</div>
