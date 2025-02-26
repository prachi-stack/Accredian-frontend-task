import { useState } from "react";
import TopBar from "./components/Layout/TopBar";
import Navbar from "./components/Layout/Navbar";
import HeroSection from "./components/Sections/HeroSection";
import HowToRefer from "./components/Sections/HowToRefer";
import ReferralBenefits from "./components/Sections/ReferralBenefits";
import FAQSection from "./components/Sections/FAQSection";
import Footer from "./components/Layout/Footer";
import ReferralForm from "./components/ReferralForm/ReferralForm";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReferNowClick = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="bg-blue-50 min-h-screen">
      <TopBar />
      <Navbar />
      <HeroSection onReferNowClick={handleReferNowClick} />
      <HowToRefer />
      <ReferralBenefits />
      <FAQSection />
      <Footer />
      {isModalOpen && <ReferralForm onClose={handleCloseModal} />}
    </div>
  );
}