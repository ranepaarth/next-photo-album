"use server";
import cloudinary from "cloudinary";
import { revalidatePath } from "next/cache";

export async function setAsFavoriteAction(
  publicId: string,
  setAsFavorite: boolean
) {
  if (setAsFavorite) {
    await cloudinary.v2.uploader.add_tag("favorite", [publicId]);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    revalidatePath("/gallery");
  } else {
    await cloudinary.v2.uploader.remove_tag("favorite", [publicId]);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    revalidatePath("/gallery");
  }

  //Not a good approach
  await new Promise((resolve) => setTimeout(resolve, 1000));
  revalidatePath("/gallery");
}
