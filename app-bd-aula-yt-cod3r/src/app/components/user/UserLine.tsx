"use client";

import { useEffect, useState } from "react";
import { getImage } from "../../../services/unsplash-api";
import Image from "next/image";

import { User } from "@/core/model/User";

interface UnsplashImage {
  id: string;
  urls: {
    regular: string;
    full: string;
    thumb: string;
  };
}

export interface UserLineProps {
  user: User;
}

export default function UserLine(props: UserLineProps) {
  const [images, setImages] = useState<UnsplashImage[]>([]);

  useEffect(() => {
    setImageUrl();
  }, []);

  const setImageUrl = async () => {
    const images = await getImage("Car");
    setImages(images.results);
  };

  const setRandomPfpIMage = () => {
    const random = Math.floor(Math.random() * 11);
    const image = images[random]?.urls?.thumb;
    return image;
  };

  const randomImage = setRandomPfpIMage();

  return (
    <div className="flex p-4 bg-zinc-900 rounded-md">
      <div className="flex flex-col">
        {randomImage && (
          <Image
            className="object-cover w-14 h-14 rounded-full mb-4"
            src={randomImage}
            alt="Imagem aleatória"
            width={100}
            height={100}
          />
        )}
        <span>{props.user.name}</span>
        <span className="text-sm text-zinc-400">{props.user.email}</span>
      </div>
    </div>
  );
}
