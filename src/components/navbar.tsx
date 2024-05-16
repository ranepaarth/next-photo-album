"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  const { setTheme } = useTheme();

  return (
    <div className="border-b ">
      <div className="flex h-16 items-center px-4 container mx-auto">
        LOGO
        <div className="ml-auto flex items-center space-x-4">
          <Button
            variant={"ghost"}
            className="dark:hidden block"
            onClick={() => setTheme("dark")}
          >
            <MoonIcon className="w-5 h-5"/>
          </Button>
          <Button
            variant={"ghost"}
            className="dark:block hidden"
            onClick={() => setTheme("light")}
          >
            <SunIcon className="w-5 h-5"/>
          </Button>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
