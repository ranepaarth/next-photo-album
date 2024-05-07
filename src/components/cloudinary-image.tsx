"use client";

import { CldImage } from "next-cloudinary";
import React, { useState } from "react";
import { Image } from "../../types";
import ImageHeartIcon from "./heart-icon";
import { ImageDropdownMenu } from "./image-dropdown-menu";

type CloudinaryImageProps = {
  image: Image;
  onUnHeart?: (image: Image) => void;
};

const CloudinaryImage = ({ image, onUnHeart }: CloudinaryImageProps) => {
  const [isFavorite, setIsFavorite] = useState(image.tags.includes("favorite"));
  // console.log(isFavorite);

  return (
    <article className="w-auto aspect-video first:mt-0 mt-4 relative group rounded-md">
      <div className="absolute top-1 flex justify-between items-center z-20 w-full px-4">
        <ImageHeartIcon
          image={image}
          isFavorite={isFavorite}
          setIsFavorite={setIsFavorite}
          onUnHeart={onUnHeart}
        />
        <div className="group-hover:ease-in-out opacity-0 group-hover:transition-opacity group-hover:duration-300 group-hover:opacity-100">
          <ImageDropdownMenu image={image} />
        </div>
      </div>
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
