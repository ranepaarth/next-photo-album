import { cn } from "@/lib/utils";
import { Folder, Heart, Image, Menu } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

const SideBar = () => {
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
            <Button
              variant="secondary"
              className="sm:w-full justify-start w-fit text-slate-400"
            >
              <Image className="w-4 h-4 sm:mr-2" />
              <span className="hidden sm:block">Gallery</span>
            </Button>
            <Button
              variant="ghost"
              className="sm:w-full justify-start w-fit text-slate-400"
            >
              <Folder className="w-4 h-4 sm:mr-2" />
              <span className="hidden sm:block">Albums</span>
            </Button>
            <Button
              variant="ghost"
              className="sm:w-full justify-start w-fit text-slate-400"
            >
              <Heart className="w-4 h-4 sm:mr-2" />
              <span className="hidden sm:block">Favorites</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
