"use client";

import React from "react";
import {Link} from "@nextui-org/react";
import { InfoProps } from "@/types";

const Info = ({ Heading, Paragraph, href, LinkTitle }: InfoProps) => {
  return (
    <div className="flex flex-col items-start self-stretch gap-1">
      <h1 className="uppercase pb-1 font-normal text-base">{Heading}</h1>
      <p>{Paragraph}</p>
      <Link
        className="text-fcs_orange font-medium hover:text-fcs_orange/75"
        href={`${href}`}
        size="md"
      >
        {LinkTitle}
      </Link>
    </div>
  );
};

export default Info;
