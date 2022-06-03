import { useContext } from "react";

// context
import _appContext from "../context/_appContext";

// data
import books from "../books";

// styles
import styles from "../styles/Websites.module.scss";

const About = () => {
  const { isMobile } = useContext(_appContext);

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
      `}</style>
      <div
        className={`w-full min-h-full flex ${
          isMobile ? "flex-col" : "flex-row-reverse"
        }  text-white`}
      >
        <div
          className={`relative ${
            isMobile
              ? "mt-4"
              : "flex-[.5] smaller:flex-[.7] sm:flex-[.8] md:flex-[.7] lg:flex-[.6] xl:flex-[.5] my-8"
          }  mx-4 flex items-start`}
        >
          <div
            className={`w-full h-full ${
              isMobile
                ? "pt-4"
                : "py-4 bg-pink-900/10 rounded-lg backdrop-blur-lg"
            } p-2 flex flex-col animate-fade-in`}
          >
            <h1 className="text-center mb-4">My Reading List</h1>
            <div className="flex-1 w-full relative">
              <div
                className={`${styles.scroll} ${
                  isMobile ? "" : "absolute"
                } w-full h-full top-0 left-0 overflow-x-hidden snap-mandatory snap-x`}
              >
                <div className="w-full">
                  <div
                    className={`${
                      isMobile
                        ? "flex overflow-x-scroll h-36"
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
          <div className="w-full h-full py-4 p-2 bg-pink-900/10 rounded-lg backdrop-blur-lg flex flex-col animate-fade-in">
            test
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
