"use server";

import { cloudinaryConfig } from "@/lib/cloudinary-config";
import cloudinary from "cloudinary";
import { CloudinarySearchResults } from "../../types";

export const fetchFavoriteImages = async () => {
  await cloudinaryConfig();
  const result: CloudinarySearchResults = await cloudinary.v2.search
    .expression("resource_type:image AND tags=favorite")
    .with_field("tags")
    .sort_by("last_updated.tags_updated_at", "desc")
    .max_results(30)
    .execute();

  return result;
};
