"use client";

import { motion } from "framer-motion";

import { Container } from "./Container";

import AppStoreBtn from "@/assets/images/btn-apple-store.svg";
import PlayStoreBtn from "@/assets/images/btn-google-play.svg";
import Image from "next/image";
import ArrowDownIcon from "@/assets/images/arrow-explorer.svg";
import HeroImage from "@/assets/images/woman-model.png";

export function SectionHero() {
  return (
    <section className="relative w-full h-full pt-16 px-8 lg:px-0 md:pt-0 md:h-[534px] bg-hero-pattern bg-no-repeat bg-center bg-cover">
      <Container>
        <motion.div
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="flex-1 justify-center max-w-[534px]"
        >
          <h1 className="text-center md:text-left text-gray-100 text-2xl md:text-3xl lg:text-6xl font-medium mb-4">
            Seu banco inteiro na palma da mão
          </h1>
          <p className="text-center md:text-left text-gray-300 font-light md:text-lg lg:text-xl max-w-[408px] mb-8">
            Tudo que você precisa em um só lugar. Um N de possibilidades
          </p>
          <motion.div
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 40, damping: 20 }}
            className="flex justify-center md:justify-start items-center gap-4 mb-12"
          >
            <button>
              <Image width={156} src={AppStoreBtn} alt="..." />
            </button>
            <button>
              <Image width={156} src={PlayStoreBtn} alt="..." />
            </button>
          </motion.div>
          <motion.button
            initial={{ y: "100vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 40, damping: 25 }}
            className="hidden md:flex items-center gap-2"
          >
            <Image src={ArrowDownIcon} alt="..." />
            <span className="text-gray-50 text-sm">Continue explorando</span>
          </motion.button>
        </motion.div>
        <motion.div
          initial={{ x: "100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="flex flex-1 h-full justify-end items-end p-0"
        >
          <Image width={452} src={HeroImage} alt="..." />
        </motion.div>
      </Container>
    </section>
  );
}
