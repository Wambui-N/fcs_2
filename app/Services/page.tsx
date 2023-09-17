import { Hero, ServiceCardA, ServiceCardB, Footer } from "@/components";

export default function about() {
  return (
    <div>
      <div className="responsive">
        <Hero
          Heading="Our Service"
          Paragraph="Frontline Consulting is a Kenyan consultancy firm offering
        services and training in various aspects of management and the
        environment. Our projects range from ecosystem management, project
        development, developing management, and business plans to marketing
        and writing."
        />
        <div className="flex flex-col gap-12">
          <ServiceCardA
            Photo="Antelope Img.png"
            Title="Development Projects"
            Paragraph="Frontline Ecosystem Services offers comprehensive Environmental, Conservation and Tourism Consultancy. These includes:"
            points={[
              "Project conception",
              "Proposals writing",
              "Fund raising ",
              "Development of management plans for conservation protected areas",
              "Business plans for tourism and natural resource projects",
              "Institutional strategic plans and policy reports",
              "Specific programme reports in larger projects",
            ]}
          />
          <ServiceCardB
            Photo="Lioness Img.png"
            Title="EIA"
            points={[
              "Produce EIA reports",
              "Access impact assessment before and after project implementation",
              "Developing monitoring and evaluating plans",
            ]}
          />
          <ServiceCardA
            Photo="Elephant Img.png"
            Title="Mapping and cartography"
            points={[
              "Analysis of data",
              "Developing maps of natural resources",
              "Land cover maps",
              "Interpreting data and maps",
            ]}
          />
          <ServiceCardB
            Photo="Lion Img.png"
            Title="Training"
            points={[
              "Content development",
              "Data collection",
              "Natural resources and management techniques",
              "Report writing and analysis",
              "Environment and natural history concepts",
            ]}
          />
          <ServiceCardA
            Photo="Cheetah Img.png"
            Title="Writing Services"
            points={[
              "Writing and editing technical reports",
              "Writing newsletters and reports",
              "Blog writing and management on behalf of companies",
              "Article and copy writing for target audience",
              "Content development for websites, press releases",
            ]}
          />
          <ServiceCardB
            Photo="Tree Img.png"
            Title="Marketing"
            points={[
              "Email marketing and e-newsletter development",
              "Social media marketing and management",
              "Magazines and periodicals for targeted audience",
            ]}
          />
          <ServiceCardA
            Photo="Cub Img.png"
            Title="Tourism"
            points={[
              "Project and business plans",
              "New project design and development",
              "Customer service excellence design ",
              "Customer service research and reporting",
              "Marketing and sales plan development",
            ]}
          />
          <ServiceCardB
            Photo="Zebra Img.png"
            Title="Blogs"
            points={[
              "Writing conservation blogs",
              "Raise awareness through conservation story telling",
            ]}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
