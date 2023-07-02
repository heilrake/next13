"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = {
  label: string;
  href: string;
};

type NavigationProps = {
  navLinks: NavLink[];
};

export const Navigation = (props: NavigationProps) => {
  const { navLinks } = props;
  const pathname = usePathname();
  return (
    <>
      {navLinks.map((link, index) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={index}
            href={link.href}
            className={isActive ? "underline text-sky-400" : ""}
          >
            {link.label}
          </Link>
        );
      })}
    </>
  );
};
