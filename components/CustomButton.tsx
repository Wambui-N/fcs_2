"use client"

import React from "react";
import { Button, ButtonGroup } from "@nextui-org/react";
import { ButtonProps } from "@/types";
import { link } from "fs";
import { title } from "process";

export default function App({title, buttonStyle, href }: ButtonProps) {
  return (
    <a href={`${href}`}>
      <Button
        className={`${buttonStyle}`}
        size="sm"
      >
        {title}
      </Button>
    </a>
  );
}
