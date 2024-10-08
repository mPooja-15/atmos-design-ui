import { ServiceFooterProps } from '@/interface/types';
import Image from 'next/image';
import React from 'react';

const ServiceFooter: React.FC<ServiceFooterProps> = ({ icon, title, link }) => {
  return (
    <div className="flex overflow-hidden flex-col items-start self-stretch p-4 my-auto bg-white rounded-xl gap-4 h-full">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col justify-center items-center p-2 w-10 h-10 bg-gray-100 rounded-lg">
          <Image loading="lazy" src={icon} alt={title} className="object-contain w-full aspect-square" />
        </div>
        <div className="text-[14px] leading-[21px] text-[#343741] font-black">{title}</div>
      </div>
      <div className="flex gap-[5.67px] items-start text-sm font-black text-gray-600 whitespace-nowrap">
        <p className="text-[14px] leading-[21px] text-[#5E626F] font-black">바로가기</p>
        <Image loading="lazy" src={link} alt="Link Icon" className="object-contain shrink-0 w-5 aspect-square" />
      </div>
    </div>
  );
};

export default ServiceFooter;
