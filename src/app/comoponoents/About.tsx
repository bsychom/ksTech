import Image from "next/image"
export default function About(){
    return (
        <div className="w-full   relative">
            <div className="absolute -left-8 2xl:-left-14 bottom-0  w-[200px] h-[200px] 2xl:w-[250px] 2xl:h-[250px]  bg-[#001F3F]/80 blur-3xl">
          </div>
            <div className=" py-14 lg:py-28 relative">
            <div className="flex  flex-col-reverse items-center justify-center lg:flex-row container  gap-10 lg:gap-0">
            <div className="w-[85%] mx-auto lg:w-1/2 ">
                <Image className="w-[90%] mx-auto lg:mx-0 2xl:w-full" src="/images/images/about.svg" alt="about" width={100} height={100}/>
            </div>
            <div className="w-[95%]   lg:w-1/2   flex lg:justify-end">
                <div className="w-[80%] mx-auto lg:mx-0  h-full flex flex-col justify-center ">
                    <div className="w-full flex items-center gap-4">
                        <div>
                            <Image className="w-8 2xl:w-10" src='/images/icons/icon.svg' alt="icon" height={10} width={10}/>
                        </div>
                        <div>
                            <h3 className="2xl:text-lg capitalize font-['Poppins']">à propos de nous</h3>
                        </div>
                    </div>
                    <div className="pt-5 flex flex-col gap-3">
                        <div>
                            <h1 className="font-['Poppins'] text-2xl 2xl:text-3xl font-semibold capitalize tracking-wide">Présentation de notre entreprise</h1>
                        </div>
                        <div><p className="font-['Poppins'] text-sm 2xl:text-base">
                        Bienvenue chez KS Technologie. Nous sommes spécialisés dans les services de télécommunications et de câblage structuré, offrant des solutions de connectivité fiables et performantes adaptées aux besoins spécifiques de nos clients.
                            </p></div>
                        <div className=" pb-6 border-b-2 border-[#20207B]">
                            <p className="font-['Poppins'] text-sm 2xl:text-base">
                            Notre mission est de fournir des infrastructures de réseau robustes et efficaces, permettant à nos clients de rester connectés et de prospérer dans un monde de plus en plus numérique. Nous mettons un point d&apos;honneur à offrir des services de qualité supérieure tout en restant à l&apos;avant-garde des avancées technologiques.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            </div>
        </div>
    )
}