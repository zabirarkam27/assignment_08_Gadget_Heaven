# Gadget Heaven

Welcome to **GadgetHeaven**! This is an e-commerce website designed to provide a smooth shopping experience for tech enthusiasts. The site features gadgets such as computers, phones, smartwatches, and more, with functionalities like shopping cart, wishlist, and product filtering. The platform is built using React, Context API, and TailwindCSS for responsive design.

---

## Live Website Link

[Live Website - Gadget Heaven](https://gadget-heaven-by-zabir.netlify.app/)

---

## Requirement Document Link

[Requirement Document](/https://gadget-heaven-by-zabir.netlify.app/Batch-10_Assignment-08.pdf)

---

## React Fundamentals Used in the Project

1. **Functional Components** - All components in this project are functional.
2. **State Management** - `useState` and `useEffect` hooks have been used for handling component state.
3. **React Router** - Used for navigation between pages (Home, Dashboard, etc.).
4. **Conditional Rendering** - Dynamically render UI based on state (e.g., Cart vs Wishlist).
5. **Event Handling** - Used to manage user interactions, such as button clicks.
6. **JSX** - The project extensively uses JSX for creating the UI.
7. **Context API** - Used to manage global states like cart items and wishlist across various components.
8. **useLocation** and **useNavigate** - For dynamic page title, navigation, and background color change.

---

## Data Handling and Management

- **Context API** - The Context API is used for managing the global state, specifically for the shopping cart and wishlist. This helps avoid prop drilling and simplifies state management across multiple components.
- **Local Storage** - Cart items and wishlist data are persisted using the browser's local storage so that users don't lose their items after refreshing the page.

---

## Features of the Website

1. **Gadget Categories and Cards**: The homepage displays a grid of gadgets, categorized by type (computers, phones, smartwatches, etc.). Each card shows the product’s name, image, and price with a 'Details' button leading to the product’s detailed page.

2. **Product Filtering**: Users can filter gadgets by category from a sidebar. Clicking a category shows gadgets specific to that category, while the default view displays gadgets from all categories.

3. **Shopping Cart and Wishlist**: Users can add gadgets to their shopping cart or wishlist. The cart’s total price is displayed, and users can sort items by price. Items in the wishlist can also be added to the cart.

4. **Modal for Purchase**: After clicking the "Purchase" button, a congratulatory modal appears. The cart is emptied, and the total price resets to zero.

5. **404 Page**: A dedicated 404 error page appears if the user navigates to an invalid route.

6. **Dynamic Page Title**: The page title updates dynamically based on the route using React Router’s `useLocation` hook.

7. **Favicon**: A custom favicon is added to the website for branding.

8. **Toast Notifications**: Toast messages are displayed when an item is added to the cart or wishlist, indicating success.
9. **Edge Case Handling**: The website handles edge cases, such as preventing errors on page reload and ensuring no duplicate items are added to the wishlist.
10. **Responsive Design**: The website is fully responsive, ensuring a seamless experience on devices of all sizes.

---

## Technologies Used

- **React** - JavaScript library for building user interfaces.
- **React Router** - Used for navigation and routing between pages.
- **Context API** - Used for global state management (cart and wishlist).
- **TailwindCSS** - For responsive and utility-first CSS styling.
- **LocalStorage** - For persisting cart and wishlist data.
- **React Rating** - Used for displaying ratings of products.

---
