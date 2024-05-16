"use server";

import cloudinary from "cloudinary";
import { ImageType } from "../../types";
import { cloudinaryConfig } from "@/lib/cloudinary-config";

export async function fetchAlbums() {
  await cloudinaryConfig()
  return await cloudinary.v2.api.sub_folders("next-photo-album");
}

export async function addToAlbumAction(folderName: string, image: ImageType) {
  // extract the string except for the folder name and '/'

  //   Since our public_id is 'next-photo-album/askmas8a74ss4a' therefore if we add an image with that public_id into a folder say 'random' then the path of that image will be

  // next-photo-album/random/next-photo-album/askmas8a74ss4a

  // Which is something we have to avoid
  // Thus the below extra step

  // The below approach is also not right. What if the image is nested to "n" levels

  const publicIdArray = image.public_id.split("/");
  const id = publicIdArray[publicIdArray.length - 1];

  await cloudinaryConfig()

  if (folderName === "root" || folderName === "next-photo-album") {
    await cloudinary.v2.uploader.rename(
      image.public_id,
      `next-photo-album/${id}`,
      {
        resource_type: "image",
      }
    );

    return;
  }

  await cloudinary.v2.uploader.rename(
    image.public_id,
    `next-photo-album/${folderName}/${id}`,
    {
      resource_type: "image",
    }
  );
}
