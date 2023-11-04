# MERN Todo Application

This MERN (MongoDB, Express, React, Node.js) based todo application provides a range of advanced features to enhance task management.
## Video Presentation

You can watch a video presentation of this project by clicking the link below:

- [Video explaining the project and how you can run it on your system.](https://drive.google.com/file/d/1LmjvflQD0BXkZzOYKLIX2_MkQGClja8Z/view?usp=sharing)

In addition to the basic functionality, the application offers the following key features:

## Additional Features
- **Task Filters**: Filter tasks based on their priority.
- **Date Filters**: Filter tasks for today, the last 7 days, and the last 30 days.

The application includes user authentication with JWT (JSON Web Tokens) and stores tokens in cookies for secure session management. It also implements bcrypt to securely store user passwords. The backend is built using Express, and the frontend is developed using React.

## Backend Features
- **JWT Authentication**: User authentication is implemented using JSON Web Tokens (JWT) to ensure secure access to the application.
- **Token Storage in Cookie**: Tokens are stored in cookies for session management, adding an extra layer of security.
- **Protected Routes**: Certain routes are protected and require valid authentication tokens to access.
- **Bcrypt Password Hashing**: User passwords are securely hashed using bcrypt for data protection.
- **Environment Variables**: A secret key is provided in environment variables for added security.
- **File Upload with Multer**: Users can upload profile pictures for their accounts.

## Frontend Features
- **Form Validation with Yup and Formik**: Form fields are validated using the Yup schema validation library and Formik.
- **Material UI**: Material UI is used for designing a responsive and user-friendly user interface.
- **Axios for API Requests**: Axios is used to fetch data from the backend API.
- **Date Management with Dayjs**: Dayjs is employed for effective date handling.
- **Profile Image Upload with react-dropzone**: Users can easily upload profile pictures.
- **State Management with Redux**: Redux is used for managing application state.
- **Redux Persist**: Redux Persist ensures that state data is preserved even after page refresh.
- **Navigation with react-router-dom**: React Router is used for efficient client-side routing.

## Installation and Usage

To set up the app on your system, follow these steps:

1. Clone this repository to your local machine:
   ```
   git clone https://github.com/your-username/mern-todo-app.git
   ```

2. Install dependencies for both the server and client:

   For the server:
   ```
   cd server
   npm install
   ```

   For the client:
   ```
   cd client
   npm install
   ```

3. Start the server by running the following command in the server folder. This will start the API on port 5000:

   ```
   cd server
   npm start
   ```

4. Start the client by running the following command in the client folder. This will start the React application on port 3000:

   ```
   cd client
   npm start
   ```

5. Access the application by opening your web browser and navigating to http://localhost:3000.

6. You can create a new account by visiting the registration page, or if you already have an account, log in using the login page. The app provides basic task management functionality.

Feel free to explore and use this MERN todo application for efficient task management and a better user experience!
