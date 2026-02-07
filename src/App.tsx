import type { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import ContactBar from './components/ContactBar';
import ProjectsSection from './components/ProjectsSection';
import FinTechDetail from './pages/FinTechDetail';

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
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/fintech" element={<FinTechDetail />} />
        </Routes>
      </div>
      <ContactBar />
    </div>
  );
};

export default App;
