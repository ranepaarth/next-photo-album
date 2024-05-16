"use client";

import { addToAlbumAction } from "@/actions/add-to-album";
import { deleteImageAction } from "@/actions/delete-image";
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
import { Ellipsis, ImageMinus, Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { ImageType } from "../../types";
import { AddToAlbumDialog } from "./add-to-album-dialog";
import ForceRefresh from "./force-refresh";

export function ImageDropdownMenu({ image }: { image: ImageType }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const handleRemoveImage = async () => {
    await addToAlbumAction("root", image);
  };

  const handleDeleteImage = async () => {
    await deleteImageAction(image.public_id);
    router.refresh();
  };

  return (
    <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="imageMenuBtn" className="p-0 focus-visible:ring-0">
          <Ellipsis className="w-5 h-5 text-white" />
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
          {pathname !== "/gallery" && (
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
          )}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="py-2">
            <Button
              variant={"imageMenuBtn"}
              className="h-0 w-full flex justify-start px-2"
              onClick={handleDeleteImage}
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Delete Image
            </Button>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
