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
import { Ellipsis, ImageMinus, Pencil } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Image } from "../../types";
import { AddToAlbumDialog } from "./add-to-album-dialog";

export function ImageDropdownMenu({ image }: { image: Image }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const handleRemoveImage = async () => {
    await addToAlbumAction("root", image);
  };
  return (
    <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
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
              <AddToAlbumDialog
                image={image}
                onClose={() => setDropdownOpen(false)}
              />
            </DropdownMenuItem>
          </div>
          <DropdownMenuItem className="py-1.5 hover:bg-secondary w-full rounded-sm">
            <Link
              href={`/edit?publicId=${encodeURIComponent(image.public_id)}`}
              className="flex items-center px-2 w-full"
            >
              <Pencil className="h-4 w-4 mr-2" />
              <span>Edit</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="py-2 hover:bg-secondary w-full rounded-sm">
            <Button
              variant={"imageMenuBtn"}
              className="h-0 w-full flex justify-start px-2"
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
