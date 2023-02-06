import { motion } from "framer-motion";

export default function Spacer() {
  return (
    <motion.span
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
        y: -20,
      }}
      className="block min-h-[1px] w-full bg-light-gray dark:bg-dark-gray"
    />
  );
}
