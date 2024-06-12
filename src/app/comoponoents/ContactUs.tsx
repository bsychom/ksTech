export default function ContactUs() {
  return (
    <div className="w-full relative bg-[#001F3F] py-14">
        <div className="absolute -top-14 -right-14 w-60 h-60 bg-white blur-3xl"></div>
      <div className="container">
        <div className=" w-full flex justify-center ">
          <div className="w-fit  relative">
            <div className="absolute w-[50%] right-0 bg-[#0895FB] bottom-0 h-[3px] rounded-full"></div>
            <div>
              <h1 className="font-['Poppins'] pb-4 text-2xl text-white  2xl:text-3xl font-semibold capitalize tracking-wide">
              Demandez une estimation gratuite
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full flex pt-10 text-white">
            <div className="w-1/2 bg-blue-500">
                <div className="w-full">
                <div className="flex flex-col items-center">
                    <h2 className=" font-['Poppins'] font-bold tracking-wider">
                    Contactez-Nous
                    </h2>
                </div>
                <div></div>
                <div></div>

                </div>

            </div>
            <div className="w-1/2 bg-red-500">second</div>

        </div>
      </div>
    </div>
  );
}
