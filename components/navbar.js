import Image from "next/image";
import Link from "next/link";

// images
import logo from "../public/images/image5.png";

const navbar = () => {
  return (
    <div className="font-mono text-sm md:text-sm lg:text-base xl:text-lg shadow-sm shadow-black/75 noselect sticky top-0 z-50 bg-black/75 backdrop-blur-lg h-16 sm:h-24 w-full pl-8 pr-6 md:px-[4vw] lg:px-14 flex items-center justify-between text-white">
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
      <div className="font-bold flex">
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
