import "../styles/globals.scss";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// import video from "../public/video/Tattoo.mp4";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Redressed&family=Ubuntu&display=swap"
          rel="stylesheet"
        />
      </Head>
      <style jsx>{`
        video {
          object-fit: cover;
          width: 100vw;
          height: 100vh;
          position: fixed;
          top: 0;
          left: 0;
          z-index: -1;
        }
      `}</style>
      <video autoPlay muted loop>
        <source
          src="/video/273759854_120970367148781_9211654846354043201_n.mp4"
          type="video/mp4"
        />
      </video>
      <div className="fixed top-0 z-10 bg-black/75 backdrop-blur-lg h-16 sm:h-24 w-full mb-20 pl-8 pr-6 md:px-[8vw] lg:px-28 flex items-center justify-between text-white">
        <div className="flex items-center">
          <div className="hidden sm:inline mr-4 md:mr-5 h-12 w-12 md:h-14 md:w-14 lg:h-[3.75rem] lg:w-[3.75rem] shadow-lg rounded-full overflow-hidden text-[0] cursor-pointer">
            <Link href="/">
              <Image
                src={require("../public/images/logo.jpg")}
                width={75}
                height={75}
                objectFit="cover"
              />
            </Link>
          </div>
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
                <div className="mr-1">Cody Costello</div>
                <span className="hidden md:inline">- Tattoo Artist</span>
              </div>
            </Link>
            <div className="h-[1.5px] w-0 rounded-sm bg-gradient-to-r from-transparent via-white to-transparent group-hover:w-full transition-all" />
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
                <div className="h-[1.5px] w-0 rounded-full bg-gradient-to-r from-transparent via-white to-transparent group-hover:w-full transition-all" />
              </>
            </Link>
          </div>
          <div className="ml-4 md:ml-6 lg:ml-8 cursor-pointer group">
            <Link href="/">
              <>
                <div>about me</div>
                <div className="h-[1.5px] w-0 rounded-full bg-gradient-to-r from-transparent via-white to-transparent group-hover:w-full transition-all" />
              </>
            </Link>
          </div>
          <div className="ml-4 md:ml-6 lg:ml-8 cursor-pointer group">
            <Link href="/">
              <>
                <div>contact</div>
                <div className="h-[1.5px] w-0 rounded-full bg-gradient-to-r from-transparent via-white to-transparent group-hover:w-full transition-all" />
              </>
            </Link>
          </div>
        </div>
      </div>
      <div className="sm:container mx-auto xs:px-[12vw] sm:px-12 md:px-16 lg:px-20 xl:px-24 pt-28 sm:pt-36">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
