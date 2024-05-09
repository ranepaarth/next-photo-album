"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { FormEvent, useEffect, useState } from "react";

type SearchImagesProps = {
  searchTag: string;
};

const SearchImages = ({ searchTag }: SearchImagesProps) => {
  const [tagName, setTagName] = useState(searchTag ?? "");
  const router = useRouter();

  useEffect(() => {
    setTagName(searchTag);
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
      <div className="w-full flex items-center border rounded-md px-2">
        <Search className="w-4 h-4 text-muted-foreground" />
        <Input
          value={tagName}
          onChange={(e) => setTagName(e.target.value)}
          placeholder="Search by tag"
          className="outline-none focus-visible:ring-0 border-none"
        />
      </div>
      <Button size={"sm"} disabled={!tagName}>
        <Search className="w-4 h-4" />
      </Button>
    </form>
  );
};

export default SearchImages;
