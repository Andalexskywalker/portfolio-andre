export interface Project {
    slug: string;
    title: string;
    description: string; // Short for card
    tags: string[];
    thumbnail: string;
    images: string[];
    githubUrl?: string;
    demoUrl?: string;
    featured?: boolean;
    content?: string; // Markdown content
}

export const projects: Project[] = [
    {
        slug: "cloud-cost-copilot",
        title: "Cloud Cost Copilot",
        description: "An intelligent dashboard for monitoring and analyzing cloud infrastructure costs in near real-time.",
        tags: ["Next.js", "FastAPI", "PostgreSQL", "Docker", "Tailwind CSS"],
        thumbnail: "/projects/cloud-cost-copilot/main-dashboard.png",
        githubUrl: "https://github.com/Andalexskywalker/cloud-cost-copilot",
        images: [
            "/projects/cloud-cost-copilot/main-dashboard.png",
            "/projects/cloud-cost-copilot/filtering.png",
            "/projects/cloud-cost-copilot/results-info.png"
        ],
        content: `
![Dashboard Preview](/projects/cloud-cost-copilot/main-dashboard.png)

**An intelligent dashboard for monitoring and analyzing cloud infrastructure costs in near real-time.**

Cloud Cost Copilot is a full-stack application designed to visualize cloud spending patterns, detect anomalies, and provide actionable insights. Built with modern technologies, it demonstrates a complete data pipeline from ingestion to visualization.

## 📌 Project Overview
The system allows users to monitor their cloud expenses with precision, providing tools to:
*   **Visualize**: Interactive charts using Recharts.
*   **Analyze**: Granular filtering by service and date.
*   **Secure**: Token-based authentication between services.

---

## 🛠️ Tech Stack & Architecture

### Frontend
*   **Next.js 14**: Modern React framework for performance.
*   **Tailwind CSS**: Rapid UI development.
*   **Recharts**: Powerful data visualization library.

![Filtering Preview](/projects/cloud-cost-copilot/filtering.png)

### Backend ecosystem
*   **FastAPI (Python)**: High-speed API creation.
*   **PostgreSQL**: Robust relational database.
*   **SQLAlchemy**: Python SQL toolkit and Object Relational Mapper.
*   **Docker Compose**: Orchestration for multi-container development.

---

## ✨ Key Features
1.  **Interactive Cost Dashboard**: View cost trends over time with dynamic charts.
2.  **Granular Filtering**: Filter expenses by date range and specific cloud services (e.g., EC2, S3, RDS).
3.  **Secure Architecture**: Backend and Database isolated in private network, accessible only via API proxy.

## 🚀 Why I Built This
To master **containerized full-stack development**. This project bridges the gap between a modern frontend and a scalable Python backend, simulating a real-world DevOps dashboard scenario.
    `,
    },
    {
        slug: "friday-bot",
        title: "Friday AI",
        description: "An Autonomous OS Orchestrator that bridges the gap between LLMs and local system environments.",
        tags: ["Python", "LLM", "Windows API", "Automation", "HCI"],
        thumbnail: "/projects/friday-bot/friday_icon.png",
        githubUrl: "https://github.com/Andalexskywalker/jarvis-like.git",
        featured: true,
        images: [
            "/projects/friday-bot/friday_icon.png",
            "/projects/friday-bot/dashboard.png"
        ],
        content: `
![Friday AI Interface](/projects/friday-bot/dashboard.png)

**An Autonomous OS Orchestrator bridging the gap between LLMs and your local PC.**

## 📌 The Pitch
"Friday is an **Autonomous OS Orchestrator** that bridges the gap between Large Language Models and local system environments. Unlike standard chatbots, Friday utilizes a **Dynamic Tool Registry** and a **Self-Healing API Client** to execute real-world tasks (Media, File System, System Stats) on a Windows environment."

---

## 🛠️ Technical Highlights

### 1. Dynamic Introspection Tooling
Built a registry that uses Python's \`inspect\` module to automatically map LLM JSON outputs to local function signatures. This makes the system **infinitely extensible** with zero hard-coding of argument mapping.

### 2. Thread-Safe COM Integration
Solved complex Windows threading issues (PyCaw/TTS) using \`CoInitialize\` within background worker threads, ensuring stability in a "headless" background workflow.

### 3. Self-Healing Client Pattern
Designed a resilient API client that dynamically probes for working model versions and implements exponential backoff for rate-limiting, making the agent "production-ready" despite API instability.

---

## 🤖 HCI & Personification
It's an exploration in **Human-Computer Interaction (HCI)**. I wanted to see how a proactive assistant (instead of a reactive one) changes the user experience in a desktop environment. 

The personification allows for clearer feedback loops (voice synthesis), making the 'headless' nature of the background process intuitive for the user.

## 🚀 Future Roadmap
*   **Computer Vision**: OpenCV integration for screen-aware reasoning.
*   **Native Windows Toast**: Integration for non-intrusive background alerting.
*   **RAG (Retrieval Augmented Generation)**: Local file indexing for intelligent search.
    `,
    },
    {
        slug: "praia-finder",
        title: "PraiaFinder",
        description: "Real-time beach recommendation engine simplifying weather data into a 0-10 score.",
        tags: ["Next.js", "FastAPI", "Python", "Tailwind CSS", "Data Science"],
        thumbnail: "/projects/praia-finder/intro.gif",
        githubUrl: "https://github.com/Andalexskywalker/praiafinder",
        images: [
            "/projects/praia-finder/intro.gif",
            "/projects/praia-finder/dashboard.gif",
            "/projects/praia-finder/dashboard.png"
        ],
        content: `

![PraiaFinder Demo](/projects/praia-finder/intro.gif)

**Find the perfect beach in Portugal, every time.**

## 📌 Project Overview
PraiaFinder is a real-time beach recommendation engine that solves the "where should we go?" problem. Instead of drowning users in raw meteorological data (knots, swell period, etc.), it aggregates complex forecasts into a simple **0-10 score** based on your intent.

### Context-Aware Scoring
The core innovation is an algorithm that changes based on what you want to do:

*   **🏄 for Surfers**: High waves and strong offshore winds = **High Score**.
*   **🏖️ for Families**: Calm waters, low wind, and warm temps = **High Score**.

---

## 🛠️ Tech Stack & Architecture

### Frontend (User Experience)
*   **Next.js 14 (App Router)**: Server-side rendering for instant loads.
*   **Tailwind CSS**: Fully responsive, mobile-first design.
*   **Framer Motion**: Fluid animations for a premium feel.

![Dashboard Interaction](/projects/praia-finder/dashboard.gif)

### Backend (Logic & Data)
*   **FastAPI (Python)**: High-performance async API.
*   **Custom ETL Pipeline**:
    *   **Concurrent Fetching**: Uses \`asyncio\` to query hundreds of beaches simultaneously without rate limits.
    *   **Smart Classification**: Automatically detects if a beach is "Ocean" or "River" to apply the correct weather model.
    *   **Caching**: Minimizes external API calls for speed and cost efficiency.

---

## ✨ Key Features
1.  **Interactive Coast Map**: Visualizes conditions across the entire Portuguese coastline.
2.  **Smart Search**: Filter by region, score, or specific beach features.
3.  **Resilient System**: Handles external API failures gracefully with retries and fallbacks.

## 🚀 Why I Built This
Living in Portugal, the weather varies drastically just a few kilometers apart. This project allowed me to solve a real-world problem while exploring **advanced Python concurrency** and building a **polished React application**.
    `,
    },
    {
        slug: "prr-simulator",
        title: "Park & Ride Simulator",
        description: "A cloud-native microservices application to simulate and manage city parking networks.",
        tags: ["Java", "Spring Boot", "Microservices", "Docker", "React"],
        thumbnail: "/projects/prr-simulator/vite.svg",
        images: [
            "/projects/prr-simulator/vite.svg",
            "/projects/prr-simulator/dashboard_user.png",
            "/projects/prr-simulator/admin_dashboard.png",
            "/projects/prr-simulator/parking_car.gif"
        ],
        githubUrl: "https://github.com/Andalexskywalker/park-ride-simulator",
        content: `
# Park & Ride Simulator (PRR)

**Core Goal**: Reduce urban traffic congestion and CO2 emissions by encouraging drivers to park at peripheral hubs and switch to public transport.

This project is a technical showcase of **Distributed Systems**, **Microservices Architecture**, and **Full-Stack Development**.

---

## 🏗️ Technical Architecture

The system is built on the **Spring Cloud Ecosystem** (Java 21), orchestrated via Docker.

*   **Service Registry**: Netflix Eureka.
*   **Gateway**: Spring Cloud Gateway.
*   **Communication**: OpenFeign (REST).
*   **Database**: PostgreSQL (Containerized).

---

## 🚦 Phase 1: Onboarding (The Driver)

### 1. Registration & Identity
The system employs a secure JWT-based authentication flow. Users first create an account and then register their vehicles (license plates) to their profile.

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <img src="/projects/prr-simulator/register.png" alt="User Registration" className="rounded-lg border border-white/10" />
  <img src="/projects/prr-simulator/register_car.png" alt="Vehicle Registration" className="rounded-lg border border-white/10" />
</div>

### 2. Authentication
Once registered, users log in to access the system. The **API Gateway** handles the routing and validation of credentials.

![Login Screen](/projects/prr-simulator/login.png)

### 3. User Profile
Users can manage their fleet, view personal details, and verify their role status (User vs Operator vs Admin) from their profile page.

![User Profile](/projects/prr-simulator/user_profile.png)

---

## 🅿️ Phase 2: The Core Experience

### 1. Real-Time Dashboard
Upon logging in, the user is greeted by a live dashboard showing the capacity of all peripheral parks. Green indicates available spots; Red indicates full capacity.

![User Dashboard](/projects/prr-simulator/dashboard_user.png)

### 2. Simulation Engine (Check-In)
This is the heart of the simulator. A user selects a park and initiates a parking session ("Check In"). The **Sessions Microservice** begins tracking the duration in real-time.

![Parking Simulation](/projects/prr-simulator/parking_car.gif)

### 3. Smart Billing (Check-Out)
When the user "Checks Out", the **Tariffs Microservice** calculates the cost based on the exact duration and vehicle type, generating an instant digital invoice.

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <img src="/projects/prr-simulator/payment.gif" alt="Payment Animation" className="rounded-lg border border-white/10" />
  <img src="/projects/prr-simulator/payment.png" alt="Invoice Receipt" className="rounded-lg border border-white/10" />
</div>

---

## 👮‍♂️ Phase 3: Operational Control

### 1. Operator Dashboard
Operators have a privileged view of the network. They can monitor real-time occupancy and manually **Close** or **Open** parks for maintenance or emergencies.

![Operator Dashboard](/projects/prr-simulator/op_dashboard.png)

### 2. Operator Registration
The system supports distinct role onboarding. New operators can be registered with specific permissions to manage the infrastructure.

![Operator Registration](/projects/prr-simulator/register_op.png)

---

## 📊 Phase 4: Administrative Intelligence

### Cost Copilot Analytics
Administrators have access to high-level metrics. The **Analytics Microservice** aggregates data from all other services to visualize total revenue, network health, and usage trends.

![Admin Dashboard](/projects/prr-simulator/admin_dashboard.png)
    `,
    },
    {
        slug: "smcte",
        title: "SMCTE - Space Traffic",
        description: "Using Deep Learning to predict space collisions and reduce false alarms for satellite operators.",
        tags: ["Python", "Deep Learning", "Keras", "TensorFlow", "Data Science"],
        thumbnail: "/projects/smcte/icon-v2.png",
        images: ["/projects/smcte/icon-v2.png", "/projects/smcte/orbit_view.png", "/projects/smcte/dashboard.png"],
        githubUrl: "https://github.com/Andalexskywalker/SMCTE",
        content: `
# SMCTE — Space Traffic Monitoring System

**Tagline:** "Prever colisões no espaço com Deep Learning, reduzindo falsos alarmes em operações de satélite."

### 🚀 O Que É?
O **SMCTE** é um sistema inteligente de *Conjunction Assessment* (Avaliação de Conjunções) desenvolvido para lidar com o crescente problema do Lixo Espacial (*Space Debris*).

### 💡 O Problema
Com milhares de satélites em órbita, o risco de colisão é real. Os métodos tradicionais baseados apenas em física orbital geram demasiados "falsos positivos", obrigando os operadores a desperdiçar combustível em manobras de desvio desnecessárias.

### 🛠️ A Minha Solução
Desenvolvi uma aplicação que utiliza **Deep Learning (Recurrent Neural Networks - RNNs)** para analisar o histórico de erros de trajetória. O sistema:
1.  Ingere mensagens de dados orbitais (CDM).
2.  Processa séries temporais de posição e velocidade.
3.  Estima a **Probabilidade de Colisão** com maior precisão que os modelos estáticos.

### 💻 Tech Stack
*   **Python & Data Science:** Pandas, NumPy, Scikit-Learn.
*   **Deep Learning:** Keras/TensorFlow (Modelos LSTM e GRU).
*   **Interface:** Streamlit (Dashboard interativo para operadores).
    `,
    },
    {
        slug: "chess-engine",
        title: "Java Chess & Checkers",
        description: "A robust Swing-based game engine demonstrating strict OOP principles and Game AI.",
        tags: ["Java", "Swing", "OOP", "Game AI", "Algorithms"],
        thumbnail: "/projects/chess-engine/icon-v3.png",
        githubUrl: "https://github.com/Andalexskywalker/XadrezDamas",
        images: ["/projects/chess-engine/icon-v3.png", "/projects/chess-engine/menu.png", "/projects/chess-engine/Xadrez.gif", "/projects/chess-engine/Damas.gif"],
        content: `
# Java Chess & Checkers Engine

**A pure Java implementation of classic board games, prioritizing Clean Architecture and Object-Oriented Design.**

This project was built to master the fundamentals of **Software Architecture** without relying on modern game engines.

---

## 🏛️ Architecture: Strict OOP
The core strength of this engine is its adherence to **Object-Oriented Designing Principles**:
*   **Polymorphism**: A base \`Piece\` class defines movement contracts. Subclasses like \`Bishop\`, \`Knight\`, and \`King\` implement specific move validation logic.
*   **Encapsulation**: Game states (Check, Checkmate, Stalemate) are isolated from the rendering logic.
*   **Inheritance**: Shared logic between Chess and Checkers is abstracted to reduce code duplication.

---

## 🤖 Intelligent Game Logic
### Move Validation
The engine doesn't just "move pieces"; it *simulates* the board state to prevent illegal moves (e.g., you cannot make a move that leaves your King in check).
*   **Chess**: Handles En Passant, Castling, and Pawn Promotion.
*   **Checkers**: strict enforcement of **Mandatory Captures** and Multi-Jump chains.

### CPU Opponent
A single-player mode that evaluates board states to make valid moves against the player.

![Chess Gameplay](/projects/chess-engine/Xadrez.gif)

---

## 🎨 Custom Swing GUI
Instead of using standard buttons, I implemented a custom **Graphics2D** rendering pipeline.
*   **Smooth Rendering**: Double-buffered painting to prevent flickering.
*   **Drag & Drop**: Intuitive mouse interaction for picking up and placing pieces.
*   **Dynamic Highlighting**: Visual cues for valid moves (Green) and captures (Red).

![Checkers Gameplay](/projects/chess-engine/Damas.gif)
    `,
    },
];
