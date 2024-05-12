"use client";

import { Folder } from "lucide-react";
import React, { ChangeEvent, SetStateAction, useState } from "react";
import { FolderType } from "../../types";
import { Input } from "./ui/input";

type SearchAlbumsProps = {
  albumName: string;
  albums: FolderType[] | undefined;
  setAlbumName: React.Dispatch<SetStateAction<string>>;
};

const SearchAlbums = ({
  albumName,
  albums,
  setAlbumName,
}: SearchAlbumsProps) => {
  const [searchAlbums, setSearchAlbums] = useState<FolderType[]>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setAlbumName(e.target.value);

    const filteredAlbums = albums?.filter((folder) =>
      folder.name.toLowerCase().includes(e.target.value)
    );

    if (!filteredAlbums) {
      setSearchAlbums([]);
    }

    setSearchAlbums(filteredAlbums);
  };

  return (
    <div className="relative">
      <Input
        id="name"
        onChange={handleChange}
        value={albumName}
        className="col-span-4 lowercase"
        placeholder="album name"
      />
      {searchAlbums && searchAlbums?.length > 0 && (
        <div className="absolute bg-neutral-950 border rounded-md top-12 w-60 flex flex-col space-y-1 p-2 max-h-[250px] overflow-auto searchAlbums">
          {searchAlbums?.map((folder) => (
            <p
              className="p-2 rounded-sm hover:bg-neutral-600 cursor-pointer flex items-center"
              onClick={() => {
                setAlbumName(folder.name);
                setSearchAlbums([]);
              }}
              key={folder.path}
            >
              <span>
                <Folder className="w-4 h-4 mr-2" />
              </span>
              {folder.name}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchAlbums;
