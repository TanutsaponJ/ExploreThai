import Button from "../../utils/Button";
import { IoIosPartlySunny, IoIosRainy, IoIosSnow } from "react-icons/io";

const Season = () => {
  return (
    <div className="container mx-auto max-w-screen-2xl px-4 lg:px-28 py-20 border-b-2">
      <div>
        <div className="flex flex-col items-center mb-4 lg:items-start">
          <h1 className="text-5xl font-semibold uppercase text-gradient text-left md:p-1.5 inline-flex">
            Season Highlight
          </h1>
        </div>

        <div className="flex flex-col gap-5 md:flex-row items-center justify-around ">
          <Button title="Summer" icon={<IoIosPartlySunny />} />
          <Button title="Rainy" icon={<IoIosRainy />} />
          <Button title="Winter" icon={<IoIosSnow />} />
        </div>
      </div>
    </div>
  );
};

export default Season;
