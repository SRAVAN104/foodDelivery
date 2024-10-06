# Food Delivery App

This project is a full-stack application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It includes a customer-facing front-end for ordering food and an admin panel for managing orders, menus, and other administrative tasks.

## Features

- **Customer Frontend:**
  - Browse through menus and place orders.
  - Create an account or log in to an existing one.
  - View order history and track the status of current orders.
  - Customize orders with special requests.

- **Admin Panel:**
  - Manage menus: add, edit, or remove items.
  - View and manage orders: update status, view order details, and mark as completed.
  - Monitor user accounts and activity.
  - Generate reports on sales, popular items, etc.

## Technologies Used

- **Frontend:**
  - React.js: Frontend library for building user interfaces.
  - Redux: State management library for managing application state.
  - Axios: Promise-based HTTP client for making requests to the backend.
  - React Router: Library for routing in React applications.
  - React Toastify: Library for displaying toast notifications.
  - Stripe.js: Library for integrating Stripe payments.

- **Backend:**
  - Node.js: JavaScript runtime environment for building server-side applications.
  - Express.js: Web application framework for Node.js.
  - MongoDB: NoSQL database for storing application data.
  - Mongoose: MongoDB object modeling for Node.js.
  - bcrypt: Library for hashing passwords.
  - body-parser: Middleware for parsing JSON requests.
  - cors: Middleware for enabling CORS (Cross-Origin Resource Sharing).
  - dotenv: Library for loading environment variables from a .env file.
  - jsonwebtoken: Library for generating and verifying JSON Web Tokens.
  - multer: Middleware for handling multipart/form-data (used for file uploads).
  - Stripe: Library for integrating with the Stripe API.
  - Validator: Library for data validation.

## Installation

1. Clone the repository:

  git clone <repository-url>


2. Navigate to the project directory:

cd food-delivery-app


3. Install dependencies for both frontend and backend:

cd frontend
npm install

cd ../backend
npm install


4. Set up environment variables:
   - Define the following variables:
     - `MONGODB_URI`: MongoDB connection URI.
     - `JWT_SECRET`: Secret key for JWT token generation.
     - `VITE_BACKEND_URL`: Enter the backend URL or endpoint of backend service.
     - Other necessary environment variables (e.g., Stripe API keys).

5. Run the backend server:

npm run server


6. Run the frontend:

cd ../frontend
npm run build


The application should now be running on `http://localhost:3000`.

The frontend application should now on `http://localhost:<port>`.

The Admin application should now on `http://localhost:<port>`
## API Endpoints

- **GET /api/menu**: Get all menu items.
- **POST /api/order**: Place a new order.
- **GET /api/order/:orderId**: Get details of a specific order.
- **PUT /api/order/:orderId**: Update the status of an order (for admin).
- **DELETE /api/order/:orderId**: Delete an order (for admin).
- *More endpoints for admin functionalities*.

## License

This project is licensed under the [MIT License](LICENSE).
