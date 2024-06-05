"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
// import { IconAppWindow } from "@tabler/icons-react";
import courseData from "@/data/music_courses.json";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/moving-border";
export default function FeaturedSection() {
  interface Course {
    id: number;
    title: string;
    slug: string;
    description: string;
    price: number;
    instructor: string;
    isFeatured: boolean;
    image: string;
  }
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );
  return (
    <div className="py-12 bg-neutral-900">
      <div>
        <div className="text-center">
          <h2 className="text-base text-[#0B83BA] font-semibold tracking-wide uppercase">
            FEATURED SECTION
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Explore and Learn with the Best
          </p>
        </div>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course: Course) => (
            <div className="flex justify-center" key={course.id}>
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <Image
                  src={course.image}
                  alt="jordans"
                  height="400"
                  width="400"
                  className="object-contain"
                />
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {course.title}
                  </p>
                  <p className="p-2 text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                    {course.description}
                  </p>
                  <Link href={`/courses/${course.slug}`} className="mt-4 hover:text-[#028391]">Learn More</Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link href={"/courses"}>
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-black text-black dark:text-white border-slate-800"
          >
            View All Courses
          </Button>
        </Link>
      </div>
    </div>
  );
}