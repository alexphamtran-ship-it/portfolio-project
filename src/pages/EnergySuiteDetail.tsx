import type { FC } from 'react';
import ProjectNavBar from '../components/ProjectNavBar';

const EnergySuiteDetail: FC = () => {
  const gradientStyle = {
    background: 'linear-gradient(0deg, rgba(27,134,146,1) 14.9% , rgba(73,67,169,1) 87.5%)',
  };

  const titleGradientStyle = {
    background: 'linear-gradient(0deg, rgba(27,134,146,1) 14.9% , rgba(73,67,169,1) 87.5%)',
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
          MVP Rebate Management | GovConnect Energy Suite
        </h1>

        {/* Introduction Section */}
        <div className="flex flex-col gap-4">
          <h2 className="font-heading text-4xl font-medium text-(--color-text-secondary)">
            Introduction
          </h2>
          <p className="font-heading text-2xl font-normal text-(--color-text-primary) leading-relaxed">
            With the release of the Inflation Reduction Act, State Energy Offices received an unprecedented level of funding to launch energy efficiency rebate programs aimed at helping constituents purchase and install energy-saving appliances.
          </p>
          <p className="font-heading text-2xl font-normal text-(--color-text-primary) leading-relaxed">
            To deliver these programs effectively, I led the end-to-end design solution that not only promote and manage rebates at scale, but also seamlessly integrate contractors responsible for completing the installations.
          </p>
        </div>

        {/* Quick Team Info */}
        <div className="flex flex-col gap-2">
          <p className="font-heading text-2xl font-normal text-[#a6a6a6]">
            Project Position(s): UX/UI Designer, Product Strategist
          </p>
          <p className="font-heading text-2xl font-normal text-[#a6a6a6]">
            Team Composition: 1 Product Manager, 2 Product Strategy, 2 Energy SME, 1 Full Stack Engineer
          </p>
          <p className="font-heading text-2xl font-normal text-[#a6a6a6]">
            Tech Stack: Custom Salesforce / ServiceNow
          </p>
        </div>
      </div>

      {/* Hero Screenshots - Full Width Gradient */}
      <div
        className="w-full mt-8 rounded-t-[5px] backdrop-blur-[50px] p-6 lg:p-8"
        style={gradientStyle}
      >
        {/* All three images share the same height; each container is tight around its image */}
        <div
          className="flex flex-row justify-center gap-4 max-w-[1440px] mx-auto"
          style={{ height: 'clamp(200px, 35vw, 420px)' }}
        >
          <div className="rounded-xl overflow-hidden shrink-0">
            <img
              src="/images/energy-suite/hero%20image%20energy%201.png"
              alt="GovConnect Energy Rebates — State Funding and Program Metrics Dashboard"
              className="h-full w-auto block"
              loading="lazy"
            />
          </div>
          <div className="rounded-xl overflow-hidden shrink-0">
            <img
              src="/images/energy-suite/hero%20image%20energy%202.png"
              alt="Constituent Portal — Energy Audit Submitted Progress Tracker"
              className="h-full w-auto block"
              loading="lazy"
            />
          </div>
          <div className="rounded-xl overflow-hidden shrink-0">
            <img
              src="/images/energy-suite/hero%20image%20energy%203.png"
              alt="Constituent Portal — Account Created Success Screen"
              className="h-full w-auto block"
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
              3 Pilot Clients Secured
            </p>
            <p className="font-heading text-2xl font-normal text-(--color-text-primary) leading-relaxed">
              $20M+ in 1st Year Revenue
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
              Driving structured product decisions in a client services setting without the benefit of an embedded product culture or established product workflows.
            </li>
            <li className="font-heading text-2xl font-normal text-(--color-text-primary) leading-relaxed">
              Operating with limited early user research, as rebate programs and user expectations were still taking shape.
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
        {/* Constituent Experience Section */}
        <div className="w-full">
          <div className="px-6 lg:px-10 pt-8 pb-4 max-w-[1440px] mx-auto">
            <div className="flex flex-col gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-6 py-5 shadow-sm">
              <h3 className="font-heading text-2xl font-normal text-black">
                Accessible, Trust-First Experience for Constituents
              </h3>
              <p className="font-heading text-2xl font-normal text-black leading-relaxed">
                A clear and approachable portal that helps constituents quickly understand programs and complete applications—without unnecessary complexity or friction.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6 px-6 lg:px-10 pb-10 max-w-[1440px] mx-auto">
            <div className="rounded-xl overflow-hidden">
              <img src="/images/energy-suite/AccessforConsis.png" alt="Constituent portal welcome screen and rebate explain screen" className="w-full h-auto" loading="lazy" />
            </div>
            <div className="rounded-xl overflow-hidden">
              <img src="/images/energy-suite/constituent-flow-2.png" alt="Application flow screens" className="w-full h-auto" loading="lazy" />
            </div>
            <div className="rounded-xl overflow-hidden">
              <img src="/images/energy-suite/constituent-flow-3.png" alt="Additional flow screens" className="w-full h-auto" loading="lazy" />
            </div>
          </div>
        </div>

        {/* Contractor Portal Section */}
        <div className="w-full">
          <div className="px-6 lg:px-10 pb-4 max-w-[1440px] mx-auto">
            <div className="flex flex-col gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-6 py-5 shadow-sm">
              <h3 className="font-heading text-2xl font-normal text-black">
                Seamless Project Tracking for Contractors
              </h3>
              <p className="font-heading text-2xl font-normal text-black leading-relaxed">
                Integrated project intake and tracking for critical contractors that will be boots on the ground advertising and running the installation of these energy programs.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6 px-6 lg:px-10 pb-10 max-w-[1440px] mx-auto">
            <div className="bg-[#1a1a1a] rounded-xl overflow-hidden">
              <img src="/images/energy-suite/contractor-portal.png" alt="Contractor project tracking interface" className="w-full h-auto" loading="lazy" />
            </div>
            <div className="bg-[#1a1a1a] rounded-xl overflow-hidden">
              <img src="/images/energy-suite/contractor-portal_2.png" alt="Contractor project detail view" className="w-full h-auto" loading="lazy" />
            </div>
          </div>
        </div>

        {/* Metrics Dashboard Section — moved from hero */}
        <div className="w-full">
          <div className="px-6 lg:px-10 pb-4 max-w-[1440px] mx-auto">
            <div className="flex flex-col gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-6 py-5 shadow-sm">
              <h3 className="font-heading text-2xl font-normal text-black">
                Metrics That Drive Decisions
              </h3>
              <p className="font-heading text-2xl font-normal text-black leading-relaxed">
                High-level KPIs and risk indicators surface program health, funding progress, and equity outcomes—helping officers manage complex rebate programs with confidence.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6 px-6 lg:px-10 max-w-[1440px] mx-auto">
            <div className="bg-[#1a1a1a] rounded-xl overflow-hidden">
              <img
                src="/images/energy-suite/metrics-dashboard-bg.png"
                alt="State Energy Rebates Portal — full program metrics dashboard"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
            <div className="bg-[#1a1a1a] rounded-xl overflow-hidden">
              <img
                src="/images/energy-suite/metrics-dashboard.png"
                alt="Metrics Dashboard — project application breakdown and risk indicators"
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

export default EnergySuiteDetail;
