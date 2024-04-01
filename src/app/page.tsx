"use client";
import { useGlobalContext } from "@/components/context";
import { Button as ShadcnButton } from "@/components/ui/button";
import { COUNTER_STORAGE_KEY, ROTATION_STORAGE_KEY } from "@/lib/consts";
import { useGSAP } from "@gsap/react";
import { Button } from "@nextui-org/react";
import { PlusIcon } from "@radix-ui/react-icons";
import { AnimatePresence, animate, motion, useAnimate } from "framer-motion";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const GRADIENTS = [
  "radial-gradient(circle,rgba(115, 55, 254, 0.75) 0%,rgba(255, 255, 255, 0) 50%)",
  "radial-gradient(circle,rgba(255, 105, 180, 0.75) 0%,rgba(255, 255, 255, 0) 50%)", // HotPink
  "radial-gradient(circle,rgba(30, 144, 255, 0.75) 0%,rgba(255, 255, 255, 0) 50%)", // DodgerBlue
  "radial-gradient(circle,rgba(60, 179, 113, 0.75) 0%,rgba(255, 255, 255, 0) 50%)", // MediumSeaGreen
];

export default function Home() {
  const [counter, setCounter] = useState<number>(0);
  const [rotations, setRotations] = useState<number>(0);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const container = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP({ scope: container });

  const handleIncraseCounter = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    if (counter === 100) {
      setRotations(rotations + 1);
      setCounter(0);
      localStorage.setItem(ROTATION_STORAGE_KEY, String(rotations + 1));
      localStorage.setItem(COUNTER_STORAGE_KEY, "0");
      return;
    }
    setCounter(counter + 1);
    localStorage.setItem(COUNTER_STORAGE_KEY, String(counter + 1));
  };

  const animate = contextSafe(() => {
    gsap.fromTo(
      container.current,
      {
        background: GRADIENTS[Math.floor(Math.random() * GRADIENTS.length)],
        scale: 0,
        opacity: 1,
      },
      {
        scale: 25,
        opacity: 0,
        duration: 1,
      },
    );
  });

  const handleResetCounter = () => {
    localStorage.setItem(COUNTER_STORAGE_KEY, "0");
    localStorage.setItem(ROTATION_STORAGE_KEY, "0");
    setCounter(0);
    setRotations(0);
  };

  useEffect(() => {
    const COUNTER_STORAGE = localStorage.getItem(COUNTER_STORAGE_KEY);
    const ROTATION_STORAGE = localStorage.getItem(ROTATION_STORAGE_KEY);
    if (
      COUNTER_STORAGE &&
      COUNTER_STORAGE !== "NaN" &&
      COUNTER_STORAGE !== null &&
      COUNTER_STORAGE !== undefined
    ) {
      setCounter(Number(COUNTER_STORAGE));
    }

    if (
      ROTATION_STORAGE &&
      ROTATION_STORAGE !== "NaN" &&
      ROTATION_STORAGE !== null &&
      ROTATION_STORAGE !== undefined
    ) {
      setRotations(Number(ROTATION_STORAGE));
    }
  }, []);

  return (
    <div onClick={animate}>
      <div className="fixed right-0 top-20 flex w-full justify-center gap-5 sm:right-5 sm:justify-end">
        <Button
          variant="solid"
          onClick={handleResetCounter}
          className="z-[99] border border-zinc-100 bg-transparent text-xs font-medium shadow-small hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
        >
          Reset Counter
        </Button>
        <Button
          variant="solid"
          className="z-[99] border border-zinc-100 bg-transparent text-xs font-medium shadow-small hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
        >
          Number of Rotaions: {rotations}
        </Button>
      </div>
      <main
        ref={wrapperRef}
        className="z-10 flex min-h-[95vh] flex-col items-center justify-center gap-5"
        onClick={handleIncraseCounter}
      >
        <div className="relative px-10 py-10">
          <h1 className="pointer-events-none relative z-20 select-none text-center text-9xl font-semibold">
            {counter}
          </h1>
        </div>
        <ShadcnButton
          ref={buttonRef}
          variant={"ghost"}
          className="h-auto rounded-2xl py-3 duration-200 active:scale-95 dark:text-zinc-100"
        >
          <PlusIcon className="pointer-events-none h-auto w-7" />
        </ShadcnButton>
      </main>
      <div
        ref={container}
        className="pointer-events-none fixed inset-x-0 top-full z-0 mx-auto h-40 w-40 rounded-[10rem]"
      ></div>
    </div>
  );
}
