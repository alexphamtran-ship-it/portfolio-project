import type { FC } from 'react';
import { useTypingAnimation } from '../hooks/useTypingAnimation';

const HeroSection: FC = () => {
  const animatedText = useTypingAnimation({
    words: ['Design', 'Strategy', 'Product'],
    typingSpeed: 150,
    deletingSpeed: 100,
    delayBetweenWords: 2000,
  });

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
          <div className="flex flex-wrap items-center font-heading text-[56px] font-bold leading-tight">
            <span className="text-(--color-text-primary) mr-12">Alex </span>
            <div className="flex items-center">
              <span className="text-(--color-brand-purple)">
                {animatedText}
                <span className="animate-pulse">|</span>
              </span>
              <span className="text-(--color-text-primary) ml-12">Tran</span>
            </div>
          </div>

          {/* Tagline */}
          <h1 className="font-heading text-[56px] font-normal text-(--color-text-primary) leading-tight">
            {animatedText} , it&apos;s my middle name.
          </h1>

          {/* Description */}
          <p className="font-heading text-[32px] font-normal text-(--color-text-secondary) leading-relaxed max-w-4xl">
            Alex is an end-to-end product designer @Deloitte Digital who primarily works on 
            0-1 and early stage products (also his actual middle name is Pham-Minh).
          </p>
        </div>
      </div>

      {/* Work Categories - Ticker Animation */}
      <div className="flex flex-col items-center gap-12 w-full max-w-7xl">
        <div className="relative w-full overflow-hidden">
          <div className="flex items-center gap-6 ticker-scroll">
            {/* First set of items */}
            <span className="font-heading text-[40px] font-normal text-(--color-text-primary) whitespace-nowrap">
              My Work.
            </span>
            <div className="w-5 h-5 rounded-full bg-(--color-brand-purple) shrink-0" />
            <span className="font-heading text-[40px] font-normal text-(--color-text-primary) whitespace-nowrap">
              Gen AI 
            </span>
            <div className="w-5 h-5 rounded-full bg-(--color-brand-purple) shrink-0" />
            <span className="font-heading text-[40px] font-normal text-(--color-text-primary) whitespace-nowrap">
              Data Analytics
            </span>
            <div className="w-5 h-5 rounded-full bg-(--color-brand-purple) shrink-0" />
            <span className="font-heading text-[40px] font-normal text-(--color-text-primary) whitespace-nowrap">
              Constituent Experience 
            </span>
            <div className="w-5 h-5 rounded-full bg-(--color-brand-purple) shrink-0" />
            <span className="font-heading text-[40px] font-normal text-(--color-text-primary) whitespace-nowrap">
              ePayments
            </span>
            <div className="w-5 h-5 rounded-full bg-(--color-brand-purple) shrink-0" />
            
            {/* Duplicate set for seamless loop */}
            <span className="font-heading text-[40px] font-normal text-(--color-text-primary) whitespace-nowrap">
              My Work.
            </span>
            <div className="w-5 h-5 rounded-full bg-(--color-brand-purple) shrink-0" />
            <span className="font-heading text-[40px] font-normal text-(--color-text-primary) whitespace-nowrap">
              Gen AI 
            </span>
            <div className="w-5 h-5 rounded-full bg-(--color-brand-purple) shrink-0" />
            <span className="font-heading text-[40px] font-normal text-(--color-text-primary) whitespace-nowrap">
              Data Analytics
            </span>
            <div className="w-5 h-5 rounded-full bg-(--color-brand-purple) shrink-0" />
            <span className="font-heading text-[40px] font-normal text-(--color-text-primary) whitespace-nowrap">
              Constituent Experience 
            </span>
            <div className="w-5 h-5 rounded-full bg-(--color-brand-purple) shrink-0" />
            <span className="font-heading text-[40px] font-normal text-(--color-text-primary) whitespace-nowrap">
              ePayments
            </span>
            <div className="w-5 h-5 rounded-full bg-(--color-brand-purple) shrink-0" />
          </div>
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
