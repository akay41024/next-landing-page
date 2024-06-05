"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";


const content = [
    {
      title: "Beat Syncing",
      description:
        "Harmonize your workflow with our real-time collaboration tool. Sync your beats, melodies, and harmonies across multiple devices and platforms. No more missed notes or lost rhythms!",
    },
    {
      title: "Auto-Tuning",
      description:
        "Stay in tune with our real-time feedback feature. Get instant corrections and adjustments to your pitch, tempo, and rhythm. Say goodbye to ear-piercing off-beat notes and hello to smooth, polished performances!",
      
    },
    {
      title: "Mixing and Mastering",
      description:
        "Experience the ultimate mixing and mastering experience with our platform. Get precise control over your audio levels, EQ, compression, and reverb. Produce high-quality tracks that resonate with your audience!",
      
    },
    {
      title: "Music Distribution",
      description:
        "Reach new heights with our music distribution platform. Get your music on popular streaming platforms, radio stations, and online music stores. Connect with fans worldwide and grow your music career!",
      
    },
  ];
export default function ScroollSection() {
  return (
    <div>
      <StickyScroll content={content}/>
    </div>
  )
}
