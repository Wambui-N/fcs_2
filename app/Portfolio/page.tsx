import React from "react";
import { Footer, Hero, ServiceCardA, ServiceCardB } from "@/components";
import Image from "next/image";8

export default function about() {
  return (
    <div>
      <div className="responsive">
        <Hero
          Heading="Portfolio"
          Paragraph="Management Plans for Conservation"
        />
        <ServiceCardA
          Title="Amboseli Ecosystem Management Plan"
          Paragraph="Amboseli Ecosystem Management Plan was the first ecosystem management plan in Kenya.
          Daniel was involved as"
          points={[
            "Editor of the Management Plan",
            "Tourism Expert and chair of the Tourism Working Committee",
          ]}
          Photo="Amboseli.jpg"
        />
        <ServiceCardB
          Title="Lake Solai"
          Paragraph="Daniel was the technical consultant who facilitated development of the management plan throughout the process including stakeholder meetings and validation"
          Photo="Solai.png"
          points={[
            " ",
          ]}
        /><ServiceCardA
        Title="Maasai Mara"
        Paragraph="Daniel was involved as a tourism expert and secretary to the Tourism Working Group"
        points={[
          "",
        ]}
        Photo="Maasai.png"
      />
      <ServiceCardB
        Title="Lake Bogoria"
        Paragraph="Daniel was involved as a tourism expert and developed the tourism programme"
        Photo="Bogoria.png"
        points={[
          "",
        ]}
      />
      <ServiceCardA
        Title="Amboseli Ecosystem"
        Paragraph="State of Amboseli Conservancies 2020 highlights the state of all conservancies in the Amboseli ecosystem"
        points={[
          "Daniel was the consultant writer ",
        ]}
        Photo="Amboseli Eco.jpg"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
        <Image 
        src="/01.png"
        alt=" "
        width={500}
        height={500}
        className="rounded-xl w-screen md:w-full h-auto"
        />
        <Image 
        src="/02.png"
        alt=" "
        width={500}
        height={500}
        className="rounded-xl w-screen md:w-full h-auto"
        />
        <Image 
        src="/03.png"
        alt=" "
        width={500}
        height={500}
        className="rounded-xl w-screen md:w-full h-auto"
        />
      </div>
      </div>
      <Footer />
    </div>
  );
}
