import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Login from "./pages/LoginPage";
import SginupPage from "./pages/SginupPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import Projects from "./pages/Projects";
import { FaSquareWhatsapp } from "react-icons/fa6";

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
      <div className="fixed bottom-0 right-0 mb-5 mr-5 z-50">
        <a href="https://wa.me/923154841534?text=How+can+i+help+you?">
          <FaSquareWhatsapp className="text-green-600 text-xl sm:text-base size-10" />
        </a>
      </div>
    </>
  );
}

export default App;
