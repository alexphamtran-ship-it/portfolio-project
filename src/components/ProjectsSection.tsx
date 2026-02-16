import type { FC } from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection: FC = () => {
  const projects = [
    {
      title: 'GenAI Powered Donor Engagement Tool // GivePrism',
      meta: [
        { text: '2.0 Shipped' },
        { text: 'In-Development' },
        { text: 'Deloitte' }
      ],
      tags: [
        { label: 'B2B Product' },
        { label: 'Early Development' },
        { label: 'Gen AI Product' },
        { label: 'Data Analytics' },
        { label: 'Higher Education / Non-Profit' }
      ],
      gradientClass: 'bg-gradient-to-b from-[rgba(219,116,166,0.5)] from-[14.9%] to-[rgba(164,151,244,1)] to-[87.5%]',
      imageSrc: '/images/GP_Splash.svg',
      link: '/projects/giveprism'
    },
    {
      title: 'MVP Full Rebate Management Suite // GovConnect Energy Suite',
      meta: [
        { text: 'Handed Off' },
        { text: 'MVP 1.0' },
        { text: 'Deloitte' }
      ],
      tags: [
        { label: 'B2B' },
        { label: 'B2C' },
        { label: '0 → 1' },
        { label: 'Data Visualization' },
        { label: 'Constituent Digital Experience' },
        { label: 'Public Sector' }
      ],
      gradientClass: 'bg-gradient-to-b from-[rgba(27,134,146,1)] from-[14.9%] to-[rgba(73,67,169,1)] to-[87.5%]',
      imageSrc: '/images/Rebates_Splash.svg',
      imageAlt: 'GovConnect Energy Suite Dashboard',
      link: '/projects/energy-suite'
    },
    {
      title: 'FinTech Case Study // Portfolio Monitoring',
      meta: [
        { text: 'Proof of Concept' },
        { text: 'Completed' },
        { text: 'Personal' }
      ],
      tags: [
        { label: 'B2B Product' },
        { label: 'Data Analytics' },
        { label: 'FinTech' }
      ],
      gradientClass: 'bg-gradient-to-b from-[rgba(16,93,185,1)] from-[14.9%] to-[rgba(138,138,138,1)] to-[87.5%]',
      imageSrc: 'images/FinTech_Splash.svg',
      link: '/projects/fintech'
    },
    {
      title: 'ePayments Portal // State Health Care Client',
      meta: [
        { text: 'Shipped' },
        { text: 'Full Release' },
        { text: 'Deloitte' }
      ],
      tags: [
        { label: 'B2C' },
        { label: 'Redesign' },
        { label: 'Health Care' },
        { label: 'Finance' },
        { label: 'Public Sector' }
      ],
      gradientClass: 'bg-gradient-to-b from-[rgba(204,96,96,1)] from-[41.35%] to-[rgba(246,207,87,1)] to-[85.1%]',
      imageSrc: '/images/epay_Splash.svg',
      imageAlt: 'ePayments Portal Preview',
      link: '/projects/epayments'
    }
  ];

  return (
    <section id="projects" className="py-12">
      <div className="w-full flex flex-col gap-0">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            meta={project.meta}
            tags={project.tags}
            gradientClass={project.gradientClass}
            imageSrc={project.imageSrc}
            imageAlt={project.imageAlt}
            link={project.link}
            roundTop={index === 0}
            roundBottom={index === projects.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
