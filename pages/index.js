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
          box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 15px;
        }
        .test2 {
          height: 4rem;
          width: 4rem;
        }
        @media (max-height: 800px) {
          .pfp {
            height: 125px;
            width: 125px;
          }
          .test2 {
            height: 3rem;
            width: 3rem;
          }
        }
        @media (max-height: 735px) {
          .sm\:hidden {
            display: none;
          }
        }
      `}</style>
      <div className="min-h-[550px] sm:min-h-[600px] md:min-h-[625px] lg:min-h-[650px] xl:min-h-[700px] h-full flex flex-col">
        <div className="flex flex-1 justify-center items-center sm:hidden">
          <div className="flex flex-col items-center">
            <div className="pfp rounded-full overflow-hidden">
              <Image
                src={logo}
                className="rounded-full"
                width={160}
                height={160}
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
        <div className="flex-1 flex flex-col justify-center">
          <Websites />
        </div>
        <div className="flex justify-center overflow-hidden">
          <MirrorIcons />
        </div>
      </div>
    </>
  );
}
