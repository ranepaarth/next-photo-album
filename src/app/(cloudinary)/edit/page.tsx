"use client";

import { getAssetImage } from "@/actions/get-asset-image";
import { Button } from "@/components/ui/button";
import { Eraser, Info, Loader2, Scissors } from "lucide-react";
import { CldImage } from "next-cloudinary";
import React, { useEffect, useState, useTransition } from "react";
import { CloudinarySearchResults, ImageType } from "../../../../types";

type EditPageProps = {
  searchParams: {
    publicId: string;
  };
};

type Transformation =
  | undefined
  | "generative-fill"
  | "blur"
  | "remove-background"
  | "gray-scale"
  | "crop";

const EditPage = ({ searchParams }: EditPageProps) => {
  const [image, setImage] = useState<ImageType>();
  const [isPending, startTransition] = useTransition();
  const [transformation, setTransformation] = useState<Transformation>();

  useEffect(() => {
    const publicId = decodeURIComponent(searchParams.publicId);

    startTransition(async () => {
      const result: CloudinarySearchResults = await getAssetImage(publicId);
      setImage(result.resources[0]);
    });
  }, [searchParams.publicId]);

  return (
    <section>
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-4xl font-bold">Edit Image</h1>
      </div>

      <div className="flex items-center px-4 py-2 rounded-md border dark:bg-neutral-900 bg-neutral-200 w-fit mb-8 text-muted-foreground text-xs">
        <Info className="mr-2 w-4 h-4" />
        The behavior of below transformations depends on the image you choose
      </div>

      <div className="flex items-center space-4 flex-wrap gap-4 ">
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
          className="hover:grayscale hover:bg-neutral-500 bg-blue-500"
        >
          <span>Image grayscale</span>
        </Button>
        <Button
          variant={"secondary"}
          onClick={() => setTransformation("crop")}
          className="group flex items-center gap-1 w-32"
        >
          <Scissors className="w-4 h-4" />
          <span>Crop</span>
          <span className="group-hover:hidden">Image</span>
        </Button>
        <Button
          variant={"destructive"}
          onClick={() => setTransformation(undefined)}
          className="group"
        >
          <div className="w-full flex items-center group-hover:opacity-0 group-hover:transition-opacity group-hover:duration-150 group-hover:ease-linear">
            <Eraser className="w-4 h-4 mr-2" />
            <span>Clear</span>
          </div>
        </Button>
      </div>

      <hr className="my-4" />

      {isPending && !image ? (
        <div className="w-full text-center flex justify-center mt-20">
          <Loader2 className="animate-spin h-8 w-8" strokeWidth={2.5} />
        </div>
      ) : (
        <div className="flex items-center space-x-2 justify-center w-full">
          <div className="flex-1 w-1/2 aspect-auto max-w-[300px] flex flex-col items-center space-y-2">
            {image && (
              <>
                <span className="sm:text-lg font-semibold">
                  🖼️ Original Image
                </span>
                <CldImage
                  config={{
                    cloud: {
                      apiSecret: process.env.CLOUDINARY_API_SECRET,
                      apiKey: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
                      cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
                    },
                  }}
                  src={searchParams.publicId}
                  alt="image"
                  width={280}
                  height={180}
                />
              </>
            )}
          </div>
          <div className="flex-1 w-1/2 aspect-auto max-w-[300px] flex flex-col items-center space-y-2">
            {image && (
              <>
                <span className="sm:text-lg font-semibold">
                  🎇 Transformed Image
                </span>
                <CldImage
                  config={{
                    cloud: {
                      apiSecret: process.env.CLOUDINARY_API_SECRET,
                      apiKey: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
                      cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
                    },
                  }}
                  src={searchParams.publicId}
                  alt="image"
                  width={280}
                  height={180}
                  fillBackground={transformation === "generative-fill"}
                  blur={transformation === "blur" ? "800" : ""}
                  removeBackground={transformation === "remove-background"}
                  grayscale={transformation === "gray-scale"}
                  crop={transformation === "crop" ? "crop" : undefined}
                />
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default EditPage;
