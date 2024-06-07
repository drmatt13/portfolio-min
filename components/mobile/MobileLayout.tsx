import { useContext } from "react";

// components
import ContactModal from "../ContactModal";
import ServicesModal from "../ServicesModal";

// context
import _appContext from "../../context/_appContext";

const MobileLayout = ({ children }) => {
  const { darkMode, setDarkMode, modal, setModal } = useContext(_appContext);

  const toggleDarkMode = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setDarkMode(true);
    }
  };

  return (
    <>
      <style jsx>{`
        .dark {
          background: #404149; /* fallback for old browsers */
          background: -webkit-linear-gradient(
            to right,
            #232526,
            #30313a
          ); /* Chrome 10-25, Safari 5.1-6 */
          background: linear-gradient(
            to right,
            #232526,
            #30313a
          ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
          background-color: black;
        }
        .light {
          background-color: #8ec5fc;
          background-image: linear-gradient(62deg, #c3e1ff 0%, #e5e1ff 100%);
          background-color: white;
        }
        .bg2 {
          background: url(/images/layout/background-blueflex.png);
          background-size: cover;
        }
        .bg3 {
          background: url(/images/layout/${darkMode
              ? "background-fixed-rb.png"
              : "imageonline-co-hueshifted.png"})
            right bottom no-repeat;
        }
        .bg4 {
          background: url(/images/layout/background-fixed-tl.png) no-repeat;
        }
      `}</style>
      <div className={`${darkMode ? "dark" : "light"} flex justify-center`}>
        <div className="relative h-screen overflow-y-hidden w-full max-w-[240rem]">
          <div className="z-10 h-28 sticky py-8 pr-8 flex flex-row-reverse pointer-events-none noselect">
            <div className="w-10 h-10">
              <i
                onClick={toggleDarkMode}
                className={`fa-solid bg-black/50 cursor-pointer active:scale-90 active:bg-black/75 transition-all text-lg flex justify-center items-center h-full w-full rounded-full 
                ${!modal.show ? "pointer-events-auto" : "opacity-0"}
                ${
                  darkMode
                    ? "fa-moon text-purple-500 active:text-purple-400"
                    : "fa-sun text-orange-400 /active:text-yellow-400"
                }`}
              />
            </div>
          </div>
          <div className="bg2 absolute top-0 left-0 h-full w-full" />
          <div className="bg3 absolute top-0 left-0 h-full w-full" />
          <div className="bg4 absolute top-0 left-0 h-full w-full" />
          <div className="absolute pt-28 top-0 h-full w-full overflow-y-auto">
            {children}
          </div>
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
              {modal.type === "contact" && <ContactModal />}
              {modal.type === "services" && <ServicesModal />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileLayout;
