import Image from "next/image";
import Link from "next/link";

import "./homepage.css";
export default function Home() {
  return (
    <main className="container flex flex-col justify-center items-center gap-16 mx-auto">
      <div className="relative">
        <p className=" text-7xl leading-[1.1rem] font-bold text-gray5 bg-primary px-[56px] py-[170px]">
          P.P. Fresh Pork
        </p>
        <p className="welcome-title absolute top-0 -left-[34%] text-8xl font-bold text-primary leading-[1.1] tracking-wider">
          WEL<span className="text-8xl font-bold text-gray5">COME</span>
        </p>
        <div className="absolute top-[80%] -right-[100px] flex flex-col gap-4">
          <p className="animated-text text-6xl font-bold text-gray5 leading-[1.1] opacity-0">
            Fresh
          </p>
          <p className="animated-text text-6xl font-bold text-primary leading-[1.1] opacity-0">
            Clean
          </p>
          <p className="animated-text text-6xl font-bold text-primary leading-[1.1] opacity-0">
            Quality
          </p>
          <p className="animated-text text-6xl font-bold text-primary leading-[1.1] opacity-0">
            Premium
          </p>
        </div>
      </div>
    </main>
  );
}
