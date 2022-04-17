import Image from "next/image";
import Link from "next/link";

// components
import MirrorIcons from "../components/MirrorIcons";
import Websites from "../components/Websites";

// context
import _appContext from "../context/_appContext";

// images
import logo from "../public/images/image5.png";

export default function Home() {
  return (
    <>
      <style jsx>{`
        .sm\:hidden {
          padding-top: 1rem;
        }
        .pfp {
          height: 140px;
          width: 140px;
        }
        .test2 {
          height: 3rem;
          width: 3rem;
        }
        @media (max-width: 640px) and (max-height: 800px) {
          .mirror {
            display: none;
          }
          .websites {
            padding-bottom: 4rem;
          }
          .pfp {
            height: 160px;
            width: 160px;
          }
          .test2 {
            height: 4rem;
            width: 4rem;
          }
        }
      `}</style>
      <div className="min-h-[600px] sm:min-h-[525px] md:min-h-[625px] xl:min-h-[650px] h-full flex flex-col">
        <div className="flex flex-1 justify-center items-center sm:hidden">
          <div className="flex flex-col items-center">
            <div className="pfp rounded-full overflow-hidden">
              <Image
                src={logo}
                className="rounded-full"
                width={175}
                height={175}
                objectFit="cover"
              />
            </div>
            <div className="mt-4 flex">
              <div className="test2 rounded-full hover:scale-110 cursor-pointer transition-transform overflow-hidden noselect">
                <img
                  className="self-center"
                  src="https://img.icons8.com/color/144/000000/facebook-new.png"
                />
              </div>
              <div className="ml-2 test2 rounded-full hover:scale-110 cursor-pointer transition-transform overflow-hidden noselect">
                <img
                  className="self-center"
                  src="https://img.icons8.com/fluency/144/000000/instagram-new.png"
                />
              </div>
              <div className="ml-2 test2 rounded-full hover:scale-110 cursor-pointer transition-transform overflow-hidden noselect">
                <img
                  className="self-center"
                  src="https://img.icons8.com/color/150/000000/tiktok--v1.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="websites flex-1 flex flex-col justify-center">
          <Websites />
        </div>
        <div className="mirror flex justify-center overflow-hidden">
          <MirrorIcons />
        </div>
      </div>
    </>
  );
}
