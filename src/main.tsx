import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import TextExpander from "./TextExpander";
import './styles/index.css'
import App from './App.tsx'
import CurrencyConverter from "./CurrencyConverter.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
   <CurrencyConverter />
  </StrictMode>
);
