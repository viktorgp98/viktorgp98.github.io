import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap"; // <--- CHANGE THIS LINE
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Register the plugin only once, typically at a higher level
gsap.registerPlugin(ScrollToPlugin); // This line should now work correctly

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef(null);

  const toggleVisibility = () => {
    if (window.scrollY > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    gsap.to(window, {
      duration: 0.4,
      scrollTo: {
        y: 0,
      },
      ease: "power2.inOut",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  useEffect(() => {
    if (buttonRef.current) {
      if (isVisible) {
        gsap.fromTo(
          buttonRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.3, ease: "easeInOut" }
        );
      } else {
        gsap.to(buttonRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.3,
          ease: "easeInOut",
        });
      }
    }
  }, [isVisible]);

  return (
    <>
      {isVisible && (
        <button
          ref={buttonRef}
          onClick={scrollToTop}
          className="fixed cursor-pointer right-8 bottom-8 z-50 flex h-12 w-12 items-center justify-center rounded-full border-1 border-white bg-dark-light text-white shadow-lg transition-colors duration-300 hover:bg-primary"
          aria-label="Volver al inicio"
        >
          <span className="icon-[icon-park-outline--up]"></span>
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
