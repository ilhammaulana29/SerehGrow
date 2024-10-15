// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HelpPage from "./pages/HelpPage";
import CompanyPage from "./pages/CompanyPage";
import PartnersPage from "./pages/PartnersPage";
import GaleryPage from "./pages/GaleryPage";
import ProductPage from "./pages/ProductPage";
import ContentsPage from "./pages/ContentsPage";
import SeedCultivationPage from "./pages/SeedCultivationPage";
import LandCultivationPage from "./pages/LandCultivationPage";
import PlantingCultivationPage from "./pages/PlantingCultivationPage";
import HarvestCultivationPage from "./pages/HarvestCultivationPage";
import DistilationCultivationPage from "./pages/DistilationCultivationPage";
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
          <Route path="/bibit" element={<SeedCultivationPage />} />
          <Route path="/lahan" element={<LandCultivationPage />} />
          <Route path="/penanaman" element={<PlantingCultivationPage />} />
          <Route path="/panen" element={<HarvestCultivationPage />} />
          <Route path="/penyulingan" element={<DistilationCultivationPage />} />
          {/* Route untuk gallery dengan parameter category */}
          <Route path="/galeri/:category" element={<GaleryPage />} />
          {/* Default route */}
          <Route path="/galeri" element={<GaleryPage />} />
        </Routes>
      </GeneralLayout>
    </Router>
  );
}

export default App;
