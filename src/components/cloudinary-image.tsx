"use client";

import { motion } from "framer-motion";
import { CldImage } from "next-cloudinary";
import React, { useState } from "react";
import { ImageType } from "../../types";
import ImageHeartIcon from "./heart-icon";
import { ImageDropdownMenu } from "./image-dropdown-menu";

type CloudinaryImageProps = {
  image: ImageType;
  onUnHeart?: (image: ImageType) => void;
  index?: number;
};

const CloudinaryImage = ({ image, onUnHeart, index }: CloudinaryImageProps) => {
  const [isFavorite, setIsFavorite] = useState(image.tags.includes("favorite"));

  return (
    <motion.article
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      initial="hidden"
      animate="visible"
      transition={{
        delay: (index as number) * 0.25,
        ease: "easeInOut",
        duration: 0.5,
      }}
      viewport={{ amount: 0 }}
      className="w-auto aspect-video first:mt-0 mt-4 relative group rounded-md"
    >
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
        quality={20}
        className="w-full rounded-md brightness-90 overflow-hidden"
      />
    </motion.article>
  );
};

export default CloudinaryImage;
