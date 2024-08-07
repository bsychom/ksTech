'use client'

import { Inter } from "next/font/google";
import Image from "next/image";
import Header from "./comoponoents/header";
import Hero from "./comoponoents/Hero";
import Advantages from "./comoponoents/Advantages";
import About from "./comoponoents/About";
import Services from "./comoponoents/Services";
import ChoseUs from "./comoponoents/ChoseUs";
import ContactUs from "./comoponoents/ContactUs";
import Footer from "./comoponoents/Footer";
import { useEffect } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  useEffect(() =>{
    console.log('some thing is change')
  })
  return (
    <div className="w-screen h-screen bg-white relative overflow-x-hidden">
      <div className="absolute w-full">
        <Image
          className="w-full"
          src="images/background/gradientMesh.svg"
          alt="mesh"
          width={100}
          height={100}
        />
      </div>
      <div className="relative w-full h-full ">
        <Header />
        <Hero  />
        <Advantages />
        <About />
        <Services/>
        <ChoseUs/>
        <ContactUs/>
        <Footer/>
        <div className="container">

        </div>
        
      </div>
    </div>
  );
}
