"use client";

import React, { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";

const ImageSkeleton = () => {
  const [width, setWidth] = useState<number>();

  useEffect(() => {
    setWidth(Math.random());
  }, []);

  if ((width as number) < 0.5) {
    return <Skeleton className="w-full h-[26rem]" />;
  }

  return <Skeleton className="w-full h-48" />;
};

const ImageMasonrySkeleton = () => {
  return (
    <div className="mt-5 columns-2 lg:columns-3 xl:columns-4 gap-4">
      {Array.from({ length: 10 }).map((_, index) => (
        <div
          className="mt-5 first:mt-0 flex-nowrap overflow-hidden"
          key={index}
        >
          <ImageSkeleton />
        </div>
      ))}
    </div>
  );
};

export default ImageMasonrySkeleton;
