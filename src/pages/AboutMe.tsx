import type { FC } from 'react';
import ProjectNavBar from '../components/ProjectNavBar';

const AboutMe: FC = () => {
  return (
    <div className="min-h-screen bg-(--color-bg-primary)">
      <ProjectNavBar />
      <div className="flex items-center justify-center" style={{ minHeight: 'calc(100vh - 120px)' }}>
        <h1 className="font-heading text-[64px] font-medium text-(--color-text-secondary)">
          Coming Soon!
        </h1>
      </div>
    </div>
  );
};

export default AboutMe;
