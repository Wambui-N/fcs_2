export interface ButtonProps {
    href: string;
    buttonStyle: string;
    title: string;
    size: "sm" | "md" | "lg";
    icon?: React.ReactNode;
}

export interface HeroProps {
    Heading: string;
    Paragraph: string;
    button?: React.ReactNode;
}

export interface InfoProps {
    Heading: string;
    Paragraph: string;
    href: string;
    LinkTitle: string;
}

export interface ProjectsFeatureProps {
    ProjectImg: string[];
    ProjectTitle: string[];
}