import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";
const BioPage = lazy(() => import("./pages/BioPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bio/" element={<BioPage />} />
        <Route path="/contact/" element={<ContactPage />} />
        <Route path="/portfolio/" element={<PortfolioPage />} />
        <Route path="/404/" element={<NotFoundPage />} />

        <Route path="/bio" element={<Navigate to="/bio/" replace />} />
        <Route path="/contact" element={<Navigate to="/contact/" replace />} />
        <Route
          path="/portfolio"
          element={<Navigate to="/portfolio/" replace />}
        />
        <Route path="/404" element={<Navigate to="/404/" replace />} />

        <Route path="*" element={<Navigate to="/404/" replace />} />
      </Routes>
    </Suspense>
  );
}

export default App;
