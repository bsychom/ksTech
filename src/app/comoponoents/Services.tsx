import Cablage from "../../../public/images/images/cablageStructure.svg";
import Instalation from "../../../public/images/images/installtion.svg";
import TeleTra from "../../../public/images/images/traditionnelle.svg";
import TeleIp from "../../../public/images/images/teleIp.svg";
import TeleEntr from "../../../public/images/images/teleEntr.svg";
import Image from "next/image";
import Icon from "../../../public/images/icons/IconServices.svg";

interface ServicesInterface {
  title: string;
  desc1: string;
  desc2: string;
  img: any;
}

const services: ServicesInterface[] = [
  {
    title: "Câblage structuré",
    desc1:
      "Les services de câblage structuré offrent des solutions de connectivité fiables et performantes adaptées aux besoins spécifiques des clients. L'expertise en câblage structuré garantit une infrastructure réseau robuste et efficace, essentielle pour la communication et le transfert de données au sein de l’entreprise.",
    desc2:
      "La mission est de concevoir et d'installer des systèmes de câblage qui supportent les besoins technologiques actuels et futurs. Utilisant des matériaux de haute qualité et suivant les normes industrielles les plus strictes, le câblage structuré assure une performance optimale. Que ce soit pour une petite entreprise ou une grande organisation, les solutions sont personnalisées pour répondre aux exigences spécifiques, assurant une installation propre et organisée qui facilite la gestion et la maintenance du réseau. L’infrastructure de câblage structuré améliore la fiabilité du réseau, réduit les temps d'arrêt et permet une évolutivité future, garantissant que l’entreprise reste connectée et opérationnelle.",
    img: Cablage,
  },
  {
    title: "installtion équipement informatique",
    desc1:
      "Les services d'installation d'équipement informatique garantissent une mise en place sans faille des appareils technologiques. Ils prennent en charge l'installation des ordinateurs, serveurs, routeurs, et autres périphériques, en veillant à ce que tout soit configuré et optimisé pour une performance maximale.",
    desc2:
      "Les techniciens qualifiés travaillent avec précision et efficacité, suivant les meilleures pratiques de l'industrie pour s'assurer que l'équipement informatique est installé correctement dès le départ. Ils collaborent étroitement avec les clients pour comprendre leurs besoins spécifiques et adapter les services en conséquence, offrant ainsi une solution sur mesure qui répond à leurs exigences. Avec ce service d'installation, les systèmes seront opérationnels rapidement, avec une configuration optimale qui facilite leur utilisation et leur maintenance. Ces solutions technologiques soutiennent la croissance et la productivité de l’entreprise.",
    img: Instalation,
  },
  {
    title: "Téléphonie traditionnelle ",
    desc1:
      "Les solutions de téléphonie traditionnelle offrent une gamme de systèmes de téléphonie analogique fiables et éprouvés, y compris les solutions Norstar et Panasonic, pour les entreprises qui privilégient les technologies classiques. Les services incluent l'installation, la configuration et la maintenance de ces systèmes pour garantir une communication fluide et ininterrompue.",
    desc2:
      "Ces systèmes de téléphonie traditionnelle sont idéaux pour les entreprises cherchant une solution de communication stable et simple d'utilisation. Avec une installation professionnelle et un support continu, la téléphonie traditionnelle assure une connectivité fiable, permettant aux entreprises de rester en contact avec leurs clients et partenaires sans interruption.",
    img: TeleTra,
  },
  {
    title: "Téléphonie IP ",
    desc1:
      "Offrez une toute nouvelle dimension à vos communications grâce aux systèmes de téléphonie sur IP. Communiquez avec 2 à 100 personnes grâce au pont de conférence intégré et bénéficiez du système softphone pour passer de votre téléphone fixe à votre téléphonie mobile en quelques instants. La solution est synonyme d’autonomie et de facilité d’utilisation.",
    desc2:
      "Les services de téléphonie IP comprennent l'installation de systèmes sur site avec des serveurs dédiés ou des solutions hébergées dans le cloud. Ces systèmes offrent une flexibilité et une évolutivité accrues, permettant une gestion simplifiée et une réduction des coûts opérationnels. La téléphonie IP améliore la productivité et l'efficacité des communications d'entreprise, tout en offrant des fonctionnalités avancées adaptées aux besoins modernes.",
    img: TeleIp,
  },
  {
    title: "Téléphonie d’entreprise",
    desc1:
      "Les solutions complètes de téléphonie d’entreprise couvrent la téléphonie traditionnelle analogique ainsi que la téléphonie IP. Ces services incluent :",
    desc2:
      "Ces services de téléphonie d’entreprise assurent une connectivité optimale et une communication efficace, permettant aux entreprises de rester connectées en toutes circonstances.",
    img: TeleEntr,
  },
];

