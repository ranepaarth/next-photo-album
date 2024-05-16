"use server";

import { cloudinaryConfig } from "@/lib/cloudinary-config";
import cloudinary from "cloudinary";

export async function getAssetImage(imagePublicId: string) {
  await cloudinaryConfig();

  const result = await cloudinary.v2.api.resources_by_ids([imagePublicId], {
    tags: true,
  });
    // console.log(result);
  return result;
}
