"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NavbarSidebar } from "./navbar-sidebar";
import { MenuIcon } from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

interface NavbarItemProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const NavbarItem = ({ href, children, isActive }: NavbarItemProps) => {
  return (
    <Button
      asChild
      variant={"outline"}
      className={cn(
        "bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-lg",
        isActive ? "bg-black text-white hover:bg-black hover:text-white" : ""
      )}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};

const navbarItems = [
  {
    href: "/",
    children: "Home",
  },
  {
    href: "/about",
    children: "About",
  },
  {
    href: "/features",
    children: "Features",
  },
  {
    href: "/pricing",
    children: "Pricing",
  },
  {
    href: "/contact",
    children: "Contact",
  },
];

export const Navbar = () => {
  const pathname = usePathname();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div>
      <nav className="h-20 flex border-b justify-between font-medium bg-white">
        <Link href="/" className="pl-6 flex items-center">
          <span className={cn("text-4xl font-semibold", [poppins.className])}>
            Pro Duck.
          </span>
        </Link>

        <NavbarSidebar
          open={isSidebarOpen}
          onOpenChange={setIsSidebarOpen}
          items={navbarItems}
        />

        <div className="items-center gap-4 hidden lg:flex">
          {navbarItems.map((item) => (
            <NavbarItem
              isActive={pathname == item.href}
              key={item.href}
              href={item.href}
            >
              {item.children}
            </NavbarItem>
          ))}
        </div>

        <div className="hidden lg:flex">
          <Button
            variant={"secondary"}
            className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-white hover:bg-pink-400 transition-colors text-lg"
          >
            <Link href={"/sign-in"}>Log in</Link>
          </Button>
          <Button className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-black text-white hover:bg-pink-400 transition-colors text-lg">
            <Link href={"sign-up"}>Start Selling</Link>
          </Button>
        </div>

        <div className="lg:hidden flex items-center justify-center">
          <Button
            className="size-12 border-transparent bg-white"
            variant={"ghost"}
            onClick={() => setIsSidebarOpen(true)}
          >
            <MenuIcon></MenuIcon>
          </Button>
        </div>
      </nav>
    </div>
  );
};
