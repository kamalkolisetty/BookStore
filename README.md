

# BookWorm's Paradise

Welcome to BookWorm's Paradise! This project is designed to manage and display courses using the MERN stack.

## Frontend (React, Vite, Tailwind CSS)

### Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Vite**: Frontend build tool for fast refresh and optimized builds.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **react-router-dom**: DOM bindings for React Router.
- **axios**: Promise-based HTTP client for making API requests.

### Setup

1. **Clone the frontend repository**

   ```bash
   git clone https://github.com/kamalkolisetty/BookStore-Frontend.git
   cd BookStore-Frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory and add the following variable:

   ```plaintext
   VITE_BACKEND_URL=http://localhost:4001
   ```

   Replace `http://localhost:4001` with your backend server URL.

4. **Start the development server**

   ```bash
   npm run dev
   ```

   The frontend server should now be running on `http://localhost:3000`.

### Folder Structure

```
src/
├── components/         # React components (e.g., Home, Course, Cards)
├── context/            # React context providers (e.g., AuthContext)
├── pages/              # React components for each page (e.g., Home.jsx, Course.jsx)
├── styles/             # Tailwind CSS styles and configurations
└── utils/              # Utility functions (e.g., API calls using axios)
```

## Backend (Node.js, Express, MongoDB)

### Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing application data.
- **mongoose**: MongoDB object modeling tool.
- **bcryptjs**: Library for hashing passwords.
- **dotenv**: Module to load environment variables from a `.env` file.
- **cors**: Middleware for enabling Cross-Origin Resource Sharing.

### Setup

1. **Clone the backend repository**

   ```bash
   git clone https://github.com/kamalkolisetty/BookStore.git
   cd BookStore
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory and add the following variables:

   ```plaintext
   PORT=4001
   MongoDBURI=<your_mongodb_uri>
   ```

   Replace `<your_mongodb_uri>` with your MongoDB connection URI.

4. **Run the server**

   ```bash
   npm start
   ```

   The backend server should now be running on `http://localhost:4001`.

### API Endpoints

- **POST `/signup`**: Register a new user.
- **POST `/login`**: Authenticate a user.
- **POST `/additem`**: Add a new book item.
- **GET `/allitems`**: Retrieve all book items.

## Demonstration
![one](/b1.png)
