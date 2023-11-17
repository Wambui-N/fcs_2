import {
  Hero,
  CustomButton,
  Info,
  ProjectsFeature,
  Sarah,
  Daniel,
  Footer,
} from "@/components";
import { HiArrowRight } from "react-icons/hi2";

export default function Home() {
  return (
    <div>
      <div className="responsive flex flex-col gap-6">
        <Hero
          Heading="About Us"
          Paragraph="Frontline Consulting is a Kenyan consultancy firm offering
        services and training in various aspects of management and the
        environment. Our projects range from ecosystem management, project
        development, developing management, and business plans to marketing
        and writing."
        />
        <div className="flex flex-col gap-8">
          <Info
            Heading="Our Mission"
            Paragraph="Listen, simplifying and deliver quality planning and management projects"
            href="#"
            LinkTitle="See our approach"
          />
          <Info
            Heading="Our Vision"
            Paragraph="Frontline Consultants works to become your one stop shop for professional
          support in project management and development:"
            points={[
              "We provide all environmental services, from assessment to audits",
              "We do management plans for conservation areas suchconservancies and national parks/reserves",
              "We develop business and management plans",
              "We write and edit all the technical reports and business proposals",
            ]}
            href="#"
            LinkTitle="See our approach"
          />
          <Info
            Heading="Who Works With Us"
            Paragraph="Contact us if:"
            points={[
              "You have a business plan that needs to be done right",
              "You desire environmental services for your project to be handled by experts",
              "You want your management projects and plans to be result oriented",
              "You have a marketing and publicity campaign that you are not sure how to handle",
              "You need to develop a business proposal for your important project in tourism or conservation",
              "You have a technical report or institutional publication to write or edit",
            ]}
            href="#"
            LinkTitle="See our approach"
          />
        </div>
        <Hero Heading="Our Team" Paragraph="Get to know us." />
        <Daniel
          Potrait="Daniel"
          Name="Daniel Ndung'u"
          Paragraph="Daniel is the founding and managing partner, Frontline Consulting. He
        is a consultant ecologist, a writer and a hospitality expert and
        trainer. He has previously worked as a wildlife research scientist in
        Kenya and as a communications expert in both public and private
        sectors. He is regular commentator and blogger on environment,
        conservation, tourism, business and politics. In the tourism industry,
        Daniel has served voluntary services at the following institutions:"
          points={[
            "KATO Marketing Advisory Committee",
            "KTF Environmental Committee",
            "Ecotourism Kenya Environmental Committee of KTF",
          ]}
          Paragraph2="Daniel is an extensively experienced and a highly engaged consultant in a wide array of areas, including:"
          points2={[
            "Technical Writing and Editing",
            "Customer Service Excellence in Hospitality",
            "Environment and Tourism Development Projects",
            "Management, Strategic and Business Plans",
            "Conservancy and National Parks/Game Reserves management plans",
          ]}
          Paragraph3="Daniel offers training and lecturers on customer service, conservation and hospitality"
        />
        <Sarah
          Potrait="Sarah"
          Name="Sarah Mwakha Omusula"
          Paragraph="Sarah is a consultant and partner at Frontline Consultants.
        She has vast interests in environment and conservation, especially natural resources management.
        She is also an expert in:"
          points={[
            "Environmental Impact Assessments and Audits",
            "Project management",
            "Ecological monitoring and data collection",
            "Monitoring and evaluation.",
          ]}
        />
      </div>
      <Footer />
    </div>
  );
}
