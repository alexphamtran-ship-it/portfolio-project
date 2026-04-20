import type { FC } from 'react';
import ProjectNavBar from '../components/ProjectNavBar';

const FinTechDetail: FC = () => {
  const gradientStyle = {
    background: 'linear-gradient(180deg, rgba(16,93,185,1) 14.9%, rgba(138,138,138,1) 87.5%)',
  };

  const titleGradientStyle = {
    background: 'linear-gradient(180deg, rgba(16,93,185,1) 14.9%, rgba(138,138,138,1) 87.5%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  };

  return (
    <div className="min-h-screen bg-(--color-bg-primary)">
      <ProjectNavBar />

      {/* Content */}
      <div className="flex flex-col gap-8 px-6 lg:px-10 max-w-[1440px] mx-auto">

        {/* Title */}
        <h1
          className="font-heading text-[40px] md:text-[52px] lg:text-[64px] font-medium leading-tight"
          style={titleGradientStyle}
        >
          FinTech Case Study | Portfolio Monitoring
        </h1>

        {/* Introduction Section */}
        <div className="flex flex-col gap-4">
          <h2 className="font-heading text-4xl font-medium text-(--color-text-secondary)">
            Introduction
          </h2>
          <p className="font-heading text-2xl font-normal text-(--color-text-primary) leading-relaxed">
            In financial services, investment decisions don&apos;t end at acquisition. Teams need a clear way to understand whether a deal is performing as planned—and where it&apos;s drifting.
          </p>
          <p className="font-heading text-2xl font-normal text-(--color-text-primary) leading-relaxed">
            I designed an early portfolio variance monitoring dashboard that ingests monthly reports from acquired companies and surfaces meaningful differences between planned and actual performance. The goal was to replace manual, error-prone review with a clear view that fits naturally into an investor&apos;s workflow.
          </p>
        </div>

        {/* Quick Team Info */}
        <div className="flex flex-col gap-2">
          <p className="font-heading text-2xl font-normal text-[#a6a6a6]">
            Project Position(s): UX/UI Designer
          </p>
        </div>
      </div>

      {/* The Designs */}
      <div className="px-6 lg:px-10 max-w-[1440px] mx-auto mt-12">
        <h2 className="font-heading text-[40px] md:text-[48px] font-medium text-(--color-text-primary) mb-8">
          The Designs
        </h2>
      </div>

      {/* Design Sections — single gradient box, all sections inside */}
      <div
        className="w-full flex flex-col rounded-t-[5px] pb-8"
        style={gradientStyle}
      >
        {/* At-a-Glance Portfolio Health */}
        <div className="w-full">
          <div className="px-6 lg:px-10 pt-8 pb-4 max-w-[1440px] mx-auto">
            <div className="flex flex-col gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-6 py-5 shadow-sm">
              <h3 className="font-heading text-2xl font-normal text-black">
                At-a-Glance Portfolio Health
              </h3>
              <p className="font-heading text-2xl font-normal text-black leading-relaxed">
                A consolidated view of key performance metrics and variance signals, giving investors a fast read on each company&apos;s health alongside top-line portfolio performance.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6 px-6 lg:px-10 pb-10 max-w-[1440px] mx-auto">
            <div className="rounded-xl overflow-hidden">
              <img
                src="/images/fintech/portfolio-health.png"
                alt="Portfolio Health Dashboard — Company Overview, Report Dashboards, and Custom Reports"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Deep Variance Monitoring */}
        <div className="w-full">
          <div className="px-6 lg:px-10 pb-4 max-w-[1440px] mx-auto">
            <div className="flex flex-col gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-6 py-5 shadow-sm">
              <h3 className="font-heading text-2xl font-normal text-black">
                Deep Variance Monitoring
              </h3>
              <p className="font-heading text-2xl font-normal text-black leading-relaxed">
                Investors can quickly move from portfolio-level signals to detailed variance analysis, drilling into individual line items to understand what&apos;s driving performance gaps.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6 px-6 lg:px-10 max-w-[1440px] mx-auto">
            <div className="rounded-xl overflow-hidden">
              <img
                src="/images/fintech/variance-monitoring-1.png"
                alt="Company A Monitoring Dashboard — Monthly Report Breakdown with May Gross Profit and Operating Expenses"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
            <div className="rounded-xl overflow-hidden">
              <img
                src="/images/fintech/variance-monitoring-2.png"
                alt="Company A Monitoring Dashboard — Line Items View with Latest Operating Expense Table"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinTechDetail;
