"use client";
import React, {useState} from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Contact() {

  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  return (
    <>
      <div className="min-h-screen bg-gray-100 dark:bg-neutral-900 py-12 pt-28 relative">
        <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
        <div className="max-w-2xl mx-auto p-4 relative z-10">
          <h1 className="text-lg md:text-5xl text-center font-sans font-bold mb-8 text-white">
            Contact Us
          </h1>
          <p className="text-neutral-300 max-w-lg mx-auto text-lg">
            We&apos;re here to help with any questions about courses, program,
            or events. Reach out and let us know how we can assist you in your
            musical journey.
          </p>
          <form
            name="contact-form"
            action="https://getform.io/f/wbrkzgqa"
            method="POST"
            className="space-y-2 mt-4"
          >
            <input
              type="text"
              className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full lg:max-w-2xl p-4 bg-black placeholder:text-neutral-300"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              name="textarea"
              className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full lg:max-w-2xl p-4 bg-black placeholder:text-neutral-300"
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              id="textarea"
              rows={5}
              required
            ></textarea>
            <button
              type="submit"
              className="p-4 rounded-lg bg-teal-800 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
