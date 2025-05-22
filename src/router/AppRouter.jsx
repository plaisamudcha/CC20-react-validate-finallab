import { BrowserRouter, Routes, Route } from "react-router";
import LoginForm from "../pages/LoginForm";
import HeroClass from "../pages/HeroClass";
import Layout from "../components/Layout";

export default function AppRouter() {
  return (
    <BrowserRouter basename="/CC20-react-validate-finallab">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LoginForm />} />
          <Route path="hero/:hero" element={<HeroClass />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
