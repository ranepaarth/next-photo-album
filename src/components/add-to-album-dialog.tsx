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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Folder, FolderPlus } from "lucide-react";
import { ChangeEvent, useEffect, useState, useTransition } from "react";
import { FetchAlbumsResultTypes, FolderType, Image } from "../../types";

type AddToAlbumProps = {
  image: Image;
  onClose: () => void;
};

export function AddToAlbumDialog({ image, onClose }: AddToAlbumProps) {
  const [albumName, setAlbumName] = useState("New album");
  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);
  const [albums, setAlbums] = useState<FolderType[]>();
  const [searchAlbums, setSearchAlbums] = useState<FolderType[]>();

  const handleClick = async () => {
    setOpen(false);
    onClose();
    await addToAlbumAction(albumName, image);
  };

  useEffect(() => {
    startTransition(async () => {
      const result: FetchAlbumsResultTypes = await fetchAlbums();
      if (!result.folders) return;
      setAlbums(result.folders);
    });
  }, []);

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
        <div className="grid gap-4 py-4 relative">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-left">
              Album
            </Label>
            <Input
              id="name"
              onChange={handleChange}
              value={albumName}
              className="col-span-4 lowercase"
              placeholder="album name"
            />
          </div>

          {albumName && searchAlbums && searchAlbums?.length > 0 && (
            <div className="absolute bg-slate-950 border rounded-md top-24 w-60 flex flex-col space-y-1 p-2 max-h-[250px] overflow-auto searchAlbums">
              {searchAlbums?.map((folder) => (
                <p
                  className="p-2 rounded-sm hover:bg-slate-600 cursor-pointer flex items-center"
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
        <DialogFooter>
          <Button onClick={handleClick} type="submit">
            Add
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
