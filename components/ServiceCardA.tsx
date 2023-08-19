import React from "react";
import Image from "next/image";
import { ServiceCardProps } from "../types";

const ServiceCardA = ({ Photo, Title, Paragraph, points}:ServiceCardProps) => {
  return (
    <div className="grid grid-cols-2 gap-8">
      <div className="flex flex-col items-start self-center gap-1">
        <h6 className="uppercase pb-2 font-normal text-base">{Title}</h6>
        <p>{Paragraph}</p>
        <ul className="marker:text-fcs_black/50 list-disc list-inside">
          {points.map((items, index) => (
            <li className="list-inside w-full py-1" key={index}>{items}</li>
          ))}
        </ul>
      </div>
      <Image
        src={`/${Photo} Img.png`}
        alt="Picture of the author"
        width={500}
        height={500}
        className="w-full h-auto rounded-xl object-cover"
      />
    </div>
  );
};

export default ServiceCardA;
