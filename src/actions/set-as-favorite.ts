"use server";

import { cloudinaryConfig } from "@/lib/cloudinary-config";
import cloudinary from "cloudinary";

export async function setAsFavoriteAction(
  publicId: string,
  setAsFavorite: boolean
) {
  await cloudinaryConfig();

  if (setAsFavorite) {
    await cloudinary.v2.uploader.add_tag("favorite", [publicId]);
  } else {
    await cloudinary.v2.uploader.remove_tag("favorite", [publicId]);
  }
}
