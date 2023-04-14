import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";

// context
import _appContext from "../context/_appContext";

// images
import logo from "../public/images/processor.png";

const Navbar = ({ modal, setModal }) => {
  const { isMobile } = useContext(_appContext);

  return (
    <>
      <style jsx>{`
        .shadow-1 {
          box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
            rgba(0, 0, 0, 0.5) 0px -12px 30px, rgba(0, 0, 0, 0.5) 0px 4px 6px,
            rgba(0, 0, 0, 0.1) 0px 12px 13px, rgba(0, 0, 0, 0.1) 0px -3px 5px;
        }
        .shadow-2 {
          box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        }
      `}</style>
      <div
        className={`w-screen font-mono text-xs sm:text-sm lg:text-base xl:text-lg shadow-md shadow-black/25 noselect sticky top-0 z-30 bg-black/75 backdrop-blur-lg h-16 sm:h-24 
      ${
        !isMobile
          ? "pl-6 pr-8 sm:pl-7 sm:pr-10 md:pr-[5vw]"
          : "px-4 sm:pl-7 sm:pr-6 -translate-y-1"
      } md:px-[4vw] lg:pr-14 lg:pl-12 flex items-center justify-between text-white`}
      >
        <div
          className={`relative flex items-center ${
            !isMobile ? "" : "translate-y-1"
          }`}
        >
          <div className="absolute top-0 sm:w-12 sm:h-12 md:w-14 md:h-14 group">
            <div className="absolute top-0 left-0 w-full group-hover:h-44 md:group-hover:h-52 -z-10"></div>
            <div
              className="relative shadow-2 border border-black/50 hidden sm:block rounded-full h-12 md:h-14 group-hover:scale-[.85] transition-transform ease-out duration-300 translate3d"
              onClick={() => setModal({ show: false, type: "" })}
            >
              <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center">
                <div className=" h-4/5 w-4/5 rounded-full" />
              </div>
              <Image
                src={logo}
                alt="Matthew Sweeney"
                className="/rounded-full"
                width={512}
                height={512}
                objectFit="cover"
              />
            </div>
            <div className="-z-10 flex justify-center items-center absolute top-0 left-0 sm:w-12 sm:h-12 md:w-14 md:h-14 opacity-0 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 scale-50 group-hover:scale-100 group-hover:translate-y-[110%] transition-all duration-300 ease-out">
              <div
                onClick={() =>
                  window
                    .open("https://www.linkedin.com/in/drmatt13", "_blank")
                    .focus()
                }
                className="shadow-1 w-2/3 h-2/3 rounded-full overflow-hidden hover:scale-110 transition-transform cursor-pointer"
              >
                <img src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/linkedin-512.png" />
              </div>
            </div>
            <div className="-z-10 flex justify-center items-center absolute top-0 left-0 sm:w-12 sm:h-12 md:w-14 md:h-14 opacity-0 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 scale-50 group-hover:scale-100 group-hover:translate-y-[220%] transition-all duration-300 ease-out">
              <div
                onClick={() =>
                  window.open("https://github.com/drmatt13", "_blank").focus()
                }
                className="shadow-1 w-2/3 h-2/3 rounded-full overflow-hidden hover:scale-110 transition-transform cursor-pointer"
              >
                <div className="absolute top-0 left-0 bottom-0 right-0 bg-white -z-10 rounded-full scale-[.6] hover:scale-110" />
                <img src="https://cdn4.iconfinder.com/data/icons/social-media-free-13/32/Github_social_media_logo-512.png" />
              </div>
            </div>
            <div className="-z-10 flex justify-center items-center absolute top-0 left-0 sm:w-12 sm:h-12 md:w-14 md:h-14 opacity-0 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 scale-50 group-hover:scale-100 group-hover:translate-y-[330%] transition-all duration-300 ease-out rounded-b-full">
              <div
                onClick={() =>
                  window
                    .open("https://www.instagram.com/dont_worry617", "_blank")
                    .focus()
                }
                className="shadow-1 w-2/3 h-2/3 rounded-full overflow-hidden hover:scale-110 transition-transform cursor-pointer"
              >
                <img src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-instagram-new-circle-512.png" />
              </div>
            </div>
          </div>
          <div className="hidden sm:inline mr-4 md:mr-5 h-12 w-12 md:h-14 md:w-14 rounded-full overflow-hidden text-[0]"></div>
          <div className="group flex flex-col font-bold cursor-pointer">
            <div
              className="flex"
              onClick={() => setModal({ show: false, type: "" })}
            >
              <div className="sm:mr-2 font-">Matt Sweeney</div>
              <span className="hidden md:inline">- Full Stack Developer</span>
            </div>
            <div
              className={`h-[1.5px] w-0 rounded-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 ${
                isMobile
                  ? "group-active:opacity-100 group-active:w-full"
                  : "group-hover:opacity-100 group-hover:w-full"
              } transition-all`}
            />
          </div>
        </div>
        <div className={`font-bold flex ${!isMobile ? "" : "translate-y-1"}`}>
          <div className="ml-4 md:ml-6 lg:ml-8 cursor-pointer group">
            <div
              onClick={() =>
                setModal(
                  modal.type !== "about"
                    ? { show: true, type: "about" }
                    : { show: false, type: "" }
                )
              }
            >
              <div>resume</div>
              <div
                className={`h-[1.5px] w-0 rounded-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 ${
                  isMobile
                    ? "group-active:opacity-100 group-active:w-full"
                    : "group-hover:opacity-100 group-hover:w-full"
                } transition-all`}
              />
            </div>
          </div>
          <div className="ml-4 md:ml-6 lg:ml-8 cursor-pointer group">
            <div
              onClick={() =>
                setModal(
                  modal.type !== "services"
                    ? { show: true, type: "services" }
                    : { show: false, type: "" }
                )
              }
            >
              <div>services</div>
              <div
                className={`h-[1.5px] w-0 rounded-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 ${
                  isMobile
                    ? "group-active:opacity-100 group-active:w-full"
                    : "group-hover:opacity-100 group-hover:w-full"
                } transition-all`}
              />
            </div>
          </div>
          <div
            className="ml-4 md:ml-6 lg:ml-8 cursor-pointer group"
            onClick={() =>
              setModal(
                modal.type !== "contact"
                  ? { show: true, type: "contact" }
                  : { show: false, type: "" }
              )
            }
          >
            <>
              <div>contact</div>
              <div
                className={`h-[1.5px] w-0 rounded-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 ${
                  isMobile
                    ? "group-active:opacity-100 group-active:w-full"
                    : "group-hover:opacity-100 group-hover:w-full"
                } transition-all`}
              />
            </>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
