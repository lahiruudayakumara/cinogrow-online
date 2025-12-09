import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-8">
      <h2 className="text-4xl font-bold text-black">{title}</h2>
      {subtitle && <p className="mt-2 text-lg text-zinc-600">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;