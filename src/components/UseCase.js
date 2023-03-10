import React from 'react';
import Link from '@docusaurus/Link';
import { ChevronRight } from 'lucide-react';

// type UseCaseProps = {
//   title: string;
//   imgPath: string;
//   slug: string;
//   children: React.ReactNode;
// }

export function UseCase({ title, Svg, slug, children }) {
  return (
    <div className="flex flex-col justify-between mb-">
      <div className="w-16 h-16">
        <Svg className="w-full h-full" />
      </div>
      <div className="font-bold text-2xl my-4">{title}</div>
      <p className="relative pl-4 mb-7 before:w-[4px] before:rounded-[4px] before:absolute before:content-[''] before:left-0 before:top-0 before:bottom-0 before:bg-gradient-to-t from-[#6A41BD] via-[#2F73DA_50.11%] to-[#6BCDDB]">{children}</p>
      <Link to={slug} className="flex items-center">Read more <ChevronRight className="ml-3"/></Link>
    </div>
  )
}
