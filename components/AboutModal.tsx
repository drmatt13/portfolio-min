import Image from "next/image";

import resume from "../public/images/resume v3.8.png";

const AboutModal = () => {
  return (
    <div className="flex h-full w-screen animate-fade-in justify-center items-center pointer-events-none">
      <div className="flex h-screen aspect-[1/1.8] sm:aspect-[1/1.4] items-center pb-12 ">
        <Image
          src={resume}
          height={2200}
          width={1700}
          objectFit="contain"
          className="aspect-[1/1.8] sm:aspect-[1/1.4] bg-black pointer-events-auto"
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutModal;
