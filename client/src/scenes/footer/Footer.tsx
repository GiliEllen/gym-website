import Logo from "@/assets/logo-lb-no-bg-hr.svg";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} className="w-60"/>
          <p>© Nofar Full Body Studio All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          {/* <h4 className="font-bold">Links</h4> */}
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5"></p>
          <p>Nofar.fullbodystudio@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;