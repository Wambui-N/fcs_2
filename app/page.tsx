import { Hero } from "@/components";
import Image from "next/image";
import { CustomButton } from "@/components";
import { HiArrowRight } from "react-icons/hi2";

export default function Home() {
  return (
    <div className="responsive">
      <Hero
        Heading="Environment/ tourism planning, development projects and technical writing specialists"
        Paragraph="Looking for an expert to handle your project? Talk to us before talking to somebody else, 
        because we could as well be the best. From management plans for conservancies or national parks, 
        tourism development projects to technical writing for technical oriented institutions."
        button={
          <CustomButton
            title="Contact Us"
            buttonStyle="bg-fcs_orange text-fcs_white hover:bg-fcs_white hover:text-fcs_orange rounded-full"
            href="#"
            size="lg"
            icon={<HiArrowRight />}
          />
        }
      />
    </div>
  );
}
