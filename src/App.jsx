import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Login from "./pages/LoginPage";
import SginupPage from "./pages/SginupPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SginupPage />} />
          <Route path="/admin" element={<AdminDashboardPage />} />
          <Route path="/view-work" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
