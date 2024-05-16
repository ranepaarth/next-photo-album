"use client";

import React, { useEffect, useState } from "react";
import { ImageType } from "../../../../types";
import ImageMasonry from "../../../components/image-masonry";

const FavoritesList = ({
  initialResources,
}: {
  initialResources: ImageType[] | undefined;
}) => {
  const [resources, setResources] = useState(initialResources);

  useEffect(() => {
    setResources(initialResources);
  }, [initialResources]);

  const onUnHeart = (image: ImageType) => {
    setResources((currentResource) =>
      currentResource?.filter(
        (resource) => resource.public_id !== image.public_id
      )
    );
  };

  return (
    <ImageMasonry resources={resources!} onUnHeart={onUnHeart} />
  );
};

export default FavoritesList;
