import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";

function MyApp(){
  return (
    <h1>My Custom React App</h1>
  )
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MyApp/>
    
  </StrictMode>
);
