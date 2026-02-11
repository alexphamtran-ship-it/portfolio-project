import type { FC } from 'react';

const ContactBar: FC = () => {
  return (
    <footer className="flex flex-wrap items-center justify-center gap-4 px-6 py-12 mt-auto border-t border-t-[rgba(255,255,255,0.1)]">
      <span className="font-heading text-[40px] font-normal text-(--color-text-primary)">
        Do you need anything else?
      </span>
      <div className="w-5 h-5 rounded-full bg-(--color-brand-purple) shrink-0" />
      <a 
        href="https://www.linkedin.com/in/alex-pham-tran/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="font-heading text-[40px] font-normal text-(--color-text-primary) underline hover:text-(--color-brand-purple) transition-colors"
      >
        LinkedIn
      </a>
      <div className="w-5 h-5 rounded-full bg-(--color-brand-purple) shrink-0" />
      <a 
        href="C:\Users\alexp\OneDrive\Documents\portfolio_project\public\files\Alex_Tran_2026.pdf" 
        download= "Alex_Tran_2026 Resume.pdf" 
        rel="noopener noreferrer"
        className="font-heading text-[40px] font-normal text-(--color-text-primary) underline hover:text-(--color-brand-purple) transition-colors"
      >
        Resume
      </a>
      <div className="w-5 h-5 rounded-full bg-(--color-brand-purple) shrink-0" />
      <a 
        href="mailto:alexpmtran@gmail.com"
        className="font-heading text-[40px] font-normal text-(--color-text-primary) underline hover:text-(--color-brand-purple) transition-colors"
      >
        alexpmtran@gmail.com
      </a>
    </footer>
  );
};

export default ContactBar;
