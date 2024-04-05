import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import * as Sentry from "@sentry/react";

function App() {
  const handleErrorWithSentry = (error: any) => {
    Sentry.withScope((scope) => {
      scope.setTags({
        cliente: "Nombre del Cliente",
        simulador: "Nombre del Simulador",
        version: "1.0.0",
      });
      Sentry.captureException(error);
    });
  };
  // Función para generar un error de JavaScript
  const generateJSError = () => {
    try {
      throw new Error("Este es un error de JavaScript");
    } catch (error) {
      handleErrorWithSentry(error);
    }
  };

  // Función para generar un error de promesa
  const generatePromiseError = async () => {
    try {
      await Promise.reject(new Error("Este es un error de promesa"));
    } catch (error) {
      handleErrorWithSentry(error);
    }
  };

  // Componente que genera un error de renderizado
  const ErrorComponent = () => {
    throw new Error("Este es un error de renderizado en React");
  };

  const [renderErrorComponent, setRenderErrorComponent] = useState(false);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank"></a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {/* Botones para generar errores */}
        <button onClick={generateJSError}>Generar Error JS</button>
        <button onClick={generatePromiseError}>Generar Error de Promesa</button>
        <button onClick={() => setRenderErrorComponent(true)}>
          Generar Error de Renderizado
        </button>
        {renderErrorComponent && <ErrorComponent />}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
