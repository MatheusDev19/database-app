import axios from "axios";
import { useEffect } from "react";
import { Router } from "./Routes/Route";

export function App() {
  
  useEffect(() => {
    axios
      .get("http://localhost:3000/")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados:", error);
      });
  }, []);

  return <Router />;
}
