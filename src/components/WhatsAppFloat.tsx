"use client";

import { motion, useReducedMotion } from "motion/react";
import { buildWhatsAppLink, DEFAULT_WHATSAPP_MESSAGE } from "@/lib/whatsapp";
import { springs } from "@/lib/motion";

export function WhatsAppFloat() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.a
      href={buildWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-valozzi-gold text-valozzi-black shadow-lg shadow-black/30"
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
        boxShadow: reduceMotion
          ? undefined
          : [
              "0 0 0 0 rgba(165,155,117,0.35)",
              "0 0 0 14px rgba(165,155,117,0)",
              "0 0 0 0 rgba(165,155,117,0)",
            ],
      }}
      transition={{
        scale: { ...springs.momentum, delay: 0.6 },
        opacity: { duration: 0.3, delay: 0.6 },
        boxShadow: { duration: 2.8, repeat: Infinity, ease: "easeOut", delay: 1.5 },
      }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.45 1.27 4.9L2 22l5.25-1.38A9.94 9.94 0 0 0 12.04 22c5.52 0 10-4.48 10-10s-4.48-10-10-10Zm0 18.13c-1.62 0-3.14-.44-4.45-1.22l-.32-.19-3.12.82.83-3.04-.2-.31a8.1 8.1 0 0 1-1.27-4.37c0-4.5 3.66-8.16 8.16-8.16 4.5 0 8.16 3.66 8.16 8.16 0 4.5-3.66 8.31-8.16 8.31Zm4.48-6.13c-.24-.12-1.44-.71-1.66-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.78.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.42-.55-.42h-.47c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.13 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.05.14-1.16-.06-.11-.22-.17-.46-.29Z" />
      </svg>
    </motion.a>
  );
}
