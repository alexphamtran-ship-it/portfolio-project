import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectNavBar: FC = () => {
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-8 bg-(--color-bg-primary)">
      {/* Back Button */}
      <button
        onClick={() => navigate('/#projects')}
        className="flex items-center gap-3 group transition-transform hover:scale-105"
        aria-label="Go back to portfolio"
      >
        <div className="w-[30px] h-[30px] rounded-full border-[3.5px] border-[#f3f3f3] flex items-center justify-center">
          <img
            src="/icons/back-arrow.svg"
            alt=""
            className="w-4 h-4"
          />
        </div>
        <span className="font-heading text-2xl font-normal text-(--color-text-primary)">
          Back
        </span>
      </button>

      {/* Navigation Pill */}
      <div className="hidden sm:flex items-center bg-[#f3edf7] rounded-full px-16 py-3 gap-24">
        <button
          onClick={() => navigate('/')}
          className="font-heading text-base font-medium tracking-wide text-[#49454f] hover:text-black transition-colors"
        >
          Home
        </button>
        <button
          onClick={() => navigate('/about')}
          className="font-heading text-base font-medium tracking-wide text-[#49454f] hover:text-black transition-colors"
        >
          About Me
        </button>
        <button
          onClick={() => navigate('/#projects')}
          className="font-heading text-base font-medium tracking-wide text-[#49454f] hover:text-black transition-colors"
        >
          Projects
        </button>
      </div>

      {/* Spacer for centering */}
      <div className="w-[100px] hidden sm:block" />
    </nav>
  );
};

export default ProjectNavBar;
