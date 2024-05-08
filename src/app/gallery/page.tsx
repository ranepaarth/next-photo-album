import ForceRefresh from "@/components/force-refresh";
import ImageMasonry from "@/components/image-masonry";
import UploadButton from "@/components/upload-button";
import cloudinary from "cloudinary";
import React from "react";
import { CloudinarySearchResults } from "../../../types";

const GalleryPage = async () => {
  const results: CloudinarySearchResults = await cloudinary.v2.search
    .expression("resource_type:image AND folder:next-photo-album")
    .with_field("tags")
    .sort_by("created_at", "desc")
    .max_results(30)
    .execute();

  return (
    <section>
      <ForceRefresh />
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">Gallery</h1>
        <UploadButton />
      </div>

      <ImageMasonry resources={results.resources} />
    </section>
  );
};

export default GalleryPage;
