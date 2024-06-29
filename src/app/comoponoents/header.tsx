import Link from "next/link";
import "../globals.css";
import Image from "next/image";
export default function Header() {
  return (
    <div className="w-full relative">
      <div className="absolute  md:w-[25%] lg:w-[30%] 2xl:w-[38%] h-[130px] 2xl:h-[150px]   custum-clip bg-[#20207B]"></div>
      <div className="w-full   relative  h-[130px] 2xl:h-[150px] flex items-center pb-6  container  ">
        {/* <div className="bg-black absolute -bottom-7 2xl:-bottom-8 text-white container   flex">
          <div className="w-[40%] flex justify-between pl-4 py-4 2xl:py-6 2xl:pl-6 font-semibold capitalize">
            <div>
              <p>Accueil</p>
            </div>
            <div>
              <p>à propos</p>
            </div>
            <div>
              <p>Nos Services</p>
            </div>
          </div>
          <div className="w-[60%] flex justify-end ">
            <button className="bg-[#20207B] p-4 ">
              <p className="font-black tracking-wide">Contact </p>
            </button>
          </div>
        </div> */}
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
                <p >7190 Rue Jarry H1J 1G5 </p>
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
            <Link href='/'>Accueil</Link>
            <Link href='/'>à propos</Link>
            <Link href='/'>Services</Link>
          </div>
          <div className="w-[40%] flex justify-end">
            <button className="p-4 bg-[#20207B]">
            <p className="font-black tracking-wide">Contact </p>
            </button>
          </div>
          

        </div>
      </div>
    </div>
  );
}
