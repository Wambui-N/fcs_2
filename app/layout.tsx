import React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Providers } from "./providers";
import { Footer, Navbar } from "@/components";

const montserrat = Montserrat();

export const metadata: Metadata = {
  title: "Frontline Consulting",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://friconix.com/cdn/friconix.js">
          {" "}
        </script>
      </head>
      <body className={`${montserrat.className} bg-fcs_white`}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
