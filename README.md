# MediBazaar

Welcome to **MediBazaar**, a multi-vendor medicine-selling e-commerce platform that allows users to browse, search, and purchase medicines online with ease. The project includes both frontend and backend solutions to provide a seamless user experience.

- **Frontend URL:** [MediBazaar Frontend](https://medi-bazaar.web.app/)
- **Backend URL:** [MediBazaar Backend](https://medi-bazaar-backend.vercel.app/)

---

## Features

### 1. User Authentication
- Implemented using **Firebase Authentication**.
- Users can log in with their credentials securely.
- Role-based access control (admin, seller, and buyer).

### 2. Medicine Shop
- Users can browse available medicines.
- Search functionality to find medicines by name.
- Pagination for better performance and user experience (7 items per page).
- Price sorting (ascending and descending order).

### 3. Shopping Cart
- Users can add medicines to their cart.
- View cart items in the dashboard.
- Proceed to checkout with an integrated payment system.

### 4. Payment System
- Secure payment processing using **Stripe**.
- Payment history tracking with invoice generation.

### 5. Role Management
- Different roles with distinct permissions (Admin, Seller, Buyer).
- Sellers can upload and manage their products.
- Admin can manage users and products.

### 6. Order Management
- Track order status from the dashboard.
- Detailed order history for users.
- PDF download for invoices and order details.

### 7. Responsive Design
- Optimized for desktop and mobile devices.
- Sidebar navigation adapts to screen size.

### 8. JWT Token Authentication
- Secure API communication using **JSON Web Token (JWT)**.
- Ensures protected routes and data security.

---

## Technologies Used

### Frontend
- **Framework:** Next.js (React framework)
- **Styling:** Tailwind CSS
- **State Management:** React Context API
- **Authentication:** Firebase
- **Routing:** Next.js dynamic routing
- **UI Components:** shadcn/ui, Lucide icons
- **Notification System:** react-hot-toast
- **PDF Generation:** react-to-print

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Token)
- **Hosting:** Vercel

---

## Challenges Faced

1. **Pagination Implementation**
   - Efficiently implementing pagination to handle a large number of medicine items.
   - Ensuring proper state management for dynamic updates.

2. **JWT Token Authentication**
   - Handling secure access to protected API routes.
   - Managing token expiration and refresh workflows.

3. **Search Functionality**
   - Implementing search with debouncing to improve performance.
   - Case-insensitive search for better user experience.

4. **Role-Based Access**
   - Implementing role-based permissions correctly across the frontend and backend.
   - Ensuring secure actions based on user roles.

5. **PDF Download**
   - Generating printable invoices dynamically using react-to-print.
   - Ensuring layout consistency across different devices.

---

## Installation Guide

### Frontend
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/MediBazaar_frontend.git
   ```
2. Navigate to the project folder:
   ```bash
   cd MediBazaar_frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

### Backend
1. Clone the backend repository:
   ```bash
   git clone https://github.com/your-username/MediBazaar_backend.git
   ```
2. Navigate to the project folder:
   ```bash
   cd MediBazaar_backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the backend server:
   ```bash
   npm start
   ```

---

## How to Use

1. Visit the website: [MediBazaar](https://medi-bazaar.web.app/)
2. Register or log in to your account.
3. Browse and search for medicines.
4. Add medicines to your cart and proceed to checkout.
5. Download order invoices if needed.
6. Manage your account and view order history.

---

## Future Improvements

- Implement AI-based medicine recommendations.
- Improve UI/UX with better animations and micro-interactions.
- Enhance search with filters for categories and price range.
- Add an admin dashboard for analytics and reports.

---

## Credits

Developed by Naeem Majumder

For any queries, contact: naeemmajumder00@gmail.com

---

