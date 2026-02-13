import { type FC, useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const EnergySuiteDetail: FC = () => {
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
          {/* Left Column - Content */}
          <div className="flex flex-col gap-6 px-6 py-12 w-full lg:w-[556px] lg:ml-8">
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
            {/* Intro Section */}
            <div className="flex flex-col gap-4">
              <h1 
                className="font-heading text-[48px] font-medium leading-tight"
                style={{
                  background: 'linear-gradient(90deg, rgba(27,134,146,1) 14.9%, rgba(73,67,169,1) 87.5%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                MVP Full Rebate Management Suite // GovConnect Energy Suite
              </h1>

              <p className="font-heading text-2xl font-normal text-(--color-text-primary) leading-relaxed">
                With the release of the Inflation Reduction Act, State Energy Offices received an unprecedented level of funding to launch energy efficiency rebate programs aimed at helping constituents purchase and install energy-saving appliances.
              </p>
              
              <p className="font-heading text-2xl font-normal text-(--color-text-primary) leading-relaxed">
                To deliver these programs effectively, I led the end-to-end design solution that not only promote and manage rebates at scale, but also seamlessly integrate contractors responsible for completing the installations.
              </p>

              {/* Quick Team Info */}
              <div className="flex flex-col gap-2 mt-2">
                <p className="font-heading text-2xl font-normal text-[#a6a6a6]">
                  Project Skill(s): UX/UI Design, Product Strategy, GTM Startegy
                </p>
                <p className="font-heading text-2xl font-normal text-[#a6a6a6]">
                  Team Composition: 1 Product Manager, 2 Product Strategy, 2 Energy SME, 1 Full Stack Engineer
                </p>
                <p className="font-heading text-2xl font-normal text-[#a6a6a6]">
                  Tech Stack: Custom Salesforce / ServiceNow
                </p>
              </div>
            </div>

            {/* Outcome and Impact */}
            <div className="flex flex-col gap-6">
              <h2 
                className="font-heading text-[48px] font-medium leading-tight"
                style={{
                  background: 'linear-gradient(90deg, rgba(27,134,146,1) 14.9%, rgba(73,67,169,1) 87.5%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Outcome and Impact
              </h2>
              <p className="font-heading text-2xl font-normal text-(--color-text-primary) leading-relaxed">
                3 Pilot Clients Secured
              </p>
              <p className="font-heading text-2xl font-normal text-(--color-text-primary) leading-relaxed">
                $20M+ in 1st Year Revenue
              </p>
            </div>

            {/* My Highlight Reel */}
            <div className="flex flex-col gap-6">
              <h2 
                className="font-heading text-[48px] font-medium leading-tight"
                style={{
                  background: 'linear-gradient(90deg, rgba(27,134,146,1) 14.9%, rgba(73,67,169,1) 87.5%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                My Highlight Reel
              </h2>
              <ul className="list-disc pl-6 flex flex-col gap-6">
                <li className="font-heading text-2xl font-normal text-(--color-text-primary) leading-[30px]">
                  Incubated and implemented core product features within a completely new greenfield market, helping establish the firm&apos;s initial footprint in the space.
                </li>
                <li className="font-heading text-2xl font-normal text-(--color-text-primary) leading-[30px]">
                  Designed and handed off three distinct end-to-end user flows for radically different user groups within six months, aligning product delivery with market timing and customer demand.
                </li>
                <li className="font-heading text-2xl font-normal text-(--color-text-primary) leading-[30px]">
                  Brought executives, product leaders, and SMEs together through structured design workshops to turn an open-ended vision into defined product features and design direction.
                </li>
              </ul>
            </div>

            {/* Challenges */}
            <div className="flex flex-col gap-6">
              <h2 
                className="font-heading text-[48px] font-medium leading-tight"
                style={{
                  background: 'linear-gradient(90deg, rgba(27,134,146,1) 14.9%, rgba(73,67,169,1) 87.5%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Challenges
              </h2>
              <ul className="list-disc pl-6 flex flex-col gap-6">
                <li className="font-heading text-2xl font-normal text-(--color-text-primary) leading-[30px]">
                  Driving structured product decisions in a client services setting without the benefit of an embedded product culture or established product workflows.
                </li>
                <li className="font-heading text-2xl font-normal text-(--color-text-primary) leading-[30px]">
                  Operating with limited early user research, as rebate programs and user expectations were still taking shape.
                </li>
              </ul>
            </div>

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
            className="flex flex-col gap-12 p-8 min-h-screen"
            style={{
              background: 'linear-gradient(90deg, rgba(27,134,146,1) 14.9%, rgba(73,67,169,1) 87.5%)'
            }}
          >
            {/* Metrics Dashboard Card */}
            <div className="flex flex-col gap-4">
              <div className="rounded-[5px] backdrop-blur-[50px] bg-white/10 py-2 px-4 flex flex-col gap-2 shadow-[0px_2px_2px_rgba(0,0,0,0.25)] border border-white/20">
                <h3 className="font-heading text-2xl font-normal text-(--color-text-primary)">
                  Metrics That Drive Decisions
                </h3>
                <p className="font-heading text-base font-normal text-(--color-text-primary) leading-relaxed">
                  High-level KPIs and risk indicators surface program health, funding progress, and equity outcomes—helping officers manage complex rebate programs with confidence.
                </p>
              </div>
              <img 
                src="/images/energy-suite/metrics-dashboard-bg.svg" 
                alt="Metrics Dashboard showing program KPIs" 
                className="w-full h-auto"
              />
               <img 
                src="/images/energy-suite/metrics-dashboard.svg" 
                alt="Metrics Dashboard showing program KPIs" 
                className="w-full h-auto"
              />
            </div>

            {/* Constituent Experience Card */}
            <div className="flex flex-col gap-4">
              <div className="rounded-[5px] backdrop-blur-[50px] bg-white/10 py-2 px-4 flex flex-col gap-2 shadow-[0px_2px_2px_rgba(0,0,0,0.25)] border border-white/20">
                <h3 className="font-heading text-2xl font-normal text-(--color-text-primary)">
                  Accessible, Trust-First Experience for Constituents
                </h3>
                <p className="font-heading text-base font-normal text-(--color-text-primary) leading-relaxed">
                  A clear and approachable portal that helps constituents quickly understand programs and complete applications—without unnecessary complexity or friction.
                </p>
              </div>
              <img 
                src="/images/energy-suite/AccessforConsis.svg" 
                alt="Constituent portal welcome screen and rebate explain screen" 
                className="w-full h-auto"
              />
              <img 
                src="/images/energy-suite/constituent-flow-2.svg" 
                alt="Application flow screens" 
                className="w-full h-auto"
              />
              <img 
                src="/images/energy-suite/constituent-flow-3.svg" 
                alt="Additional flow screens" 
                className="w-full h-auto"
              />
            </div>

            {/* Contractor Portal Card */}
            <div className="flex flex-col gap-4">
              <div className="rounded-[5px] backdrop-blur-[50px] bg-white/10 py-2 px-4 flex flex-col gap-2 shadow-[0px_2px_2px_rgba(0,0,0,0.25)] border border-white/20">
                <h3 className="font-heading text-2xl font-normal text-(--color-text-primary)">
                  Seamless Project Tracking for Contractors
                </h3>
                <p className="font-heading text-base font-normal text-(--color-text-primary) leading-relaxed">
                  Integrated project intake and tracking for critical contractors that will be boots on the ground advertising and running the installation of these energy programs.
                </p>
              </div>
              <img 
                src="/images/energy-suite/contractor-portal.svg" 
                alt="Contractor project tracking interface" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
    </div>
  );
};

export default EnergySuiteDetail;
