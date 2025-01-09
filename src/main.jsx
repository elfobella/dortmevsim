import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.jsx";
import CategoryPages from "./Components/CategoryPages.jsx";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/binek" element={<CategoryPages />} />
      <Route path="/start-stop" element={<CategoryPages />} />
      <Route path="/akum-gelsin" element={<CategoryPages />} />
    </Routes>
  </BrowserRouter>
);
