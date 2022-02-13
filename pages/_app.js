import { useState, useEffect } from "react";
import "../styles/globals.scss";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// context
import _appContext from "../context/_appContext";

function MyApp({ Component, pageProps }) {
  const [isMobile, setIsMobile] = useState(false);
  const [image, setImage] = useState(undefined);

  useEffect(() => {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
        navigator.userAgent
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        navigator.userAgent.substr(0, 4)
      )
    ) {
      setIsMobile(true);
    }
  }, []);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Redressed&family=Ubuntu&display=swap"
          rel="stylesheet"
        />
        <title>Costello Tattoo</title>
        {/* <meta property="og:url" content="http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html" /> */}
        <meta property="og:site_name" content="Costello Tattoo" />
        <meta
          property="og:title"
          content="Cody Costello - Black & Gray Tattoo Specialist"
        />
        <meta
          property="og:description"
          content="Hi, I'm Cody. I am a tattoo artist and this is a generic temp description."
        />
        <meta property="og:image" content="/images/cody4.jpg" />
        <meta name="theme-color" content="#3c374a" />
      </Head>
      <style jsx>{`
        video {
          object-fit: cover;
          width: 100vw;
          height: 100vh;
          position: fixed;
          top: 0;
          left: 0;
        }
        .shadow-lg {
          box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
        }
      `}</style>
      <video
        className={isMobile ? "" : "blur grayscale-[80%]"}
        autoPlay
        playsInline
        muted
        loop
      >
        <source src="/video/background.mp4" type="video/mp4" />
      </video>
      {image && (
        <>
          <div className="fixed top-0 left-0 h-screen w-screen flex justify-center items-center z-20">
            <div
              className="absolute top-0 left-0 h-full w-full bg-black/50"
              onClick={() => setImage(undefined)}
            />
            <div className="relative z-10 shadow-lg rounded-2xl overflow-hidden h-[500px] max-h-[70vw] w-[500px] max-w-[70vw] noselect text-[0]">
              <div className="bg-white/50 backdrop-blur-lg rounded-2xl">
                <Image
                  src={image}
                  className="rounded-2xl animate-fade-in"
                  width={500}
                  height={500}
                  objectFit="cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </>
      )}
      <div className="relative h-screen overflow-y-auto">
        <div className="noselect sticky top-0 z-10 bg-black/75 backdrop-blur-lg h-16 sm:h-24 w-full mb-12 xs:mb-16 sm:mb-20 pl-8 pr-6 md:px-[8vw] lg:px-28 flex items-center justify-between text-white">
          <div className="flex items-center">
            <div className="hidden sm:inline mr-4 md:mr-5 h-12 w-12 md:h-14 md:w-14 lg:h-[3.75rem] lg:w-[3.75rem] shadow-lg rounded-full overflow-hidden text-[0] cursor-pointer">
              <Link href="/">
                <Image
                  src={require("../public/images/logo.jpg")}
                  className="rounded-full"
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
        <div className="absolute w-full">
          <div className="sm:container mx-auto xs:px-[6vw] sm:px-12 md:px-16 lg:px-20 xl:px-24">
            <_appContext.Provider value={{ setImage, isMobile }}>
              <Component {...pageProps} />
            </_appContext.Provider>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyApp;
