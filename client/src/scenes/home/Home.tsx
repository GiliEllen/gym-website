import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/logo-lb-no-bg-hr.svg";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import { motion } from "framer-motion";
import { fadeIn } from "@/shared/animations";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-4">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div 
      className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
      onViewportEnter={() =>setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADING */}
          <motion.div
            className="md:-mt-20"
            variants={fadeIn("right", "spring", 0, 1, "after")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <img alt="home-page-text" src={HomePageText} />
              </div>
            </div>
            <p className="mt-8 text-sm">Gym Text</p>
          </motion.div>
          {/* ACTIONS */}
          <motion.div className="mt-8 flex items-center gap-8"
          variants={fadeIn("right", "spring", 0.2, 1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Learn More
            </ActionButton>
          </motion.div>
        </div>
        {/* IMAGE */}
        <div
          className="flex basis-3/5 justify-center md:z-10
        md:ml-40 md:mt-16 md:justify-items-end"
        >
          <img alt="home-page-graphic" src={HomePageGraphic} />
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
