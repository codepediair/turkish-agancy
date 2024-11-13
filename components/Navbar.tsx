"use client";
import { cn } from "@/lib/utils";
import { BookOpen, MenuIcon } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import { Dialog, DialogClose } from "./ui/dialog";
import { Button } from "./ui/button";
import { Instagram, Twitter, Facebook } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
// import ModeToggle from "../mode-toggle"
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
// import ModeToggle from "./mode-toggle"

import logo from "@/public/logo.svg";
import Image from "next/image";

export function NavBar() {
  return (
    <div className="flex items-center min-w-full w-full fixed justify-center p-2 z-[50] mt-[2rem]">
      <div className="flex justify-between md:w-[720px] w-[95%] border bg-opacity-10 relative backdrop-filter backdrop-blur-lg bg-white border-white border-opacity-20 rounded-xl p-2 shadow-lg">
        <Dialog>
          <SheetTrigger className="flex flex-row min-[825px]:hidden p-2 transition">
            <MenuIcon />
            <p>the best agancy</p>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>
                <Image src={logo} alt="logo" width={132} height={32} />
              </SheetTitle>
              <SheetDescription>
                follow Us in Social Media
                <div className="flex gap-2 justify-center mt-3">
                  <Button variant="outline" size="icon">
                    <Instagram />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Twitter />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Facebook />
                  </Button>
                </div>
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col space-y-3 mt-[1rem] z-[99]">
              <DialogClose asChild>
                <Link href="/">
                  <Button variant="outline" className="w-full">
                    Home
                  </Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link href="/about">
                  <Button variant="outline" className="w-full">
                    About
                  </Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link href="/contact">
                  <Button variant="outline" className="w-full">
                    contact
                  </Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link href="/blog">
                  <Button variant="outline" className="w-full">
                    Blog
                  </Button>
                </Link>
              </DialogClose>
              {/* <ModeToggle /> */}
            </div>
          </SheetContent>
        </Dialog>
        <NavigationMenu>
          <NavigationMenuList className="max-[825px]:hidden ">
            <Link href="/" className="pl-2">
              <Image src={logo} alt="logo" width={132} height={32} />
            </Link>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-2 max-[825px]:hidden">
          <Link href="/">
            <Button variant="ghost">Home</Button>
          </Link>
          <Link href="/about">
            <Button variant="ghost">About</Button>
          </Link>
          <Link href="/contact">
            <Button variant="ghost">Contact</Button>
          </Link>
          <Link href="/blog">
            <Button variant="ghost">Blog</Button>
          </Link>
          {/* <ModeToggle /> */}
        </div>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
