import { useState, useContext } from "react";
import Image from "next/future/image";

import Navbar from "./DesktopNavbar";
import AboutModal from "./AboutModal";
import ContactModal from "./ContactModal";
import ServicesModal from "./ServicesModal";

// backgrounds
import background1 from "../public/images/photo-1470770841072-f978cf4d019e.jpg";
// import background2 from "../public/images/07_UndergroundLakes__SonDoongCave_shutterstock_1487628662-fodors.jpg";

// context
import _appContext from "../context/_appContext";

// styles
import styles from "../styles/particle.module.scss";

let particles = [];
for (let i = 0; i < 100; i++)
  particles.push(
    <div className={styles["circle-container"]} key={i}>
      <div
        className={`${styles.circle} bg-gradient-radial from-sky-400 via-sky-400/20 to-black/20`}
      />
    </div>
  );

const DesktopLayout = ({ children }) => {
  const { modal, setModal } = useContext(_appContext);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-screen w-screen">
        <Image
          className="h-full w-full object-cover"
          src={background1}
          alt="background1"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAFA4PEg8NFBIQEhcVFBgeMiEeHBwePSwuJDJJQExLR0BGRVBac2JQVW1WRUZkiGVtd3uBgoFOYI2XjH2Wc36BfP/bAEMBFRcXHhoeOyEhO3xTRlN8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fP/AABEIAKsBMAMBIgACEQEDEQH/xAAVAAEBAAAAAAAAAAAAAAAAAAAABP/EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAVAQEBAAAAAAAAAAAAAAAAAAAAA//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AJQFUQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//2Q=="
          height={1080}
          width={1920}
        />
      </div>
      <div>
        {/* <div className="overflow-hidden">{particles}</div> */}
        <div className="absolute inset-0 overflow-y-auto overflow-x-hidden z-0">
          <Navbar modal={modal} setModal={setModal} />
          <div className="absolute inset-0 z-0">{children}</div>
        </div>
        <div
          className={`absolute top-0 left-0 h-full w-full ${
            !modal.show ? "pointer-events-none" : ""
          }`}
        >
          <div className="relative w-full h-screen flex justify-center items-center pt-8 sm:pt-12">
            <div
              className={`absolute top-0 left-0 h-full w-full ${
                modal.show ? "bg-black/50" : ""
              } transition-colors`}
              onClick={() => setModal({ show: false, type: "" })}
            />
            <div>
              {modal.type === "about" && <AboutModal />}
              {modal.type === "contact" && <ContactModal />}
              {modal.type === "services" && <ServicesModal />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopLayout;
