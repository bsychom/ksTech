"use client";
import GoogleMap from "./GoogleMaps";
import React, { FormEvent, useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";

export default function ContactUs() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [displayToast, setDisplayToast] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [color, setColor] = useState<string>('')
  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement >(null);
  const messageRef = useRef<HTMLTextAreaElement>(null)
  
  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    await emailjs.send(`${process.env.SERVICE_ID}`,`${process.env.TEMPLATE_ID}`,{
      to_name : 'ks-technolog',
      name: name,
      from_email : email,
      message: message,
      },{
      publicKey: process.env.PUBLIC_KEY,
      }).then((res) =>
      {
        if(res.text == 'OK'){
          setMessage('your message send seccessfuly ');
          setColor('bg-green-500')
          if(nameRef.current && emailRef.current && messageRef.current){
            nameRef.current.value = ''
            emailRef.current.value = ''
            messageRef.current.value = ''

          }
        }else{
          setMessage('something happen catn you try to send or you can use this email directly :  info@kstechnologie.com')
          setColor('bg-red-500');
        }
        setDisplayToast(true);
        setIsLoading(false);
      });
  };
  return (
    <section id="contact" className="w-full relative bg-[#001F3F] py-14">
       <div onClick={() => setDisplayToast(false)} className={` ${displayToast ? 'fixed' : 'hidden'} z-[60]  right-10 top-5  rounded-md ${color} flex justify-between items-center gap-4 px-5 py-3`}>
        <Image src={`${color.includes('bg-red-500') ? '/images/icons/notDone.webp': '/images/icons/done.png'}`}  alt="icon" width={10} height={10} className="w-10 rounded-full border-4"/>
        
        <div>
          <p className={`text-white  font-['Poppins'] font-bold text-sm ${color.includes('bg-green-500') ? 'capitalize' : ''}`}>{message} </p>
        </div>
       </div>
      <div className="absolute -top-14 -right-14 w-60 h-60 bg-white/70 blur-3xl"></div>
      <div className="absolute -bottom-14 -left-14 w-60 h-60 bg-white/70 blur-3xl"></div>
      <div className="container ">
        <div className=" w-full flex justify-center ">
          <div className="w-fit  relative">
            <div className="absolute w-[50%] right-0 bg-[#0895FB] bottom-0 h-[3px] rounded-full"></div>
            <div>
              <h1 className="font-['Poppins'] text-lg md:text-xl    lg:text-2xl  2xl:text-3xl  pb-4  text-white   font-extrabold capitalize tracking-wide">
                Demandez une estimation gratuite
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full lg:flex pt-10 text-white ">
          <div className="w-full lg:w-1/2  mx-auto">
            <div className="w-[85%] md:w-[75%] lg:w-[70%]  mx-auto  ">
              <div className="pb-5">
                <h2 className=" font-['Poppins'] text-xl font-extrabold tracking-wider">
                  Contactez-Nous
                </h2>
              </div>
              <form
                onSubmit={sendEmail}
                className="w-full space-y-7 relative"
                action=""
              >
                <div className="flex flex-col gap-3">
                  <label
                    className="font-extralight text-base font-['Poppins'] text-[#CCC6C6]"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="bg-[#0E253D] border-[1px] border-[#8D8D8D] placeholder:text-[#8D8D8D]  rounded-md py-3 px-3 placeholder:text-sm outline-none text-sm font-['Poppins'] text-[#8D8D8D]"
                    placeholder="Rachel Joe"
                    type="text"
                    name="name"
                    ref={nameRef}
                    required={true}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label
                    className="font-extralight text-base font-['Poppins'] text-[#CCC6C6]"
                    htmlFor="email"
                  >
                    E-mail
                  </label>
                  <input
                    className="bg-[#0E253D] border-[1px] border-[#8D8D8D] placeholder:text-[#8D8D8D]  rounded-md py-3 px-3 placeholder:text-sm outline-none text-sm font-['Poppins'] text-[#8D8D8D]"
                    placeholder="Rachel@domain.com"
                    type="email"
                    name="email"
                    ref={emailRef}
                    required={true}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label
                    className="font-extralight text-base font-['Poppins'] text-[#CCC6C6]"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className="bg-[#0E253D] text-[#8D8D8D] border-[1px] border-[#8D8D8D] placeholder:text-[#8D8D8D]  rounded-md py-3 px-3 placeholder:text-sm outline-none text-sm font-['Poppins'] min-h-24 max-h-36"
                    placeholder="Tapez votre requête ici...."
                    name="message"
                    required={true}
                    ref={messageRef}
                    id=""
                  ></textarea>
                </div>
                <div className="w-full flex justify-center lg:justify-start">
                  <button
                    disabled={isLoading}
                    value="Send"
                    type="submit"
                    className={`flex  items-center ${
                      isLoading ? "" : "hover:bg-white hover:text-black"
                    } gap-4 group transition-all duration-500  ease-in-out font-bold text-base  lg:text-lg tracking-wide bg-[#0895FB] rounded-lg p-2   md:p-3`}
                  >
                    Soumettre
                    <span>
                      <svg
                        className={`w-4 md:pt-1 lg:pt-0 lg:w-6 ${
                          isLoading
                            ? ""
                            : "group-hover:text-black duration-200  group-hover:translate-x-2"
                        } `}
                        viewBox="0 0 16 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 11.875L14 7.5M14 7.5L10 3.125M14 7.5L2 7.5"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex-1 flex justify-center items-center relative">
            <div className="w-full  pt-10">
              <GoogleMap />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
