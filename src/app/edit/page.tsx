"use client";

import { getAssetImage } from "@/actions/get-asset-image";
import ForceRefresh from "@/components/force-refresh";
import { Button } from "@/components/ui/button";
import { Eraser, Scissors } from "lucide-react";
import { CldImage, CldImageProps, CldOgImageProps } from "next-cloudinary";
import Link from "next/link";
import React, { useEffect, useState, useTransition } from "react";
import { CloudinarySearchResults, Image } from "../../../types";

type EditPageProps = {
  searchParams: {
    publicId: string;
  };
};

const EditPage = ({ searchParams }: EditPageProps) => {
  const [image, setImage] = useState<Image>();
  const [isPending, startTransition] = useTransition();
  const [transformation, setTransformation] = useState<
    | undefined
    | "generative-fill"
    | "blur"
    | "remove-background"
    | "gray-scale"
    | "crop"
  >();

  useEffect(() => {
    const publicId = decodeURIComponent(searchParams.publicId);

    startTransition(async () => {
      const result: CloudinarySearchResults = await getAssetImage(publicId);
      setImage(result.resources[0]);
    });
  }, [searchParams.publicId]);

  console.log(image);
  return (
    <section>
      <ForceRefresh />
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Edit Image</h1>
        <Link href={"#"}>
          <Button asChild>Download Image</Button>
        </Link>
      </div>

      <div className="flex items-center space-4 flex-wrap gap-4">
        <Button
          variant={"secondary"}
          onClick={() => setTransformation("generative-fill")}
          className="hover:scale-110 hover:transition-transform hover:duration-200 hover:ease-in-out"
        >
          ✨ Generative fill
        </Button>
        <Button variant={"secondary"} onClick={() => setTransformation("blur")}>
          <span className="hover:blur-[1.5px]">🖼️ Image blurrrr</span>
        </Button>
        <Button
          variant={"secondary"}
          onClick={() => setTransformation("remove-background")}
          className="hover:bg-transparent bg-no-repeat bg-cover hover:transition-transform hover:duration-200 hover:ease-in-out"
        >
          <span className=""> Remove background</span>
        </Button>
        <Button
          variant={"secondary"}
          onClick={() => setTransformation("gray-scale")}
          className="hover:grayscale"
        >
          <span>Image grayscale</span>
        </Button>
        <Button
          variant={"secondary"}
          onClick={() => setTransformation(undefined)}
          className="group flex items-center gap-1 w-32"
        >
          <Scissors className="w-4 h-4" />
          <span>Crop</span>
          <span className="group-hover:hidden">Image</span>
        </Button>
        <Button
          variant={"destructive"}
          onClick={() => setTransformation(undefined)}
        >
          <Eraser className="w-4 h-4 mr-2" />
          Clear all
        </Button>
      </div>

      <hr className="my-4" />
      <div className="flex items-center space-x-2 justify-center w-full">
        <div className="flex-1 w-1/2 aspect-auto max-w-[300px] flex flex-col items-center space-y-2">
          <span className="text-lg font-semibold">🖼️ Original Image</span>
          {image && (
            <CldImage
              src={searchParams.publicId}
              alt="image"
              width={300}
              height={200}
            />
          )}
        </div>
        <div className="flex-1 w-1/2 aspect-auto max-w-[300px] flex flex-col items-center space-y-2">
          <span className="text-lg font-semibold">🎇 Transformed Image</span>
          {image && (
            <CldImage
              src={searchParams.publicId}
              alt="image"
              width={300}
              height={200}
              fillBackground={transformation === "generative-fill"}
              blur={transformation === "blur" ? "800" : ""}
              removeBackground={transformation === "remove-background"}
              grayscale={transformation === "gray-scale"}
              crop={transformation === "crop" ? "crop" : undefined}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default EditPage;
