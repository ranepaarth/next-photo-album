import FavoritesList from "@/components/fovirtes-list";
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

      <FavoritesList initialResources={results.resources} />
    </section>
  );
};

export default FavoritesPage;
