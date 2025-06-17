import { useState, type ChangeEvent, type FormEvent } from "react";
import { TextField, Button, Box } from "@mui/material";
import { UserService } from "../../Services/User.service";

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
    UserService.create({
      id: crypto.randomUUID(),
      name: form.nome,
      email: form.email,
      password: form.senha,
    })
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
        setForm({ email: "", nome: "", senha: "" });
      })
      .catch((error) => {
        console.error("Erro ao cadastrar usuário:", error);
        alert("Erro ao cadastrar usuário. Tente novamente.");
      });
  }

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
