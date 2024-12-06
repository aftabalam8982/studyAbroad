import "./App.css";
import AboutCompany from "./components/about/AboutCompany";
import ContactForm from "./components/about/ContactForm";
import LoginPage from "./components/about/Login";
import MissionAndVision from "./components/about/MissionAndVision";
import OurStorySection from "./components/about/OurStory";
import RegisterPage from "./components/about/Register";
import USPsSection from "./components/about/USPsSection";
import VerifyOtp from "./components/about/VerifyOtp";
import Header from "./components/header/Header";
import Timeline from "./components/timeline/TimeLine";

function App() {
  return (
    <div className=' w-screen bg-gradient-to-r from-indigo-100 via-purple-50 to-pink-100'>
      <Header />
      <AboutCompany />
      <OurStorySection />
      <MissionAndVision />
      <USPsSection />
      <ContactForm />
      <VerifyOtp />
      <RegisterPage />
      <LoginPage />
    </div>
  );
}

export default App;
