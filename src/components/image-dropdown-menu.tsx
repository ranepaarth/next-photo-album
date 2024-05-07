"use client";

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
import { Ellipsis, FolderPlus } from "lucide-react";
import { Image } from "../../types";
import { AddToAlbumDialog } from "./add-to-album-dialog";

export function ImageDropdownMenu({ image }: { image: Image }) {
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
          <DropdownMenuItem asChild>
            <AddToAlbumDialog image={image} />
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
