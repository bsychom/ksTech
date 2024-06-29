import Image, { StaticImageData } from "next/image";
import One from '../../../public/images/icons/first.svg';
import Two from '../../../public/images/icons/second.svg';
import Thre from '../../../public/images/icons/third.svg';
import For from '../../../public/images/icons/for.svg';
const BgONe = '/images/background/first.svg';


export default function Advantages() {
  interface AdvType {
    title: string;
    desc: string;
    icon : StaticImageData;
  }

  const getBg = (index  : number) =>{
    switch(index){
      case 0:
        return "bg-[url('/images/background/first.svg')]";
      case 1:
        return "bg-[url('/images/background/second.svg')]";
      case 2:
        return "bg-[url('/images/background/third.svg')]";
      case 3:
        return "bg-[url('/images/background/for.svg')]"; 
    }
  }

  const listAdv: AdvType[] = [
    {
      title: "Réduisez l’encombrement et l’encombrement du câblage",
      desc: "Les normes de câblage structuré aident les organisations à installer le câblage de manière à maintenir l'ensemble de l'infrastructure de câblage organisée, évitant ainsi les enchevêtrements chaotiques. Cela réduit les temps d’arrêt et laisse moins de place aux erreurs",
      icon : One,
    },
    {
      title: "Gérez votre réseau plus facilement",
      desc: "Si vous rencontrez des problèmes avec votre réseau, vous pouvez facilement vérifier s'il y a un problème avec vos connexions par câble. En cas de problème avec un câble, un câblage structuré peut vous aider à remplacer rapidement le câble à l'origine du problème.",
      icon : Two,
    },
    {
      title: "SUPPORTS DÉVELOPPEMENTS À VENIR",
      desc : "Avec les progrès constants de la technologie des communications, il est essentiel d'avoir un système qui peut s'adapter à l'avenir. Les solutions de câblage structuré permettent précisément cela, rendant l'implémentation d'améliorations facile et sans risque pour l'infrastructure.",
      icon : Thre,
    },
    {
      title: "Réduit l'installation globale",
      desc: "Les déplacements, ajouts et modifications de l'infrastructure peuvent être réalisés rapidement sans que des câbles désorganisés ne se mettent en difficulté. Cela réduit les chances d'erreurs humaines lors des réparations et des modifications, ce qui permet une meilleure utilisation des fonds et du temps de l'entreprise.",
      icon : For,
    }
  ];

  return (
    <div className="pt-10 w-full relative ">
      <div className="absolute -left-8 2xl:-left-14 top-0 w-[100px] h-[100px] md:w-[120px] md:h-[120px]   lg:w-[200px] lg:h-[200px] 2xl:w-[250px] 2xl:h-[250px]  bg-[#001F3F]/80 blur-3xl"></div>
      <div className="w-full  container mx-auto">
        <div className="w-full flex justify-center pb-8 ">
          <div className="w-fit relative ">
            <div className="absolute w-1/2 bottom-0  h-[3px] bg-[#20207B] "></div>
            <p className="  font-extrabold tracking-wide text-lg md:text-xl    lg:text-2xl  2xl:text-3xl pb-4  font-['Poppins']">
              Avantages du câblage structuré
            </p>
          </div>
        </div>
        <p className="w-[95%] md:w-[90%]  text-xs md:text-sm  lg:w-[85%] mx-auto  font-medium tracking-wide leading-relaxed inter.className font-['Poppins']">
          Bien que les câbles et les fils soient souvent cachés derrière les
          murs, les solutions de câblage structuré peuvent offrir aux
          entreprises et aux centres de données des avantages
          indispensables. Sans cela, le système est en danger, notamment lors de
          la maintenance. Certains avantages du câblage structuré incluent :
        </p>
         <div className="md:w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 pt-10 md:pt-12 lg:pt-16 w-[90%] mx-auto">
          {
            listAdv.map((item, index) =>{
              return (
                <div key={index} className={`${getBg(index)}  bg-cover rounded-lg lg:rounded-xl bg-no-repeat bg-center lg:hover:scale-110 2xl:hover:scale-125 hover:z-50 hover:cursor-pointer transition-all duration-500 ease-in`} >
                  <div className="bg-black/70 h-full rounded-lg lg:rounded-xl">
                <div  className="text-white py-10 lg:py-16 space-y-[18px]">
                  <div className="flex justify-center">
                    <Image className="" src={item.icon} alt="icon"/>
                  </div>
                  <div>
                    <h5 className="text-center w-[90%] mx-auto uppercase font-semibold font-['Poppins']">{item.title}</h5>
                  </div>
                  <div>
                    <p className="font-light text-center w-[90%] mx-auto tracking-wide text-sm">{item.desc}</p>
                  </div>

                </div>

                  </div>
                  
                  

                </div>
              )
            })
          }

        </div>
      </div>
    </div>
  );
}
