import React from 'react';

type FeatureCardProps = {
  title: string;
  description: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col w-[161px] max-[1200px]:w-[146px]">
      <div className="max-w-full border-t border-white border-solid min-h-[1px] w-[129px]" />
      <h3 className="mt-2 text-lg text-white font-black leading-[27px]">{title}</h3>
      <p className="mt-2 text-base leading-6 text-[#FFFFFFCC] text-opacity-80 font-black">{description}</p>
    </div>
  );
};

export default FeatureCard;
