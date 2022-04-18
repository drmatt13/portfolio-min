import { useRef, useContext } from "react";
import Image from "next/image";
import Link from "next/link";

import context from "../context/_appContext";

// styles
import styles from "../styles/Websites.module.scss";

const WebsiteCard = ({
  data: {
    src,
    blurDataURL,
    title,
    description,
    link,
    button,
    dimensions: { width, height },
  },
  parentRef,
  flagMemo = {},
}) => {
  const { isMobile } = useContext(context);

  const cardRef = useRef();
  const animationRef = useRef(null);
  const timeoutRef = useRef(null);

  const mouseMove = (e) => {
    e.stopPropagation();

    if (isMobile) return;
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    animationRef.current = requestAnimationFrame(() => {
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
      cardRef.current.classList.remove("group");
      cardRef.current.style.setProperty("transform", "perspective(1000px)");
    }, 500);
  };

  return (
    <>
      {/* md: "768px",
      lg: "1024px",
      xl: "1280px", */}
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
        // .scroll::-webkit-scrollbar-thumb:hover {
        //   background-color: rgba(99, 102, 241, 0.6);
        // }
        .scroll::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.125);
        }
        @media (max-width: 768px) and (min-height: 900px) {
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
        @media (max-width: 1024px) and (min-height: 950px) {
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

        @media only screen and (max-width: 640px) {
          div {
            transform: perspective(1000px) translate3d(0, 0, 0) rotateY(0)
              rotateX(0) !important;
          }
        }
        @media only screen and (min-width: 640px) {
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
          .group .divider_bar {
            opacity: 0.1;
          }
          .group .button {
            box-shadow: rgba(0, 0, 0, 1) 0px 5px 15px;
          }
        }
      `}</style>
      <div className="snap-center snap-always rounded-lg min-w-[12rem] h-[16.5rem] sm:min-w-[14rem] sm:h-[20rem] lg:min-w-[16rem] lg:h-[22rem] xl:min-w-[17rem] xl:h-[23rem] 2xl:min-w-[18rem] 2xl:h-[24rem]">
        <div
          ref={cardRef}
          onMouseMove={mouseMove}
          onMouseOut={mouseOut}
          className="flex flex-col justify-between h-full w-full bg-black/50 rounded-lg"
          style={{
            transition: "all .4s cubic-bezier(.165, .84, .44, 1)",
          }}
        >
          <div className="relative flex min-h-[1%] h-32 sm:flex-[1.1] transition-all ease-in select-none">
            <div className="extrude image_container flex w-full rounded-t-lg overflow-hidden">
              <Image
                src={src}
                alt={title}
                draggable={false}
                height={height}
                width={width}
                objectFit="cover"
                placeholder="blur"
                blurDataURL={blurDataURL}
              />
            </div>
          </div>

          <div className="h-1 w-full bg-blue-500 divider_bar transition-all duration-300" />
          <div className="relative flex-1">
            <div className="extrude absolute top-0 left-0 h-full w-full flex flex-col">
              <div className="py-2 text-center text-white text-xl sm:text-base lg:text-lg 2xl:text-xl">
                {title}
              </div>
              <div className="hidden sm:inline scroll ml-2.5 pl-1.5 mr-2 flex-[1.2] text-white text-[.8rem] lg:text-sm xl:text-base overflow-y-auto break-words">
                {description}
              </div>
              <div className="flex-1 flex flex-col justify-end">
                <div
                  className="button text-white text-sm 2xl:text-xl no-select cursor-pointer mb-2 mt-3 mx-4 py-2 rounded-sm sm:rounded-md text-center bg-blue-500 hover:bg-blue-400 transition-all duration-100 select-none"
                  onClick={() => window.open(link, "_blank").focus()}
                >
                  {button}
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
