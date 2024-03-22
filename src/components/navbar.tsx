"use client";

import { THEME_STORAGE_KEY } from "@/lib/consts";
import { Button, Divider, Switch } from "@nextui-org/react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "./context";
const Navbar = () => {
  const { theme, setTheme } = useGlobalContext();
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (navRef.current) {
      document.documentElement.style.setProperty(
        "--nav-height",
        `${navRef.current.offsetHeight}px`,
      );
    }
  }, [navRef]);
  useEffect(() => {
    const THEME_STORAGE = localStorage.getItem(THEME_STORAGE_KEY);
    if (THEME_STORAGE) {
      setTheme(THEME_STORAGE as "light" | "dark");
      if (THEME_STORAGE === "dark") {
        setIsSelected(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (theme === "dark" || isSelected) {
      document.documentElement.classList.add("dark");
      localStorage.setItem(THEME_STORAGE_KEY, "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem(THEME_STORAGE_KEY, "light");
    }
  }, [isSelected, theme]);

  return (
    <>
      <div
        ref={navRef}
        className="sticky top-0 mx-auto flex max-w-screen-2xl justify-between px-7 py-5 dark:border-zinc-800 sm:px-10"
      >
        <Link
          href="/"
          className="flex items-center justify-start gap-2.5 font-bricolage text-xl font-semibold dark:text-zinc-100"
        >
          DK{" "}
          <Divider
            orientation="vertical"
            className="h-4 w-[2px] bg-black dark:bg-zinc-300"
          />{" "}
          <span className="text-sm font-medium">Dhikr Counter</span>
        </Link>
        <div className="flex items-center space-x-3">
          <Switch
            isSelected={isSelected}
            onValueChange={setIsSelected}
            color="success"
            startContent={<SunIcon />}
            endContent={<MoonIcon />}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
