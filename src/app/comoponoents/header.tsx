import "../globals.css";
import Image from "next/image";
export default function Header() {
  return (
    <div className="w-full relative">
      <div className="absolute  md:w-[25%] lg:w-[30%] 2xl:w-[38%] h-[130px] 2xl:h-[150px]   custum-clip bg-[#20207B]"></div>
      <div className="w-full   relative  h-[130px] 2xl:h-[150px] flex items-center pb-6  container mx-auto">
        <div className="bg-black absolute -bottom-7 2xl:-bottom-8 text-white container mx-auto mt-2  flex ">
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
        </div>
        <div className="w-[20%] 2xl:w-[23%] flex justify-center">
          <Image
            className="w-[80%]"
            src="/images/icons/logo.svg"
            alt="logo"
            width={100}
            height={100}
          />
        </div>
        <div className=" flex-1 flex justify-end gap-10 2xl:gap-16  ">
          <div className="flex  gap-4">
            <div>
              <Image
                className="w-10 pt-1"
                src="/images/icons/address.svg"
                alt="adress"
                width={100}
                height={100}
              />
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="font-medium tracking-wide text-[#001F3F]">
                Address
              </h1>
              <div className="text-[#808080] text-sm">
                <p>7190 Rue Jarry H1J 1G5 </p>
                <p>Anjou Québec</p>
              </div>
            </div>
          </div>
          <div className="flex  gap-4 ">
            <div>
              <Image
                className="w-10 pt-1"
                src="/images/icons/phone.svg"
                alt="adress"
                width={100}
                height={100}
              />
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="font-medium tracking-wide text-[#001F3F]">
                Numéro de téléphone
              </h1>
              <div className="text-[#808080] text-sm">
                <p>+1 (438) 464-2161 </p>
              </div>
            </div>
          </div>
          <div className="flex  gap-4">
            <div>
              <Image
                className="w-10 pt-1"
                src="/images/icons/email.svg"
                alt="adress"
                width={100}
                height={100}
              />
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="font-medium tracking-wide text-[#001F3F]">
                Email
              </h1>
              <div className="text-[#808080] text-sm">
                <p>info@kstechnologie.com </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
