"use client";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { CldUploadButton } from "next-cloudinary";
import React from "react";

const GalleryPage = () => {
  return (
    <section>
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">GalleryPage</h1>

        <Button asChild>
          <div className="flex items-center space-x-2">
            <Upload className="w-4 h-4" />
            <CldUploadButton uploadPreset="l42mnejv" />
          </div>
        </Button>
      </div>
    </section>
  );
};

export default GalleryPage;
