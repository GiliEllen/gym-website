import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  SparklesIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/benefits-graphic.png"
import Sparkles from "@/assets/shape3.png"
import Waves from "@/assets/shape1.png"
import Benefit from "./Benefit";
import { fadeIn } from "@/shared/animations";


const benefits: Array<BenefitType> = [
  {
    icon: <SparklesIcon className="h-6 w-6" />,
    title: "Choose the rythm that fits YOU",
    description:
      "Choose between the slow-flow class, the high-paced step class or the strength class - Maybe try all three!",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "You are in this together!",
    description:
      "You are part of a group that tries to be their better selfs - you are not alone in this!",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "You can focus on the best You - and let our mentors do the hard work!",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          variants={fadeIn("left", "spring", 0.2, 1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <HText>MORE THAN JUST GYM.</HText>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <img src={Waves} alt="waves-element" className="absolute w-52 -right-32 -top-20 z-[-1]"/>
              {/* <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves"> */}
                <motion.div
                  variants={fadeIn("left", "spring", 0, 1)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <HText>
                    TRUE CHANGE COMES FROM{" "}
                    <span className="text-primary-500">YOU</span>
                  </HText>
                </motion.div>
              {/* </div> */}
            </div>

            {/* DESCRIPT */}
            <motion.div
              variants={fadeIn("left", "spring", 0.2, 1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <p className="my-5">
                Full Body Studio transcends the ordinary – it's a nurturing
                community that encompasses every facet of a woman's journey. I'm not just a trainer; 
                I'm a mentor dedicated to guiding your transformation. True empowerment
                springs from within, which is why we offer physical training and
                workshops focusing on mindset, self-care, and growth.
              </p>
              <p className="mb-5">
                Here, members forge unwavering
                motivation. Whether you're a fitness
                enthusiast or new to wellness, Full Body Studio is a haven to
                embrace your uniqueness, embarking on a path to a healthier,
                happier you.
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <img src={Sparkles} alt="sparkles-element" className="absolute w-32 left-52 -top-16"/>
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>

            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
