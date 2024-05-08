"use client";

import { addToAlbumAction } from "@/actions/add-to-album";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Ellipsis, ImageMinus } from "lucide-react";
import { Image } from "../../types";
import { AddToAlbumDialog } from "./add-to-album-dialog";

export function ImageDropdownMenu({ image }: { image: Image }) {
  const handleRemoveImage = async () => {
    await addToAlbumAction("root", image);
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="imageMenuBtn" className="p-0 focus-visible:ring-0">
          <Ellipsis className="w-5 h-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40">
        <DropdownMenuLabel>Image</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <div className="hover:bg-secondary w-full rounded-sm">
            <DropdownMenuItem asChild>
              <AddToAlbumDialog image={image} />
            </DropdownMenuItem>
          </div>
          <DropdownMenuItem>
            <Button
              variant={"ghost"}
              className="h-0 py-3 w-full flex justify-start px-2"
              onClick={handleRemoveImage}
            >
              <ImageMinus className="h-4 w-4 mr-2" />
              Remove
            </Button>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
