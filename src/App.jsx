import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BioPage from "./pages/BioPage";
import ContactPage from "./pages/ContactPage";
import PortfolioPage from "./pages/PortfolioPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/bio" element={<BioPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/404" element={<NotFoundPage />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
}

export default App;
