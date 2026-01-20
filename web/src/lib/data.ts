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
        tags: ["Next.js", "FastAPI", "PostgreSQL", "Docker", "Python"],
        thumbnail: "/projects/cloud-cost-copilot/main-dashboard.png",
        images: [
            "/projects/cloud-cost-copilot/main-dashboard.png",
            "/projects/cloud-cost-copilot/filtering.png",
            "/projects/cloud-cost-copilot/results-info.png",
        ],
        githubUrl: "https://github.com/Andalexskywalker/cloud-cost-copilot",
        featured: true,
        content: `
# Cloud Cost Copilot

**An intelligent dashboard for monitoring and analyzing cloud infrastructure costs in near real-time.**

Cloud Cost Copilot is a full-stack application designed to visualize cloud spending patterns, detect anomalies, and provide actionable insights. Built with modern technologies, it demonstrates a complete data pipeline from ingestion to visualization.

## Tech Stack

This project utilizes a robust, containerized architecture:

*   **Frontend**: Next.js 14 (React) with Tailwind CSS for a responsive and performant UI.
*   **Backend**: FastAPI (Python) for high-performance API endpoints and data processing.
*   **Database**: PostgreSQL for reliable relational data storage.
*   **Infrastructure**: Docker Compose for orchestration and easy deployment.

## Key Features

### 1. Interactive Cost Dashboard
*   **Visual Analytics**: View cost trends over time with dynamic charts.
*   **Granular Filtering**: Filter expenses by date range and specific cloud services (e.g., EC2, S3, RDS).
*   **Aggregated Metrics**: Instantly see total costs and daily breakdowns.

### 2. Anomaly Detection (Simulation)
*   **Smart Alerts**: The system identifies unusual spending spikes (e.g., 200% increase in daily costs).
*   **Severity Levels**: Alerts are categorized by severity (High/Medium/Low) to prioritize attention.

### 3. Secure Architecture
*   **Token-Based Authentication**: Secure API communication between frontend and backend using shared tokens.
*   **Environment Isolation**: Strict separation of concerns using Docker containers for Frontend, Backend, and Database.
    `,
    },
    {
        slug: "friday-bot",
        title: "Friday AI",
        description: "An Autonomous OS Orchestrator that bridges the gap between LLMs and local system environments.",
        tags: ["Python", "LLM", "Automation", "Windows API", "AI"],
        thumbnail: "/projects/friday-bot/friday-logo.png",
        images: ["/projects/friday-bot/friday-logo.png"],
        githubUrl: "https://github.com/Andalexskywalker/jarvis-like.git",
        featured: true,
        content: `
# Friday AI: Portfolio Strategy 💼

## The Pitch
"Friday is an **Autonomous OS Orchestrator** that bridges the gap between Large Language Models and local system environments. Unlike standard chatbots, Friday utilizes a **Dynamic Tool Registry** and a **Self-Healing API Client** to execute real-world tasks (Media, File System, System Stats) on a Windows environment."

## Top 3 Technical Highlights (Interview Talk)
1.  **Dynamic Introspection Tooling**: Built a registry that uses Python's \`inspect\` module to automatically map LLM JSON outputs to local function signatures. This makes the system infinitely extensible with zero hard-coding of argument mapping.
2.  **Thread-Safe COM Integration**: Solved complex Windows threading issues (PyCaw/TTS) using \`CoInitialize\` within background worker threads, ensuring stability in a "headless" background environment.
3.  **Self-Healing Client Pattern**: Designed a resilient API client that dynamically probes for working model versions and implements exponential backoff for rate-limiting, making the agent "production-ready" despite API instability.

## Personification
It's an exploration in **Human-Computer Interaction (HCI)**. I wanted to see how a proactive assistant (instead of a reactive one) changes the user experience in a desktop environment. The personification allows for clearer feedback loops (voice synthesis), making the 'headless' nature of the background process intuitive for the user.

## Future Roadmap (Shows growth mindset)
- Implementation of **Computer Vision** (OpenCV/Vision LLM) for screen-aware reasoning.
- **Native Windows Toast** integration for non-intrusive background alerting.
- **RAG (Retrieval Augmented Generation)** for local file indexing and intelligent search.
    `,
    },
    {
        slug: "praia-finder",
        title: "PraiaFinder",
        description: "Real-time beach recommendation engine simplifying weather data into a 0-10 score.",
        tags: ["Next.js", "FastAPI", "Python", "Tailwind CSS", "Data Science"],
        thumbnail: "/projects/praia-finder/dashboard.png",
        images: ["/projects/praia-finder/dashboard.png", "/projects/praia-finder/map.png"],
        content: `
# 🏖️ PraiaFinder

**Find the perfect beach in Portugal, every time.**

## 📌 Project Overview
PraiaFinder is a real-time beach recommendation engine designed to simplify the decision-making process for beachgoers in Portugal. Instead of drowning users in raw meteorological data (wind speed knots, swell period seconds, etc.), PraiaFinder aggregates complex weather and marine forecasts into a simple **0-10 score**.

The core innovation is its context-aware scoring system, which evaluates conditions differently based on the user's intent:
- **Surf Mode**: High waves and strong offshore winds boost the score.
- **Family Mode**: Calm waters, low wind, and warm temperatures are prioritized.

## 🛠️ Tech Stack & Architecture
This project demonstrates a full-stack approach with a focus on data processing and user experience.

### Frontend (User Experience)
- **Framework**: Next.js 14 (App Router) for server-side rendering and performance.
- **Styling**: Tailwind CSS for a mobile-first, responsive design.
- **Animations**: Framer Motion for fluid page transitions and interactive elements.
- **Language**: TypeScript for type safety and scalability.

### Backend (Logic & Data)
- **API**: FastAPI providing high-performance endpoints.
- **Language**: Python 3.10+.
- **Data Processing**: Custom ETL pipeline (\`fetch_and_score.py\`) that handles:
    - **Concurrent Fetching**: Uses \`asyncio\` and \`httpx\` with semaphores to efficiently query external APIs for hundreds of beaches without hitting rate limits.
    - **Smart Classification**: automatically distinguishes between "Maritime" (ocean) and "Fluvial" (river) beaches to apply the correct forecasting models.
    - **Scoring Algorithm**: A weighted scoring matrix that normalizes raw weather data into user-friendly ratings.

## ✨ Key Features
1.  **Context-Aware Scoring**: A unique algorithm that interprets the same weather data differently depending on the user's goal (Surfing vs. Relaxing).
2.  **Interactive Coast Map**: Visualizes beach conditions across the entire Portuguese coastline, allowing users to find "pockets" of good weather.
3.  **Smart Caching**: The backend implements efficient data caching strategies to minimize external API calls and ensure instant load times for users.
4.  **Resilient Data Pipeline**: The batch processing system handles API failures gracefully with exponential backoff and retry mechanisms.
    `,
    },
    {
        slug: "prr-simulator",
        title: "Park & Ride Simulator",
        description: "A cloud-native microservices application to simulate and manage city parking networks.",
        tags: ["Java", "Spring Boot", "Microservices", "Docker", "React"],
        thumbnail: "/projects/prr-simulator/dashboard.png",
        images: ["/projects/prr-simulator/dashboard.png", "/projects/prr-simulator/admin.png"],
        content: `
# Park & Ride Simulator (PRR)

**Core Goal**: Reduce urban traffic congestion and CO2 emissions by encouraging drivers to park at peripheral hubs and switch to public transport.

This project serves as a technical portfolio piece demonstrating mastery of **distributed systems**, **microservices architecture**, and **full-stack development** using industry-standard technologies.

## Technical Architecture
The system is built on a robust, scalable stack designed for reliability and observability.

### Backend (Spring Cloud Ecosystem)
- **Language**: Java 21
- **Framework**: Spring Boot 3.5.6
- **Service Registry**: Netflix Eureka (Dynamic discovery of microservices)
- **API Gateway**: Spring Cloud Gateway (Single entry point, routing, and filtering)
- **Communication**: REST APIs (OpenFeign for inter-service communication)
- **Database**: PostgreSQL (Containerized)
- **Security**: JWT Authentication (Stateless)

### Microservices Breakdown
The backend is decomposed into 5 distinct domains:
1.  **Api Gateway**: Entry point, routing, and auth.
2.  **Eureka Server**: Service registry.
3.  **Service Parques**: Inventory and capacity management.
4.  **Service Utilizadores**: User identity and vehicle management.
5.  **Service Sessoes**: Operations (Check-in/Check-out).
6.  **Service Tarifas**: Billing and invoices.
7.  **Service Analytics**: Intelligence and insights.

## Key User Flows supported
- **Driver (User)**: Register, manage vehicles, view dashboard, and simulate parking sessions.
- **Operator**: Monitor capacity and manually open/close parks.
- **Administrator**: Access analytics dashboard (Cost Copilot).
    `,
    },
    {
        slug: "smcte",
        title: "SMCTE - Space Traffic",
        description: "Using Deep Learning to predict space collisions and reduce false alarms for satellite operators.",
        tags: ["Python", "Deep Learning", "Keras", "TensorFlow", "Data Science"],
        thumbnail: "/projects/projeto-final-curso/dashboard.png",
        images: ["/projects/projeto-final-curso/dashboard.png"],
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
        title: "Java Chess Engine",
        description: "A robust desktop game engine for Chess and Checkers built with Java and Swing.",
        tags: ["Java", "Swing", "OOP", "Game Dev", "Algorithms"],
        thumbnail: "/projects/xadrez-damas/gameplay.png",
        images: ["/projects/xadrez-damas/gameplay.png"],
        content: `
# Java Chess & Checkers Engine

## Project Overview
This project is a robust desktop game engine featuring two classic board games: **Chess** and **Checkers (Damas)**. Built entirely in **Java** using the **Swing** framework, it serves as a comprehensive demonstration of Object-Oriented Programming (OOP) principles, complex state management, and custom graphical user interface (GUI) development. The application supports both local 2-player matches and a single-player mode against a CPU opponent.

## Key Features

### 1. Dual Game Modes
-   **Chess (Xadrez):** Full implementation of standard chess rules, including piece-specific movements, capturing logic, and distinct behavior for pawns.
-   **Checkers (Damas):** Implements traditional checkers rules with **mandatory capture** enforcement, multi-jump logic, and "Dama" (King) promotion.

### 2. Intelligent Game Logic
-   **Move Validation:** The engine strictly enforces legal moves for every piece type.
-   **CPU Opponent:** A single-player mode featuring a computer opponent capable of analyzing the board and making valid moves.
-   **Game State Management:** Handles turn switching, check/checkmate detection, and "Game Over" states.

### 3. Custom UI & UX
-   **Swing-based GUI:** A completely custom-rendered board using \`Graphics2D\` for smooth visuals.
-   **Interactive Mechanics:** Features intuitive **drag-and-drop** mechanics.

## Technical Highlights
-   **Polymorphism:** A base \`Peca\` (Piece) class defines common behaviors.
-   **Encapsulation:** Clean separation of game state, board data, and rendering logic.
-   **Swing Painting:** Mastering \`paintComponent\` and \`Graphics2D\` for a flicker-free, responsive game board.
    `,
    },
];
