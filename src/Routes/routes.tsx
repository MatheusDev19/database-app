import { createBrowserRouter } from "react-router-dom";
import { RegisterForm } from "../Components/RegisterForm";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RegisterForm />,
  },
]);
