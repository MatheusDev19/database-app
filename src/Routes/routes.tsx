import { createBrowserRouter } from "react-router-dom";
import { RegisterForm } from "../Pages/RegisterPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RegisterForm />,
  },
]);
