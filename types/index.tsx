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