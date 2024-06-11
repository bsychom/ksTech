import Image from "next/image";
import Header from "./comoponoents/header";
import Hero from "./comoponoents/Hero";
export default function Home() {
  return (
    <div className="w-screen h-screen bg-white relative">
      <div className="absolute w-full">
        <Image className="w-full" src='images/background/gradientMesh.svg' alt="mesh" width={100} height={100}/>
      </div>
      <div className="relative w-full h-full ">
        <Header/>
        <Hero/>
        
      </div>


    </div>
    
  );
}
