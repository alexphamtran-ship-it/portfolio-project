import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const GivePrismDetail: FC = () => {
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
          {/* Left Column - Content */}
          <div className="flex flex-col gap-6">
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
                GenAI Powered Donor Engagement Tool // GivePrism
              </h1>

              <p className="font-heading text-2xl font-normal text-(--color-text-primary) leading-relaxed">
                Fundraising teams are being asked to do more with less while donor behavior continues to change. Existing tools make research time-consuming and difficult to operationalize.
              </p>
              
              <p className="font-heading text-2xl font-normal text-(--color-text-primary) leading-relaxed">
                I led design for GivePrism, a donor intelligence product built on generative AI and the largest social driver dataset in the U.S. The product helps teams move from scattered research to clear donor segments and actionable engagement strategies that convert into giving.
              </p>

              {/* Quick Team Info */}
              <div className="flex flex-col gap-2 mt-2">
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
              <p className="font-heading text-4xl font-normal text-(--color-text-primary) leading-relaxed">
                Drove first client adoption, surfacing $12.4M in potential revenue value.
              </p>
              <p className="font-heading text-4xl font-normal text-(--color-text-primary) leading-relaxed">
                Launched the firm&apos;s first agentic AI chatbot to market.
              </p>
            </div>

            {/* My Highlight Reel */}
            <div className="flex flex-col gap-6">
              <h2 
                className="font-heading text-[48px] font-medium leading-tight"
                style={{
                  background: 'linear-gradient(0deg, rgba(27,134,146,1) 14.9%, rgba(73,67,169,1) 87.5%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                My Highlight Reel
              </h2>
              <ul className="list-disc pl-6 flex flex-col gap-6">
                <li className="font-heading text-2xl font-normal text-(--color-text-primary) leading-[30px]">
                  Led the full end-to-end workflow redesign, from ideation to design—that address emerged key user pain points and technical constraints.
                </li>
                <li className="font-heading text-2xl font-normal text-(--color-text-primary) leading-[30px]">
                  Owned product roadmap and influenced GTM strategy through market and user research, prioritize high-impact designs and features.
                </li>
                <li className="font-heading text-2xl font-normal text-(--color-text-primary) leading-[30px]">
                  Restructured processes that streamlined collaboration across product, design, and engineering, including establishing a Design System Library and clear review/feedback channels.
                </li>
              </ul>
            </div>

            {/* Challenges */}
            <div className="flex flex-col gap-6">
              <h2 
                className="font-heading text-[48px] font-medium leading-tight"
                style={{
                  background: 'linear-gradient(0deg, rgba(27,134,146,1) 14.9%, rgba(73,67,169,1) 87.5%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Challenges
              </h2>
              <ul className="list-disc pl-6 flex flex-col gap-6">
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

          {/* Right Column - Screenshots */}
          <div className="flex flex-col gap-4">
            {/* Natural-Language Segmentation Card */}
            <div className="flex flex-col gap-4">
              <div className="rounded-[5px] backdrop-blur-[50px] bg-[#5a5a5a]/80 py-2 px-4 flex flex-col gap-2">
                <h3 className="font-heading text-2xl font-normal text-white">
                  Natural-Language Segmentation, Built for Control
                </h3>
                <p className="font-heading text-base font-normal text-white leading-relaxed">
                  Users can start with a simple prompt, then refine it through validation. The AI agent translates intent into filters and generates a targeted donor list—while keeping the process transparent and reviewable with clear human-in-the-loop control.
                </p>
              </div>
              <img 
                src="/images/giveprism/screenshot-1.svg" 
                alt="Natural Language Segmentation Interface" 
                className="w-full h-auto"
              />
              <img 
                src="/images/giveprism/screenshot-2.svg" 
                alt="Prompt Validation Interface" 
                className="w-full h-auto"
              />
              <img 
                src="/images/giveprism/screenshot-3.svg" 
                alt="Donor List View" 
                className="w-full h-auto"
              />
            </div>

            {/* Refine Without Breaking Flow Card */}
            <div className="flex flex-col gap-4">
              <div className="rounded-[5px] backdrop-blur-[50px] bg-[#5a5a5a]/80 py-2 px-4 flex flex-col gap-2">
                <h3 className="font-heading text-2xl font-normal text-white">
                  Refine Without Breaking Flow
                </h3>
                <p className="font-heading text-base font-normal text-white leading-relaxed">
                  A persistent side panel allows users to continue refining their donor list in context, applying additional filters and adjustments without navigating away from the list view.
                </p>
              </div>
              <img 
                src="/images/giveprism/screenshot-4.svg" 
                alt="Filter Panel Interface" 
                className="w-full h-auto"
              />
            </div>

            {/* AI Assistant Card */}
            <div className="flex flex-col gap-4">
              <div className="rounded-[5px] backdrop-blur-[50px] bg-[#5a5a5a]/80 py-2 px-4 flex flex-col gap-2">
                <h3 className="font-heading text-2xl font-normal text-white">
                  An AI Assistant, Built into the Workflow
                </h3>
                <p className="font-heading text-base font-normal text-white leading-relaxed">
                  An AI assistant that recognizes real time, the data that the user wants to interface with and recognizes what the user is looking to do, creating content, strategy suggestions or getting high level data analysis.
                </p>
              </div>
              <img 
                src="/images/giveprism/screenshot-5.svg" 
                alt="AI Assistant Interface" 
                className="w-full h-auto"
              />
            </div>

            {/* Data Snapshots Card */}
            <div className="flex flex-col gap-4">
              <div className="rounded-[5px] backdrop-blur-[50px] bg-[#5a5a5a]/80 py-2 px-4 flex flex-col gap-2">
                <h3 className="font-heading text-[32px] font-normal text-white">
                  Data Snapshots at Every Level //De-Prioritized Designs
                </h3>
                <p className="font-heading text-base font-normal text-white leading-relaxed">
                  Exploration of each prospect at the level of detail needed, from high-level signals to deep, contextual insights. Interactive, easy-to-read visuals make complex data faster to understand and easier to act on.
                </p>
              </div>
              <img 
                src="/images/giveprism/screenshot-6.svg" 
                alt="Data Snapshot Dashboard" 
                className="w-full h-auto"
              />
              <img 
                src="/images/giveprism/screenshot-7.svg" 
                alt="Detailed Prospect View" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GivePrismDetail;
