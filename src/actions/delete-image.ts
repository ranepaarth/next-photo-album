"use server";

import { cloudinaryConfig } from "@/lib/cloudinary-config";
import cloudinary from "cloudinary";

export const deleteImageAction = async (publicId: string) => {
  await cloudinaryConfig();
  return await cloudinary.v2.uploader.destroy(publicId);
};
