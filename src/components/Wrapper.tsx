"use client";

import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

export default function Wrapper({ children }: Props) {
  return (
    <motion.main
      className="flex h-full flex-col gap-5 overflow-y-auto pb-12 md:px-20 xl:px-28 2xl:px-48"
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 20,
      }}
    >
      {children}
    </motion.main>
  );
}
