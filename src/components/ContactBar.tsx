import type { FC } from 'react';

const ContactBar: FC = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 px-6 py-12">
      <span className="font-heading text-[40px] font-normal text-(--color-text-primary)">
        Do you need anything else?
      </span>
      <div className="w-5 h-5 rounded-full bg-(--color-brand-purple)" />
      <a 
        href="https://linkedin.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="font-heading text-[40px] font-normal text-(--color-text-primary) underline hover:text-(--color-brand-purple) transition-colors"
      >
        LinkedIn
      </a>
      <div className="w-5 h-5 rounded-full bg-(--color-brand-purple)" />
      <a 
        href="#resume" 
        target="_blank" 
        rel="noopener noreferrer"
        className="font-heading text-[40px] font-normal text-(--color-text-primary) underline hover:text-(--color-brand-purple) transition-colors"
      >
        Resume
      </a>
      <div className="w-5 h-5 rounded-full bg-(--color-brand-purple)" />
      <a 
        href="mailto:alexpmtran@gmail.com"
        className="font-heading text-[40px] font-normal text-(--color-text-primary) underline hover:text-(--color-brand-purple) transition-colors"
      >
        alexpmtran@gmail.com
      </a>
    </div>
  );
};

export default ContactBar;
