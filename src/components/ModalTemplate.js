import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ModalTemplate = ({ isOpen, setIsOpen }) => {
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
    exit: { scale: 0 },
  };

  useEffect(() => {
    // Disable scrolling when the modal is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    // Add event listener for ESC key
    window.addEventListener("keydown", handleKeyDown);

    // Cleanup the effect
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, setIsOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50 h-screen w-screen bg-black/25 backdrop-blur-sm bg-opacity-30"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={backdropVariants}
        >
          <motion.div
            className="bg-teal-500 dark:bg-slate-900 rounded-lg p-4 md:h-5/6 md:w-5/6 h-full w-full overflow-x-auto border-4 dark:border-teal-300 border-slate-900 relative"
            variants={modalVariants}
          >
            <button className="absolute right-5 top-3" onClick={handleClose}>
              X
            </button>
            {/* Project Title */}
            <div className="text-left">
              <h1 className="text-xl">Workpost | Job Requirements Website</h1>
            </div>
            {/* Screenshot */}
            <div className="flex justify-center my-20">
              <img
                className="rounded-lg"
                src="https://i.imgur.com/5ZQ9X6M.png"
                alt="Workpost"
              />
            </div>
            {/* Techs */}
            <div className="text-left mb-5">
              <h2 className="text-lg">Technologies Used:</h2>
              <ul className="list-disc list-inside">
                <li>React</li>
                <li>Node.js</li>
                <li>Express</li>
              </ul>
            </div>
            {/* Description */}
            <div className="text-left">
              <h2 className="text-lg">Description:</h2>
              <p>
                Workpost is a website that allows users to post jobs and apply
                for jobs.
              </p>
            </div>
            {/* API */}
            <div className="text-left mt-5">
              <h2 className="text-lg">API : by JohnDoe </h2>
            </div>
            {/* Links */}
            <div className="text-left mt-5">
              <h2 className="text-lg">Links:</h2>
              <ul className="list-disc list-inside">
                <li>
                  <a
                    href="https://workspot.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="underline text-blue-500 hover:text-blue-700"
                  >
                    Live Site
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalTemplate;
