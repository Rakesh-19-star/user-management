# User Management Web Application

This React-based User Management application offers a professional, modern, and interactive interface with full CRUD functionality — Create, Read, Update, Delete — designed to demonstrate practical development skills as part of a hiring process.

A live demo is available here: **[Live Demo on Vercel](https://your-vercel-app-link.vercel.app)**

---

## Project Overview

This app enables management of users through:

- **User Listing:** Displays users as responsive card-style rows aligned perfectly under a persistent, styled table header.
- **Add User:** Allows adding new users by filling a form comprising First Name, Last Name, Email, and Department fields.
- **Update User:** Enables editing existing users with pre-populated forms, success notifications, and delayed redirects for user feedback.
- **Delete User:** Removes users after confirmation, with immediate UI update.
- **Navigation:** Fixed, stylish top navigation bar to switch between User List and Add User pages.
- **Responsive Design:** Fully responsive, accessible UI with smooth hover and focus effects.
- **API Integration:** Uses [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for demonstrating REST API interactions.

---

## Technologies Used

- React (Functional Components & Hooks)
- React Router DOM (Routing & Navigation)
- Material UI Icons (Edit & Delete buttons)
- CSS Grid & Flexbox for layout & responsiveness
- Fetch API for communicating with mock backend
- Vercel for live deployment

---

## Folder Structure

/src
/components
UserForm.jsx
UserList.jsx
UserList.css
UserForm.css
/pages
AddUser.jsx
UpdateUser.jsx
AddUser.css
UpdateUser.css
App.jsx
index.js
index.css (global styles and nav styling)

---

## How to Run Locally

1. Clone the repository.

2. Install dependencies:

npm install

3. Run the development server:

npm start

4. Open your browser at `http://localhost:3000`.

---

## Component Summary

### UserList.jsx & UserList.css

- Shows users in card style under a fixed header.
- Responsive design stacks cards on narrow screens.
- Contains delete and update buttons with smooth hover effects.

### UserForm.jsx & UserForm.css

- Reusable form component for adding and updating users.
- Manages internal form state with controlled inputs.
- Properly labeled form fields with accessible markup.

### AddUser.jsx / UpdateUser.jsx with respective CSS

- Pages for adding and updating users.
- Show success messages and redirect after operations.
- Use navigation hooks to switch pages seamlessly.

---

## Design Highlights

- Clean, minimalistic UI with consistent typography and spacing.
- Hover and focus states provide clear user interaction feedback.
- Responsive layouts for accessibility across devices.
- Fixed top navigation with stylish, pill-shaped menu buttons.
- Smooth animations for card elevation on hover.

---

## Notes

- JSONPlaceholder API is used for demonstration and does not persist data permanently.
- The app updates local React state optimistically to reflect changes instantly.
- Focus was placed on clarity, maintainability, and professional structure.

---

## Future Improvements

- Replace mock API with a real backend to persist user data.
- Add user authentication and role-based permissions.
- Enhance form validation with libraries like Formik or React Hook Form.
- Implement pagination/search/filter on user list.
- Add a dark mode toggle for better UX.

---

## Contact

For questions or feedback about this project, please contact:

**Rakesh**  
Email: rakibollapelli1@gmail.com
GitHub:

---

Thank you for considering this project as part of your hiring process.
