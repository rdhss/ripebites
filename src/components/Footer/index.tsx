import Image from "next/image";
import logo from "@/assets/icons/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="bg-primary/[0.03] pt-9 px-5 md:px-56 w-screen ">
      <div className="flex flex-col md:flex-row justify-between">
      <div className="md:mt-16">
        <Image src={logo} alt="logo" width={50} className="mb-5" />
        <p className="text-muted">
          Takeaway & Delivery template
          <br /> for small - medium businesses.
        </p>
      </div>
      <div className="mt-9 grid grid-cols-3">
        <div>
          <p className="font-semibold mb-2">Company</p>
          <ul>
            {[
              { name: "Home", path: "/" },
              { name: "Order", path: "/order" },
              { name: "Company", path: "/company" },
              { name: "FAQ", path: "/faq" },
            ].map((item, key) => (
              <li className="py-2" key={key}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-2">Template</p>
          <ul>
            {[
              { name: "Home", path: "/" },
              { name: "Order", path: "/order" },
              { name: "Company", path: "/company" },
              { name: "FAQ", path: "/faq" },
            ].map((item, key) => (
              <li className="py-2" key={key}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-2">Flowbase</p>
          <ul>
            {[{ name: "More Cloneables", path: "/" }].map((item, key) => (
              <li className="py-2" key={key}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      </div>
      <hr className="mt-40"/>
      <div className="w-full grid grid-cols-2 gap-8 md:gap-10 md:flex md:justify-center">
        <div className="py-16 text-muted">
          Made by rdhss - Powered by Webflow
        </div>
        <div className="flex items-center gap-2">
          <div className="relative border-[1px] border-muted/25 p-6 rounded-full">
            <FontAwesomeIcon icon={faInstagram}  className="absolute top-[8.6px] left-[10px] w-7 text-muted/80"/>
          </div>
          <div className="relative border-[1px] border-muted/25 p-6 rounded-full">
            <FontAwesomeIcon icon={faYoutube}  className="absolute top-[11.6px] left-[10px] w-7 text-muted/80"/>
          </div>
          <div className="relative border-[1px] border-muted/25 p-6 rounded-full">
            <FontAwesomeIcon icon={faTwitter}  className="absolute top-[9.6px] left-[10px] w-7 text-muted/80"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
