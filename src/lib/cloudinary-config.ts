import cloudinary from "cloudinary";

export const cloudinaryConfig = async () => {
  return await cloudinary.v2.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  });
};