export default function Services() {
  return (
    <div className="w-full bg-white/30 2xl:bg-white/40 relative py-10 ">
      <div className=" w-full flex justify-center ">
        <div className="w-fit  relative">
          <div className="absolute w-[55%] right-0 bg-[#20207B] bottom-0 h-[3px] rounded-full"></div>
          <div>
            <h1 className="font-['Poppins'] pb-4 text-3xl font-semibold capitalize tracking-wide">
              Présentation de notre entreprise
            </h1>
          </div>
        </div>
      </div>
      <div className="mt-24 container mx-auto ">
        {services.map((service, index) => {
          return (
            <div
              key={index}
              className={`w-full flex gap-4  ${
                index % 2 !== 0 ? "flex-row-reverse" : "flex-row"
              } ${index === 0 ? "" : "pt-32"}`}
            >
              <div
                className={`w-[60%]   flex  ${
                  index % 2 !== 0 ? "justify-end" : "justify-start"
                }`}
              >
                <div className="w-[80%]  h-full flex flex-col justify-center ">
                  <div className="w-full flex items-center gap-4">
                    <div>
                      <Image
                        className="w-10"
                        src={Icon}
                        alt="icon"
                        height={10}
                        width={10}
                      />
                    </div>
                    <div>
                      <h3 className="text-lg capitalize font-['Poppins']">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <div className="pt-6 flex flex-col gap-3">
                    <div>
                      <p className="font-['Poppins']">{service.desc1}</p>
                    </div>
                    {index === services.length - 1 && (
                      <div className="w-[90%] mx-auto">
                        <ul className="list-disc space-y-1">
                          <li className=" font-['Poppins']">
                            <p>
                              <span className="text-lg font-semibold">
                                Téléphonie analogique traditionnelle
                              </span>{" "}
                              : Installation et maintenance de systèmes de
                              téléphonie analogique pour une communication
                              fiable et simple.
                            </p>
                          </li>
                          <li className=" font-['Poppins']">
                            <p>
                              <span className="text-lg font-semibold">
                                Téléphonie IP avec serveur chez le client
                              </span>{" "}
                              : Solutions de téléphonie IP hébergées sur des
                              serveurs locaux, offrant une gestion complète et
                              un contrôle total du système de communication.
                            </p>
                          </li>
                          <li className=" font-['Poppins']">
                            <p>
                              <span className="text-lg font-semibold">
                                Téléphonie hébergée (cloud)
                              </span>{" "}
                              : Profitez des avantages de la téléphonie IP sans
                              la complexité de la gestion matérielle grâce aux
                              solutions de téléphonie hébergée dans le cloud,
                              garantissant flexibilité et évolutivité.
                            </p>
                          </li>
                        </ul>
                      </div>
                    )}
                    <div className=" pb-6 border-b-2 border-[#20207B]">
                      <p className="font-['Poppins']">{service.desc2}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[40%]  bg-white relative">
                  <div className={`absolute w-80 h-80    bg-[#20207B]/60 blur-3xl ${index % 2 == 0 ? '-right-20  -bottom-[150px]' : '-left-20 2xl:-left-32 -bottom-[90px]'} overflow-hidden`}></div>
                <div className="relative ">
                  <Image
                    src={service.img}
                    alt="image"
                    width={0}
                    height={0}
                    className="w-full 2xl:w-[80%] "
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
