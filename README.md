# Real-Time Chat Application

A full-stack real-time chat application built with the MERN stack (MongoDB, Express, React, Node.js) and Socket.io. This application features secure authentication, real-time messaging, online status updates, and a modern, responsive UI with theme customization.

## ✨ Features

-   **Real-time Messaging**: Instant message delivery powered by Socket.io.
-   **User Authentication**: Secure signup, login, and logout using JWT and HttpOnly cookies.
-   **Online Status**: See who is currently online in real-time.
-   **Image Support**: Send images in chat (integrated with Cloudinary).
-   **Profile Management**: Update your profile picture.
-   **Theme Customization**: Choose from multiple themes (powered by DaisyUI).
-   **Responsive Design**: Mobile-friendly interface built with Tailwind CSS.

## 🛠️ Tech Stack

### Frontend
-   **React**: UI library
-   **Vite**: Build tool
-   **Tailwind CSS**: Utility-first CSS framework
-   **DaisyUI**: Component library for Tailwind
-   **Zustand**: State management
-   **React Router**: Navigation
-   **Axios**: HTTP client
-   **React Hot Toast**: Notifications

### Backend
-   **Node.js**: Runtime environment
-   **Express**: Web framework
-   **MongoDB**: Database
-   **Socket.io**: Real-time bidirectional communication
-   **JWT**: Authentication (JSON Web Tokens)
-   **Cloudinary**: Cloud image storage
-   **Cookie Parser**: Parse Cookie header and populate req.cookies

## 🚀 Getting Started

### Prerequisites

-   Node.js (v14 or higher)
-   MongoDB (Local or Atlas)

### Installation

1.  **Clone the repository**
    ```bash
    git clone <repository-url>
    cd mern-chat-app
    ```

2.  **Install dependencies**
    
    Root (optional, for dev scripts):
    ```bash
    npm install
    ```

    Backend:
    ```bash
    cd backend
    npm install
    ```

    Frontend:
    ```bash
    cd frontend
    npm install
    ```

3.  **Environment Configuration**

    Create a `.env` file in the `backend` directory with the following variables:

    ```env
    PORT=5001
    MONGODB_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    CLOUDINARY_CLOUD_NAME=your_cloudinary_name
    CLOUDINARY_API_KEY=your_cloudinary_api_key
    CLOUDINARY_API_SECRET=your_cloudinary_api_secret
    NODE_ENV=development
    ```

### Running the Application

1.  **Start the Backend**
    ```bash
    cd backend
    npm run dev
    ```

2.  **Start the Frontend**
    ```bash
    cd frontend
    npm run dev
    ```

The application should now be running on `http://localhost:5173` (frontend) and `http://localhost:5001` (backend).

## 📂 Project Structure
```
├── backend/ # Node.js/Express backend 
│ ├── src/ 
│ │ ├── controllers/ # Request handlers 
│ │ ├── lib/ # Helper functions (DB, Socket, etc.) 
│ │ ├── middleware/ # Auth middleware 
│ │ ├── models/ # Mongoose models 
│ │ ├── routes/ # API routes 
│ │ └── index.js # Entry point 
│ └── package.json 
│ ├── frontend/ # React frontend 
│ ├── src/ 
│ │ ├── components/ # Reusable UI components 
│ │ ├── pages/ # Application pages 
│ │ ├── store/ # Zustand state stores 
│ │ └── App.jsx # Main component 
│ └── package.json 
│ └── package.json # Root configuration
```
