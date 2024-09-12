// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HelpPage from "./pages/HelpPage";
import CompanyPage from "./pages/CompanyPage";
import PartnersPage from "./pages/PartnersPage";
import GaleryPage from "./pages/GaleryPage";
import SeedCultivationPage from "./pages/SeedCultivationPage";
import ProductPage from "./pages/ProductPage";
import ContentsPage from "./pages/ContentsPage";
import GeneralLayout from "./layouts/GeneralLayout";

function App() {
  return (
    <Router>
      <GeneralLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/perusahaan" element={<CompanyPage />} />
          <Route path="/mitra" element={<PartnersPage />} />
          <Route path="/budidaya" element={<SeedCultivationPage />} />
          <Route path="/galeri" element={<GaleryPage />} />
          <Route path="/produk" element={<ProductPage />} />
          <Route path="/bantuan" element={<HelpPage />} />
          <Route path="/konten" element={<ContentsPage />} />
        </Routes>
      </GeneralLayout>
    </Router>
  );
}

export default App;
