"use client";

import { fetchAlbums } from "@/actions/add-to-album";
import { AccordionContent } from "@radix-ui/react-accordion";
import { Folder, Heart, Image, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState, useTransition } from "react";
import { FetchAlbumsResultTypes, FolderType } from "../../types";
import { Accordion, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Button } from "./ui/button";

const SideBar = () => {
  const pathname = usePathname();
  const [albums, setAlbums] = useState<FolderType[]>();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(async () => {
      const result: FetchAlbumsResultTypes = await fetchAlbums();

      if (!result) {
        setAlbums([]);
      }

      setAlbums(result.folders);
    });
  }, []);

  console.log(albums);

  return (
    <div className="pb-12 sm:w-1/3 max-w-[250px]">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight hidden sm:block">
            Manage
          </h2>
          <Button
            size={"sm"}
            variant={"ghost"}
            className="sm:hidden hover:bg-white hover:text-slate-900"
          >
            <Menu />
          </Button>
          <div className="space-y-1 flex flex-col">
            <Link href={"/gallery"}>
              <Button
                variant={pathname === "/gallery" ? "secondary" : "ghost"}
                className="sm:w-full justify-start w-fit text-slate-400"
              >
                <Image className="w-4 h-4 sm:mr-2" />
                <span className="hidden sm:block">Gallery</span>
              </Button>
            </Link>
            {/* <Link href={"/albums"}> */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b-0">
                <AccordionTrigger className="hover:no-underline hover:bg-accent rounded-md px-4 text-sm text-slate-400 hover:text-accent-foreground py-2">
                  <div className="flex items-center">
                    <Folder className="w-4 h-4 sm:mr-2" />
                    <span className="hidden sm:block">Albums</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="max-h-[250px] searchAlbumsContainer flex flex-col w-full overflow-auto">
                    <Link href={"/albums"}>
                      <Button
                        variant={"ghost"}
                        className="w-full flex justify-start pl-8 text-slate-400"
                      >
                        <Folder className="h-4 w-4 mr-2" />
                        All albums
                      </Button>
                    </Link>
                    {albums?.map((folder) => (
                      <Link href={`/albums/${folder.name}`}>
                        <Button
                          variant={"ghost"}
                          className="w-full flex justify-start pl-8 text-slate-400"
                        >
                          <Folder className="h-4 w-4 mr-2" />
                          {folder.name}
                        </Button>
                      </Link>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            {/* </Link> */}
            <Link href={"/favorites"}>
              <Button
                variant={pathname === "/favorites" ? "secondary" : "ghost"}
                className="sm:w-full justify-start w-fit text-slate-400"
              >
                <Heart className="w-4 h-4 sm:mr-2" />
                <span className="hidden sm:block">Favorites</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
