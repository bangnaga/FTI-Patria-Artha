"use client";

import React from "react";

export interface AboutAppsProps {
  title?: string;
  description?: string;
  imageSrc?: string;
  featuresTitle?: string;
  featuresDescription?: string;
  features?: { img: string; title: string; desc: string }[];
}

export function AboutApps({
  title = "About our apps",
  description = "A visual collection of our most recent works — each piece crafted with intention, emotion and style.",
  imageSrc = "https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&w=830&h=844&auto=format&fit=crop",
  featuresTitle = "Our Latest Features",
  featuresDescription = "Ship Beautiful Frontends Without the Overhead — Customizable, Scalable and Developer-Friendly UI Components.",
  features = [
    {
      img: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/flashEmoji.png",
      title: "Lightning-Fast Performance",
      desc: "Built with speed — minimal load times and optimized."
    },
    {
      img: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/colorsEmoji.png",
      title: "Beautifully Designed Components",
      desc: "Modern, pixel-perfect UI components ready for any project."
    },
    {
      img: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/puzzelEmoji.png",
      title: "Plug-and-Play Integration",
      desc: "Simple setup with support for React, Next.js and Tailwind CSS."
    }
  ]
}: AboutAppsProps) {
  return (
    <div className="py-16 flex flex-col items-center justify-center px-4 text-center w-full">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
      
        * {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>

      <h1 className="text-3xl md:text-4xl font-semibold max-w-2xl dark:text-white">
        {title}
      </h1>

      <p className="text-sm md:text-base text-slate-500 mt-3 max-w-lg dark:text-slate-400">
        {description}
      </p>

      <div className="mt-10 max-w-5xl flex flex-col md:flex-row items-center justify-center gap-10">
        <img
          className="w-full max-w-sm rounded-xl object-cover h-[500px]"
          src={imageSrc}
          alt="App preview"
        />

        <div className="text-left md:text-left max-w-md">
          <h2 className="text-2xl md:text-3xl font-semibold dark:text-white">
            {featuresTitle}
          </h2>
          <p className="text-sm md:text-base text-slate-500 mt-2 dark:text-slate-400">
            {featuresDescription}
          </p>

          <div className="flex flex-col gap-8 mt-6">
            {features.map((feature, i) => (
              <FeatureItem
                key={i}
                img={feature.img}
                title={feature.title}
                desc={feature.desc}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureItem({
  img,
  title,
  desc,
}: {
  img: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="size-10 flex shrink-0 items-center justify-center bg-indigo-50 border border-indigo-200 rounded">
        <img src={img} alt="" className="w-6 h-6" />
      </div>
      <div>
        <h3 className="text-base font-medium text-slate-600 dark:text-slate-300">{title}</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">{desc}</p>
      </div>
    </div>
  );
}

export default AboutApps;
