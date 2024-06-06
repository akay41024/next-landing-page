'use client'
import React from 'react'
import { Meteors } from "@/components/ui/meteors";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Contact() {
  return (
    <div className='min-h-screen bg-neutral-900 py-12 pt-36'>
      <h1 className="text-lg md:text-5xl text-center font-sans font-bold text-white">Contact Us</h1>
      <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          We&apos;re here to help with any questions about courses, program, or events. Reach out and let us know how we can assist you in your musical journey.
      </p>
      <form action="https://getform.io/f/wbrkzgqa" method="POST" className='flex flex-col items-center justify-center gap-2 mt-6'>
        <input type="text" className='rounded-xl p-4 w-[40rem] bg-black text-base text-gray-600' placeholder='Your email address' />
        <textarea name="textarea" className='rounded-xl p-4 w-[40rem] h-[10rem] bg-black text-base text-gray-600' placeholder='Your message' id="textarea" cols={10} rows={10}></textarea>
        <button type="submit" className='p-4 bg-teal-800 rounded-2xl w-36 hover:bg-teal-600 relative right-60'>Send Message</button>
      </form>
      <Meteors number={50} />
      <BackgroundBeams />
    </div>
  )
}
