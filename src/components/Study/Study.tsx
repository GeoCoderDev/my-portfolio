export interface StudyProps {
  urlImage: string;
  entityName: string;
  date: string;
  description: string;
}

const Study = ({
  study: { date, description, entityName, urlImage },
}: {
  study: StudyProps;
}) => {
  return (
    <div className="-border-2 snap-start w-full flex flex-col items-start justify-evenly text-2xl text-[1.65rem] text-cerulean-blue-700 gap-y-2">
      <h3 className="after:rounded-[50%] after:aspect-square after:w-[1.2rem] after:left-[calc(5%)] after:translate-y-[35%] after:-translate-x-[36%]  after:bg-cerulean-blue-700 after:absolute">
        {date}
      </h3>

      <div className="flex items-center max-md:justify-center justify-between flex-wrap gap-y-4 gap-x-2 w-full ">
        <div className="-border-2 text-black flex flex-col gap-y-2 text-sm max-md:max-w-[100%] max-w-[70%]">
          <h4 className="text-2xl text-black">{entityName}</h4>
          {description}
        </div>
        <img
          className="-max-sm:h-[10rem] h-[11rem] -border-2"
          src={urlImage}
          alt={`Logo o Logos - ${entityName}`}
        />
      </div>
    </div>
  );
};

export default Study;
