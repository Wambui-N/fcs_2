import React from "react";
import { HeroProps } from "@/types";

const Hero = ({Heading, Paragraph, button}:HeroProps) => {
  return (
    <div className="py-24 flex flex-col items-center gap-6">
      <h1 className="text-fcs_orange text-5xl font-normal capitalize text-center self-stretch">
        {Heading}
      </h1>
      <h3 className="text-lg font-normal text-center self-stretch">
        {Paragraph}
      </h3>
      {button && button}
    </div>
  );
};

export default Hero;
