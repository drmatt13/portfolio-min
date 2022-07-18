import { useContext } from "react";
import Image from "next/image";

// context
import _appContext from "../context/_appContext";

// data
import books from "../books";

// styles
import styles from "../styles/Websites.module.scss";

const AboutModal = () => {
  const { isMobile } = useContext(_appContext);

  return (
    <div className="pt-16 sm:pt-24 flex h-full w-full">
      <div className="flex-1">
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
          `}</style>
          <div
            className={`w-full min-h-full flex ${
              isMobile ? "flex-col" : "flex-row-reverse"
            }`}
          >
            <div
              className={`relative ${
                isMobile
                  ? "mt-2"
                  : "flex-[.5] smaller:flex-[.7] sm:flex-[.8] md:flex-[.7] lg:flex-[.6] xl:flex-[.5] my-8"
              }  mx-4 flex items-start`}
            >
              <div
                className={`w-full h-full ${
                  isMobile ? "pt-4" : "py-4"
                } animate-fade-in bg-white/40 backdrop-blur-md rounded-lg p-2 flex flex-col`}
              >
                <h1 className="text-center mb-4 md:text-lg">My Reading List</h1>
                <div className="flex-1 w-full relative">
                  <div
                    className={`${styles.scroll} ${
                      isMobile ? "" : "absolute"
                    } w-full h-full top-0 left-0 overflow-x-hidden`}
                  >
                    <div className="w-full">
                      <div
                        className={`
                    ${styles.scroll}
                    ${
                      isMobile
                        ? "w-0 px-[50%] flex overflow-x-scroll h-36 snap-mandatory snap-x"
                        : "grid grid-cols-1 smaller:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-2 px-3 overflow-y-auto"
                    }`}
                      >
                        {books &&
                          books.map((book, key) => (
                            <div
                              className={`aspect-[.7] ${
                                isMobile ? "px-2 snap-center snap-always" : ""
                              }`}
                              key={key}
                            >
                              <img
                                className={`${
                                  isMobile ? "" : "hover:scale-95"
                                } aspect-[.7] w-full object-fill object-top cursor-pointer rounded select-none transition-transform`}
                                src={book.src}
                                alt={book.name}
                              />
                            </div>
                          ))}
                      </div>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${
                isMobile ? "mt-4 mx-4" : "flex-1 my-8 ml-4"
              } flex items-start`}
            >
              <div
                className={`w-full h-full animate-fade-in bg-white/40 backdrop-blur-md rounded-lg p-2`}
              >
                <div className="h-full w-full">
                  <div>
                    Hello, my name is Matthew Sweeney and in October 2022; I
                    will officially have earned my bachelor&apos;s degree in
                    data analytics from SNHU. I have been meticulously studying
                    all things web development related for the last 2½ years and
                    am confident in my ability to bring and implement complex
                    ideas to life in elegant ways while also adhering to general
                    design principles.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default AboutModal;
