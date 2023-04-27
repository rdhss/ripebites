import React, { useState } from "react";
import logo from "@/assets/icons/logo.svg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartShopping, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { NextRouter, useRouter } from "next/router";
import Link from "next/link";

const Header  = () => {
  const [showNav, setShowNav] = useState<boolean>(false);
  const router : NextRouter = useRouter();
  return (
    <>
      <header className="fixed bg-white w-full flex justify-between h-20 px-5 items-center z-50">
        <div className="w-full z-50 bg-white flex justify-between h-full items-center">
          <div>
            <Image src={logo} alt="logo" width={30} />
          </div>
          <div className="text-black flex space-x-5 relative">
            <button className="w-14 h-14 rounded-lg bg-primary text-white relative flex justify-center items-center">
              <FontAwesomeIcon icon={faShoppingCart} width={20}/>
              <span className="absolute bg-white w-6 h-6 rounded-full text-primary flex items-center justify-center top-[-5px] shadow-md right-[-10px]">
                0
              </span>
            </button>
            <button
              onClick={() => setShowNav(!showNav)}
              className="w-14 h-14 rounded-lg bg-gray-200/40 relative text-heading1 flex justify-center items-center"
            >
              <FontAwesomeIcon icon={faBars} width={20}/>
            </button>
          </div>
        </div>
        <div
          className={`absolute bg-white w-full left-0 pl-5 top-20 text-xl text-heading1 transition-all duration-75 ${
            showNav ? "animate-slide-bottom" : "animate-slide-top"
          }`}
        >
          <ul className="z-[-1]">
            {[{name : "Home", path : '/'}, {name : "Order", path : '/order'}, {name : "Company", path : '/company'}, {name : "FAQ", path : '/faq'}]?.map((item, idx) => (
              <>
                <li className="py-5 ">
                  <Link
                    href={item.path}
                    className={`
                    ${router.pathname === item.path && 'text-primary'}
                    `}
                  >
                    {item.name}
                  </Link>
                </li>
              </>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
