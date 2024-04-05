import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { initializeSentry } from "./sentry"; // Importa la función de inicialización de Sentry

initializeSentry(); // Inicializa Sentry

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
