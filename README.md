



Todo Management Application
A full-stack Todo Management application built with React, Redux, Node.js, Express, and MongoDB. The application features user authentication, todo management with drag-and-drop functionality, an admin panel, and data visualization using charts.

Table of Contents
Features
Technologies Used
Prerequisites
Installation
Backend Setup
Frontend Setup
Usage
API Endpoints
Project Structure
Contributing
License
Contact
Features
User Authentication: Secure login and signup functionality using JWT tokens.
Todo Management: Users can create, update, delete, and manage their todos.
Drag-and-Drop: Change the status of todos using drag-and-drop between columns.
Admin Panel: Admin users can manage all users and their todos.
Data Visualization: Visualize todo completion status using charts.
Responsive Design: Optimized for both desktop and mobile devices.
Technologies Used
Frontend:
React
Redux Toolkit
React Router DOM
Axios
Tailwind CSS
Recharts
React Beautiful DnD
Backend:
Node.js
Express.js
MongoDB & Mongoose
JWT for authentication
bcrypt for password hashing
Others:
Vite for frontend tooling
Dotenv for environment variables
CORS middleware
Prerequisites
Node.js (v14 or higher)
npm or yarn
MongoDB Atlas Account or local MongoDB server
Git (for cloning the repository)
Installation
Backend Setup
Clone the Repository:

bash
Copy code
git clone https://github.com/yourusername/todo-management-app.git
cd todo-management-app/backend
Install Dependencies:

bash
Copy code
npm install
Configure Environment Variables:

Create a .env file in the backend directory.

Add the following variables:

env
Copy code
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
Replace your_mongodb_connection_string with your MongoDB Atlas connection string.
Replace your_jwt_secret_key with a secure random string.
Start the Backend Server:

bash
Copy code
npm start
The server should be running at http://localhost:5000.
Frontend Setup
Navigate to the Frontend Directory:

bash
Copy code
cd ../frontend
Install Dependencies:

bash
Copy code
npm install
Configure Environment Variables:

Create a .env file in the frontend directory.

Add the following variables:

env
Copy code
VITE_API_URL=http://localhost:5000/api
Ensure the URL matches the backend server URL.
Start the Frontend Development Server:

bash
Copy code
npm run dev
The application should be running at http://localhost:3000.
Usage
Access the Application:

Open your browser and navigate to http://localhost:3000.
Create an Account:

Click on the "Sign Up" link to create a new account.
Login:

Use your credentials to log in to the application.
Manage Todos:

Add new todos using the "Add New Todo" button.
Drag and drop todos between columns to change their status.
Edit or delete todos using the respective buttons.
Admin Panel:

If logged in as an admin, access the admin panel to manage users and their todos.
View the todo status distribution chart in the admin panel.
API Endpoints
Authentication
POST /api/auth/signup - Register a new user.

Body:

json
Copy code
{
  "name": "Full Name",
  "email": "user@example.com",
  "password": "password123"
}
POST /api/auth/login - Authenticate a user.

Body:

json
Copy code
{
  "email": "user@example.com",
  "password": "password123"
}
Todos
GET /api/todos - Get all todos for the authenticated user.

Headers:

makefile
Copy code
Authorization: Bearer <token>
POST /api/todos - Create a new todo.

Headers:

makefile
Copy code
Authorization: Bearer <token>
Body:

json
Copy code
{
  "title": "Todo Title",
  "description": "Todo Description",
  "dueDate": "2024-12-31",
  "status": "Pending"
}
PUT /api/todos/:id - Update a todo.

Headers:

makefile
Copy code
Authorization: Bearer <token>
Body:

json
Copy code
{
  "title": "Updated Title",
  "description": "Updated Description",
  "dueDate": "2024-12-31",
  "status": "Completed"
}
DELETE /api/todos/:id - Delete a todo.

Headers:

makefile
Copy code
Authorization: Bearer <token>
Admin Routes
GET /api/admin/users - Get all users (Admin only).

Headers:

makefile
Copy code
Authorization: Bearer <admin_token>
Other admin routes as defined in your backend.

Project Structure
lua
Copy code
todo-management-app/
├── backend/
│   ├── config/
│   │   └── database.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── todoController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── User.js
│   │   └── Todo.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── todoRoutes.js
│   ├── .env
│   ├── package.json
│   └── server.js
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Auth/
    │   │   │   ├── Login.js
    │   │   │   └── Signup.js
    │   │   ├── Todos/
    │   │   │   └── TodoApp.js
    │   │   └── AdminPanel/
    │   │       └── AdminPanel.js
    │   ├── slices/
    │   │   ├── authSlice.js
    │   │   └── todoSlice.js
    │   ├── store.js
    │   ├── App.js
    │   └── main.js
    ├── .env
    ├── package.json
    └── vite.config.js
Contributing
Contributions are welcome! Please follow these steps:

Fork the Repository:

bash
Copy code
git clone https://github.com/aryan-hussain/todo-management-app.git
Create a New Branch:

bash
Copy code
git checkout -b feature/YourFeature
Make Your Changes.

Commit Your Changes:

bash
Copy code
git commit -m "Add your message"
Push to the Branch:

bash
Copy code
git push origin feature/YourFeature
Open a Pull Request.

License
This project is licensed under the MIT License.

Contact
For any questions or suggestions, please contact:

Name: Aryan Hussain
Email: aryanhussain78668@gmail.com
GitHub: aryan-hussain
Acknowledgments
Thanks to all open-source contributors and the community for their valuable resources and inspiration.
Additional Notes
Security: Ensure that sensitive information such as JWT secrets and database credentials are not committed to version control. Always use environment variables for such configurations.
Environment Variables: Use the provided .env.example files as a template for your environment variables.
Testing: Before deploying, thoroughly test the application to ensure all features work as expected.
Frequently Asked Questions (FAQ)
1. How do I set up the MongoDB database?
Sign up for a free MongoDB Atlas account or set up a local MongoDB server.
Create a new cluster and get the connection string.
Replace your_mongodb_connection_string in the .env file with your actual connection string.
2. I get a CORS error when making API requests. How do I fix this?
Ensure that the backend server has the CORS middleware configured properly.

In server.js:

javascript
Copy code
app.use(cors({
  origin: 'http://localhost:3000', // Frontend URL
  credentials: true,
}));
3. How do I deploy this application?
Backend: Deploy the backend to a hosting service like Heroku, AWS, or DigitalOcean.
Frontend: Deploy the frontend to a service like Netlify, Vercel, or GitHub Pages.
Update the VITE_API_URL in the frontend .env file to point to the deployed backend URL.
Troubleshooting
Server Not Starting: Ensure all dependencies are installed and the .env file is correctly set up.
Database Connection Issues: Verify the MongoDB connection string and network access settings in MongoDB Atlas.
Invalid Token Errors: Ensure the token is correctly stored and sent in the Authorization header.
Learning Resources
React Documentation: https://reactjs.org/docs/getting-started.html
Redux Toolkit: https://redux-toolkit.js.org/
Node.js Documentation: https://nodejs.org/en/docs/
Express.js Documentation: https://expressjs.com/
MongoDB Atlas: https://www.mongodb.com/cloud/atlas
