import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import LandingPage from "./ui/landing-page/LandingPage.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import LoginPage from "./ui/login/LoginPage.tsx";

// 環境変数からサイトタイトルを設定
document.title = import.meta.env.VITE_SITE_TITLE || "おはもに";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
