import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";

const Navbar = () => {
  return (
    <div className="border-b ">
      <div className="flex h-16 items-center px-4 container mx-auto">
        LOGO
        {/* <TeamSwitcher /> */}
        {/* <MainNav className="mx-6" /> */}
        <div className="ml-auto flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          {/* <Search /> */}
          {/* <UserNav /> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
