import { useContext } from "react";
import Image from "next/image";

// context
import _appContext from "../context/_appContext";

// styles
import styles from "../styles/scroll.module.scss";

// images
import ux from "../public/images/services/000-Web-UI-Design.png";
import backend from "../public/images/services/node-js-guide-seo.jpg";
import database from "../public/images/services/database-1024x703.webp";
import cloud from "../public/images/services/maxresdefault.jpg";
import dataStructures from "../public/images/services/0ed6cb479934a668cfb86663d4bddee5.png";
import react from "../public/images/services/react.png";
import analyze from "../public/images/services/SNHU-Stacked-Blue-Logo-.jpg";
import seo from "../public/images/services/1603954182-seo-article-header.jpg";
import ads from "../public/images/services/ads.png";
import typescript from "../public/images/services/uf3a8y7xh8aroo95qocz.webp";
import solidity from "../public/images/services/defi-series-smart-contract.jpg";

const services = [
  // {
  //   src: typescript,
  //   alt: "typescript",
  //   title: "title",
  // },
  {
    src: analyze,
    alt: "analyze",
    title: "Data Analytics",
    text: "Currently, possess a bachelor's degree from SNHU in Data Analytics with a 3.5 GPA.",
  },
  {
    src: ux,
    alt: "ux",
    title: "UX / UI Development",
    text: "I will create and bring to life your designs elegantly, emphasizing user experience with seamless transitions between web and mobile layouts.",
  },
  {
    src: react,
    alt: "react",
    title: "React",
    text: "3+ years of extensive experience with React.js. With a strong understanding of vanilla javascript along with the experience of working on countless React.js projects, I now have a solid understanding of most advanced Advanced React Concepts.",
  },
  {
    src: backend,
    alt: "backend",
    title: "Node.js",
    text: "Predominantly utilize express js and can implement routers, controllers, middleware, and error handling—experience with developing microcontrollers, event buses, and REST APIs for various applications.",
  },
  {
    src: dataStructures,
    alt: "dataStructures",
    title: "Data Structures",
    text: "Predominantly utilize express js and can implement routers, controllers, middleware, and error handling—experience with developing microcontrollers, event buses, and REST APIs for various applications.",
  },
  {
    src: database,
    alt: "database",
    title: "Database Stratagy",
    text: "Predominantly utilize express js and can implement routers, controllers, middleware, and error handling—experience with developing microcontrollers, event buses, and REST APIs for various applications.",
  },
  {
    src: solidity,
    alt: "solidity",
    title: "Solidity",
    text: "Predominantly utilize express js and can implement routers, controllers, middleware, and error handling—experience with developing microcontrollers, event buses, and REST APIs for various applications.",
  },
  {
    src: cloud,
    alt: "cloud",
    title: "Cloud Computing",
    text: "Predominantly utilize express js and can implement routers, controllers, middleware, and error handling—experience with developing microcontrollers, event buses, and REST APIs for various applications.",
  },
  {
    src: ads,
    alt: "ads",
    title: "Ads & Monitization",
    text: "Predominantly utilize express js and can implement routers, controllers, middleware, and error handling—experience with developing microcontrollers, event buses, and REST APIs for various applications.",
  },
  {
    src: seo,
    alt: "seo",
    title: "Search Engine Optimization",
    text: "Predominantly utilize express js and can implement routers, controllers, middleware, and error handling—experience with developing microcontrollers, event buses, and REST APIs for various applications.",
  },
];

const AboutModal = () => {
  const { isMobile } = useContext(_appContext);
  return (
    <div
      className={`${styles.scroll} ${
        isMobile ? "-translate-y-4" : ""
      } rounded-lg overflow-hidden backdrop-blur-md bg-white/40 shadow-lg animate-fade-in pr-1.5`}
    >
      <div className="[&>div:last-of-type]:mb-0 overflow-y-scroll max-h-[75vh] max-w-[90vw] w-[450px] py-3 pl-3 pr-1.5 flex flex-col ">
        {services.map((service, key) => (
          <div className="mb-2 w-full flex" key={key}>
            <div className="h-20">
              <Image
                src={service.src}
                height={80}
                width={140}
                objectFit="cover"
                alt={service.alt}
              />
            </div>
            <div className="w-2" />
            <div className="flex-1 border border-gray-700 20 p-2">
              <div className="font-bold underline">{service.title}:</div>
              <p className="text-sm">{service.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutModal;
