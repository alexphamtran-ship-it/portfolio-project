import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const FinTechDetail: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-(--color-bg-primary) px-6 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate('/#projects')}
          className="flex items-center gap-3 mb-12 group transition-transform hover:scale-105"
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

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[556px_1fr] gap-12 items-start">
          {/* Left Column - Intro */}
          <div className="flex flex-col gap-4">
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
          </div>

          {/* Right Column - Screenshots */}
          <div className="flex flex-col gap-12">
            {/* Portfolio Health Card */}
            <div className="flex flex-col gap-4">
              <div className="rounded-[5px] backdrop-blur-[50px] bg-[#5a5a5a]/80 py-2 px-4 flex flex-col gap-2">
                <h2 className="font-heading text-2xl font-normal text-white">
                  At-a-Glance Portfolio Health
                </h2>
                <p className="font-heading text-base font-normal text-white">
                  A consolidated view of key performance metrics and variance signals, giving investors a fast read on each company&apos;s health alongside top-line portfolio performance.
                </p>
              </div>
              <img 
                src="/images/fintech/portfolio-health.svg" 
                alt="Portfolio Health Dashboard" 
                className="w-full h-auto"
              />
            </div>

            {/* Variance Monitoring Card */}
            <div className="flex flex-col gap-4">
              <div className="rounded-[5px] backdrop-blur-[50px] bg-[#5a5a5a]/80 py-2 px-4 flex flex-col gap-2">
                <h2 className="font-heading text-2xl font-normal text-white">
                  Deep Variance Monitoring
                </h2>
                <p className="font-heading text-base font-normal text-white">
                  Investors can quickly move from portfolio-level signals to detailed variance analysis, drilling into individual line items to understand what&apos;s driving performance gaps.
                </p>
              </div>
              <img 
                src="/images/fintech/variance-monitoring-1.svg" 
                alt="Variance Monitoring Dashboard 1" 
                className="w-full h-auto"
              />
              <img 
                src="/images/fintech/variance-monitoring-2.svg" 
                alt="Variance Monitoring Dashboard 2" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinTechDetail;
