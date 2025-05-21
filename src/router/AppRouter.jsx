import { BrowserRouter, Routes, Route } from "react-router";
import LoginForm from "../pages/LoginForm";
import HeroClass from "../pages/HeroClass";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/hero/:hero" element={<HeroClass />} />
      </Routes>
    </BrowserRouter>
  );
}
