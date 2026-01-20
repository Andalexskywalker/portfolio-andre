# Project Name: Java Chess & Checkers Engine

## Project Overview
This project is a robust desktop game engine featuring two classic board games: **Chess** and **Checkers (Damas)**. Built entirely in **Java** using the **Swing** framework, it serves as a comprehensive demonstration of Object-Oriented Programming (OOP) principles, complex state management, and custom graphical user interface (GUI) development. The application supports both local 2-player matches and a single-player mode against a CPU opponent.

## Key Features

### 1. Dual Game Modes
-   **Chess (Xadrez):** Full implementation of standard chess rules, including piece-specific movements, capturing logic, and distinct behavior for pawns (first move double-step).
-   **Checkers (Damas):** Implements traditional checkers rules with **mandatory capture** enforcement (highlighting required moves), multi-jump logic, and "Dama" (King) promotion.

### 2. Intelligent Game Logic
-   **Move Validation:** The engine strictly enforces legal moves for every piece type, preventing illegal actions and ensuring game integrity.
-   **CPU Opponent:** A single-player mode featuring a computer opponent capable of analyzing the board and making valid moves, providing a functional challenge for users.
-   **Game State Management:** Handles turn switching, check/checkmate detection (foundational), and "Game Over" states.

### 3. Custom UI & UX
-   **Swing-based GUI:** A completely custom-rendered board using `Graphics2D` for smooth visuals, avoiding standard button grids for a more premium feel.
-   **Interactive Mechanics:** Features intuitive **drag-and-drop** mechanics for moving pieces, with real-time visual feedback (highlighting valid squares in green and invalid ones in red).
-   **Animations:** Includes visual feedback for CPU moves to enhance the user experience.

## Technical Highlights

### Architecture (OOP)
The project is architected with strict OOP standards to ensure maintainability and scalability:
-   **Polymorphism:** A base `Peca` (Piece) class defines common behaviors, while specific classes like `Torre` (Rook), `Peao` (Pawn), and `Dama` (Checker King) override movement logic.
-   **Encapsulation:** Game state, board data, and rendering logic are cleanly separated across packages (`pds.xadrez`, `pds.damas`, `pds.menu`).
-   **Inheritance:** Shared game logic is abstracted to reduze code duplication between the two game types.

### Technologies
-   **Language:** Java (JDK 21)
-   **GUI:** Java Swing (JFrame, JPanel)
-   **Build Tool:** Custom Batch Scripting for JAR creation

## Challenges & Learnings
-   **Complex Rule Implementation:** Translating the nuances of "Mandatory Capture" in Checkers and the unique movement patterns in Chess into code required precise algorithmic thinking.
-   **Swing Painting:** Mastering `paintComponent` and `Graphics2D` to create a flicker-free, responsive game board was a key technical achievement.
-   **Event Handling:** managing mouse events (click, drag, release) to create a seamless "pick up and place" feel for the user.
