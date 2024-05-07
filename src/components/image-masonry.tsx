"use client";

import React from "react";
import CloudinaryImage from "./cloudinary-image";

type ImageMasonryProps = {
  resources: Image[];
  onUnHeart?: (image: Image) => void;
};

const ImageMasonry = ({ resources, onUnHeart }: ImageMasonryProps) => {
  return (
    <div className="mt-5 columns-1 sm:columns-2 lg:columns-3 xl:columns-4">
      {resources.map((image) => (
        <CloudinaryImage
          image={image}
          key={image.public_id}
          onUnHeart={onUnHeart}
        />
      ))}
    </div>
  );
};

export default ImageMasonry;