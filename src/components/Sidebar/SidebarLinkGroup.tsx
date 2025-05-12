"use client"; // Mark this component as a Client Component

import React, { useState, ReactNode } from "react";

interface SidebarLinkGroupProps {
  children: (handleClick: () => void, open: boolean) => ReactNode;
  activecondition: boolean;
}

function SidebarLinkGroup({
  children,
  activecondition,
}: SidebarLinkGroupProps) {
  const [open, setOpen] = useState(activecondition);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <li
      className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
        activecondition ? "bg-neutral-200" : ""
      }`}
    >
      {children(handleClick, open)}
    </li>
  );
}

export default SidebarLinkGroup;
