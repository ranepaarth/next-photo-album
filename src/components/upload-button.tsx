"use client";

import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { CldUploadWidget } from "next-cloudinary";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

type UploadButtonType = {
  totalImages: number;
};

const UploadButton = ({ totalImages }: UploadButtonType) => {
  const router = useRouter();
  const [totalResources, setTotalResources] = useState(totalImages);
  const tag = useSearchParams().get("tag");

  console.log(tag);

  useEffect(() => {
    setTotalResources(totalImages);
  }, [totalImages]);

  return (
    <CldUploadWidget
      uploadPreset={process.env.NEXT_PUBLIC_UPLOAD_PRESET}
      onSuccess={() => {
        setTimeout(() => {
          router.refresh();
        }, 1000);
      }}
      config={{
        cloud: {
          apiSecret: process.env.CLOUDINARY_API_SECRET,
          apiKey: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
          cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
        },
      }}
    >
      {({ open }) => {
        return (
          <Button
            className="button"
            onClick={() => open()}
            disabled={
              totalResources >= parseInt(process.env.NEXT_PUBLIC_MAX_IMAGES!) ||
              !!(tag && tag !== "")
            }
          >
            <Upload className="w-4 h-4 mr-2" />
            Upload
          </Button>
        );
      }}
    </CldUploadWidget>
  );
};

export default UploadButton;
