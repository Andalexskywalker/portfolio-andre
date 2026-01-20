# Park & Ride Simulator (PRR) - Project Overview

## 1. Project Vision
The **Park & Ride Simulator** is a cloud-native microservices application designed to simulate and manage a network of Park & Ride (P+R) facilities on the outskirts of major cities. 

**Core Goal**: Reduce urban traffic congestion and CO2 emissions by encouraging drivers to park at peripheral hubs and switch to public transport.

This project serves as a technical portfolio piece demonstrating mastery of **distributed systems**, **microservices architecture**, and **full-stack development** using industry-standard technologies.

---

## 2. Technical Architecture
The system is built on a robust, scalable stack designed for reliability and observability.

### Backend (Spring Cloud Ecosystem)
- **Language**: Java 21
- **Framework**: Spring Boot 3.5.6
- **Service Registry**: Netflix Eureka (Dynamic discovery of microservices)
- **API Gateway**: Spring Cloud Gateway (Single entry point, routing, and filtering)
- **Communication**: REST APIs (OpenFeign for inter-service communication)
- **Database**: PostgreSQL (Containerized)
- **Security**: JWT Authentication (Stateless)

### Frontend (Modern web)
- **Framework**: React 18 (Vite)
- **Styling**: Vanilla CSS with Glassmorphism aesthetic (Premium, dark-mode first design)
- **State**: React Hooks & Context API
- **Routing**: React Router v6

### Infrastructure
- **Containerization**: Docker & Docker Compose
- **Orchestration**: All services run in isolated containers with a unified internal network.

---

## 3. Microservices Breakdown

The backend is decomposed into 5 distinct domains, each with its own responsibility:

| Service | Responsibility | Key Features |
| :--- | :--- | :--- |
| **Api Gateway** (`:8080`) | Entry point | Route forwarding, centralized Authentication filter, global CORS config. |
| **Eureka Server** (`:8761`) | Registry | Heartbeat monitoring, service location directory. |
| **Service Parques** (`:8081`) | Inventory | CRUD of Parks, capacity management, status (OPEN/CLOSED), pricing per hour. |
| **Service Utilizadores** (`:8082`) | Identity | User registration, JWT issuance, vehicle management (License plates), role management (ADMIN/OPERATOR). |
| **Service Sessoes** (`:8083`) | Operations | "Check-in" (start parking) and "Check-out" (end parking). Calculates duration. |
| **Service Tarifas** (`:8084`) | Billing | Invoice generation based on duration. Repository of all payments. |
| **Service Analytics** (`:8085`) | Intelligence | Aggregates data to provide insights (Total revenue, occupancy trends) for the Admin dashboard. |

---

## 4. Key User Flows supported

### A. Driver (User)
1.  **Register/Login**: Creates an account with email and password.
2.  **Manage Vehicles**: Adds their vehicle license plates to their profile.
3.  **View Dashboard**: Sees real-time capacity of all Park & Ride parks in the network.
4.  **Simulation**:
    *   **Check-in**: Selects a park and "enters" (starts a session).
    *   **Timer**: Watches the parking duration increase in real-time.
    *   **Check-out**: Ends the session.
    *   **Payment**: Receives an instant digital invoice.

### B. Operator
1.  **Monitor Capacity**: Sees a live board of all parks with visual alerts (Red/Green) for occupancy.
2.  **Operational control**: Can manually open or close parks for maintenance.

### C. Administrator
1.  **Analytics**: Access to the "Cost Copilot" dashboard showing total network revenue and system health.
2.  **User Management**: Overview of system users and roles.

---

## 5. How to Run

The entire system is "One-Click" deployable via Docker.

```bash
# 1. Build all services
mvn -DskipTests package

# 2. Launch Infrastructure
docker compose up --build
```

**Access Points**:
*   **Frontend**: http://localhost:3001
*   **API Gateway**: http://localhost:8080
*   **Service Registry**: http://localhost:8761
