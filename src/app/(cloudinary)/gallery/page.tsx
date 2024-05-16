import ForceRefresh from "@/components/force-refresh";
import ImageMasonry from "@/components/image-masonry";
import UploadButton from "@/components/upload-button";
import { cloudinaryConfig } from "@/lib/cloudinary-config";
import cloudinary from "cloudinary";
import Link from "next/link";
import React from "react";
import { CloudinarySearchResults } from "../../../../types";
import SearchImages from "./search-images";

type GalleryProps = {
  searchParams: {
    tag: string;
  };
};

const GalleryPage = async ({ searchParams }: GalleryProps) => {
  const tagsExpression = searchParams.tag ? `AND tags=${searchParams.tag}` : "";
  await cloudinaryConfig();
  const results: CloudinarySearchResults = await cloudinary.v2.search
    .expression(
      `resource_type:image AND folder:next-photo-album ${tagsExpression}`
    )
    .with_field("tags")
    .sort_by("created_at", "desc")
    .max_results(30)
    .execute();

  let content;

  if (results.resources.length === 0) {
    content = <p>No images yet</p>;
  }

  if (results.resources.length === 0 && searchParams.tag) {
    content = <p>No images with {searchParams.tag} tag.</p>;
  }

  if (results.resources.length > 0) {
    content = <ImageMasonry resources={results.resources} />;
  }

  return (
    <section>
      <ForceRefresh />
      <div className="flex justify-between items-center">
        <Link href={"/gallery"}>
          <h1 className="text-4xl font-bold">Gallery</h1>
        </Link>
        <UploadButton totalImages={results.resources.length} />
      </div>

      <SearchImages searchTag={searchParams.tag} />

      {content}
    </section>
  );
};

export default GalleryPage;
