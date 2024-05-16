"use server";

import cloudinary from "cloudinary";
import { CloudinarySearchResults } from "../../types";

export const fetchFavoriteImages = async () => {
  const result: CloudinarySearchResults = await cloudinary.v2.search
    .expression(
      `cloud_name:${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME} resource_type:image AND tags=favorite`
    )
    .with_field("tags")
    .sort_by("last_updated.tags_updated_at", "desc")
    .max_results(30)
    .execute();

  return result;
};
