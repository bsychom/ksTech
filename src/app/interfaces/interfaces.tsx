import { StaticImageData } from "next/image";

interface AdvantageInterface {
  title: string;
  desc: string;
  icon: StaticImageData;
}

interface ServiceAdvantageInterface{
  img : StaticImageData;
  title : string;
  desc : string;
}

interface ServicesInterface {
  title: string;
  desc1: string;
  desc2: string;
  img: StaticImageData;
}

export type { AdvantageInterface, ServiceAdvantageInterface, ServicesInterface  };
