import Link from "next/link";
import React from "react";
import { cn } from "@/utils/cn";
import { Spotlight } from "@/components/ui/Spotlight";
import { Button } from "@/components/ui/moving-border";

export default function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#E0FBE2"
        
      />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master the arts of music
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          We're a community of music lovers, passionate about sharing the best
          new and emerging artists with the world. Our mission is to curate the
          most talented musicians, producers, and DJs, and provide a platform
          for them to showcase their work.
        </p>
        <div className="mt-4">
          <Link href={"/courses"}>
            <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-black text-black dark:text-white border-slate-800"
            >Explore Courses</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
