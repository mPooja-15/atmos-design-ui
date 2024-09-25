import React from 'react';

interface ContactInfoProps {
  description: string;
  phone: string;
  email: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ description, phone, email }) => {
  return (
    <div className="flex flex-col grow items-start max-md:mt-10">
      <div className="self-stretch text-[14px] leading-[21px] text-[#343741] font-black	">{description}</div>
      <div className="mt-5 text-[#5E626F] font-black	 text-[13px]">{phone}</div>
      <div className="mt-2 text-[#5E626F] font-black text-[13px]">{email}</div>
    </div>
  );
};

export default ContactInfo;