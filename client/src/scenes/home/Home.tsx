import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreen = useMediaQuery("(min-width:160px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-4">
      {/* IMAGE AND MAIN HEADER */}
      <div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6">
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADING */}
          <div className="md:-mt-20">
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <img alt="home-page-text" src={HomePageText} />
              </div>
            </div>
            <p className="mt-8 text-sm">Gym Text</p>
          </div>
          {/* ACTIONS */}
          <div className="mt-8 flex items-center gap-8">
            <ActionButton setSelectedPage={setSelectedPage}>
              Learn More
            </ActionButton>
          </div>
        </div>
        {/* IMAGE */}
        <div
          className="flex basis-3/5 justify-center md:z-10
        md:ml-40 md:mt-16 md:justify-items-end"
        >
          <img alt="home-page-graphic" src={HomePageGraphic} />
        </div>
      </div>
    </section>
  );
};

export default Home;
