
# SecureView Backend API

This is the backend API for the SecureView CCTV E-Commerce Website.

## Usage

### Set Environment Variables

Create a .env file in the root and add the following:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/secureview
JWT_SECRET=yoursecretkey
JWT_EXPIRE=30d
```

### Install Dependencies

```
npm install
```

### Run App

```
# Run in development mode
npm run dev

# Run in production mode
npm start
```

## API Documentation

### Authentication Routes

- POST /api/auth/signup - Register a new user
- POST /api/auth/login - Login a user
- GET /api/auth/me - Get current user (protected)
- GET /api/auth/logout - Logout user (protected)

### Product Routes

- GET /api/products - Get all products
- GET /api/products/:id - Get a single product
- POST /api/products - Create a new product (admin only)
- PUT /api/products/:id - Update a product (admin only)
- DELETE /api/products/:id - Delete a product (admin only)

### Cart Routes

- GET /api/cart - Get user's cart (protected)
- POST /api/cart - Add item to cart (protected)
- PUT /api/cart/:productId - Update item quantity (protected)
- DELETE /api/cart/:productId - Remove item from cart (protected)
- DELETE /api/cart - Clear cart (protected)

### How It Works Routes

- GET /api/how-it-works - Get all installation steps
- GET /api/how-it-works/:id - Get a single step
- POST /api/how-it-works - Create a new step (admin only)
- PUT /api/how-it-works/:id - Update a step (admin only)
- DELETE /api/how-it-works/:id - Delete a step (admin only)

### About Routes

- GET /api/about - Get company information
- PUT /api/about - Update company information (admin only)

### Contact Routes

- POST /api/contact - Submit contact form
- GET /api/contact - Get all contact submissions (admin only)
- GET /api/contact/:id - Get a single contact submission (admin only)
- PUT /api/contact/:id - Update contact status (admin only)
- DELETE /api/contact/:id - Delete a contact submission (admin only)
