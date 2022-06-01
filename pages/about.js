// data
import books from "../books";

// styles
import styles from "../styles/Websites.module.scss";

const About = () => {
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
      <div className="w-full min-h-full flex flex-row-reverse text-white">
        <div className="relative flex-[.7] sm:flex-[.8] md:flex-[.7] lg:flex-[.6] xl:flex-[.5] mx-4 my-8 flex items-start">
          <div className="w-full h-full py-4 p-2 bg-pink-900/10 rounded-lg backdrop-blur-lg flex flex-col animate-fade-in">
            <h1 className="text-center mb-4">My Reading List</h1>
            <div className="flex-1 w-full relative">
              <div
                className={`${styles.scroll} absolute w-full h-full top-0 left-0 overflow-x-hidden`}
              >
                <div className="w-full">
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 /xl:grid-cols-5 2xl:grid-cols-5 gap-2 px-3 overflow-y-auto">
                    {books &&
                      books.map((book, key) => (
                        <div className="aspect-[.7]" key={key}>
                          <img
                            className="h-full w-full object-fill object-top cursor-pointer rounded hover:scale-95 select-none"
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
        <div className="flex-1"></div>
      </div>
    </>
  );
};

export default About;
