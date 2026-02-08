import type { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import ContactBar from './components/ContactBar';
import ProjectsSection from './components/ProjectsSection';
import FinTechDetail from './pages/FinTechDetail';
import GivePrismDetail from './pages/GivePrismDetail';
import EnergySuiteDetail from './pages/EnergySuiteDetail';
import EPaymentsDetail from './pages/EPaymentsDetail';
import ScrollToTop from './components/ScrollToTop';

const HomePage: FC = () => {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
    </>
  );
};

const App: FC = () => {
  return (
    <div className="min-h-screen bg-(--color-bg-primary) flex flex-col">
      <ScrollToTop />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/fintech" element={<FinTechDetail />} />
          <Route path="/projects/giveprism" element={<GivePrismDetail />} />
          <Route path="/projects/energy-suite" element={<EnergySuiteDetail />} />
          <Route path="/projects/epayments" element={<EPaymentsDetail />} />
        </Routes>
      </div>
      <ContactBar />
    </div>
  );
};

export default App;
