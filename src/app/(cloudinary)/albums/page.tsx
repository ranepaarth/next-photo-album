"use client";

import { fetchAlbums } from "@/actions/add-to-album";
import React, { ChangeEvent, useEffect, useState, useTransition } from "react";
import { FetchAlbumsResultTypes, FolderType } from "../../../../types";
import AlbumCard from "./album-card";
import AlbumPageSkeleton from "./album-page-skeleton";
import AlbumSearchFilter from "./album-search-filter";

const AlbumsPage = () => {
  const [albums, setAlbums] = useState<FolderType[]>();
  const [isPending, startTransition] = useTransition();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterAlbums, setFilterAlbums] = useState<FolderType[]>();

  useEffect(() => {
    startTransition(async () => {
      const result: FetchAlbumsResultTypes = await fetchAlbums();

      if (!result) {
        setAlbums([]);
      }

      setAlbums(result.folders);
    });
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    const filteredAlbums = albums?.filter((folder) =>
      folder.name.includes(e.target.value)
    );
    setFilterAlbums(filteredAlbums);
  };

  if (isPending) {
    return <AlbumPageSkeleton />;
  }

  let content;

  if (searchTerm && filterAlbums) {
    content = filterAlbums?.map((album) => (
      <AlbumCard album={album} key={album.path} />
    ));
  }

  if (!searchTerm) {
    content = albums?.map((album) => (
      <AlbumCard album={album} key={album.path} />
    ));
  }

  if (searchTerm && filterAlbums?.length === 0) {
    content = (
      <div>
        <p className="w-fit text-3xl font-bold ">Folder not found.</p>
        <p className="mt-2 text-muted-foreground">
          This folder doesn&apos;t exist.
        </p>
      </div>
    );
  }

  return (
    <section className="">
      <div className="mb-8">
        <AlbumSearchFilter
          searchTerm={searchTerm}
          handleChange={handleChange}
        />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {content}
      </div>
    </section>
  );
};

export default AlbumsPage;
