import { ArrowSquareRight } from "phosphor-react";

interface InterestProps {
  title: string;
  subtitle: string;
  link: string;
}

export function Interest({ title, subtitle, link }: InterestProps) {
  return (
    <div className="flex items-center justify-between mt-6 border rounded border-blue-900 p-4 gap-4">
      <div className="">
        <h2 className="text-base text-bold text-gray-900 font-bold">{title}</h2>
        <span className="text-xs text-gray-700">{subtitle}</span>
      </div>
      <a href={link} className="transition-transform hover:translate-x-1"><ArrowSquareRight size={40} color="RGB(30,58,138)" /> </a>
    </div>

  )
}