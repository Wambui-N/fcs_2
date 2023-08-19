const ServiceCardA = ({Title, Paragraph, points}:ServiceCardProps) => {
  return (
    <div className="grid grid-cols-2">
      <div className="flex flex-col items-start self-stretch gap-1">
        <h6 className="uppercase pb-2 font-normal text-base">{Title}</h6>
        <p>{Paragraph}</p>
        <ul className="marker:text-fcs_black/50 list-disc list-inside">
          {points.map((items, index) => (
            <li className="list-inside w-full py-1" key={index}>{items}</li>
          ))}
        </ul>
      </div>
      <Image
        src="/Antelope Img.png"
        alt="Picture of the author"
        width={500}
        height={500}
        className="h-full w-auto rounded-xl"
      />
    </div>
  );
};

export default ServiceCardA;
