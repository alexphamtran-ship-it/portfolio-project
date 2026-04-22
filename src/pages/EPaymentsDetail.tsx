import type { FC } from 'react';
import ProjectNavBar from '../components/ProjectNavBar';

const EPaymentsDetail: FC = () => {
  const gradientStyle = {
    background: 'linear-gradient(180deg, rgba(204,96,96,1) 14.9%, rgba(246,207,87,1) 87.5%)',
  };

  const titleGradientStyle = {
    background: 'linear-gradient(270deg, rgba(246,207,87,1) 14.9%, rgba(204,96,96,1) 58.65%)',
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
          ePay Management Portal | State HealthCare Client
        </h1>

        {/* Introduction Section */}
        <div className="flex flex-col gap-4">
          <h2 className="font-heading text-4xl font-medium text-(--color-text-secondary)">
            Introduction
          </h2>
          <p className="font-heading text-2xl font-normal text-(--color-text-primary) leading-relaxed">
            As the state modernized its healthcare services for more than 3 million constituents, enabling online premium payments became a critical gap in the existing portal.
          </p>
          <p className="font-heading text-2xl font-normal text-(--color-text-primary) leading-relaxed">
            I led design early in the engagement, partnering closely with the client to translate regulatory constraints and constituent needs into a clear, end-to-end digital payment experience.
          </p>
        </div>

        {/* Quick Team Info */}
        <div className="flex flex-col gap-2">
          <p className="font-heading text-2xl font-normal text-[#a6a6a6]">
            Project Position(s): UX/UI Designer, Functional Analyst
          </p>
          <p className="font-heading text-2xl font-normal text-[#a6a6a6]">
            Team Composition: 1 Product Manager, 1 Functional Lead, 1 Visual Designer, 1 Functional Analyst, 3 Salesforce Engineers
          </p>
          <p className="font-heading text-2xl font-normal text-[#a6a6a6]">
            Tech Stack: Custom Salesforce
          </p>
        </div>
      </div>

      {/* Hero Screenshots - Full Width Gradient */}
      <div
        className="w-full mt-8 rounded-t-[5px] backdrop-blur-[50px] p-6 lg:p-8"
        style={gradientStyle}
      >
        {/* Mobile: stacked vertically. md+: side-by-side with clamped height */}
        <div className="flex flex-col md:flex-row justify-center gap-4 max-w-[1440px] mx-auto">
          <div className="rounded-xl overflow-hidden">
            <img
              src="/images/epayments/hero%20image%201.png"
              alt="CARE+ Premiums Homepage — Desktop Dashboard"
              className="w-full h-auto md:h-[clamp(200px,35vw,420px)] md:w-auto block"
              loading="lazy"
            />
          </div>
          <div className="rounded-xl overflow-hidden">
            <img
              src="/images/epayments/hero%20image%202.png"
              alt="Mobile — Premiums Due Notification"
              className="w-full h-auto md:h-[clamp(200px,35vw,420px)] md:w-auto block"
              loading="lazy"
            />
          </div>
          <div className="rounded-xl overflow-hidden">
            <img
              src="/images/epayments/hero%20image%203.png"
              alt="Mobile — Review Your Payment Screen"
              className="w-full h-auto md:h-[clamp(200px,35vw,420px)] md:w-auto block"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Outcome & Impact + Challenges */}
      <div className="flex flex-col gap-10 px-6 lg:px-10 py-12 max-w-[1440px] mx-auto">

        {/* Outcome & Impact */}
        <div className="flex flex-col gap-6">
          <h2 className="font-heading text-4xl font-medium text-(--color-text-secondary)">
            Outcome &amp; Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <p className="font-heading text-2xl font-normal text-(--color-text-primary) leading-relaxed">
              38% increase in successful payments
            </p>
            <p className="font-heading text-2xl font-normal text-(--color-text-primary) leading-relaxed">
              55% decrease in time spent on paying premiums
            </p>
          </div>
        </div>

        {/* Design Challenges Faced & Conquered */}
        <div className="flex flex-col gap-4">
          <h2 className="font-heading text-4xl font-medium text-(--color-text-secondary)">
            Design Challenges Faced &amp; Conqured
          </h2>
          <ul className="list-disc pl-6 flex flex-col gap-4">
            <li className="font-heading text-2xl font-normal text-(--color-text-primary) leading-relaxed">
              Designing for a vulnerable user base operating under financial and time constraints
            </li>
            <li className="font-heading text-2xl font-normal text-(--color-text-primary) leading-relaxed">
              Translating complex legal and policy requirements into clear, human-centered experiences
            </li>
          </ul>
        </div>
      </div>

      {/* The Designs */}
      <div className="px-6 lg:px-10 max-w-[1440px] mx-auto">
        <h2 className="font-heading text-[40px] md:text-[48px] font-medium text-(--color-text-primary) mb-8">
          The Designs
        </h2>
      </div>

      {/* Design Sections — single gradient box, all sections inside */}
      <div
        className="w-full flex flex-col rounded-t-[5px] pb-8"
        style={gradientStyle}
      >
        {/* Responsive Dashboard Section */}
        <div className="w-full">
          <div className="px-6 lg:px-10 pt-8 pb-4 max-w-[1440px] mx-auto">
            <div className="flex flex-col gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-6 py-5 shadow-sm">
              <h3 className="font-heading text-2xl font-normal text-black">
                Responsive and Direct Payments Dashboard
              </h3>
              <p className="font-heading text-2xl font-normal text-black leading-relaxed">
                Information that is clear, concise, and thoughtfully directs scarcity mindset users into the right actions they need to take.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6 px-6 lg:px-10 pb-10 max-w-[1440px] mx-auto">
            <div className="rounded-xl overflow-hidden">
              <img src="/images/epayments/dashboard-mockup-1.png" alt="Premiums Homepage — Desktop View" className="w-full h-auto" loading="lazy" />
            </div>
            <div className="rounded-xl overflow-hidden">
              <img src="/images/epayments/dashboard-mockup-2.png" alt="Mobile Dashboard Views — Premium States" className="w-full h-auto" loading="lazy" />
            </div>
          </div>
        </div>

        {/* Seamless Payment Submission and Tracking */}
        <div className="w-full">
          <div className="px-6 lg:px-10 pb-4 max-w-[1440px] mx-auto">
            <div className="flex flex-col gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-6 py-5 shadow-sm">
              <h3 className="font-heading text-2xl font-normal text-black">
                Seamless Payment Submission and Tracking
              </h3>
              <p className="font-heading text-2xl font-normal text-black leading-relaxed">
                Continuous health care can be very tough for our users so having clear ways to get them back to coverage is critical.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6 px-6 lg:px-10 pb-10 max-w-[1440px] mx-auto">
            <div className="rounded-xl overflow-hidden">
              <img src="/images/epayments/payment-review.png" alt="Make a Payment — Review Interface" className="w-full h-auto" loading="lazy" />
            </div>
            <div className="rounded-xl overflow-hidden">
              <img src="/images/epayments/payment-history.png" alt="Premium History — Payment Tracking" className="w-full h-auto" loading="lazy" />
            </div>
          </div>
        </div>

        {/* Digestible and Actionable Risk States */}
        <div className="w-full">
          <div className="px-6 lg:px-10 pb-4 max-w-[1440px] mx-auto">
            <div className="flex flex-col gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-6 py-5 shadow-sm">
              <h3 className="font-heading text-2xl font-normal text-black">
                Digestible and Actionable Risk States
              </h3>
              <p className="font-heading text-2xl font-normal text-black leading-relaxed">
                Continuous health care can be very tough for our users so having clear ways to get them back to coverage is critical.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6 px-6 lg:px-10 max-w-[1440px] mx-auto">
            <div className="rounded-xl overflow-hidden">
              <img src="/images/epayments/risk-state-1.png" alt="Risk State — Restricted Enrollment Notification" className="w-full h-auto" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EPaymentsDetail;
