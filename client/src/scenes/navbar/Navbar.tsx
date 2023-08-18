import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";

type Props = {};

const Navbar = (props: Props) => {
  const flexBetween = "flex items-center justify-between";
  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/*LEFT*/}
            <img alt="logo" src={Logo} />

            {/*RIGHT*/}
            <div className={`${flexBetween} w-3/5`}>
              <p>Home</p>
              <p>Benefits</p>
              <p>Our Classes</p>
              <p>Contact Us</p>

              {/*SIGN In and become a member*/}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;