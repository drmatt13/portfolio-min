import Image from "next/image";
import Link from "next/link";

// images
import logo from "../public/images/image5.png";

const navbar = () => {
  return (
    <div className="shadow-sm shadow-black/75 noselect sticky top-0 z-50 bg-black/75 backdrop-blur-lg h-16 sm:h-24 w-full pl-8 pr-6 md:px-[8vw] lg:px-28 flex items-center justify-between text-white">
      <div className="flex items-center">
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
        <div
          className="flex flex-col sm:text-xl lg:text-2xl font-bold cursor-pointer transition-all group"
          style={{
            textShadow:
              "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
            fontFamily: "Redressed",
          }}
        >
          <Link href="/">
            <div className="flex">
              <div className="mr-1">Matt Sweeney</div>
              <span className="hidden md:inline">- Full Stack Developer</span>
            </div>
          </Link>
          <div className="h-[1.5px] w-0 rounded-sm bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 group-hover:w-full transition-all " />
        </div>
      </div>
      <div
        className="sm:text-xl lg:text-2xl font-bold flex"
        style={{
          textShadow:
            "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
          fontFamily: "Redressed",
        }}
      >
        <div className="flex-col cursor-pointer group">
          <Link href="/">
            <>
              <div>services</div>
              <div className="h-[1.5px] w-0 rounded-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 group-hover:w-full transition-all" />
            </>
          </Link>
        </div>
        <div className="ml-4 md:ml-6 lg:ml-8 cursor-pointer group">
          <Link href="/">
            <>
              <div>about me</div>
              <div className="h-[1.5px] w-0 rounded-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 group-hover:w-full transition-all" />
            </>
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

export default navbar;
