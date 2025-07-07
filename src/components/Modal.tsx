import { ReactNode, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";

interface ModalProps {
  show: boolean;
  onHide: () => void;
  backdrop?: true | false | "static";
  keyboard?: boolean;
  centered?: boolean;
  fullscreen?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  children: ReactNode;
}

const sizeClasses: Record<string, string> = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
};

export const Modal = ({
  show,
  onHide,
  backdrop = true,
  keyboard = true,
  centered = true,
  fullscreen = false,
  size = "md",
  children,
}: ModalProps) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (keyboard && e.key === "Escape") onHide();
    };
    if (show) document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [show, keyboard, onHide]);

  useEffect(() => {
    if (show) {
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [show]);

  const handleBackdropClick = () => {
    if (backdrop === true) onHide();
  };

  const contentClasses = [
    fullscreen ? "w-full h-full" : `w-[90%] ${sizeClasses[size]}`,
    "bg-white rounded-lg shadow-lg p-6 relative",
    centered ? "" : "self-start mt-12",
  ].join(" ");

  if (!hasMounted) return null;

  return createPortal(
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={backdrop ? handleBackdropClick : undefined}
        >
          <motion.div
            className={contentClasses}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

// Subcomponents
Modal.Header = function ModalHeader({ children }: { children: ReactNode }) {
  return (
    <div className="border-b pb-3 mb-4 text-lg font-semibold text-gray-800">
      {children}
    </div>
  );
};
Modal.Body = function ModalBody({ children }: { children: ReactNode }) {
  return <div className="mb-4 text-gray-700">{children}</div>;
};
Modal.Footer = function ModalFooter({ children }: { children: ReactNode }) {
  return <div className="flex justify-end gap-2 pt-4 border-t">{children}</div>;
};

export default Modal;
