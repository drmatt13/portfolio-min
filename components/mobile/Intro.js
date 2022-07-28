import { useContext } from "react";
import Link from "next/link";

// components
import MirrorIcons from "./MirrorIcons";
import GlitchText from "./GlitchText";

// context
import _appContext from "../../context/_appContext";

// styles
import styles from "../../styles/Intro.module.scss";

const Intro = () => {
  const { darkMode } = useContext(_appContext);

  return (
    <div className={darkMode ? styles.dark : styles.light} id="home">
      <div className={`${styles.content} relative flex flex-col sm:flex-row`}>
        <div
          className="absolute -top-28 w-full opacity-[.25] z-[-1]"
          style={{
            height: "calc(100% + 7rem)",
          }}
        />
        <div className="absolute flex flex-col sm:flex-row-reverse bottom-4 right-6 md:bottom-5 md:right-10 lg:bottom-6 lg:right-12">
          <Link href="#getintouch" passHref>
            <div
              className={`${styles.rainbow_button} flex justify-center items-center py-3 px-4 text-xs md:py-3 md:px-6 md:text-sm lg:py-4 lg:px-8 lg:text-base bg-blue-500 dark:bg-pink-500 text-white font-bold select-none cursor-pointer noselect active:scale-105 active:shadow-xl transition-transform`}
              style={{
                transitionProperty:
                  "background-color, border-color, color, fill, stroke, transform",
              }}
            >
              GET IN TOUCH
            </div>
          </Link>
          <Link href="#about" passHref>
            <div
              className={`${styles.rainbow_button} flex justify-center items-center mt-2 sm:mt-0 sm:mr-4 py-3 px-4 text-xs md:py-3 md:px-6 md:text-sm lg:py-4 lg:px-8 lg:text-base bg-black dark:bg-gray-900 text-white font-bold select-none cursor-pointer noselect active:scale-105 active:shadow-xl transition-transform`}
            >
              ABOUT ME
            </div>
          </Link>
        </div>
        <div className="flex flex-col sm:w-[50%]">
          <div className="flex-[7] flex items-center justify-center text-gray-800 dark:text-white">
            <div
              className="flex-shrink text-2xl sm:translate-y-[25%] md:pl-6 md:mb-0 md:text-3xl md:translate-y-[10%] lg:pl-0 lg:mb-0 lg:text-4xl lg:mt-0 lg:translate-y-0 xl:text-5xl whitespace-nowrap 4xl:pl-[5%] 4xl:text-6xl"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            >
              <div>Hi,</div>
              <div>
                {"I'm"} <GlitchText text="Matt" />,
              </div>
              <div>Full stack developer</div>
            </div>
          </div>
          <div className="flex-1 hidden sm:flex justify-center animate-fade-in">
            <MirrorIcons />
          </div>
        </div>
        <div className="sm:flex-1 flex justify-center items-end">
          <div
            className={`${styles.svg_master_container} relative select-none mt-10 sm:mt-12 lg:mt-24 2xl:mt-36`}
          >
            <div className="absolute grid grid-cols-4">
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
            </div>
            <img className="relative" src="/images/home/test1.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
