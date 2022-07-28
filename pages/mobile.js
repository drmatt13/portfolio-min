import { useState, useEffect, useContext, useRef } from "react";

// components
import MobileLayout from "../components/mobile/MobileLayout";
import Intro from "../components/mobile/Intro";
import Websites from "../components/Websites";
import GlitchText from "../components/mobile/GlitchText";

// context
import _appContext from "../context/_appContext";

// styles
import styles from "../styles/MobileHome.module.scss";

export default function Home() {
  const { isMobile, darkMode } = useContext(_appContext);

  return (
    <MobileLayout>
      <>
        <style global="true">{`
        #landing-page *::selection {
          background: ${darkMode ? "#bf7cb9" : "#fcba03"};
          color: ${darkMode ? "#fff" : "#000"};
        }
      `}</style>
        <div className="relative animate-fade-in" id="landing-page">
          <Intro />
          <div className="relative h-full flex">
            <div className="absolute top-0 w-full">
              <div
                className={`${
                  darkMode ? styles.dark : styles.light
                } absolute top-0 h-full w-full -z-10 opacity-30`}
              />
              <div className="my-16">
                <div
                  className="pb-12 text-center text-2xl dark:text-white"
                  style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                >
                  <GlitchText text="Websites" />
                </div>
                <Websites />
              </div>
              <div className="h-24 w-full flex justify-center items-center bg-gradient-to-b from-white/60 to-blue-500/50 dark:from-black/90 dark:to-purple-900 dark:text-white/75">
                © 2022 Matthew Sweeney
              </div>
            </div>
          </div>
        </div>
      </>
    </MobileLayout>
  );
}
