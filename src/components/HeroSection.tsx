import type { FC } from 'react';

const HeroSection: FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12 gap-[135px]">
      {/* Hero Content */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 max-w-7xl">
        {/* Circular Badge */}
        <div className="flex-shrink-0">
          <img 
            src="/icons/circular-badge.svg" 
            alt="AT Strategist Designer Manager Badge" 
            className="w-56 h-56"
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col gap-4">
          {/* Name */}
          <div className="flex flex-wrap items-center gap-12 font-heading text-[56px] font-bold leading-tight">
            <span className="text-(--color-text-primary)">Alex </span>
            <span className="text-(--color-brand-purple)">[Fill]</span>
            <span className="text-(--color-text-primary)">Tran</span>
          </div>

          {/* Tagline */}
          <h1 className="font-heading text-[56px] font-normal text-(--color-text-primary) leading-tight">
            [Fill] , it&apos;s my middle name.
          </h1>

          {/* Description */}
          <p className="font-heading text-[32px] font-normal text-(--color-text-secondary) leading-relaxed max-w-4xl">
            Alex is an end-to-end product designer @Deloitte Digital who primarily works on 
            0-1 and early stage products (also his actual middle name is Pham-Minh).
          </p>
        </div>
      </div>

      {/* Work Categories */}
      <div className="flex flex-col items-center gap-12">
        <div className="flex flex-wrap items-center justify-center gap-6">
          <span className="font-heading text-[40px] font-normal text-(--color-text-primary)">
            My Work.
          </span>
          <div className="w-5 h-5 rounded-full bg-(--color-brand-purple)" />
          <span className="font-heading text-[40px] font-normal text-(--color-text-primary)">
            Gen AI 
          </span>
          <div className="w-5 h-5 rounded-full bg-(--color-brand-purple)" />
          <span className="font-heading text-[40px] font-normal text-(--color-text-primary)">
            Data Analytics
          </span>
          <div className="w-5 h-5 rounded-full bg-(--color-brand-purple)" />
          <span className="font-heading text-[40px] font-normal text-(--color-text-primary)">
            Constituent Experience 
          </span>
          <div className="w-5 h-5 rounded-full bg-(--color-brand-purple)" />
          <span className="font-heading text-[40px] font-normal text-(--color-text-primary)">
            ePayments
          </span>
        </div>

        {/* Scroll Indicator */}
        <a 
          href="#projects" 
          className="block transition-transform hover:scale-110"
          aria-label="Scroll to projects"
        >
          <img 
            src="/icons/arrow-down.svg" 
            alt="Scroll down" 
            className="w-[91px] h-[91px]"
          />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
