import React from 'react';
import styles from './styles.module.css';
import polygonDown from '../../../../../assets/image/icon/polygon-down.svg';
import polygonDownMobile from '../../../../../assets/image/icon/poligon-mobile.svg';
import Image from 'next/image';
import CommonButton from '@/components/atoms/CommonButton/CommonButton';

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col gap-5 mt-10 max-sm:mt-0 w-full max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-9 max-w-full w-[449px]">
        <div className={`flex  flex-col justify-center relative ${styles.fadeInDelayed}`}>
          <CommonButton
            onClick={() => {}}
            className="font-black text-[18px] text-[#40E2E8] max-md:bg-[#8BC4FF] max-md:text-white px-3 py-1.5">
            풀타임, 파트타임
          </CommonButton>
          <div className="flex gap-2.5 items-start self-start px-2.5 absolute left-0 bottom-[-10px] ">
            <Image
              loading="lazy"
              src={polygonDown}
              alt=""
              className="object-contain w-3.5 rounded-sm aspect-square max-md:hidden"
            />
            <Image
              loading="lazy"
              src={polygonDownMobile}
              alt=""
              className="object-contain w-3.5 rounded-sm aspect-square hidden max-md:block "
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 self-end max-w-full w-[747px] ">
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className={`flex flex-col max-md:w-full  ${styles.fadeInUp}`}>
              <h1 className="text-5xl font-black leading-[62.4px] text-white text-opacity-90 max-md:max-w-full max-lg:text-4xl max-lg:leading-[46.8px]">
                <span className="text-white">최고의 실력</span>을 가진 <br />
                <span className="text-white">외국인 인재</span>를 찾고 계신가요?
              </h1>
            </div>
          </div>
        </div>
        <div className={`flex gap-4 self-start font-black  ${styles.fadeInUp}`}>
          <p className="flex-auto font-black text-2xl max-lg:text-xl leading-[34px] text-white text-opacity-90 max-md:hidden">
            법률 및 인사관리 부담없이 <br />
            1주일 이내에 원격으로 채용해보세요.
          </p>
          <p className="flex-auto hidden max-md:block font-black text-2xl leading-[34px] text-[#FFFFFFCC] text-opacity-90 max-md:text-[18px] max-md:leading-[27px]">
            법률 및 인사관리 부담없이 1주일 이내에 원격으로 채용해보세요.
          </p>
        </div>
        <div className="self-start mt-2  text-lg  leading-[27px] font-black text-white max-md:ml-2.5 max-md:hidden">
          개발자가 필요하신가요?
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
