import { type FC, useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const FinTechDetail: FC = () => {
  const navigate = useNavigate();
  const [isFixed, setIsFixed] = useState(false);
  const buttonContainerRef = useRef<HTMLDivElement>(null);
  const buttonInitialTopRef = useRef<number>(0);

  useEffect(() => {
    // Store initial position
    if (buttonContainerRef.current && buttonInitialTopRef.current === 0) {
      const rect = buttonContainerRef.current.getBoundingClientRect();
      buttonInitialTopRef.current = rect.top + window.scrollY;
    }

    let rafId: number;
    const handleScroll = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      
      rafId = requestAnimationFrame(() => {
        if (buttonInitialTopRef.current === 0) return;
        
        // Fix to top when scroll passes the button's original position
        const shouldBeFixed = window.scrollY >= buttonInitialTopRef.current;
        setIsFixed(shouldBeFixed);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-(--color-bg-primary)">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-0 lg:gap-2 items-start">
          {/* Left Column - Intro */}
          <div className="flex flex-col gap-4 px-6 py-12 w-full lg:w-[556px] lg:ml-8">
            {/* Back Button */}
            <button
              onClick={() => navigate('/#projects')}
              className="flex items-center gap-3 group transition-transform hover:scale-105"
              aria-label="Go back to portfolio"
            >
              <div className="w-[37px] h-[37px] rounded-full border-[3.5px] border-[#f3f3f3] flex items-center justify-center">
                <img 
                  src="/icons/back-arrow.svg" 
                  alt="" 
                  className="w-5 h-5"
                />
              </div>
              <span className="font-heading text-2xl font-normal text-(--color-text-primary)">
                Back
              </span>
            </button>
            {/* Title with Gradient */}
            <h1 
              className="font-heading text-[48px] font-normal leading-tight"
              style={{
                background: 'linear-gradient(90deg, rgba(16,93,185,1) 14.9%, rgba(138,138,138,1) 87.5%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              FinTech Case Study // Portfolio Monitoring
            </h1>

            {/* Description */}
            <p className="font-heading text-2xl font-normal text-(--color-text-primary) leading-relaxed">
              In financial services, investment decisions don&apos;t end at acquisition. Teams need a clear way to understand whether a deal is performing as planned—and where it&apos;s drifting.
            </p>
            
            <p className="font-heading text-2xl font-normal text-(--color-text-primary) leading-relaxed">
              I designed an early portfolio variance monitoring dashboard that ingests monthly reports from acquired companies and surfaces meaningful differences between planned and actual performance. The goal was to replace manual, error-prone review with a clear view that fits naturally into an investor&apos;s workflow.
            </p>

            {/* Project Skills */}
            <p className="font-heading text-2xl font-normal text-[#a6a6a6]">
              Project Skill(s): UX/UI Design
            </p>

            {/* Back to Top Button */}
            <div ref={buttonContainerRef} className={`pt-6 transition-all duration-200 ease-out ${isFixed ? 'fixed top-0 left-0 lg:left-8 z-50' : ''}`}>
              <button
                onClick={scrollToTop}
                className="flex items-center gap-3 group transition-transform hover:scale-105"
                aria-label="Back to top"
              >
                <div className="w-[37px] h-[37px] rounded-full border-[3.5px] border-[#f3f3f3] flex items-center justify-center rotate-90">
                  <img 
                    src="/icons/back-arrow.svg" 
                    alt="" 
                    className="w-5 h-5"
                  />
                </div>
                <span className="font-heading text-2xl font-normal text-(--color-text-primary)">
                  Back to Top
                </span>
              </button>
            </div>
          </div>

          {/* Right Column - Screenshots */}
          <div 
            className="flex flex-col gap-12 p-4 lg:p-8 min-h-screen"
            style={{
              background: 'linear-gradient(90deg, rgba(16,93,185,1) 14.9%, rgba(138,138,138,1) 87.5%)'
            }}
          >
            {/* Portfolio Health Card */}
            <div className="flex flex-col gap-4">
              <div className="rounded-[5px] backdrop-blur-[50px] bg-white/10 py-2 px-4 flex flex-col gap-2 shadow-[0px_2px_2px_rgba(0,0,0,0.25)] border border-white/20">
                <h2 className="font-heading text-2xl font-normal text-(--color-text-primary)">
                  At-a-Glance Portfolio Health
                </h2>
                <p className="font-heading text-base font-normal text-(--color-text-primary)">
                  A consolidated view of key performance metrics and variance signals, giving investors a fast read on each company&apos;s health alongside top-line portfolio performance.
                </p>
              </div>
              <img 
                src="/images/fintech/portfolio-health.png" 
                alt="Portfolio Health Dashboard" 
                className="w-full h-auto"
                style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
                loading="lazy"
              />
            </div>

            {/* Variance Monitoring Card */}
            <div className="flex flex-col gap-4">
              <div className="rounded-[5px] backdrop-blur-[50px] bg-white/10 py-2 px-4 flex flex-col gap-2 shadow-[0px_2px_2px_rgba(0,0,0,0.25)] border border-white/20">
                <h2 className="font-heading text-2xl font-normal text-(--color-text-primary)">
                  Deep Variance Monitoring
                </h2>
                <p className="font-heading text-base font-normal text-(--color-text-primary)">
                  Investors can quickly move from portfolio-level signals to detailed variance analysis, drilling into individual line items to understand what&apos;s driving performance gaps.
                </p>
              </div>
              <img 
                src="/images/fintech/variance-monitoring-1.png" 
                alt="Variance Monitoring Dashboard 1" 
                className="w-full h-auto"
                style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
                loading="lazy"
              />
              <img 
                src="/images/fintech/variance-monitoring-2.png" 
                alt="Variance Monitoring Dashboard 2" 
                className="w-full h-auto"
                style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
    </div>
  );
};

export default FinTechDetail;
