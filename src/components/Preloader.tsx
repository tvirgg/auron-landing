"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Preloader() {
  const [show, setShow] = React.useState(true);

  React.useEffect(() => {
    const t = setTimeout(() => setShow(false), 800); // slight delay
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] bg-neutral-900/80 backdrop-blur-sm flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.98, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="relative">
              <div className="h-12 w-12 rounded-full border-2 border-neutral-700" />
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-rose-400 border-t-transparent"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 0.9, ease: "linear" }}
              />
            </div>
            <p className="text-sm text-neutral-300">Loading interface…</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
