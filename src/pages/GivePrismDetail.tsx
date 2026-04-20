import type { FC } from 'react';
import ProjectNavBar from '../components/ProjectNavBar';

const GivePrismDetail: FC = () => {
  const gradientStyle = {
    background: 'linear-gradient(180deg, rgba(219,116,166,0.5) 29.33%, rgba(164,151,244,1) 87.5%)',
  };

  const titleGradientStyle = {
    background: 'linear-gradient(180deg, rgba(219,116,166,0.5) 29.33%, rgba(164,151,244,1) 87.5%)',
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
          GenAI Donor Engagement Tool | GivePrism
        </h1>

        {/* Introduction Section */}
        <div className="flex flex-col gap-4">
          <h2 className="font-heading text-4xl font-medium text-(--color-text-secondary)">
            Introduction
          </h2>
          <p className="font-heading text-2xl font-normal text-(--color-text-primary) leading-relaxed">
            Fundraising teams are being asked to do more with less while donor behavior continues to change. Existing tools make research time-consuming and difficult to operationalize.
          </p>
          <p className="font-heading text-2xl font-normal text-(--color-text-primary) leading-relaxed">
            I led design for GivePrism, a donor intelligence and analytics platform built on Generative AI and the largest social driver dataset in the U.S to help fundraising teams move from scattered research to clear donor segments and actionable engagement strategies that convert into giving.
          </p>
        </div>

        {/* Quick Team Info */}
        <div className="flex flex-col gap-2">
          <p className="font-heading text-2xl font-normal text-[#a6a6a6]">
            Project Position(s): UX/UI Designer, Product Strategist
          </p>
          <p className="font-heading text-2xl font-normal text-[#a6a6a6]">
            Team Composition: 1 Product Manager, 1 Product Strategist, 2 Data Scientist, 2 MlOps/AI Engineers, 1 FE, 2 BE
          </p>
          <p className="font-heading text-2xl font-normal text-[#a6a6a6]">
            Tech Stack: GCP, React, Javascript, Gemini
          </p>
        </div>
      </div>

      {/* Hero Screenshots - Full Width Gradient */}
      <div
        className="w-full mt-8 rounded-t-[5px] backdrop-blur-[50px] p-6 lg:p-8"
        style={gradientStyle}
      >
        <div className="flex flex-col lg:flex-row gap-6 max-w-[1440px] mx-auto">
          {/* Left Screenshot */}
          <div className="flex-1 bg-[#1a1a1a] rounded-xl overflow-hidden">
            <img
              src="/images/giveprism/mainscreen1.png"
              alt="GivePrism Landing - Segment Selection Interface"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
          {/* Right Screenshot */}
          <div className="flex-1 bg-[#1a1a1a] rounded-xl overflow-hidden">
            <img
              src="/images/giveprism/mainscreenshot-2.png"
              alt="GivePrism Prospect Profile - Donor Analytics"
              className="w-full h-auto"
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
              Drove first client adoption, surfacing $12.4M in potential revenue value.
            </p>
            <p className="font-heading text-2xl font-normal text-(--color-text-primary) leading-relaxed">
              Launched the firm&apos;s first agentic AI chatbot to market.
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
              Maintaining product momentum amid competing priorities, as leadership and team balanced client services work alongside product development.
            </li>
            <li className="font-heading text-2xl font-normal text-(--color-text-primary) leading-relaxed">
              Rapidly evolving market and customer needs as technology and organizational missions shifted.
            </li>
            <li className="font-heading text-2xl font-normal text-(--color-text-primary) leading-relaxed">
              Technical constraints and steep learning curves while designing with novel, emerging technologies.
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
        {/* Natural-Language Segmentation */}
        <div className="w-full">
          <div className="px-6 lg:px-10 pt-8 pb-4 max-w-[1440px] mx-auto">
            <div className="flex flex-col gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-6 py-5 shadow-sm">
              <h3 className="font-heading text-2xl font-normal text-black">
                Natural-Language Segmentation, Built for Control
              </h3>
              <p className="font-heading text-2xl font-normal text-black leading-relaxed">
                Users can start with a simple prompt, then refine it through validation. The AI agent translates intent into filters and generates a targeted donor list—while keeping the process transparent and reviewable with clear human-in-the-loop control.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6 px-6 lg:px-10 pb-10 max-w-[1440px] mx-auto">
            <div className="bg-[#1a1a1a] rounded-xl overflow-hidden">
              <img src="/images/giveprism/screenshot-1.png" alt="Natural Language Segmentation Interface" className="w-full h-auto" loading="lazy" />
            </div>
            <div className="bg-[#1a1a1a] rounded-xl overflow-hidden">
              <img src="/images/giveprism/screenshot-2.png" alt="Prompt Refinement Interface" className="w-full h-auto" loading="lazy" />
            </div>
            <div className="bg-[#1a1a1a] rounded-xl overflow-hidden">
              <img src="/images/giveprism/screenshot-3.png" alt="Donor List View" className="w-full h-auto" loading="lazy" />
            </div>
          </div>
        </div>

        {/* Data Snapshots at Every Level */}
        <div className="w-full">
          <div className="px-6 lg:px-10 pb-4 max-w-[1440px] mx-auto">
            <div className="flex flex-col gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-6 py-5 shadow-sm">
              <h3 className="font-heading text-2xl font-normal text-black">
                Data Snapshots at Every Level
              </h3>
              <p className="font-heading text-2xl font-normal text-black leading-relaxed">
                Exploration of each prospect at the level of detail needed, from high-level signals to deep, contextual insights. Interactive, easy-to-read visuals make complex data faster to understand and easier to act on.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6 px-6 lg:px-10 pb-10 max-w-[1440px] mx-auto">
            <div className="bg-[#1a1a1a] rounded-xl overflow-hidden">
              <img src="/images/giveprism/screenshot-6.png" alt="Data Snapshot Dashboard - Prospect Profile" className="w-full h-auto" loading="lazy" />
            </div>
            <div className="bg-[#1a1a1a] rounded-xl overflow-hidden">
              <img src="/images/giveprism/screenshot-7.png" alt="Detailed Prospect View with Expanded Row" className="w-full h-auto" loading="lazy" />
            </div>
          </div>
        </div>

        {/* Refine Without Breaking Flow */}
        <div className="w-full">
          <div className="px-6 lg:px-10 pb-4 max-w-[1440px] mx-auto">
            <div className="flex flex-col gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-6 py-5 shadow-sm">
              <h3 className="font-heading text-2xl font-normal text-black">
                Refine Without Breaking Flow
              </h3>
              <p className="font-heading text-2xl font-normal text-black leading-relaxed">
                Exploration of each prospect at the level of detail needed, from high-level signals to deep, contextual insights. Interactive, easy-to-read visuals make complex data faster to understand and easier to act on.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6 px-6 lg:px-10 pb-10 max-w-[1440px] mx-auto">
            <div className="bg-[#1a1a1a] rounded-xl overflow-hidden">
              <img src="/images/giveprism/screenshot-4.png" alt="Filter Panel Interface" className="w-full h-auto" loading="lazy" />
            </div>
          </div>
        </div>

        {/* An AI Assistant, Built into the Workflow */}
        <div className="w-full">
          <div className="px-6 lg:px-10 pb-4 max-w-[1440px] mx-auto">
            <div className="flex flex-col gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-6 py-5 shadow-sm">
              <h3 className="font-heading text-2xl font-normal text-black">
                An AI Assistant, Built into the Workflow
              </h3>
              <p className="font-heading text-2xl font-normal text-black leading-relaxed">
                An AI assistant that recognizes real time, the data that the user wants to interface with and recognizes what the user is looking to do, creating content, strategy suggestions or getting high level data analysis.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6 px-6 lg:px-10 max-w-[1440px] mx-auto">
            <div className="bg-[#1a1a1a] rounded-xl overflow-hidden">
              <img src="/images/giveprism/screenshot-5.png" alt="AI Assistant Interface" className="w-full h-auto" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GivePrismDetail;
