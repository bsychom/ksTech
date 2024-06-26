import Image from "next/image";
export default function ChoseUs() {
  return (
    <div className="mt-28 w-full">
      <div className="w-full container mx-auto">
        <div className="w-full flex justify-center  ">
          <div className="w-fit relative">
            <div className="absolute w-1/2 bottom-0  h-[3px] bg-[#20207B] "></div>
            <p className="  font-extrabold tracking-wide  text-2xl  2xl:text-3xl pb-4  font-['Poppins']">
            Pourquoi choisir <span className="bg-[#20207B] px-1.5 rounded-md text-white">KS</span>  Technologie?
            </p>
          </div>
        </div>
        <div className="w-full   ">
            <div className="pt-20 pb-12 relative">
            <div className="flex container mx-auto ">
            <div className="w-1/2 relative">
            <div className={`absolute w-72 h-72 2xl:w-80 2xl:h-80    bg-[#20207B]/60 blur-3xl -left-20 2xl:-left-32 -bottom-[90px] `}></div>

                <div className="w-full relative">
                <Image className="w-[80%] 2xl:w-[90%]" src="/images/images/whychose.svg" alt="about" width={100} height={100}/>
                </div>
            </div>
            <div className="w-1/2   flex justify-end">
                <div className="w-[80%]  h-full flex flex-col justify-center ">
                    
                    <div className="pt-5 flex flex-col gap-3">
                        <div className=" pb-6 border-b-2 border-[#20207B]">
                            <p className="font-['Poppins'] text-sm 2xl:text-base">
                            Avec des années d&apos;expérience et une équipe d&apos;experts, nous garantissons des solutions de haute qualité adaptées aux besoins de nos clients. Nous nous engageons à fournir des services et des solutions qui répondent aux standards les plus élevés de l&apos;industrie. En restant à la pointe des avancées technologiques, nous offrons des solutions modernes et évolutives. La satisfaction de nos clients est notre priorité. Nous offrons un support personnalisé et réactif pour répondre à tous vos besoins.                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            </div>
        </div>
      </div>
    </div>
  );
}
