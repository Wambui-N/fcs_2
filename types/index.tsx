import React, { MouseEventHandler } from "react";


export interface ButtonProps {
    href?: string;
    buttonStyle: string;
    title: string;
    size: "sm" | "md" | "lg";
    icon?: React.ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    type?: "button" | "submit" | "reset" | undefined;
}

export interface HeroProps {
    Heading: string;
    Paragraph: string;
    button?: React.ReactNode;
}

export interface InfoProps {
    Heading: string;
    Paragraph: string;
    points?: string[];
    href?: string;
    LinkTitle?: string;
}

export interface ProjectsFeatureProps {
    ProjectImg: string[];
    ProjectTitle: string[];
}

export interface ActiveLinkProps {
    children: React.ReactNode;
    href: string;
}

export interface SarahProps {
    Potrait: string;
    points?: string[];
    Name: string;
    Paragraph: string;
}

export interface DanielProps {
    Potrait: string;
    points?: string[];
    Name: string;
    Paragraph: string;
    Paragraph2: string;
    points2?: string[];
    Paragraph3: string;
}

export interface ServiceCardProps {
    Photo: string;
    Title: string;
    Paragraph?: string;
    points: string[];
}