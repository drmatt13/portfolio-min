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
        .test2 {
          height: 3rem;
          width: 3rem;
        }
        .pfp {
          height: 160px;
          width: 160px;
          box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        }
        .hover\:scale-110 {
          box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
            rgba(0, 0, 0, 0.23) 0px 6px 6px;
        }
        .test2 {
          height: 4rem;
          width: 4rem;
        }
        @media (max-width: 640px) and (min-height: 875px) {
          .sm\:hidden {
            flex: 0;
          }
        }
        @media (max-width: 640px) and (max-height: 750px) {
          .pfp {
            height: 155px;
            width: 155px;
          }
          .sm\:hidden {
            flex: 0 !important;
          }
          .test2 {
            height: 4rem;
            width: 4rem;
          }
        }
      `}</style>
      <div className="min-h-[800px] sm:min-h-[525px] md:min-h-[625px] xl:min-h-[600px] h-full flex flex-col animate-fade-in">
        <div className="flex flex-1 justify-center items-center sm:hidden">
          <div className="my-8 flex flex-col items-center">
            <div className="pfp rounded-full overflow-hidden">
              <Image
                src={logo}
                className="rounded-full"
                width={200}
                height={200}
                objectFit="cover"
              />
            </div>
            <div className="mt-4 flex">
              <div className="test2 p-2 cursor-pointer transition-transform overflow-hidden noselect">
                <img
                  className="hover:scale-110 self-center rounded-full transition-transform"
                  src="https://i0.wp.com/soundings.com/wp-content/uploads/2021/03/INSTAGRAM-Logo-Round-1000px.png?ssl=1"
                />
              </div>
              <div className="ml-2 test2 p-2 cursor-pointer transition-transform overflow-hidden noselect">
                <img
                  className="hover:scale-110 self-center rounded-full transition-transform bg-gradient-to-bl from-emerald-700 to-emerald-400"
                  src="http://cdn.onlinewebfonts.com/svg/img_258190.png"
                />
              </div>
              <div className="ml-2 test2 p-2 rounded-full cursor-pointer transition-transform overflow-hidden noselect">
                <img
                  className="hover:scale-110 self-center rounded-full transition-transform"
                  src="https://i.pinimg.com/originals/34/91/f3/3491f3e50ab6a4d51a348f9cc2419842.jpg"
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
