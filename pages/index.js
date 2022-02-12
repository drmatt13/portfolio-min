import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
// import styles from "../styles/Home.module.scss";

// images
import image1 from "../public/images/grid1.jpg";
import image2 from "../public/images/grid2.jpg";
import image3 from "../public/images/grid3.jpg";
import image4 from "../public/images/grid4.jpg";
import image5 from "../public/images/grid5.jpg";
import image6 from "../public/images/grid6.jpg";
import image7 from "../public/images/grid7.jpg";
import image8 from "../public/images/grid8.jpg";
import image9 from "../public/images/grid9.jpg";
import image10 from "../public/images/grid10.jpg";
import image11 from "../public/images/grid11.jpg";
import image12 from "../public/images/grid12.jpg";
import image13 from "../public/images/grid13.jpg";
import image14 from "../public/images/grid14.jpg";
import image15 from "../public/images/grid15.jpg";
import image16 from "../public/images/grid16.jpg";
import image17 from "../public/images/grid17.jpg";
import image18 from "../public/images/grid18.jpg";
import image19 from "../public/images/grid19.jpg";
import image20 from "../public/images/grid20.jpg";
import image21 from "../public/images/grid21.jpg";
import image22 from "../public/images/grid22.jpg";
import image23 from "../public/images/grid23.jpg";
import image24 from "../public/images/grid24.jpg";
import image25 from "../public/images/grid25.jpg";
import image26 from "../public/images/grid26.jpg";
import image27 from "../public/images/grid27.jpg";
import image28 from "../public/images/grid28.jpg";
import image29 from "../public/images/grid29.jpg";
import image30 from "../public/images/grid30.jpg";
import image31 from "../public/images/grid31.jpg";
import image32 from "../public/images/grid32.jpg";

export default function Home() {
  const [images, setImages] = useState([
    image25,
    image26,
    image24,
    image12,
    image19,
    image29,
    image30,
    image31,
    image1,
    image3,
    image6,
    image2,
    image5,
    image7,
    image32,
    image20,
    image21,
    image8,
    image9,
    image10,
    // image4,
    image28,
    image11,
    image22,
    image23,
    image13,
    image15,
    image14,
    image16,
    image17,
    image27,
    image18,
  ]);

  return (
    <>
      <style jsx>{`
        .shadow-lg {
          box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
        }
      `}</style>
      <div className="flex justify-center md:justify-between flex-row">
        <div className="flex flex-col md:mr-16 lg:mr-24 xl:mr-16 w-56 xl:w-72">
          <div className="shadow-lg text-[0] rounded-full overflow-hidden cursor-pointer">
            <Image
              src={require("../public/images/cody4.jpg")}
              className="rounded-2xl"
              width={350}
              height={350}
              objectFit="cover"
            />
          </div>

          <div className="mt-4 w-full grid grid-cols-3">
            <Link href="https://www.facebook.com/costello.cody">
              <img
                className="self-center hover:scale-110 cursor-pointer transition-transform"
                src="https://img.icons8.com/color/144/000000/facebook-new.png"
              />
            </Link>
            <Link href="https://www.instagram.com/costello2805/">
              <img
                className="self-center hover:scale-110 cursor-pointer transition-transform"
                src="https://img.icons8.com/fluency/144/000000/instagram-new.png"
              />
            </Link>
            <Link href="https://www.tiktok.com/@codycostello1990">
              <img
                className="self-center hover:scale-110 cursor-pointer transition-transform"
                src="https://img.icons8.com/color/150/000000/tiktok--v1.png"
              />
            </Link>
          </div>
        </div>

        <div className="hidden xl:inline mr-12 shadow-lg max-h-fit bg-black text-[0] overflow-hidden rounded-2xl cursor-pointer">
          <Image
            src={require("../public/images/ink1.png")}
            className="rounded-2xl"
            width={280}
            height={400}
            objectFit="cover"
          />
        </div>
        <iframe
          className="hidden md:inline flex-1 rounded-2xl"
          src="https://maps.google.com/maps?width=350&amp;height=500&amp;hl=en&amp;q=Irvine%20Ink%20Tattoo%20Studios,%2020996%20Bake%20Pkwy,%20Lake%20Forest,%20CA%2092630+(Irvine%20Ink%20Tattoo%20Studios)&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          loading="lazy"
        ></iframe>
      </div>
      <div className="mt-12 xs:mt-8 sm:mt-8 md:mt-10 lg:mt-12 pb-12 md:pb-16 lg:pb-20 w-full mx-auto grid px-16 xs:px-0 grid-cols-1 xs:grid-cols-3 /sm:grid-cols-3 gap-8 xs:gap-[2.5vw] sm:gap-6 md:gap-8 lg:grid-cols-4 lg:gap-12 xl:grid-cols-5 text-[0]">
        {images &&
          images.map((image, index) => (
            <div
              key={index}
              className="shadow-lg rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition-transform"
            >
              <Image
                src={image}
                className="rounded-2xl"
                width={300}
                height={300}
                objectFit="cover"
              />
            </div>
          ))}
      </div>
    </>
  );
}
