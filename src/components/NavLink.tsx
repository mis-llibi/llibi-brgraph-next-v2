"use client"; // Mark this component as a Client Component (required for Next.js App Router)

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({
  href,
  exact = false,
  className = "block transition duration-150 truncate text-neutral-700",
  activeClassName = "underline !text-black !font-bold",
  children,
}: {
  href: string;
  exact?: boolean;
  className?: string;
  activeClassName?: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={`${className} ${
        isActive ? activeClassName : "hover:underline !text-black !font-bold"
      }`}
    >
      {children}
    </Link>
  );
}
