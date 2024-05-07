import CloudinaryImage from "@/components/cloudinary-image";
import cloudinary from "cloudinary";
import React from "react";

const FavoritesPage = async () => {
  const results: CloudinarySearchResults = await cloudinary.v2.search
    .expression(
      "resource_type:image AND folder:next-photo-album AND tags=favorite"
    )
    .with_field("tags")
    .sort_by("last_updated.tags_updated_at", "desc")
    .max_results(30)
    .execute();

  return (
    <section>
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">Favorites</h1>
      </div>

      <div className="mt-5 columns-1 sm:columns-2 lg:columns-3 xl:columns-4">
        {results.resources.map((image) => (
          <CloudinaryImage image={image} key={image.public_id} />
        ))}
      </div>
    </section>
  );
};

export default FavoritesPage;
