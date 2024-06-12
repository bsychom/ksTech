import Image from "next/image"

export default function Hero(){
    return (
        <div className=" h-[500px] 2xl:h-[800px]  w-full bg-[url('/images/background/background.svg')] bg-no-repeat bg-cover bg-center">

        <div className="w-1/2 h-full  flex justify-center items-center ">
          <div className="w-[70%]  bg-black/70 p-10 rounded-lg">
            <h1 className="font-extrabold text-2xl 2xl:text-3xl text-white capitalize tracking-wide leading-relaxed  ">La Gestion De Votre Entreprise Vient De Devenir Plus Facile.</h1>
            <p className=" text-lg 2xl:text-xl font-semibold tracking-wide py-5 text-white ">Centralisez tout sur un environnement de câblage structuré et éliminez la complexité d'avoir plusieurs infrastructures de câblage en place.</p>
            <button className="bg-white flex items-center gap-3 px-3 py-2 rounded-lg " >
              <p className="font-bold leading-relaxed text-[#103535]">Contact</p> <span><Image className="w-4 " src="/images/icons/Right.svg" alt="right" width={10} height={10}/></span>

            </button>
          </div>
        </div>


        </div>
    )
}