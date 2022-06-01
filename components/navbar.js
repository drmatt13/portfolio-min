import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";

// context
import _appContext from "../context/_appContext";

// images
import logo from "../public/images/image5.png";

const Navbar = () => {
  const { router, isMobile } = useContext(_appContext);

  return (
    <div
      className={`w-screen font-mono text-xs sm:text-sm lg:text-base xl:text-lg shadow-md shadow-black/25 noselect sticky top-0 z-50 ${
        router.pathname === "/" ? "bg-black/75" : "bg-pink-900/10"
      } backdrop-blur-lg h-16 sm:h-24 ${
        !isMobile
          ? "pl-6 pr-8 sm:pl-7 sm:pr-12 md:pr-[5vw]"
          : "px-4 sm:pl-7 sm:pr-6 -translate-y-1"
      } md:px-[4vw] lg:pr-14 lg:pl-12 flex items-center justify-between text-white`}
    >
      <div className={`flex items-center ${!isMobile ? "" : "translate-y-1"}`}>
        <Link href="/">
          <div className="hidden sm:inline mr-4 md:mr-5 h-12 w-12 md:h-14 md:w-14 lg:h-[3.75rem] lg:w-[3.75rem] shadow-lg rounded-full overflow-hidden text-[0] cursor-pointer">
            <Image
              src={logo}
              className="rounded-full"
              width={75}
              height={75}
              objectFit="cover"
            />
          </div>
        </Link>
        <div className="flex flex-col font-bold cursor-pointer transition-all group">
          <Link href="/">
            <div className="flex">
              <div className="sm:mr-2">Matt Sweeney</div>
              <span className="hidden md:inline">- Full Stack Developer</span>
            </div>
          </Link>
          <div className="h-[1.5px] w-0 rounded-sm bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 group-hover:w-full transition-all " />
        </div>
      </div>
      <div className={`font-bold flex ${!isMobile ? "" : "translate-y-1"}`}>
        <div className="flex-col cursor-pointer group">
          <Link href="/">
            <>
              <div>services</div>
              <div className="h-[1.5px] w-0 rounded-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 group-hover:w-full transition-all" />
            </>
          </Link>
        </div>
        <div className="ml-4 md:ml-6 lg:ml-8 cursor-pointer group">
          <Link href="/about">
            <div>
              <div>about me</div>
              <div className="h-[1.5px] w-0 rounded-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 group-hover:w-full transition-all" />
            </div>
          </Link>
        </div>
        <div className="ml-4 md:ml-6 lg:ml-8 cursor-pointer group">
          <Link href="/">
            <>
              <div>contact</div>
              <div className="h-[1.5px] w-0 rounded-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 group-hover:w-full transition-all" />
            </>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
