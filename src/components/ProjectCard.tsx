import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

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
}

const ProjectCard: FC<ProjectCardProps> = ({ 
  title, 
  meta, 
  tags, 
  gradientClass,
  imageSrc,
  imageAlt,
  link
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (link) {
      navigate(link);
    }
  };

  return (
    <div 
      onClick={handleClick}
      className={`relative rounded-t-[5px] backdrop-blur-[50px] p-6 ${gradientClass} transition-transform hover:scale-[1.02] overflow-hidden ${link ? 'cursor-pointer' : ''}`}
    >
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
                className="px-4 py-2 rounded-full bg-white/20 font-heading text-2xl font-normal text-(--color-tag-text) backdrop-blur-sm"
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
