import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"

import AboutPage from "./pages/AboutPage"
import CareersPage from "./pages/CareersPage"
import ContactPage from "./pages/ContactPage"
import MarketingPage from "./pages/services/MarketingPage"
import BuyPage from "./pages/services/BuyPage"
import SellPage from "./pages/services/SellPage"
import FinancePage from "./pages/services/FinancePage"
import AlertsPage from "./pages/services/AlertsPage"
import TeamPage from "./pages/about/TeamPage"
import FootprintPage from "./pages/about/FootprintPage"
import PartnersPage from "./pages/about/PartnersPage"
import DisclaimerPage from "./pages/about/PrivacyPage"
import OnlineBiddingPage from "./pages/about/OnlineBiddingPage"
import TermsPage from "./pages/about/TermsPage"
import FaqsPage from "./pages/about/FaqsPage"
import RulesOfAuctionPage from "./pages/about/RulesOfAuctionPage"
import "./App.css"
import Layout from "@/components/Layout.tsx";
import GuidePage from "@/pages/about/GuidePage.tsx";
import BrochurePage from "@/pages/franchising/Brochure.tsx";
import ProspectusPage from "@/pages/franchising/Prospectus.tsx";
import ValuationPage from "@/pages/Valuation.tsx";

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
          <Route path="/about/guide" element={<GuidePage />} />
        <Route path="/about/footprint" element={<FootprintPage />} />
        <Route path="/about/partners" element={<PartnersPage />} />
        <Route path="/about/disclaimer" element={<DisclaimerPage />} />
        <Route path="/about/online-bidding" element={<OnlineBiddingPage />} />
        <Route path="/about/faqs" element={<FaqsPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/franchising/brochure" element={<BrochurePage />} />
          <Route path="/franchising/prospectus" element={<ProspectusPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/terms" element={<TermsPage />} />
          <Route path="/valuation" element={<ValuationPage />} />
        <Route path="/rules-of-auction" element={<RulesOfAuctionPage />} />
      </Routes>
    </Layout>
  )
}

export default App
