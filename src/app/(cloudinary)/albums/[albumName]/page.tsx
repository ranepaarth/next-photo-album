import ForceRefresh from "@/components/force-refresh";
import ImageMasonry from "@/components/image-masonry";
import { cloudinaryConfig } from "@/lib/cloudinary-config";
import cloudinary from "cloudinary";
import { ImagePlus } from "lucide-react";
import React from "react";
import { CloudinarySearchResults } from "../../../../../types";

type SingleAlbumPageProps = {
  params: {
    albumName: string;
  };
};

const SingleAlbumPage = async ({ params }: SingleAlbumPageProps) => {
  await cloudinaryConfig();

  const results: CloudinarySearchResults = await cloudinary.v2.search
    .expression(
      `resource_type:image AND folder:next-photo-album/${params.albumName}`
    )
    .with_field("tags")
    .sort_by("last_updated.public_id_updated_at", "desc")
    .max_results(30)
    .execute();

  // console.log(results.resources);

  let content;
  if (results.resources.length === 0) {
    content = (
      <div className="text-neutral-500 flex items-end gap-2">
        <span>
          <ImagePlus className="w-8 h-8" />
        </span>
        <p className="text-lg">Add an image to this album</p>
      </div>
    );
  }

  if (results.resources.length > 0) {
    content = <ImageMasonry resources={results.resources} />;
  }
  // console.log(`next-photo-album/${params.albumName}`);
  return (
    <section>
      <ForceRefresh />
      <div className="flex space-x-1 items-start mb-8">
        <span className="text-3xl">📁</span>
        <span className="text-4xl font-bold capitalize">
          {params.albumName}
        </span>
      </div>
      {content}
    </section>
  );
};

export default SingleAlbumPage;
