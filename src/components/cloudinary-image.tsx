"use client";

import { setAsFavoriteAction } from "@/actions/set-as-favorite";
import { HeartIcon, Loader2Icon } from "lucide-react";
import { CldImage } from "next-cloudinary";
import React, { useState, useTransition } from "react";

type CloudinaryImageProps = {
  image: Image;
  onUnHeart?: (image: Image) => void;
};

const CloudinaryImage = ({ image, onUnHeart }: CloudinaryImageProps) => {
  const [isPending, startTransition] = useTransition();

  const [isFavorite, setIsFavorite] = useState(image.tags.includes("favorite"));
  console.log(isFavorite);

  return (
    <article className="w-auto aspect-video first:mt-0 mt-4 relative group rounded-md">
      {isFavorite ? (
        <button
          className="absolute right-2 top-2 z-20 cursor-pointer"
          onClick={() => {
            if (!image) {
              return;
            }
            setIsFavorite(false);
            onUnHeart?.(image);
            startTransition(() => {
              setAsFavoriteAction(image.public_id, false);
            });
          }}
        >
          <HeartIcon fill="#dc2626" className="text-red-600 h-5 w-5" />
        </button>
      ) : (
        <button
          className="absolute right-2 top-2 z-20 cursor-pointer"
          onClick={() => {
            setIsFavorite(true);
            startTransition(() => {
              setAsFavoriteAction(image.public_id, true);
            });
          }}
        >
          <HeartIcon className="w-5 h-5 group-hover:ease-in-out opacity-0 group-hover:transition-opacity group-hover:duration-300 group-hover:opacity-100" />
        </button>
      )}
      <div className="bg-gradient-to-b from-black/40 w-full absolute h-10 z-10 top-0"></div>
      <div className="bg-gradient-to-t  from-black/40 w-full absolute h-10 z-10 bottom-0"></div>
      <CldImage
        alt="cloudinary image"
        src={image.public_id}
        width={image.width}
        height={image.height}
        className="w-full rounded-md brightness-90 overflow-hidden"
      />
    </article>
  );
};

export default CloudinaryImage;
