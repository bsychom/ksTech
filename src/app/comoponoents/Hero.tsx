import Image from "next/image"
import '../globals.css'

export default function Hero(){
    return (
        <div className=" h-[600px] md:h-[500px] 2xl:h-[800px]  w-full bg-[url('/images/background/background.svg')] bg-no-repeat bg-cover bg-center">

        <div className="lg:w-1/2 pt-6 px-6 lg:px-0  2xl:w-[35%] h-full  flex justify-center items-center ">
          <div className="md:w-full   lg:w-[70%]  bg-black/70 p-10 2xl:p-14 rounded-lg 2xl:rounded-xl">
            <h1  className=" text-xl lg:text-2xl inlarg 2xl:text-3xl text-white capitalize tracking-wide leading-relaxed 2xl:leading-relaxed font-['Roboto'] ">La Gestion De Votre Entreprise Vient De Devenir Plus Facile.</h1>
            <p className=" lg:text-lg 2xl:text-xl font-semibold tracking-wide py-5 text-white 2xl:w-[80%] 2xl:py-8 2xl:tracking-wider font-['Poppins']">Centralisez tout sur un environnement de câblage structuré et éliminez la complexité d&apos;avoir plusieurs infrastructures de câblage en place.</p>
            <button className="bg-white flex items-center gap-3 px-3 py-2 rounded-lg " >
              <p className=" leading-relaxed text-[#103535]  font-extrabold  font-['Roboto']">Contact</p> <span><Image className="w-4 " src="/images/icons/Right.svg" alt="right" width={10} height={10}/></span>

            </button>
          </div>
        </div>


        </div>
    )
}