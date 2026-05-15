import type { FC } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import PasscodeGate from './components/PasscodeGate';
import HeroSection from './components/HeroSection';
import ContactBar from './components/ContactBar';
import ProjectsSection from './components/ProjectsSection';
import FinTechDetail from './pages/FinTechDetail';
import GivePrismDetail from './pages/GivePrismDetail';
import EnergySuiteDetail from './pages/EnergySuiteDetail';
import EPaymentsDetail from './pages/EPaymentsDetail';
import AboutMe from './pages/AboutMe';
import ScrollToTop from './components/ScrollToTop';
import { usePageTracking } from './hooks/useAnalytics';

const HomePage: FC = () => {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
    </>
  );
};

const App: FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Track page views on route change
  usePageTracking();

  return (
    <PasscodeGate>
    <div className="min-h-screen bg-(--color-bg-primary) flex flex-col">
      <ScrollToTop />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects/fintech" element={<FinTechDetail />} />
          <Route path="/projects/giveprism" element={<GivePrismDetail />} />
          <Route path="/projects/energy-suite" element={<EnergySuiteDetail />} />
          <Route path="/projects/epayments" element={<EPaymentsDetail />} />
        </Routes>
      </div>
      {isHomePage && <ContactBar />}
    </div>
    </PasscodeGate>
  );
};

export default App;
