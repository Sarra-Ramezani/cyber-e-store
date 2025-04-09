import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Products from "./pages/Products.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";

const router = createBrowserRouter([
  { path: "/cyber/", element: <App /> },
  { path: "/cyber/login", element: <Login /> },
  { path: "/cyber/signup", element: <Signup /> },
  { path: "/cyber/products", element: <Products /> },
  {
    path: "/cyber/details",
    element: <ProductDetails />,
  },
]);
const root = document.getElementById("root");

createRoot(root).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
