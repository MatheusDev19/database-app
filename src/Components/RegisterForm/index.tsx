import { TextFieldForm } from "../../Utils/Components/TextFieldForm";
import { ButtomSubmit } from "../../Utils/Components/ButtomSubmit";
import { UserService } from "../../Services/User.service";
import { Box } from "@mui/material";
import { useState } from "react";
// import styles from "./register-form.module.css";

export function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      await UserService.register({ name, email, password });
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <Box
      className="form"
      component="form"
      textAlign={"center"}
      onSubmit={handleSubmit}
    >
      <TextFieldForm
        id="name"
        label="name"
        name="name"
        autoFocus
        value={name}
        onChange={handleNameChange}
      />

      <TextFieldForm
        id="email"
        label="Email"
        name="email"
        autoFocus
        value={email}
        onChange={handleEmailChange}
      />

      <TextFieldForm
        id="password"
        label="password"
        name="password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
      />

      <ButtomSubmit
        type="submit"
        variant="contained"
        fullWidth
        disabled={!email || !password || !name}
      >
        Register
      </ButtomSubmit>
    </Box>
  );
}
