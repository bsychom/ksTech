"use client";

import Link from "next/link";
import "../globals.css";
import Image from "next/image";
import { useEffect, useState } from "react";
export default function Header() {
  const [displayMenu, setDisplayMenu] = useState<boolean>(false);
  const [accueil, setAccueil] = useState("text-[#0895FB]");
  const [propos, setPropos] = useState("text-white");
  const [service, setService] = useState("text-white");
  const array = [setAccueil, setPropos, setService];

  const handleClick = () => {
    setDisplayMenu(false);
  };

  const handleColor = (section: string) => {
    switch (section) {
      case "accueil":
        setAccueil("text-[#0895FB]");
        setPropos("text-white");
        setService("text-white");
        break;
      case "propos":
        setAccueil("text-white");
        setPropos("text-[#0895FB]");
        setService("text-white");
        break;
      case "service":
        setAccueil("text-white");
        setPropos("text-white");
        setService("text-[#0895FB]");
        break;
    }
  };

  return (
    <section id="home">
      <div className="w-full relative hidden md:block">
        <div className="absolute  md:w-[25%] lg:w-[30%] 2xl:w-[38%] h-[130px] 2xl:h-[150px]   custum-clip bg-[#20207B]"></div>
        <div className="w-full   relative  h-[130px] 2xl:h-[150px] flex items-center pb-6  container  ">
          <div className="w-[20%] 2xl:w-[23%] flex justify-center items-center">
            <Image
              className="w-[70%] lg:w-[80%]"
              src="/images/icons/logo.svg"
              alt="logo"
              width={100}
              height={100}
            />
          </div>
          <div className=" flex-1 flex justify-center  lg:justify-end  gap-10 2xl:gap-16  items-center">
            <div className="flex  gap-4 flex-col lg:flex-row">
              <div className="flex justify-center lg:justify-start">
                <Image
                  className="w-7 lg:w-10 pt-1"
                  src="/images/icons/address.svg"
                  alt="adress"
                  width={100}
                  height={100}
                />
              </div>
              <div className="flex flex-col g">
                <h1 className="font-medium tracking-wide text-[#001F3F] text-sm lg:text-base hidden lg:block">
                  Address
                </h1>
                <div className="text-[#808080] text-xs text-center lg:text-start lg:text-sm">
                  <p>7190 Rue Jarry H1J 1G5 </p>
                  <p>Anjou Québec</p>
                </div>
              </div>
            </div>
            <div className="flex  gap-4 flex-col lg:flex-row">
              <div className="flex justify-center lg:justify-start">
                <Image
                  className="w-7 lg:w-10 pt-1"
                  src="/images/icons/phone.svg"
                  alt="adress"
                  width={100}
                  height={100}
                />
              </div>
              <div className="flex flex-col gap-1">
                <h1 className="hidden lg:block font-medium tracking-wide text-[#001F3F] text-sm lg:text-base">
                  Numéro de téléphone
                </h1>
                <div className="text-[#808080] text-xs lg:text-sm">
                  <p>+1 (438) 464-2161 </p>
                </div>
              </div>
            </div>
            <div className="flex  gap-4 flex-col lg:flex-row">
              <div className="flex justify-center lg:justify-start">
                <Image
                  className="w-7 lg:w-10 pt-1"
                  src="/images/icons/email.svg"
                  alt="adress"
                  width={100}
                  height={100}
                />
              </div>
              <div className="flex flex-col gap-1">
                <h1 className=" hidden lg:block font-medium tracking-wide text-[#001F3F] text-sm lg:text-base">
                  Email
                </h1>
                <div className="text-[#808080] text-xs lg:text-sm">
                  <p>info@kstechnologie.com </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" container  relative">
          <div className="absolute bg-black w-full -top-[30px]  text-white flex items-center">
            <div className="w-[60%] flex justify-around font-semibold capitalize">
              <Link
                onClick={() => {
                  handleColor("accueil");
                }}
                href="#home"
                className={`${accueil}`}
              >
                Accueil
              </Link>
              <Link
                onClick={() => handleColor("propos")}
                href="#about"
                className={`${propos}`}
              >
                à propos
              </Link>
              <Link
                onClick={() => handleColor("service")}
                href="#services"
                className={`${service}`}
              >
                Services
              </Link>
            </div>
            <div className="w-[40%] flex justify-end relative">
              <Link
                href="#contact"
                className="p-4 font-black tracking-wide bg-[#20207B]"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full relative md:hidden">
        <div className="    bg-black text-white flex items-center justify-between min-h-[70px] max-h-[70px] h-[70px] fixed w-full z-50">
          <div>
            <Link href="/">
              <Image
                className="w-52"
                src="/images/icons/logo.svg"
                width={10}
                height={10}
                alt="logo"
              />
            </Link>
          </div>
          <div className="pr-3  ">
            <button
              className={` ${displayMenu ? "p-1" : "p-1.5"} rounded-sm`}
              onClick={() => setDisplayMenu(!displayMenu)}
            >
              {displayMenu ? (
                <Image
                  src="/images/icons/x.svg"
                  alt="icon"
                  width={10}
                  height={10}
                  className="w-6"
                />
              ) : (
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={` fixed pt-[70px] h-full w-full z-40 bg-[#1E1E1E] text-white flex flex-col justify-around ${
            displayMenu ? "" : "hidden"
          }`}
        >
          <div className={`flex flex-col w-[85%] mx-auto capitalize gap-5`}>
            <Link
              className={`${accueil}`}
              href="#home"
              onClick={() => {
                handleClick();
                handleColor("accueil");
              }}
            >
              Accueil
            </Link>
            <Link
              onClick={() => {
                handleColor("propos");
                handleClick();
              }}
              className={`${propos}`}
              href="#about"
            >
              à propos
            </Link>
            <Link
              onClick={() => {
                handleClick();
                handleColor("service");
              }}
              className={`${service}`}
              href="#services"
            >
              Nos Services
            </Link>
          </div>

          <div className={`flex flex-col w-full mx-auto gap-5 `}>
            <div className="flex gap-2 w-[80%] mx-auto  ">
              <Image
                className={`w-9 `}
                src="/images/icons/homemb.svg"
                alt="icon"
                width={10}
                height={10}
              />
              <div>
                <h4 className="text-white font-['Poppins'] tracking-wider">
                  Address
                </h4>
                <p className="text-[#808080] text-sm font-['Poppins']">
                  7190 Rue Jarry H1J 1G5 Anjou Québec
                </p>
              </div>
            </div>
            <div className="flex gap-2 w-[80%] mx-auto ">
              <Image
                className={`w-9 `}
                src="/images/icons/telemb.svg"
                alt="icon"
                width={10}
                height={10}
              />
              <div>
                <h4 className="text-white font-['Poppins'] tracking-wider">
                  Numéro de téléphone
                </h4>
                <p className="text-[#808080] text-sm font-['Poppins']">
                  +1 (438) 464-2161
                </p>
              </div>
            </div>
            <div className="flex gap-2 w-[80%] mx-auto  ">
              <Image
                className={`w-9`}
                src="/images/icons/emailmb.svg"
                alt="icon"
                width={10}
                height={10}
              />
              <div>
                <h4 className="text-white font-['Poppins'] tracking-wider">
                  Email
                </h4>
                <p className="text-[#808080] text-sm font-['Poppins']">
                  info@kstechnologie.com
                </p>
              </div>
            </div>
            <div className={`w-[80%] mx-auto pt-8  `}>
              <Link onClick={handleClick} href="#contact" className=" ">
                <p className="w-full text-white bg-[#20207B] py-5 rounded-md font-['Poppins'] font-bold tracking-wider text-center">
                  Contact
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
