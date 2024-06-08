/* eslint-disable @next/next/no-img-element */
import { useRef, useContext } from "react";
import Image from "next/image";

import context from "../context/_appContext";

const WebsiteCard = ({
  data: {
    maintenance,
    src,
    blurDataURL,
    title,
    description,
    link,
    button,
    dimensions: { width, height } = { width: 0, height: 0 },
    svg,
    objectFit = "cover",
  },
}: {
  data: {
    maintenance?: boolean;
    src: string;
    blurDataURL: string;
    title: string;
    description: string;
    link: string;
    button: string;
    dimensions?: { width: number; height: number };
    svg?: boolean;
    objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  };
}) => {
  const { isMobile } = useContext(context);

  const cardRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef(null);
  const timeoutRef = useRef(null);

  const mouseMove = (e) => {
    e.stopPropagation();

    if (isMobile) return;
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    animationRef.current = requestAnimationFrame(() => {
      if (!cardRef.current) return;
      cardRef.current.classList.add("group");
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      cardRef.current.style.setProperty(
        "transform",
        `perspective(1000px) translate3d(0, 0, 0) rotateY(${
          (x / rect.width - 0.5) * 30
        }deg) rotateX(${(y / rect.height - 0.65) * -30}deg)`
      );
      animationRef.current = null;
    });
  };

  const mouseOut = (e) => {
    e.stopPropagation();
    cancelAnimationFrame(animationRef.current);
    timeoutRef.current = setTimeout(() => {
      if (cardRef.current) {
        cardRef.current.classList.remove("group");
        cardRef.current.style.setProperty("transform", "perspective(1000px)");
      }
    }, 500);
  };

  return (
    <>
      <style jsx>{`
        .scroll::-webkit-scrollbar {
          width: 6px;
        }
        .scroll::-webkit-scrollbar-thumb {
          border-radius: 5px;
        }
        .scroll::-webkit-scrollbar-track {
          border-radius: 5px;
        }
        .scroll::-webkit-scrollbar-thumb {
          background-color: rgba(59 130 246);
        }
        .scroll::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.125);
        }
        @media (max-width: 640px) and (min-height: 875px) {
          .snap-center {
            height: 18rem !important;
            min-width: 14rem !important;
            border-radius: 0.75rem !important;
          }
          .h-32 {
            height: 9rem !important;
          }
          .rounded-t-md {
            border-top-left-radius: 0.75rem !important;
            border-top-right-radius: 0.75rem !important;
          }
        }
        @media (min-width: 640px) and (min-height: 950px) {
          .snap-center {
            height: 24rem !important;
            min-width: 18rem !important;
            border-radius: 0.75rem !important;
          }
          .rounded-t-md {
            border-top-left-radius: 0.75rem !important;
            border-top-right-radius: 0.75rem !important;
          }
        }
        @media (min-width: 1024px) and (max-height: 750px) {
          .snap-center {
            min-width: 14rem !important;
            height: 20rem !important;
          }
          .lg\:text-lg {
            font-size: 1rem !important;
            line-height: 1.5rem !important;
          }
          .lg\:text-sm {
            font-size: 0.8rem !important;
            line-height: 1.2rem !important;
          }
          .text-sm {
            font-size: 0.875rem;
            line-height: 1.25rem;
          }
        }
        @media (min-width: 1024px) and (min-height: 1150px) {
          .snap-center {
            height: 28rem !important;
            min-width: 21rem !important;
            border-radius: 0.75rem !important;
          }
          .rounded-t-md {
            border-top-left-radius: 0.75rem !important;
            border-top-right-radius: 0.75rem !important;
          }
          @media (min-height: 1350px) {
            .snap-center {
              height: 34rem !important;
              min-width: 25rem !important;
              border-radius: 0.75rem !important;
            }
          }
          @media (min-height: 1450px) {
            .snap-center {
              height: 40rem !important;
              min-width: 30rem !important;
              border-radius: 0.75rem !important;
            }
          }
        }
        @media only screen and (max-width: 400px) {
          div {
            transform: perspective(1000px) translate3d(0, 0, 0) rotateY(0)
              rotateX(0) !important;
          }
        }
        @media only screen and (min-width: 400px) {
          div {
            transform-style: preserve-3d;
          }
          .group {
            background-color: rgb(0, 0, 0, 0.75);
            box-shadow: rgba(0, 0, 0, 1) 0px 5px 15px;
          }
          .extrude {
            transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          }
          .group .extrude {
            overflow: visible !important;
            transform: scale(0.875) perspective(512px)
              translate3d(0, -6px, 48px);
            z-index: 1;
          }
          .group .image_container {
            opacity: 0.75;
            box-shadow: rgba(0, 0, 0, 1) 0px 5px 15px;
          }
          .group .button {
            box-shadow: rgba(0, 0, 0, 1) 0px 5px 15px;
          }
        }
      `}</style>
      <div className="relative snap-center snap-always rounded-lg min-w-[12rem] max-w-[10vw] h-[16.5rem] xs:min-w-[13rem] xs:h-[18rem] lg:min-w-[16rem] lg:h-[22rem] xl:min-w-[17rem] xl:h-[23rem] 2xl:min-w-[18rem] 2xl:h-[24rem] /animate-fade-in">
        <div
          ref={cardRef}
          onMouseMove={mouseMove}
          onMouseOut={mouseOut}
          className="flex flex-col justify-between h-full w-full rounded-lg"
          style={{
            transition: "all .4s cubic-bezier(.165, .84, .44, 1)",
          }}
        >
          <div className="overflow-hidden rounded-lg absolute top-0 left-0 h-full w-full -z-10">
            <img
              className="h-full w-full opacity-70"
              src="/images/websites/glass.jpg"
              alt="glass"
            />
            {/* <div className="bg-black absolute h-full w-full top-0" /> */}
          </div>
          <div className="relative flex min-h-[1%] h-32 xs:flex-1 transition-all ease-in select-none bg-slate-900/80 rounded-t-lg">
            <div className="extrude image_container flex w-full rounded-t-lg overflow-hidden">
              {!svg ? (
                <Image
                  src={src}
                  alt={title}
                  draggable={false}
                  height={height}
                  width={width}
                  objectFit={objectFit}
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                />
              ) : (
                <img
                  src={src}
                  alt={title}
                  draggable={false}
                  height={height}
                  width={width}
                  className="h-full w-full object-fill"
                />
              )}
            </div>
          </div>
          <div className="relative flex-1 bg-slate-900/80 rounded-b-lg">
            <div className="extrude absolute top-0 left-0 h-full w-full flex flex-col">
              <div className="cursor-default py-1.5 lg:py-2 text-center text-white text-xl xs:text-base lg:text-lg 2xl:text-xl">
                {title}
              </div>
              <div className="cursor-default hidden xs:inline scroll ml-2.5 pl-1.5 mr-2 flex-[1.2] text-white text-[.8rem] lg:text-sm xl:text-base overflow-y-auto break-words">
                {description}
              </div>
              <div className="flex-1 flex flex-col justify-end">
                <div
                  className={`${
                    maintenance
                      ? "bg-slate-500 cursor-not-allowed"
                      : "bg-blue-500 hover:bg-blue-400 cursor-pointer"
                  } button text-white text-xs lg:text-sm no-select mb-2 lg:mb-3 mt-2 lg:mt-3 mx-4 py-2 rounded-sm sm:rounded-md text-center transition-all duration-100 select-none`}
                  onClick={() =>
                    maintenance ? "" : window.open(link, "_blank").focus()
                  }
                >
                  {maintenance ? "Under Maintenance" : button}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebsiteCard;
