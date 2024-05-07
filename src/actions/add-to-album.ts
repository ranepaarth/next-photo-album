"use server";

import cloudinary from "cloudinary";
import { Image } from "../../types";

export async function fetchAlbums() {
  return await cloudinary.v2.api.sub_folders("next-photo-album");
}

export async function addToAlbumAction(folderName: string, image: Image) {
  // extract the string except for the folder name and '/'

  //   Since our public_id is 'next-photo-album/askmas8a74ss4a' therefore if we add an image with that public_id into a folder say 'random' then the path of that image will be

  // next-photo-album/random/next-photo-album/askmas8a74ss4a

  // Which is something we have to avoid
  // Thus the below extra step


  // The below approach is also not right. What if the image is nested to "n" levels

  //TODO: But since we just need the last index value we can retrieve it. BUT HOW??
  const publicIdString = image.public_id.split("/")[1];

  await cloudinary.v2.uploader.rename(
    image.public_id,
    `next-photo-album/${folderName}/${publicIdString}`,
    {
      resource_type: "image",
    }
  );
}
