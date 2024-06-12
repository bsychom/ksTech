import { Inter } from "next/font/google";
import Image from "next/image";
import Header from "./comoponoents/header";
import Hero from "./comoponoents/Hero";
const inter = Inter({ subsets: ['latin'] });


export default function Home() {
  return (
    <div className="w-screen h-screen bg-white relative overflow-x-hidden">
      <div className="absolute w-full">
        <Image className="w-full" src='images/background/gradientMesh.svg' alt="mesh" width={100} height={100}/>
      </div>
      <div className="relative w-full h-full ">
        <Header/>
        <Hero/>
        {/* bg-[#001F3F]/20 */}
        <div className="pt-10 w-full relative">
          <div className="absolute -left-8 w-[200px] h-[200px]  bg-[#001F3F]/80 blur-3xl">
            lskdjf
          </div>
          <div className="w-full ">
            <p className="text-center text-2xl font-bold tracking-wide underline pb-10">Avantages du câblage structuré</p>
            <p className="w-[81%] mx-auto font-medium tracking-wide inter.className">Bien que les câbles et les fils soient souvent cachés derrière les murs, les solutions de câblage structuré peuvent offrir aux entreprises et aux centres de données des avantages indispensables. Sans cela, le système est en danger, notamment lors de la maintenance. Certains avantages du câblage structuré incluent :</p>
          </div>
        </div>
        
      </div>


    </div>
    
  );
}
