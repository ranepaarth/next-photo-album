"use client";

import { fetchFavoriteImages } from "@/actions/fetch-favorites";
import FavoritesList from "@/app/(cloudinary)/favorites/fovirtes-list";
import React, { useEffect, useState, useTransition } from "react";
import { CloudinarySearchResults } from "../../../../types";

const FavoritesPage = () => {
  const [results, setResults] = useState<CloudinarySearchResults>();

  const [isPending, startTransition] = useTransition();
  useEffect(() => {
    startTransition(async () => {
      const response = await fetchFavoriteImages();
      if (!response.resources) return;
      setResults(response);
    });
  }, []);

  return (
    <section>
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold mb-8">Favorites</h1>
      </div>

      <FavoritesList initialResources={results?.resources} />
    </section>
  );
};

export default FavoritesPage;
