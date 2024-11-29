import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../support/navbar-menu";
import { cn } from "../../../lib/utils";

export function NavbarDemo() {
  return (
    (<div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>)
  );
}

function Navbar({
  className
}) {
  const [active, setActive] = useState(null);
  return (
    (<div
      className={cn("fixed text-xl top-10 inset-x-0 max-w-4xl mx-auto mt-7 z-50", className)}>
      <Menu setActive={setActive}>
        <HoveredLink href="http://localhost:3000/">Home</HoveredLink>
        <MenuItem setActive={setActive} active={active} item="Notes">
          <div className="flex flex-col space-y-4 text-lg">
            <HoveredLink href="http://localhost:3000/mynotes">My Notes</HoveredLink>
            <HoveredLink href="http://localhost:3000/addnotes">Add Note</HoveredLink>
          </div>
        </MenuItem>
        <HoveredLink href="http://localhost:3000/about">About</HoveredLink>
      </Menu>
    </div>)
  );
}
