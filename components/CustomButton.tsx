"use client";

import React from "react";
import { Button, ButtonGroup } from "@nextui-org/react";
import { ButtonProps } from "@/types";
import { link } from "fs";
import { title } from "process";

export default function App({ title, icon, buttonStyle, href, size }: ButtonProps) {
  return (
    <a href={`${href}`}>
      <Button className={`${buttonStyle}`} size={`${size}`}>
        {title}
        {icon && <span className="icon">{icon}</span>}
      </Button>
    </a>
  );
}
