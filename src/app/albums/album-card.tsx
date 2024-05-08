import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import React from "react";
import { FolderType } from "../../../types";

type AlbumCardProps = {
  album: FolderType;
};

const AlbumCard = ({ album }: AlbumCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className=" capitalize font-bold flex space-x-2 items-start">
          <span className="text-xl">📁</span>{" "}
          <span className="text-2xl">{album.name}</span>
        </CardTitle>
        <CardDescription>
          This contains images stored in your{" "}
          <span className="font-semibold text-accent-foreground">
            {album.name}
          </span>{" "}
          album
        </CardDescription>
      </CardHeader>

      <CardFooter>
        <Button asChild size={"sm"}>
          <Link href={`/albums/${album.name}`}>View album</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AlbumCard;
