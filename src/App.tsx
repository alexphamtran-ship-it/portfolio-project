import type { FC } from 'react';
import HeroSection from './components/HeroSection';
import ContactBar from './components/ContactBar';
import ProjectsSection from './components/ProjectsSection';

const App: FC = () => {
  return (
    <div className="min-h-screen bg-(--color-bg-primary) flex flex-col">
      <div className="flex-grow">
        <HeroSection />
        <div className="flex items-center justify-center">
          <img 
            src="/icons/arrow-up.svg" 
            alt="Section divider" 
            className="w-[91px] h-[91px]"
          />
        </div>
        <ProjectsSection />
      </div>
      <ContactBar />
    </div>
  );
};

export default App;
