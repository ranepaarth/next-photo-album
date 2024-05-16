"use client";

import { setAsFavoriteAction } from "@/actions/set-as-favorite";
import { HeartIcon } from "lucide-react";
import React, { useTransition } from "react";
import { ImageType } from "../../types";

type HeartIconProps = {
  image: ImageType;
  setIsFavorite: React.Dispatch<React.SetStateAction<boolean>>;
  isFavorite: boolean;
  onUnHeart?: (image: ImageType) => void;
};

const ImageHeartIcon = ({
  image,
  isFavorite,
  setIsFavorite,
  onUnHeart,
}: HeartIconProps) => {
  const [isPending, startTransition] = useTransition();

  return isFavorite ? (
    <button
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
      onClick={() => {
        setIsFavorite(true);
        startTransition(() => {
          setAsFavoriteAction(image.public_id, true);
        });
      }}
    >
      <HeartIcon className="w-5 h-5 group-hover:ease-in-out opacity-0 group-hover:transition-opacity group-hover:duration-300 group-hover:opacity-100 text-white" />
    </button>
  );
};

export default ImageHeartIcon;
