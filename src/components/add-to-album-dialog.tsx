"use client";

import { addToAlbumAction, fetchAlbums } from "@/actions/add-to-album";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FolderPlus, Loader2 } from "lucide-react";
import { useEffect, useState, useTransition } from "react";
import { FetchAlbumsResultTypes, FolderType, ImageType } from "../../types";
import SearchAlbums from "./search-albums";

type AddToAlbumProps = {
  image: ImageType;
  onClose: () => void;
};

export function AddToAlbumDialog({ image, onClose }: AddToAlbumProps) {
  const [albumName, setAlbumName] = useState("New album");
  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);
  const [albums, setAlbums] = useState<FolderType[]>();

  const handleClick = async () => {
    startTransition(async () => {
      await addToAlbumAction(albumName, image).then(() => {
        onClose();
        setOpen(false);
      });
    });
  };

  useEffect(() => {
    startTransition(async () => {
      const result: FetchAlbumsResultTypes = await fetchAlbums();
      if (!result.folders) return;
      setAlbums(result.folders);
    });
  }, []);

  return (
    <Dialog
      open={open}
      onOpenChange={(isDialogOpen) => {
        setOpen(isDialogOpen);
        if (!isDialogOpen) {
          onClose();
        }
      }}
    >
      <DialogTrigger asChild>
        <Button variant="imageMenuBtn">
          <FolderPlus className="w-4 h-4 mr-2" />
          Add to Album
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add to Album</DialogTitle>
          <DialogDescription>
            Provide a name for your album where you want to move this image.
          </DialogDescription>
        </DialogHeader>
        <SearchAlbums
          albumName={albumName}
          albums={albums}
          setAlbumName={setAlbumName}
        />
        <DialogFooter>
          <Button onClick={handleClick} type="submit">
            {isPending ? <Loader2 className="w-4 h-4 animate-spin" /> : "Add"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
