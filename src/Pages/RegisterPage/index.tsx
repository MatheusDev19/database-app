import { useState, type ChangeEvent, type FormEvent } from "react";
import { TextField, Button, Box } from "@mui/material";

type FormData = {
  email: string;
  nome: string;
  senha: string;
};

export function RegisterForm() {
  const [form, setForm] = useState<FormData>({
    email: "",
    nome: "",
    senha: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Formulário enviado:", form);
    fetch(`${import.meta.env.VITE_API_URL}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.nome,
        email: form.email,
        password: form.senha,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
    setForm({ email: "", nome: "", senha: "" }); // Limpa o formulário após o envio
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 2, width: 300 }}
    >
      <TextField
        label="Email"
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <TextField
        label="Nome"
        type="text"
        name="nome"
        value={form.nome}
        onChange={handleChange}
        required
      />
      <TextField
        label="Senha"
        type="password"
        name="senha"
        value={form.senha}
        onChange={handleChange}
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Enviar
      </Button>
    </Box>
  );
}
