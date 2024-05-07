"use client";

import React, { useEffect, useState } from "react";
import ImageMasonry from "./image-masonry";

const FavoritesList = ({ initialResources }: { initialResources: Image[] }) => {
  const [resources, setResources] = useState(initialResources);

  useEffect(() => {
    setResources(initialResources);
  }, [initialResources]);

  const onUnHeart = (image: Image) => {
    setResources((currentResource) =>
      currentResource.filter(
        (resource) => resource.public_id !== image.public_id
      )
    );
  };
  return <ImageMasonry resources={resources} onUnHeart={onUnHeart} />;
};

export default FavoritesList;
