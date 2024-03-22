import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Wrapper = (props: Props) => {
  return (
    <div
      className={cn("mx-auto max-w-screen-2xl px-7 sm:px-10", props.className)}
    >
      {props.children}
    </div>
  );
};

export default Wrapper;
