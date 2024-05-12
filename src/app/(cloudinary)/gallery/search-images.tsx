"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { FormEvent, useEffect, useState } from "react";

type SearchImagesProps = {
  searchTag: string;
};

const SearchImages = ({ searchTag }: SearchImagesProps) => {
  const [tagName, setTagName] = useState(searchTag ?? "");
  const router = useRouter();

  useEffect(() => {
    setTagName(searchTag ?? "");
  }, [searchTag]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.replace(`/gallery?tag=${encodeURIComponent(tagName)}`);
  };

  return (
    <form
      className="w-full max-w-[550px] flex items-center space-x-2 my-5"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="w-full flex justify-between items-center border rounded-md px-4">
        <Search className="w-4 h-4 text-muted-foreground" />
        <Input
          value={tagName}
          onChange={(e) => setTagName(e.target.value)}
          placeholder="Search by tag"
          className="outline-none focus-visible:ring-0 border-none"
        />
        <Button
          variant={"ghost"}
          className="hover:bg-transparent p-0"
          onClick={() => setTagName("")}
          type="button"
        >
          <X className="w-4 h-4 text-muted-foreground hover:text-accent-foreground" />
        </Button>
      </div>
      <Button disabled={!tagName} type="submit">
        <Search className="w-4 h-4" />
      </Button>
    </form>
  );
};

export default SearchImages;
