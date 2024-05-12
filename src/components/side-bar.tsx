"use client";

import { Folder, Heart, ImageIcon, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";

const SideBar = () => {
  const pathname = usePathname();

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
            className="sm:hidden hover:bg-white hover:text-neutral-900"
          >
            <Menu />
          </Button>
          <div className="space-y-1 flex flex-col">
            <Link href={"/gallery"}>
              <Button
                variant={pathname === "/gallery" ? "secondary" : "ghost"}
                className="sm:w-full justify-start w-fit text-neutral-400"
              >
                <ImageIcon className="w-4 h-4 sm:mr-2" />
                <span className="hidden sm:block">Gallery</span>
              </Button>
            </Link>

            <Link href={"/albums"}>
              <Button
                variant={pathname === "/albums" ? "secondary" : "ghost"}
                className="sm:w-full justify-start w-fit text-neutral-400"
              >
                <Folder className="w-4 h-4 sm:mr-2" />
                <span className="hidden sm:block">Albums</span>
              </Button>
            </Link>

            <Link href={"/favorites"}>
              <Button
                variant={pathname === "/favorites" ? "secondary" : "ghost"}
                className="sm:w-full justify-start w-fit text-neutral-400"
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
