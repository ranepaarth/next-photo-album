"use server";

import cloudinary from "cloudinary";

export const deleteImageAction = async (publicId: string) => {
  return await cloudinary.v2.uploader.destroy(publicId);
};
