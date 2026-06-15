# Crave – Ultimate Meal Finder & Tracker 🍔✨

<p align="center">
  <a href="https://creave-meal-finder-hgvn2mrit-eyad-khaled-makboul-s-projects.vercel.app/">
    <img src="https://img.shields.io/badge/Live%20Demo-Visit%20Crave-amber?style=for-the-badge&logo=vercel&logoColor=black" alt="Live Demo" />
  </a>
</p>

<p align="center">
  A premium, high-performance web application built with <strong>Next.js 15 (App Router)</strong> and <strong>TypeScript</strong>. Crave allows users to explore global culinary recipes using native asynchronous data fetching, and manage tasks using a robust, Reducer-powered architecture.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js%2015-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/State-useReducer-red?style=for-the-badge" alt="useReducer" />
</p>

---

## 🚀 Key Features

* **Asynchronous Fetch API:** Native server-side `fetch` implementation to stream real-time culinary data directly from external APIs with zero-latency.
* **Reducer State Management:** Predictable state mutations using the `useReducer` hook, ensuring clean `ADD` and `DELETE` dispatch actions for the task tracker.
* **Deep Details Routing:** Utilizes Next.js dynamic routes (`[details]`) to show rich product profiles including ingredients, video walkthroughs, and step-by-step instructions.
* **Premium Dark Theme:** Fully immersive dark UI crafted meticulously with an amber/stone custom palette for a sleek modern aesthetic.
* **Clean & Scalable Layout:** Implements global layouts, semantic HTML structures, and responsive design tailored for mobile, tablet, and desktop monitors.

## 🛠️ Tech Stack & Architecture

* **Framework:** Next.js 15 (App Router, Server & Client Components)
* **Data Fetching:** Native Async/Await Fetch API (Server-Side Rendering)
* **State Management:** React Context API + **`useReducer` Pattern** (`todoReducer`)
* **Language:** TypeScript (Strict Type Safety)
* **Styling:** Tailwind CSS (Custom Gradients & Smooth Hover Scale Effects)
* **Icons & Branding:** Scalable Custom inline SVGs for zero-latency loading.

---

## 💻 Folder Structure

A quick glance at the organized project hierarchy:

```text
├── app/
│   ├── Header/
│   │   └── Header.tsx      # Fixed Navigation with Brand SVG Logo
│   ├── products/
│   │   ├── page.tsx        # Server-side Async Fetched Meals Grid
│   │   └── [details]/
│   │       └── page.tsx    # Dynamic Recipe Profile Route via Fetch
│   ├── todo/
│   │   ├── context.tsx     # Context state initialization
│   │   ├── reducer.tsx     # Pure state action mutations (ADD/DELETE)
│   │   └── page.tsx        # Form control & Todo UI utilizing useReducer
│   ├── globals.css         # Tailwind directives & global body styles
│   ├── layout.tsx          # Global wrapper providing Theme & Header
│   └── page.tsx            # High-conversion Home Hero Section
