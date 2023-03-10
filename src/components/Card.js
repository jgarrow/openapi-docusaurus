import React from 'react';
import Link from '@docusaurus/Link';
import { ArrowRight } from 'lucide-react';

export default function Card({
  Svg,
  title,
  description,
  link,
}) {
  return (
    <div className='p-4 border border-solid border-[#E4E8EE] rounded-lg hover:border-[var(--ifm-color-primary)]'>
      <div className="w-[40px] h-[40px]">
        <Svg className="w-full h-full" />
      </div>
      <Link to={link} className="my-2 font-bold text-xl flex items-center">{title} <ArrowRight className='ml-4' /></Link>
      <p>{description}</p>
    </div>
  );
}
