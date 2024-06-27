"use client";
import Image from "next/image";
import GoogleMap from "./GoogleMaps";

export default function ContactUs() {
  return (
    <div className="w-full relative bg-[#001F3F] py-14">
      <div className="absolute -top-14 -right-14 w-60 h-60 bg-white/70 blur-3xl"></div>
      <div className="absolute -bottom-14 -left-14 w-60 h-60 bg-white/70 blur-3xl"></div>
      <div className="container mx-auto">
        <div className=" w-full flex justify-center ">
          <div className="w-fit  relative">
            <div className="absolute w-[50%] right-0 bg-[#0895FB] bottom-0 h-[3px] rounded-full"></div>
            <div>
              <h1 className="font-['Poppins'] text-lg md:text-xl    lg:text-2xl  2xl:text-3xl  pb-4  text-white   font-extrabold capitalize tracking-wide">
                Demandez une estimation gratuite
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full lg:flex pt-10 text-white ">
          <div className="w-full lg:w-1/2  mx-auto">
            <div className="w-[85%] md:w-[75%] lg:w-[70%]  mx-auto  ">
              <div className="pb-5">
                <h2 className=" font-['Poppins'] text-xl font-extrabold tracking-wider">
                  Contactez-Nous
                </h2>
              </div>
              <form className="w-full space-y-7 relative" action="">
                <div className="flex flex-col gap-3">
                  <label
                    className="font-extralight text-base font-['Poppins'] text-[#CCC6C6]"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="bg-[#0E253D] border-[1px] border-[#8D8D8D] placeholder:text-[#8D8D8D]  rounded-md py-3 px-3 placeholder:text-sm outline-none text-sm font-['Poppins'] text-[#8D8D8D]"
                    placeholder="Rachel Joe"
                    name="name"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label
                    className="font-extralight text-base font-['Poppins'] text-[#CCC6C6]"
                    htmlFor="email"
                  >
                    E-mail
                  </label>
                  <input
                    className="bg-[#0E253D] border-[1px] border-[#8D8D8D] placeholder:text-[#8D8D8D]  rounded-md py-3 px-3 placeholder:text-sm outline-none text-sm font-['Poppins'] text-[#8D8D8D]"
                    placeholder="Rachel@domain.com"
                    name="emial"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label
                    className="font-extralight text-base font-['Poppins'] text-[#CCC6C6]"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className="bg-[#0E253D] text-[#8D8D8D] border-[1px] border-[#8D8D8D] placeholder:text-[#8D8D8D]  rounded-md py-3 px-3 placeholder:text-sm outline-none text-sm font-['Poppins'] min-h-24 max-h-36"
                    placeholder="Tapez votre requête ici...."
                    name="message"
                    id=""
                  ></textarea>
                </div>
                <div className="w-full flex justify-center lg:justify-start">
                  <button className="flex items-center gap-4 font-bold text-base  lg:text-lg tracking-wide bg-[#0895FB] rounded-lg p-2   md:p-3">
                    Soumettre
                    <span>
                      <Image
                        className="w-4 md:pt-1 lg:pt-0 lg:w-6 "
                        src="/images/icons/RightWhite.svg"
                        alt="icon"
                        width={0}
                        height={0}
                      />
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex-1 flex justify-center items-center relative">
            <div className="w-full  pt-10">
              <GoogleMap />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
