"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React, { ChangeEvent } from "react";

type AlbumSearchFilterProps = {
  searchTerm: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const AlbumSearchFilter = ({
  searchTerm,
  handleChange,
}: AlbumSearchFilterProps) => {
  return (
    <div className="border p-2 rounded-md flex items-center w-full max-w-[400px]">
      <Search
        className="mr-2 h-3 w-3 text-muted-foreground"
        strokeWidth={2.5}
      />

      <Input
        value={searchTerm}
        onChange={(e) => handleChange(e)}
        placeholder="Album name"
        className="border-none p-0 h-5 shadow-none focus-visible:ring-0"
      />
    </div>
  );
};

export default AlbumSearchFilter;
