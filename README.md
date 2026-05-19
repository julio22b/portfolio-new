# CareerPortfolio: Data-Driven Astro SSG
Live Demo: [careerportofio.netlify.app](juliobermudez.netlify.app)

[![Astro](https://img.shields.io/badge/Astro-FF5D01?logo=astro&logoColor=white)](https://astro.build/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A high-performance, responsive portfolio built with **Astro**, **Tailwind CSS**, and **Native Browser Animations**

## 🛠️ Tech Stack
- **Frontend:** [Astro](https://astro.build/) (Static Site Generation)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Iconify](https://iconify.design/) via `astro-icon`
- **Deployment:** [Netlify](https://www.netlify.com)

## 🚀 Getting Started
Follow these instructions to get a local copy up and running.

### Prerequisites
Make sure you have **Node.js** (v22.12.0 or higher) installed on your machine.

### Installation
1. Choose **Create a new repository**.
2. Clone your new repository: `git clone <your-repo-url>`
3. Navigate to your repo: `cd <your-repo-name>`
4. Install dependencies: `npm install`
5. Start development server: `npm run dev`


### 📁 Directory Structure
```
├── public/              # Static assets (placeholder.jpg, favicon)
├── src/
│   ├── components/      # Reusable Astro components
│   ├── data/            # JSON files for project data
│   ├── layouts/         # Layout templates with Meta tags
│   ├── pages/           # Site routes (index.astro)
│   └── styles/          # global css styles
│   └── config.ts        # Global site configuration
├── astro.config.mjs     # Astro configuration
└── tsconfig.json        # Typescript configuration
```

#### Useful commands and links for reference:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |

## 📝 License
This project is licensed under the [MIT License](LICENSE)
