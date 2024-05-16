"use client";

import { InfoIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ImageType } from "../../types";
import CloudinaryImage from "./cloudinary-image";

type ImageMasonryProps = {
  resources: ImageType[];
  onUnHeart?: (image: ImageType) => void;
};

const ImageMasonry = ({ resources, onUnHeart }: ImageMasonryProps) => {
  const [totalResources, setTotalResources] = useState(resources?.length);
  const pathname = usePathname();

  useEffect(() => {
    setTotalResources(resources?.length);
  }, [resources?.length]);
  return (
    <>
      {totalResources > 0 && (
        <div className="flex items-center justify-between">
          <p>Total images: {totalResources}</p>
          {pathname === "/gallery" &&
            totalResources >= parseInt(process.env.NEXT_PUBLIC_MAX_IMAGES!) && (
              <p className="p-2 text-destructive-foreground bg-destructive text-xs rounded flex items-center">
                <InfoIcon className="w-4 h-4 mr-2" />
                Maximum number of Images
                reached
              </p>
            )}
        </div>
      )}
      <div className="mt-5 columns-2 lg:columns-3 xl:columns-4">
        {resources?.map((image, index) => (
          <CloudinaryImage
            image={image}
            key={image.public_id}
            onUnHeart={onUnHeart}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default ImageMasonry;
