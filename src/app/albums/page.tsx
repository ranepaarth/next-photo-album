"use client";

import { fetchAlbums } from "@/actions/add-to-album";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import React, { useEffect, useState, useTransition } from "react";
import { FetchAlbumsResultTypes, FolderType } from "../../../types";
import AlbumCard from "./album-card";
import AlbumCardSkeleton from "./album-card-skeleton";

const AlbumsPage = () => {
  const [albums, setAlbums] = useState<FolderType[]>();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(async () => {
      const result: FetchAlbumsResultTypes = await fetchAlbums();

      if (!result) {
        setAlbums([]);
      }

      setAlbums(result.folders);
    });
  }, []);

  if (isPending) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {[...Array(8)].map((item, index) => (
          <AlbumCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {albums?.map((album) => (
        <AlbumCard album={album} key={album.path} />
      ))}
    </section>
  );
};

export default AlbumsPage;
