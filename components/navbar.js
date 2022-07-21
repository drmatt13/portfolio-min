import { useContext } from "react";
import Image from "next/image";

// context
import _appContext from "../context/_appContext";

// images
import logo from "../public/images/image5.png";

const Navbar = ({ modal, setModal }) => {
  const { isMobile } = useContext(_appContext);

  return (
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
        <div className="absolute top-0 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:h-[3.75rem] lg:w-[3.75rem] hover:h-48 md:hover:h-56 /bg-black/50 group">
          <div
            className="hidden sm:inline mr-4 md:mr-5 h-12 w-12 md:h-14 md:w-14 lg:h-[3.75rem] lg:w-[3.75rem] shadow-lg rounded-full overflow-hidden text-[0]"
            onClick={() => setModal({ show: false, type: "" })}
          >
            <Image
              src={logo}
              alt="Matthew Sweeney"
              className="rounded-full z-10"
              width={75}
              height={75}
              objectFit="cover"
            />
          </div>
          <div className="flex justify-center items-center absolute top-0 left-0 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:h-[3.75rem] lg:w-[3.75rem] opacity-0 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 scale-50 group-hover:scale-100 group-hover:translate-y-[120%] transition-all duration-300 ease-out">
            <div className="bg-white w-4/5 h-4/5 rounded-full overflow-hidden hover:scale-110 transition-transform">
              <img src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-instagram-new-circle-512.png" />
            </div>
          </div>
          <div className="flex justify-center items-center absolute top-0 left-0 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:h-[3.75rem] lg:w-[3.75rem] opacity-0 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 scale-50 group-hover:scale-100 group-hover:translate-y-[240%] transition-all duration-300 ease-out">
            <div className="bg-white w-4/5 h-4/5 rounded-full overflow-hidden hover:scale-110 transition-transform">
              <img src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/linkedin-512.png" />
            </div>
          </div>
          <div className="flex justify-center items-center absolute top-0 left-0 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:h-[3.75rem] lg:w-[3.75rem] opacity-0 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 scale-50 group-hover:scale-100 group-hover:translate-y-[360%] transition-all duration-300 ease-out">
            <div className="bg-white w-4/5 h-4/5 rounded-full overflow-hidden hover:scale-110 transition-transform">
              <img src="https://cdn4.iconfinder.com/data/icons/social-media-free-13/32/Github_social_media_logo-512.png" />
            </div>
          </div>
        </div>
        <div className="hidden sm:inline mr-4 md:mr-5 h-12 w-12 md:h-14 md:w-14 lg:h-[3.75rem] lg:w-[3.75rem] shadow-lg rounded-full overflow-hidden text-[0]"></div>
        <div className="flex flex-col font-bold">
          <div
            className="flex"
            onClick={() => setModal({ show: false, type: "" })}
          >
            <div className="sm:mr-2 font-">Matt Sweeney</div>
            <span className="hidden md:inline">- Full Stack Developer</span>
          </div>
          <div className={`h-[1.5px]`} />
        </div>
      </div>
      <div className={`font-bold flex ${!isMobile ? "" : "translate-y-1"}`}>
        <div className="flex-col cursor-pointer group">
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
            <div>about me</div>
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
  );
};

export default Navbar;
