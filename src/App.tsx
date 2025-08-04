import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"

import AboutPage from "./pages/AboutPage"
import CareersPage from "./pages/CareersPage"
import FranchisingPage from "./pages/FranchisingPage"
import ContactPage from "./pages/ContactPage"
import MarketingPage from "./pages/services/MarketingPage"
import BuyPage from "./pages/services/BuyPage"
import SellPage from "./pages/services/SellPage"
import FinancePage from "./pages/services/FinancePage"
import AlertsPage from "./pages/services/AlertsPage"
import TeamPage from "./pages/about/TeamPage"
import FootprintPage from "./pages/about/FootprintPage"
import PartnersPage from "./pages/about/PartnersPage"
import PrivacyPage from "./pages/about/PrivacyPage"
import "./App.css"
import Layout from "@/components/Layout.tsx";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/marketing" element={<MarketingPage />} />
        <Route path="/services/buy" element={<BuyPage />} />
        <Route path="/services/sell" element={<SellPage />} />
        <Route path="/services/finance" element={<FinancePage />} />
        <Route path="/services/alerts" element={<AlertsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about/team" element={<TeamPage />} />
        <Route path="/about/footprint" element={<FootprintPage />} />
        <Route path="/about/partners" element={<PartnersPage />} />
        <Route path="/about/privacy" element={<PrivacyPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/franchising" element={<FranchisingPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Layout>
  )
}

export default App
