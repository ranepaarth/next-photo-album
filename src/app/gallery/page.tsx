import CloudinaryImage from "@/components/cloudinary-image";
import UploadButton from "@/components/upload-button";
import cloudinary from "cloudinary";
import React from "react";

const GalleryPage = async () => {
  const results: CloudinarySearchResults = await cloudinary.v2.search
    .expression("resource_type:image AND folder:next-photo-album")
    .sort_by("created_at", "desc")
    .max_results(30)
    .execute();

  return (
    <section>
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">GalleryPage</h1>
        <UploadButton />
      </div>

      <div className="mt-5 columns-1 sm:columns-2 lg:columns-3 xl:columns-4">
        {results.resources.map((image) => (
          <CloudinaryImage image={image} key={image.public_id} />
        ))}
      </div>
    </section>
  );
};

export default GalleryPage;
