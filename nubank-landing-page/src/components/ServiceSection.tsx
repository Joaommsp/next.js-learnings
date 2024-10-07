import { Container } from "./Container";

import PhoneIcon from "@/assets/images/icon-phone.svg";
import SolutionIcon from "@/assets/images/icon-solutions.svg";
import OptionsIcon from "@/assets/images/icon-options.svg";
import CardIcon from "@/assets/images/icon-card.svg";

import AppMockup from "@/assets/images/Mockup.png";

import ServiceItem from "./ServiceItem";
import Image from "next/image";

export function ServiceSection() {
  return (
    <section className="flex flex-col items-center py-4 px-8 lg:px-0 ">
      <div className="w-52 h-1 bg-gray-400 rounded-full"></div>
      <Container>
        <div className="flex flex-col md:flex-row items-center w-full justify-between gap-12">
          <div className="flex-1 max-w-[594px] py-12 md:py-16 lg:py-28">
            <span className="block text-primary-purple text-sm font-medium uppercase mb-4 md:mb-9 ">
              Serviços exclusivos
            </span>
            <h1 className=" text-2xl md:text-3xl text-primary-gray font-semibold leading-tight mb-4  md:mb-8">
              Gerencia suas finanças sem sair de casa
            </h1>
            <p className="text-xs md:text-sm max-w-[554px] mb-8 md:mb-16 text-second-gray">
              Controle suas finanças na palma da mão com nosso aplicativo
              bancário digital. Segurança, simplicidade e agilidade em cada
              transação!
            </p>
            <ul className="flex flex-col gap-10">
              <ServiceItem
                icon={PhoneIcon}
                text="O futuro das finanças está aqui: banco digital sem filas, sem burocracia, disponível 24 horas por dia."
              />
              <ServiceItem
                icon={SolutionIcon}
                text="Com o nosso banco digital, sua conta está a um toque de distância. Tudo o que você precisa para gerenciar sua vida financeira, em um único app."
              />
              <ServiceItem
                icon={OptionsIcon}
                text="Personalize suas finanças com nossas ferramentas exclusivas: controle de gastos, metas de economia e muito mais."
              />
              <ServiceItem
                icon={CardIcon}
                text="Nosso cartão digital oferece benefícios exclusivos e controle total na palma da sua mão. Use no mundo todo com total segurança!."
              />
            </ul>
          </div>
          <div>
            <Image width={324} src={AppMockup} alt="..." />
          </div>
        </div>
      </Container>
    </section>
  );
}
