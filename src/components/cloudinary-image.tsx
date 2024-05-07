"use client";

import { CldImage } from "next-cloudinary";
import React from "react";

type CloudinaryImageProps = {
  image: Image;
};
const CloudinaryImage = ({ image }: CloudinaryImageProps) => {
  return (
    <article className="w-auto aspect-video first:mt-0 mt-4">
      <CldImage
        alt="cloudinary image"
        src={image.public_id}
        width={image.width}
        height={image.height}
        className="rounded-md brightness-90"
      />
    </article>
  );
};

export default CloudinaryImage;
