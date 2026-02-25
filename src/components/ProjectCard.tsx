import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { trackEvent } from '../hooks/useAnalytics';

interface Tag {
  label: string;
}

interface MetaItem {
  text: string;
}

interface ProjectCardProps {
  title: string;
  meta: MetaItem[];
  tags: Tag[];
  gradientClass: string;
  imageSrc?: string;
  imageAlt?: string;
  link?: string;
  roundTop?: boolean;
  roundBottom?: boolean;
}

const ProjectCard: FC<ProjectCardProps> = ({ 
  title, 
  meta, 
  tags, 
  gradientClass,
  imageSrc,
  imageAlt,
  link,
  roundTop = false,
  roundBottom = false
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (link) {
      // Track project click
      trackEvent('project_click', {
        project_name: title,
        project_link: link,
      });
      
      navigate(link);
    }
  };

  const borderRadiusClass = `${roundTop ? 'rounded-t-[5px]' : ''} ${roundBottom ? 'rounded-b-[5px]' : ''}`.trim();

  return (
    <div 
      onClick={handleClick}
      className={`relative backdrop-blur-[50px] p-6 ${gradientClass} ${borderRadiusClass} overflow-hidden ${link ? 'cursor-pointer group' : ''}`}
    >
      {/* Gradient sheen overlay on hover */}
      {link && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      )}
      <div className="flex flex-col lg:flex-row gap-8 h-full">
        {/* Left Content */}
        <div className="flex flex-col gap-6 lg:max-w-md z-10">
          {/* Title */}
          <h3 className="font-heading text-4xl font-semibold text-(--color-text-primary) leading-tight">
            {title}
          </h3>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-2">
            {meta.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="font-heading text-2xl font-normal text-(--color-text-light)">
                  {item.text}
                </span>
                {index < meta.length - 1 && (
                  <div className="w-[5px] h-[5px] rounded-full bg-(--color-text-light)" />
                )}
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-4">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="px-4 py-2 rounded-full bg-white/20 font-heading text-2xl font-normal text-white backdrop-blur-sm"
              >
                {tag.label}
              </span>
            ))}
          </div>
        </div>

        {/* Right Image */}
        {imageSrc && (
          <div className="flex-1 flex items-center justify-center lg:justify-end">
            <img 
              src={imageSrc} 
              alt={imageAlt || 'Project preview'} 
              className="max-w-full h-auto object-contain"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
