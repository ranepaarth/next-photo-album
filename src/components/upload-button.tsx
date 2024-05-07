"use client";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { CldUploadButton } from "next-cloudinary";
import { useRouter } from "next/navigation";
import React from "react";

const UploadButton = () => {
  const router = useRouter();
  return (
    <Button asChild>
      <CldUploadButton
        uploadPreset="l42mnejv"
        onSuccess={() => {
          setTimeout(() => {
            router.refresh();
          }, 1000);
        }}
      >
        <div className="flex items-center">
          <Upload className="w-4 h-4 mr-2" />
          Upload
        </div>
      </CldUploadButton>
    </Button>
  );
};

export default UploadButton;
