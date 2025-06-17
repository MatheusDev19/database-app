import { RegisterForm } from "../../Components/RegisterForm";
import { Box } from "@mui/material";

export function RegisterPage() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f0f0",
      }}
    >
        <RegisterForm />
    </Box>
  );
}
