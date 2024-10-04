import { Container } from "./Container";

import AppStoreBtn from "@/assets/images/btn-apple-store.svg";
import PlayStoreBtn from "@/assets/images/btn-google-play.svg";
import Image from "next/image";
import ArrowDownIcon from "@/assets/images/arrow-explorer.svg";
import HeroImage from "@/assets/images/woman-model.png";

export function SectionHero() {
  return (
    <section className="w-full h-[534px] bg-hero-pattern bg-no-repeat bg-center bg-cover">
      <Container>
        <div className="flex-1 max-w-[534px]">
          <h1 className="text-gray-300 text-6xl font-medium mb-4">
            Seu banco inteiro na palma da mão
          </h1>
          <p className="text-gray-300 font-light text-xl max-w-[408px] mb-8">
            Tudo que você precisa em um só lugar. Um N de possibilidades
          </p>
          <div className="flex items-center gap-4 mb-12">
            <button>
              <Image width={156} src={AppStoreBtn} alt="..." />
            </button>
            <button>
              <Image width={156} src={PlayStoreBtn} alt="..." />
            </button>
          </div>
          <button className="flex items-center gap-2">
            <Image src={ArrowDownIcon} alt="..." />
            <span className="text-gray-50 text-sm">Continue explorando</span>
          </button>
        </div>
        <div className="flex flex-1 h-full justify-end items-end p-0">
          <Image width={452} src={HeroImage} alt="..." />
        </div>
      </Container>
    </section>
  );
}
