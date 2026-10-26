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
    new?: boolean; // Highlight as new project
    content?: string; // Markdown content
}

export const projects: Project[] = [
    {
        slug: "uav-gcs-lab",
        title: "UAV Ground Control Station Lab",
        description: "A simulated drone (ArduPilot SITL) and a ground control station connected over MAVLink/UDP on two machines, with a ufw firewall, a WireGuard tunnel, tcpdump checks, latency measurements and a link-failure test.",
        tags: ["Linux", "WSL2", "MAVLink", "WireGuard", "ufw", "tcpdump", "ArduPilot"],
        thumbnail: "/projects/uav-gcs-lab/qgc-flight.jpg",
        githubUrl: "https://github.com/Andalexskywalker/uav-gcs-lab",
        featured: true,
        new: true,
        images: [
            "/projects/uav-gcs-lab/qgc-flight.jpg",
            "/projects/uav-gcs-lab/qgc-console.jpg",
            "/projects/uav-gcs-lab/qgc-two-machines.jpg",
            "/projects/uav-gcs-lab/two-machine-mavproxy.png",
            "/projects/uav-gcs-lab/link-failure-ping.png"
        ],
        content: `
![QGroundControl showing the simulated drone flying to a point on the map](/projects/uav-gcs-lab/qgc-flight.jpg)

A small lab where I set up a simulated drone and a Ground Control Station (GCS), first on one machine and then on two separate machines, connected through **MAVLink**, and documented the problems I ran into along the way.

I built it to understand how a GCS talks to a vehicle: the link, the ports, the telemetry and the commands. It is a learning project, not production work.

---

## What I built

- An **ArduPilot Copter** simulator (SITL) running on Ubuntu inside WSL2.
- **QGroundControl** connected to it over MAVLink/UDP, first on the same PC and then on a second Linux machine on the same network.
- From the GCS I can arm, take off, send the drone to a point on the map and return it to launch.

![MAVProxy console and map showing accepted commands, 100% link and 0 lost packets](/projects/uav-gcs-lab/qgc-console.jpg)

---

## Two machines, a firewall and a VPN

- I separated the **vehicle** (my PC, Ubuntu in WSL2) from the **GCS** (a Linux Mint laptop on the same Wi-Fi network).
- The laptop's firewall (**ufw**) denies incoming traffic by default, so I allowed MAVLink only from the vehicle PC. To check that the rule is what lets the telemetry through, I tested without the GUI using netcat: with the rule the MAVLink packets arrive, without it nothing arrives and the kernel log shows the drop.
- I then put the link inside a **WireGuard** tunnel, so the telemetry travels encrypted. Each machine generated its own key pair and only the public keys were exchanged. I allowed WireGuard only from the PC, and MAVLink only from inside the tunnel.
- I verified with **tcpdump** on the tunnel interface that the telemetry really goes through the tunnel.

![QGroundControl on the laptop controlling the simulated vehicle](/projects/uav-gcs-lab/qgc-two-machines.jpg)

![MAVProxy forwarding telemetry to the second machine](/projects/uav-gcs-lab/two-machine-mavproxy.png)

---

## Measurements

I ran 50 pings from the PC to the laptop, one test right after the other, over home Wi-Fi:

- **Direct LAN (no VPN):** 0% loss, 2.9 ms on average.
- **WireGuard tunnel:** 0% loss, 3.7 ms on average.

In this test the tunnel added about 0.8 ms and lost no packets. These are single runs over Wi-Fi, so the numbers vary from run to run.

## Link failure test

With a continuous ping running, I took the tunnel down for 20 seconds and brought it back up. There were 20 consecutive pings with no answer, which matches the 20 s of downtime. The tunnel then recovered on its own: the first ping after it came back was answered in 4.7 ms. MAVLink runs over UDP, so packets sent during the outage are lost, not delayed, and the telemetry simply resumes when the link returns.

![Continuous ping through the tunnel: 20 pings with no answer while the tunnel is down, then replies resume](/projects/uav-gcs-lab/link-failure-ping.png)

---

## Problems I ran into

- **QGroundControl for Windows crashed on start** with a "Bad Image" error. Windows blocked a binary it did not recognise. I did not disable the protection: I ran the Linux AppImage inside WSL instead.
- **QGroundControl showed "Disconnected"** although the simulator was running. The simulator detected WSL and sent telemetry to the Windows host instead of localhost. I fixed it by adding a second output to 127.0.0.1.
- **Takeoff failed** because the vehicle was not in GUIDED mode.
- **Telemetry did not reach the second machine** because ufw denies incoming traffic by default. The kernel log showed the blocked packets, so I allowed UDP 14550 only from the vehicle PC.

## What I learned

- A GCS is a client on a link: the interesting work is the link itself (ports, routing, firewalls, link quality), not the buttons.
- A firewall on the GCS side can silently stop a working vehicle from being seen.
- How to document a problem so that someone else can reproduce the fix.

## Next steps (planned, not done yet)

- Swap roles: run the simulator headless on the laptop, as if it were the onboard computer.
- Watch how the vehicle reacts to a longer link loss (GCS failsafe).
- Simulate a degraded link, with delay and packet loss, instead of a full outage.
    `,
    },
    {
        slug: "plantsnap",
        title: "PlantSnap - AI Plant Care",
        description: "A cloud web application on Azure that identifies plants with Computer Vision AI, keeps a personal garden in Cosmos DB, and sends watering reminders by email from an Azure Function. Infrastructure defined in Terraform.",
        tags: ["FastAPI", "Python", "Azure Cosmos DB", "Azure Functions", "Docker", "Terraform"],
        thumbnail: "/projects/plantsnap/cover.png",
        githubUrl: "https://github.com/Andalexskywalker/plantsnap",
        featured: true,
        images: [
            "/projects/plantsnap/cover.png",
            "/projects/plantsnap/login-plantsnap.gif",
            "/projects/plantsnap/identifyplant+guardar.gif",
            "/projects/plantsnap/jardim-virtual.gif",
            "/projects/plantsnap/email-notification.gif",
            "/projects/plantsnap/logout.gif"
        ],
        content: `
![PlantSnap Cover](/projects/plantsnap/cover.png)

**PlantSnap** is a web application built on **Microsoft Azure**. The app lets users identify plants from photos using AI, get watering and care instructions, save plants in a personal virtual garden, and receive watering reminders by email.

It was developed as a mini-project for the Cloud Computing course.

---

## Architecture and services used

1. **Frontend**: a responsive single-page app with tabs (Identify, Garden, Profile), in HTML, CSS and JavaScript.
2. **Backend (Docker container)**: a REST API built with **FastAPI** (Python 3.11), containerized with Docker and running on **Azure App Service**.
3. **Database (Cosmos DB)**: a NoSQL database for the plants saved by each user and their notification preferences.
4. **Storage (Azure Blob Storage)**: holds the photos uploaded by users. In the current version the container is private and the API serves the images through short-lived signed links.
5. **Serverless (Azure Function)**: a timer-triggered Python function that reads the plants from Cosmos DB and sends the reminder emails.
6. **Azure Communication Services**: sends the transactional emails.
7. **AI and APIs**: **Azure Computer Vision** checks that the image is a plant, and the **Plant.id API** identifies the species and returns watering data.
8. **Login**: Google login through App Service Authentication.

---

## Live demonstrations

### 1. Login
![Login and Authentication](/projects/plantsnap/login-plantsnap.gif)

### 2. Plant identification and saving
![Identification and Saving](/projects/plantsnap/identifyplant+guardar.gif)

### 3. Personal virtual garden
![Virtual Garden](/projects/plantsnap/jardim-virtual.gif)

### 4. Email reminders
![Email Notification](/projects/plantsnap/email-notification.gif)

### 5. Logout and preferences
Users can turn the email reminders on or off in their profile.
![Logout and Preferences](/projects/plantsnap/logout.gif)

---

## Infrastructure as code

The Azure infrastructure is declared in **Terraform**. After the course I extended the repository **with AI assistance**: parameterized queries, private image storage, Terraform with remote state, Key Vault with managed identities, GitHub Actions workflows, Kubernetes manifests and Prometheus/Grafana monitoring. The CI checks pass, but the Key Vault, deployment and Kubernetes parts are written and validated, not yet run end to end against my Azure account, so treat them as work in progress.
    `,
    },
    {
        slug: "smcte",
        title: "SMCTE - Space Traffic",
        description: "My final BSc project, done in a team of two: deep learning models (LSTM, GRU) that predict high-risk satellite conjunctions from ESA Collision Avoidance Challenge data.",
        tags: ["Python", "Deep Learning", "Keras", "TensorFlow", "Data Science"],
        thumbnail: "/projects/smcte/icon-v2.png",
        images: ["/projects/smcte/icon-v2.png", "/projects/smcte/dashboard.png"],
        githubUrl: "https://github.com/Andalexskywalker/SMCTE",
        content: `
# SMCTE — Space Traffic Monitoring System

My **final BSc project** in Informatics Engineering, done in a team of two.

### The problem
With thousands of satellites in orbit, the risk of collision is real. Operators receive Conjunction Data Messages (CDMs) and have to decide which close approaches are dangerous enough to need an avoidance maneuver.

### What we did
We used the public dataset of the **ESA Collision Avoidance Challenge**: 162,634 messages across 13,154 events.

1. **Data preparation**: event-level train/validation/test splits so that no event is split between sets, imputation, outlier clipping and scaling fitted on the training data only, and feature selection.
2. **Imbalanced target**: only about 15% of the events are high risk, so we evaluated with PR-AUC and F2 instead of accuracy.
3. **Models**: we compared six sequence models (LSTM, GRU, BiLSTM, BiGRU, 1D-CNN and TCN). The best one, a BiLSTM, reached a PR-AUC of 0.29 on validation, about twice the 0.15 of a random classifier.
4. **Demo app**: a Streamlit app to choose a model, run it on a CSV and look at the precision-recall curve and the confusion matrix.

### Tech stack
- **Python and data science:** pandas, NumPy, scikit-learn.
- **Deep learning:** Keras and TensorFlow.
- **Interface:** Streamlit.
    `,
    },
    {
        slug: "friday-bot",
        title: "Friday AI",
        description: "A Python desktop assistant in which a Gemini model triggers local tools (apps, files, timers, volume), built without agent frameworks to understand how LLM tool calling works.",
        tags: ["Python", "LLM", "Gemini API", "Tool calling", "Windows"],
        thumbnail: "/projects/friday-bot/friday_icon.png",
        githubUrl: "https://github.com/Andalexskywalker/Friday",
        featured: true,
        images: [
            "/projects/friday-bot/friday_icon.png",
            "/projects/friday-bot/dashboard.png"
        ],
        content: `
![Friday AI Interface](/projects/friday-bot/dashboard.png)

## What it is
Friday is a personal Windows assistant that lets a Gemini model trigger local Python skills: opening apps, organizing the Desktop, setting timers, managing todos and controlling volume. It runs from the system tray, with a hotkey-activated chat window, or as a terminal or web chat.

I built it to learn how LLM tool use works under the hood, so it deliberately avoids agent frameworks and the Gemini SDK.

---

## How it works

- The **agent** sends the model a prompt with the available tools and the last few turns. The model answers in text or with a JSON object such as a tool name and its arguments.
- A **tools registry** maps each JSON call onto a Python function by inspecting its signature, and absorbs common argument-name differences.
- The **API client** lists the models available to the key, picks the first one that answers a probe, and retries with exponential backoff on rate limits.
- Each skill is imported on its own, so a missing optional dependency only disables that skill.

## Limitations
- Single-step only: tool results are shown to the user but not sent back to the model, so it cannot chain actions.
- Tool calling is prompt-based (JSON in plain text), not Gemini's native function calling.
- Short memory: only the last three exchanges.

## Possible next steps
Feed tool results back to the model, use native function calling, and expose the skills as an MCP server.
    `,
    },
    {
        slug: "chess-engine",
        title: "Java Chess & Checkers",
        description: "A Java Swing chess and checkers game: piece classes, move rules, mandatory capture, check and checkmate, built on a board GUI provided by the course. The CPU opponent was written with AI assistance.",
        tags: ["Java", "Swing", "OOP", "University project"],
        thumbnail: "/projects/chess-engine/icon-v3.png",
        githubUrl: "https://github.com/Andalexskywalker/XadrezDamas",
        images: ["/projects/chess-engine/icon-v3.png", "/projects/chess-engine/menu.png", "/projects/chess-engine/Xadrez.gif", "/projects/chess-engine/Damas.gif"],
        content: `
# Java Chess & Checkers

A desktop game with chess and checkers, written in Java with Swing as a university project. I used it to practise object-oriented design: an interface for pieces, one class per piece type, and inheritance and polymorphism for the move rules.

---

## Who did what

- **Provided by the course:** the initial board GUI (the window, the board and the image assets).
- **Mine:** the piece classes, the move rules and the game logic for chess and checkers.
- **CPU opponent and part of the menu:** I designed the idea and the implementation was written with AI assistance.

---

## What it does

- **Chess:** movement and capture rules for every piece, check detection (a move that leaves your own king in check is rejected), checkmate, stalemate and pawn promotion.
- **Checkers:** mandatory capture, promotion to king and king movement.
- Pieces are dragged and dropped with the mouse, and valid moves are highlighted.

![Chess Gameplay](/projects/chess-engine/Xadrez.gif)

![Checkers Gameplay](/projects/chess-engine/Damas.gif)

## Limitations
- Chess has no castling, no en passant and no draw by repetition.
- The CPU plays a random valid move, and in checkers it does not continue a chain of captures.
    `,
    },
    {
        slug: "praia-finder",
        title: "PraiaFinder",
        description: "A Next.js and FastAPI app that scores Portuguese beaches from 0 to 10 using weather and sea forecasts. The idea, the data sourcing and the analysis of the results are mine; the code was generated with AI.",
        tags: ["Next.js", "FastAPI", "Python", "Data analysis", "AI-assisted"],
        thumbnail: "/projects/praia-finder/intro.gif",
        githubUrl: "https://github.com/Andalexskywalker/praiafinder",
        images: [
            "/projects/praia-finder/intro.gif",
            "/projects/praia-finder/dashboard.gif",
            "/projects/praia-finder/dashboard.png"
        ],
        content: `
![PraiaFinder Demo](/projects/praia-finder/intro.gif)

**Find the right beach in Portugal for what you want to do.**

## Who did what
The **idea** is mine, and so are the choice of the **data sources** and the **analysis of the results**. The application code (Next.js frontend and FastAPI backend) was **generated with AI**, so I present this as an AI-assisted project and not as code I wrote.

## Project overview
Instead of showing raw meteorological data (wind in knots, swell period, and so on), PraiaFinder turns the forecasts into a simple **0 to 10 score** that depends on what you want to do:

*   **For surfers**: high waves and strong offshore winds give a high score.
*   **For families**: calm water, low wind and warm temperatures give a high score.

## How it works
*   A **Python data pipeline** fetches weather and sea forecasts for the beaches from external APIs and scores them.
*   A **FastAPI** backend serves the scores, and a **Next.js** frontend shows them on a map.
*   The pipeline retries failed requests and caches results to avoid calling the external APIs too often.

![Dashboard Interaction](/projects/praia-finder/dashboard.gif)
    `,
    },
    {
        slug: "prr-simulator",
        title: "Park & Ride Simulator (infrastructure)",
        description: "A microservices application (Java, Spring Boot) that I ran as a Docker Compose environment. The application code was generated with AI; my part was the Docker side: containerizing and running the services.",
        tags: ["Docker", "Docker Compose", "PostgreSQL", "Linux", "DevOps"],
        thumbnail: "/projects/prr-simulator/dashboard_user.png",
        images: [
            "/projects/prr-simulator/dashboard_user.png",
            "/projects/prr-simulator/admin_dashboard.png",
            "/projects/prr-simulator/parking_car.gif"
        ],
        githubUrl: "https://github.com/Andalexskywalker/park-ride-simulator",
        content: `
# Park & Ride Simulator — the Docker environment

![User dashboard of the application](/projects/prr-simulator/dashboard_user.png)

## Who did what
The **application code** (Java, Spring Boot and a React frontend) was **generated with AI**, so I do not present it as my own programming work. My part was the **infrastructure side**: running and managing the application as a **Docker Compose** environment.

## What the application is
A simulator for Park & Ride facilities, where drivers park at peripheral hubs and switch to public transport. It has separate services for users, parks, parking sessions, tariffs and billing, and analytics, behind an API gateway and a service registry (Netflix Eureka), with PostgreSQL databases.

## What the environment looks like
The services run as containers orchestrated with Docker Compose. The environment also includes a reverse proxy (Nginx Proxy Manager) and a local DNS server (BIND9), to imitate a small cloud setup on a local machine.

![Parking session simulation](/projects/prr-simulator/parking_car.gif)

![Admin dashboard with network analytics](/projects/prr-simulator/admin_dashboard.png)
    `,
    },
];
