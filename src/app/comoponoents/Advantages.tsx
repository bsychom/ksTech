import Image from "next/image";

export default function Advantages() {
  return (
    <div className="pt-10 w-full relative ">
      <div className="absolute -left-8 2xl:-left-14 top-0  w-[200px] h-[200px] 2xl:w-[250px] 2xl:h-[250px]  bg-[#001F3F]/80 blur-3xl"></div>
      <div className="w-full container mx-auto">
        <div className="w-full flex justify-center pb-8 ">
          <div className="w-fit relative">
            <div className="absolute w-1/2 bottom-0  h-[3px] bg-[#20207B] "></div>
            <p className="  font-extrabold tracking-wide  text-2xl  2xl:text-3xl pb-4  font-['Poppins']">
              Avantages du câblage structuré
            </p>
          </div>
        </div>
        <p className=" w-[85%] mx-auto  font-medium tracking-wide leading-relaxed inter.className font-['Poppins']">
          Bien que les câbles et les fils soient souvent cachés derrière les
          murs, les solutions de câblage structuré peuvent offrir aux
          entreprises et aux centres de données des avantages
          indispensables. Sans cela, le système est en danger, notamment lors de
          la maintenance. Certains avantages du câblage structuré incluent :
        </p>
        <div className="w-full flex gap-2 pt-14 ">
          <div className="w-1/2 flex gap-2">
            <div className="w-1/2 ">
              <div className="  bg-[url('/images/background/first.svg')] bg-cover rounded-lg bg-no-repeat bg-center relative hover:scale-110 2xl:hover:scale-125 hover:z-50 hover:cursor-pointer transition-all duration-500 ease-in">
                <div className="absolute w-full h-full  bg-black/70 rounded-lg"></div>
                <div className="relative text-white w-full mx-auto py-10 flex gap-1 flex-col items-center">
                  <div className="">
                    <Image
                      className="w-[60px]"
                      src="/images/icons/first.svg"
                      alt="first"
                      width={10}
                      height={10}
                    />
                  </div>
                  <div>
                    <h5 className="text-center w-[90%] mx-auto uppercase font-semibold font-['Poppins'] ">
                      Réduisez l’encombrement et l’encombrement du câblage
                    </h5>
                  </div>
                  <div>
                    <p
                      className="font-light text-center w-[90%] mx-auto tracking-wide text-sm"
                      style={{ lineHeight: "20px" }}
                    >
                      Les normes de câblage structuré aident les organisations à
                      installer le câblage de manière à maintenir l'ensemble de
                      l'infrastructure de câblage organisée, évitant ainsi les
                      enchevêtrements chaotiques. Cela réduit les temps d’arrêt
                      et laisse moins de place aux erreurs
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2 bg-white">
              <div className="  bg-[url('/images/background/second.svg')] bg-cover rounded-lg bg-no-repeat bg-center relative min-h-[356.5px] max-h-[356.5px]  hover:scale-110 2xl:hover:scale-125 hover:z-50 hover:cursor-pointer transition-all duration-500 ease-in">
                <div className="absolute w-full h-full  bg-black/70 rounded-lg"></div>
                <div className="relative text-white w-full mx-auto py-10 flex gap-1 flex-col items-center">
                  <div className="">
                    <Image
                      className="w-[60px]"
                      src="/images/icons/second.svg"
                      alt="first"
                      width={10}
                      height={10}
                    />
                  </div>
                  <div>
                    <h5 className="text-center w-[90%] mx-auto uppercase font-semibold font-['Poppins']">
                      Gérez votre réseau plus facilement
                    </h5>
                  </div>
                  <div>
                    <p
                      className="font-light text-center w-[90%] mx-auto tracking-wide text-sm"
                      style={{ lineHeight: "20px" }}
                    >
                      Si vous rencontrez des problèmes avec votre réseau, vous
                      pouvez facilement vérifier s'il y a un problème avec vos
                      connexions par câble. En cas de problème avec un câble, un
                      câblage structuré peut vous aider à remplacer rapidement
                      le câble à l'origine du problème.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex gap-2">
            <div className="w-1/2 ">
              <div className=" max-h-[356.5px]  bg-[url('/images/background/third.svg')] bg-cover rounded-lg bg-no-repeat bg-center relative hover:scale-110 2xl:hover:scale-125 hover:z-50 hover:cursor-pointer transition-all duration-500 ease-in">
                <div className="absolute w-full h-full  bg-black/70 rounded-lg"></div>
                <div className="relative text-white w-full mx-auto py-10 flex gap-1 flex-col items-center">
                  <div className="">
                    <Image
                      className="w-[60px]"
                      src="/images/icons/third.svg"
                      alt="first"
                      width={10}
                      height={10}
                    />
                  </div>
                  <div>
                    <h5 className="text-center w-[90%] mx-auto uppercase font-semibold font-['Poppins']">
                      SUPPORTS DÉVELOPPEMENTS À VENIR
                    </h5>
                  </div>
                  <div>
                    <p
                      className="font-light text-center w-[90%] mx-auto tracking-wide text-sm"
                      style={{ lineHeight: "20px" }}
                    >
                      Avec les progrès constants de la technologie des
                      communications, il est essentiel d'avoir un système qui
                      peut s'adapter à l'avenir. Les solutions de câblage
                      structuré permettent précisément cela, rendant
                      l'implémentation d'améliorations facile et sans risque
                      pour l'infrastructure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2 ">
              <div className="  bg-[url('/images/background/for.svg')] bg-cover rounded-lg bg-no-repeat bg-center relative max-h-[356.5px] min-h-[356.5px] hover:scale-110 2xl:hover:scale-125 hover:z-50 hover:cursor-pointer transition-all duration-500 ease-in">
                <div className="absolute w-full h-full  bg-black/70 rounded-lg"></div>
                <div className="relative text-white w-full mx-auto py-10 flex  flex-col items-center">
                  <div className="">
                    <Image
                      className="w-[60px]"
                      src="/images/icons/for.svg"
                      alt="first"
                      width={10}
                      height={10}
                    />
                  </div>
                  <div>
                    <h5 className="text-center w-[90%] mx-auto uppercase font-semibold font-['Poppins']">
                      Réduit l'installation globale
                    </h5>
                  </div>
                  <div>
                    <p
                      className="font-light text-center w-[90%] mx-auto tracking-wide text-sm"
                      style={{ lineHeight: "19.5px" }}
                    >
                      Les déplacements, ajouts et modifications de
                      l'infrastructure peuvent être réalisés rapidement sans que
                      des câbles désorganisés ne se mettent en difficulté. Cela
                      réduit les chances d'erreurs humaines lors des réparations
                      et des modifications, ce qui permet une meilleure
                      utilisation des fonds et du temps de l'entreprise.
                    </p>
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
