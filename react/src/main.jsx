import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// // import "primereact/resources/themes/saga-green/theme.css";
// import "primereact/resources/primereact.min.css";
import "./Style/Main.scss";
import App from "./App";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>
);
