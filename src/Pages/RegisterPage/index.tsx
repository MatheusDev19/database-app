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
    alert(`Email: ${form.email}\nNome: ${form.nome}\nSenha: ${form.senha}`);
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
