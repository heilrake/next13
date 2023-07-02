import { Navigation } from "./Navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export const Header = () => {
  return (
    <header className="text-white">
      {/* <Navigation navLinks={navItems} /> */}
      header
    </header>
  );
};
