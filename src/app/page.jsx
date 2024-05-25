import Image from "next/image";
import Link from "next/link";

import "./homepage.css";
export default function Home() {
  return (
    <div className="self-center container flex flex-col justify-center items-center gap-16">
      <div className="relative">
        <p className="welcome-title top-0 -left-[34%] text-[4rem] font-bold text-primary leading-[1.1] tracking-wider lg:absolute lg:text-8xl">
          WEL
          <span className="text-[4rem] font-bold text-primary lg:text-gray5 lg:text-8xl">
            COME
          </span>
        </p>
        <p className="text-5xl leading-[1.1rem] font-bold text-gray5 bg-primary -mx-1 py-[5rem] lg:text-7xl lg:px-[56px] lg:py-[170px] lg:mx-0">
          P.P. Fresh Pork
        </p>
        <div className="flex flex-col gap-4 lg:absolute lg:top-[85%] lg:-right-[100px]">
          <p className="animated-text text-[3rem] font-bold text-primary leading-[1.1] opacity-0 lg:text-6xl lg:text-gray5 lg:mx-0">
            Fresh
          </p>
          <p className="animated-text left-1/4 text-[3rem] font-bold text-primary leading-[1.1] opacity-0 mx-[15%] lg:text-6xl lg:mx-0">
            Clean
          </p>
          <p className="animated-text text-[3rem] font-bold text-primary leading-[1.1] opacity-0 mx-[25%] lg:text-6xl lg:mx-0">
            Quality
          </p>
          <p className="animated-text text-[3rem] font-bold text-primary leading-[1.1] opacity-0 mx-[35%] lg:text-6xl lg:mx-0">
            Premium
          </p>
        </div>
      </div>
    </div>
  );
}
