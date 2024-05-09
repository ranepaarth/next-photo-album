import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";
import AlbumCardSkeleton from "./album-card-skeleton";

const AlbumPageSkeleton = () => {
  return (
    <section>
      <div className="border p-2 rounded-md flex items-center w-full max-w-[400px] mb-8">
        <Search
          className="mr-2 h-3 w-3 text-muted-foreground"
          strokeWidth={2.5}
        />

        <Input
          disabled
          placeholder="Album name"
          className="border-none p-0 h-5 shadow-none focus-visible:ring-0"
        />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {[...Array(8)].map((item, index) => (
          <AlbumCardSkeleton key={index} />
        ))}
      </div>
    </section>
  );
};

export default AlbumPageSkeleton;
