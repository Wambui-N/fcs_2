"use client";

import React from "react";
import Image from "next/image";
import { CustomButton } from "@/components";
import {
  Navbar,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="nav bg-fcs_white  border-b-1 border-fcs_black/10"
      height='auto'
      maxWidth='full'
    >
      <div className="flex items-center p-0">
        
        <NavbarBrand className="pl-[1.5rem] md:pl-[3rem] lg:pl-[12rem]">
          <a href="/">
            <Image
              src="/Dark Logo L.png"
              alt="logo"
              width={200}
              height={200}
              className="max-w-[100px] md:max-w-[150px] lg:max-w-[150px] my-1"
            />
          </a>
        </NavbarBrand>
      </div>
      <NavbarContent className="hidden md:flex gap-4" justify="center">
        <NavbarItem>
          <Link className="text-fcs_orange font-normal text-base" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-fcs_orange font-normal text-base" href="#">
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-fcs_orange font-normal text-base" href="#">
            Our Services
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link className="text-fcs_orange font-normal text-base" href="#">
            Portfolio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-fcs_orange font-normal text-base" href="#">
            Blog
          </Link>
        </NavbarItem>
      </NavbarContent>
      <div className="flex justify-end items-center p-0">
        <NavbarItem className="mr-[1.5rem] md:mr-[3rem] lg:mr-[12rem]">
          <CustomButton
            title="Contact Us"
            buttonStyle="bg-fcs_white border border-fcs_black rounded-full text-sm font-medium text-fcs_black"
            href="#"
          />
        </NavbarItem>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />
      </div>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
