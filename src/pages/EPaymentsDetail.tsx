import { type FC, useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const EPaymentsDetail: FC = () => {
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
                  backgroundImage: 'linear-gradient(270deg, rgba(246,207,87,1) 14.9%, rgba(204,96,96,1) 58.65%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent'
                }}
              >
                ePay Management Portal // State HealthCare Client
              </h1>

              <p className="font-heading text-2xl font-normal text-(--color-text-primary) leading-relaxed">
                As the state modernized its healthcare services for more than 3 million constituents, enabling online premium payments became a critical gap in the existing portal.
              </p>
              
              <p className="font-heading text-2xl font-normal text-(--color-text-primary) leading-relaxed">
                I led design early in the engagement, partnering closely with the client to translate regulatory constraints and constituent needs into a clear, end-to-end digital payment experience.
              </p>

              {/* Quick Team Info */}
              <div className="flex flex-col gap-2 mt-2">
                <p className="font-heading text-2xl font-normal text-[#a6a6a6]">
                  Project Skill(s): UX/UI Design, Functional Management
                </p>
                <p className="font-heading text-2xl font-normal text-[#a6a6a6]">
                  Team Composition: 1 Product Manager, 1 Functional Lead, 1 Visual Designer, 1 Functional Analyst, 3 Salesforce Engineers
                </p>
                <p className="font-heading text-2xl font-normal text-[#a6a6a6]">
                  Tech Stack: Custom Salesforce
                </p>
              </div>
            </div>

            {/* Outcome and Impact */}
            <div className="flex flex-col gap-6">
              <h2 
                className="font-heading text-[48px] font-medium leading-tight"
                style={{
                  backgroundImage: 'linear-gradient(270deg, rgba(246,207,87,1) 14.9%, rgba(204,96,96,1) 58.65%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent'
                }}
              >
                Outcome and Impact
              </h2>
              <p className="font-heading text-2xl font-normal text-(--color-text-primary) leading-relaxed">
                38% increase in successful payments
              </p>
              <p className="font-heading text-2xl font-normal text-(--color-text-primary) leading-relaxed">
                55% decrease in time spent on paying premiums
              </p>
            </div>

            {/* My Highlight Reel */}
            <div className="flex flex-col gap-6">
              <h2 
                className="font-heading text-[48px] font-medium leading-tight"
                style={{
                  backgroundImage: 'linear-gradient(270deg, rgba(246,207,87,1) 14.9%, rgba(204,96,96,1) 58.65%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent'
                }}
              >
                My Highlight Reel
              </h2>
              <ul className="list-disc pl-6 flex flex-col gap-6">
                <li className="font-heading text-2xl font-normal text-(--color-text-primary) leading-[30px]">
                  Turned vague, ambiguous requests into clear product direction through live, collaborative design sessions with clients.
                </li>
                <li className="font-heading text-2xl font-normal text-(--color-text-primary) leading-[30px]">
                  Carried designs through to production under tight timelines by partnering closely with engineering.
                </li>
                <li className="font-heading text-2xl font-normal text-(--color-text-primary) leading-[30px]">
                  Made tradeoffs to balance user needs, client requirements, and a constrained technical stack.
                </li>
              </ul>
            </div>

            {/* Challenges */}
            <div className="flex flex-col gap-6">
              <h2 
                className="font-heading text-[48px] font-medium leading-tight"
                style={{
                  backgroundImage: 'linear-gradient(270deg, rgba(246,207,87,1) 14.9%, rgba(204,96,96,1) 58.65%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent'
                }}
              >
                Challenges
              </h2>
              <ul className="list-disc pl-6 flex flex-col gap-6">
                <li className="font-heading text-2xl font-normal text-(--color-text-primary) leading-[30px]">
                  Designing for a vulnerable user base operating under financial and time constraints
                </li>
                <li className="font-heading text-2xl font-normal text-(--color-text-primary) leading-[30px]">
                  Translating complex legal and policy requirements into clear, human-centered experiences
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
            className="flex flex-col gap-12 p-4 lg:p-8 min-h-screen"
            style={{
              background: 'linear-gradient(270deg, rgba(246,207,87,1) 14.9%, rgba(204,96,96,1) 58.65%)'
            }}
          >
            {/* Responsive Dashboard Card */}
            <div className="flex flex-col gap-4">
              <div className="rounded-[5px] backdrop-blur-[50px] bg-white/10 py-2 px-4 flex flex-col gap-2 shadow-[0px_2px_2px_rgba(0,0,0,0.25)] border border-white/20">
                <h3 className="font-heading text-2xl font-normal text-(--color-text-primary)">
                  Responsive and Direct Payments Dashboard
                </h3>
                <p className="font-heading text-base font-normal text-(--color-text-primary) leading-relaxed">
                  Information that is clear, concise, and thoughtfully directs scarcity mindset users into the right actions they need to take.
                </p>
              </div>
              <img 
                src="/images/epayments/dashboard-mockup-1.svg" 
                alt="Responsive Payments Dashboard showing premium details" 
                className="w-full h-auto"
              />
              <img 
                src="/images/epayments/dashboard-mockup-2.svg" 
                alt="Mobile views of payment states" 
                className="w-full h-auto"
              />
            </div>

            {/* Payment Submission Card */}
            <div className="flex flex-col gap-4">
              <div className="rounded-[5px] backdrop-blur-[50px] bg-white/10 py-2 px-4 flex flex-col gap-2 shadow-[0px_2px_2px_rgba(0,0,0,0.25)] border border-white/20">
                <h3 className="font-heading text-2xl font-normal text-(--color-text-primary)">
                  Seamless Payment Submission and Tracking
                </h3>
                <p className="font-heading text-base font-normal text-(--color-text-primary) leading-relaxed">
                  Users have an easy time understanding how much money is leaving their pockets during and throughout their time on these programs.
                </p>
              </div>
              <img 
                src="/images/epayments/payment-review.svg" 
                alt="Payment review interface" 
                className="w-full h-auto"
              />
              <img 
                src="/images/epayments/payment-history.svg" 
                alt="Payment history tracking" 
                className="w-full h-auto"
              />
            </div>

            {/* Risk States Card */}
            <div className="flex flex-col gap-4">
              <div className="rounded-[5px] backdrop-blur-[50px] bg-white/10 py-2 px-4 flex flex-col gap-2 shadow-[0px_2px_2px_rgba(0,0,0,0.25)] border border-white/20">
                <h3 className="font-heading text-2xl font-normal text-(--color-text-primary)">
                  Digestible and Actionable Risk States
                </h3>
                <p className="font-heading text-base font-normal text-(--color-text-primary) leading-relaxed">
                  Continuous health care can be very tough for our users so having clear ways to get them back to coverage is critical.
                </p>
              </div>
              <img 
                src="/images/epayments/risk-state-1.svg" 
                alt="Risk state notification for restricted enrollment" 
                className="w-full h-auto"
              />
              <img 
                src="/images/epayments/risk-state-2.svg" 
                alt="Benefits lost notification with recovery steps" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
    </div>
  );
};

export default EPaymentsDetail;
