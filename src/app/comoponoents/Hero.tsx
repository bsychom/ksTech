'use client'
import Image from "next/image";
import "../globals.css";
import Link from "next/link";

export default function Hero() {
  return (
    <div className=" h-[400px] md:h-[500px] 2xl:h-[800px]  w-full bg-[url('/images/background/background.svg')] bg-no-repeat bg-cover bg-center">
      <div className="lg:w-1/2 pt-[70px] md:pt-6 md:px-6 lg:px-0 2xl:w-[1000px]   h-full  flex justify-center items-center ">
        <div className="w-full   lg:w-[70%]  bg-black/70 py-6  md:px-2 md:p-10 2xl:p-14  2xl:rounded-xl mx-2 md:mx-0 rounded-lg px-3">
          <h1 className=" text-white text-center lg:text-start text-base md:text-xl lg:text-2xl 2xl:text-3xl  font-bold font-['Roboto'] capitalize tracking-wide leading-relaxed 2xl:leading-relaxed">
            La Gestion De Votre Entreprise Vient De Devenir Plus Facile.
          </h1>
          <p className=" text-xs md:text-sm px-1.5 lg:px-0 lg:text-lg 2xl:text-xl font-semibold tracking-wide  py-5 text-white 2xl:w- 2xl:py-8 2xl:tracking-wider font-['Poppins']">
            Centralisez tout sur un environnement de câblage structuré et
            éliminez la complexité d&apos;avoir plusieurs infrastructures de
            câblage en place.
          </p>
          <div className="relative w-fit group">
            <div className="absolute w-0 h-full group-hover:w-full bg-[#20207B] rounded-lg transition-all duration-700 ease-in"></div>
            <div className="flex gap-3 bg-white items-center rounded-lg">
              <Link onClick={() =>{
                console.log('click')
              }} 
              href="#contact"
              className="  flex items-center gap-3 px-3 py-2 rounded-lg relative ">
                <p className=" group-hover:text-white leading-relaxed text-[#103535]  font-extrabold  font-['Roboto']">
                  Contact
                </p>{" "}
                <span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 group-hover:text-white group-hover:translate-x-2 transition-all duration-700 ease-in"
                  >
                    <path
                      d="M11.5 14.8334L16.5 9.0001M16.5 9.0001L11.5 3.16677M16.5 9.0001L1.5 9.0001"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
