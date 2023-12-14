import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

interface IProps {
  show: boolean;
  title?: string;
  subTitle?: string;
  children?: ReactNode;
}

const Dialog = ({ show, title, subTitle, children }: IProps) => {
  return (
    <AnimatePresence>
      {show ? (
        <div className="fixed top-0 left-0 right-0 w-full h-screen flex justify-center items-center block z-50 backdrop-blur-sm bg-black/30">
          <motion.div
            className="w-[400px] bg-base-secondary dark:bg-base-secondary-dark rounded shadow p-7"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
          >
            {title && <div className="font-semibold mb-1">{title}</div>}
            {subTitle && (
              <div className="text-xs text-gray-500 mb-5">{subTitle}</div>
            )}

            <div className="space-y-4">{children}</div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
};

export default Dialog;
