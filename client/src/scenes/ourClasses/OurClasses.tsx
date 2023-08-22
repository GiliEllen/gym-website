import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image01.jpg";
import image2 from "@/assets/image02.jpg";
import image3 from "@/assets/image03.jpg";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Strength Training Classes",
    description:
      "Full Body Studio offers a dynamic Strength Training class designed to sculpt and tone your body while boosting your confidence.",
    image: image1,
  },
  {
    name: "Step Classes",
    description:
      "Our engaging Step Classes combine energetic choreography with cardio, giving you a high-energy workout that's both fun and effective.",
    image: image2,
  },
  {
    name: "Training Classes",
    description:
      "Experience tranquility and flexibility in our Flow Classes, where the fusion of yoga and movement creates a harmonious blend of physical and mental wellness.",
    image: image3,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Take a look at our classes
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[1500px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;