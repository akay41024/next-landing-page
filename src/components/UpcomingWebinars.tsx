'use client'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/moving-border'
import { HoverEffect } from "./ui/card-hover-effect";



const featuredWebinars = [
  {
    title: "How to Play Guitar",
    description: "Learn to play the guitar with our expert instructors.",
    slug: "understanding-music-theory",
    isFeatured: true,
  },
  {
    title: "Piano for Beginners",
    description: "Start your piano journey with our beginner-friendly course.",
    slug: "intro-to-piano",
    isFeatured: true,

  },
  {
    title: "Music Theory 101",
    description: "Understand the basics of music theory with our expert instructors.",
    slug: "advanced-singing-techniques",
    isFeatured: true,
  },
  {
    title: "Live Performance Techniques",
    description: "Enhance your live performance skills with experts tips and strategies.",
    slug: "live-performance-techniques",
    isFeatured: true,
  },
  {
    title: "Digital Music Marketing",
    description: "Learn how to promote your music effectively in the digital age.",
    slug: "digital-music-marketing",
    isFeatured: true,
  },
  {
    title: "Advanced Drumming Techniques",
    description: "Take your drumming skills to the next level with our advanced course.",
    slug: "drumming-masterclass",
    isFeatured: true
  },
]

export default function UpcomingWebinars() {
  return (
    <div className='p-12 bg-gray-900'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className='text-center'>
        <h2 className="text-base text-[#0B83BA] font-semibold tracking-wide uppercase">
            FEATURED WEBINARS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Musical Journey
          </p>
        </div>
        <div className='mt-10'>
          <HoverEffect items={featuredWebinars.map((webinar) => (
            {
              title: webinar.title,
              description: webinar.description,
              link: "/"
            }
          ))}/>
        </div>
        <div className='mt-10 text-center'>
        <Link href={"/courses"}>
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-black text-black dark:text-white border-slate-800"
          >
            View All Webinars
          </Button>
        </Link>
        </div>
      </div>
    </div>
  )
}
