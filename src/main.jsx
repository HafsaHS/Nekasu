import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter } from "react-router";
import { Routes, Route } from "react-router";
import AddInfluencer from "./pages/AddInfluencer.jsx";
import Profile from "./pages/Profile.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/add-influencer" element={<AddInfluencer />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
