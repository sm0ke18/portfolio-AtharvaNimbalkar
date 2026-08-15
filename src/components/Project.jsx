import React, { useState, useEffect, useRef } from 'react';

const projects = [
  {
    name: 'AgroVision AI',
    title: (
      <>
        AGROVISION <span className="font-light italic text-gray-300 lowercase font-serif">ai</span><br />
        PLANT PHENOTYPING CV PIPELINE
      </>
    ),
    description: 'A real-time computer vision pipeline built with YOLO for automated plant phenotyping, achieving sub-3-second inference latency. Backed by a PostgreSQL storage layer and an interactive web dashboard that cut data retrieval time by 50% over prior manual methods. Built in collaboration with GrowLoc Ltd. as a 4-person team.',
    image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=2000&auto=format&fit=crop',
    githubUrl: 'https://github.com/sm0ke18/agrovision-AI'
  },
  {
    name: 'TrustGuard',
    title: (
      <>
        TRUSTGUARD <br />
        MULTIMODAL AI MODERATION
      </>
    ),
    description: 'A 4-stage multimodal pipeline (EasyOCR → Regex → XLM-RoBERTa → CLIP fusion) that detects toxic memes and Hinglish hate speech across text and image content, with a multilingual normalization layer for code-switched regional language. Uses cryptographic Redis caching (MD5 image hashing) to cut ML inference costs by ~90% on repeated content, plus an explainable AI (XAI) engine with feature attribution scoring for human-in-the-loop review via a React + MongoDB dashboard.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2000&auto=format&fit=crop',
    githubUrl: 'https://github.com/sm0ke18/Ai-content-Moderation-'
  },
  {
    name: 'SolarSense',
    title: (
      <>
        SOLARSENSE <br />
        3D SOLAR MODELING
      </>
    ),
    description: 'A 3D solar modeling platform using spatial raster data and live weather APIs to predict energy output with strong accuracy. Automates ROI and carbon credit calculations across 100+ simulated sites through an interactive analytics dashboard. Built with React, Node.js, CesiumJS, GeoTIFF, and the Open-Meteo API. IEEE Conference paper accepted; patent filed in South Africa.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2000&auto=format&fit=crop',
    githubUrl: 'https://github.com/sm0ke18/solarsenseai_deployment',
    liveUrl: 'https://solarsenseaideoployment.vercel.app/'
  },
  {
    name: 'Multi-Agent Orchestration System',
    title: (
      <>
        MULTI-AGENT <br />
        ORCHESTRATION SYSTEM
      </>
    ),
    description: 'An ongoing research-and-build project focused on a supervisor-based multi-agent system that decomposes complex tasks and delegates them to specialist agents (research, analysis, writing, code), with a reviewer agent and human escalation for low-confidence or sensitive actions. Includes short- and long-term memory for cross-task learning, full decision tracing/replay, and a modular LLM backend. Built with PostgreSQL, ChromaDB, Redis, and Docker, and still actively evolving as a core AI systems project.',
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=2000&auto=format&fit=crop',
    githubUrl: 'https://github.com/sm0ke18'
  }
];

const Project = ({ onCtaClick }) => {
  const handleGithubClick = (url) => {
    if (!url) return;
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  const handleOpenLink = (url) => {
    if (!url) return;
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    <div id="project" className="bg-transparent w-full text-white pt-10 md:pt-20 pb-24 px-6 md:px-16">

      {/* Top Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start w-full z-10 gap-8 md:gap-12 mb-16 md:mb-24">

        {/* Left Giant Title */}
        <div className="w-full md:w-3/5 overflow-visible">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white drop-shadow-[0_0_18px_rgba(255,255,255,0.35)] leading-[0.9] uppercase flex items-center gap-3 whitespace-nowrap">
            Selected
            <span className="font-light italic text-white/90 lowercase font-serif pr-4 pt-2 md:pt-4">work</span>
          </h2>
        </div>

        {/* Right Description */}
        <div className="w-full md:w-2/5 flex flex-col items-start md:mt-2">
          <p className="text-slate-200 text-sm md:text-base font-light leading-relaxed mb-6">
            As an AI-ML engineer and software developer, creating modern, intelligent systems and scalable digital experiences.
          </p>
          <button onClick={onCtaClick} className="cursor-pointer px-6 py-2.5 rounded-full border border-white/15 bg-white text-black font-medium text-xs md:text-sm hover:bg-gray-200 hover:border-gray-200 transition-colors flex items-center gap-2">
            Read More
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </button>
        </div>
      </div>

      {/* Projects List - Alternating Layout */}
      <div className="flex flex-col gap-24 md:gap-32 lg:gap-36 w-full">
        {projects.map((proj, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div key={proj.name} className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center justify-between gap-10 md:gap-12 lg:gap-16 w-full group`}>

              {/* Image Side */}
              <div className="w-full md:w-1/2 overflow-hidden relative aspect-[16/10] bg-[#111] rounded-2xl border border-white/10 shadow-2xl">
                <img
                  src={proj.image}
                  alt={proj.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
              </div>

              {/* Text Side */}
              <div className="w-full md:w-1/2 flex flex-col items-start rounded-2xl border border-white/10 bg-black/30 backdrop-blur-[2px] p-4 md:p-6 shadow-[0_15px_40px_rgba(0,0,0,0.35)]">
                <span className="text-[#ccff00] text-xs md:text-sm font-bold tracking-widest uppercase mb-3 md:mb-4">
                  0{idx + 1}
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-black tracking-tighter text-white leading-[1.1] uppercase mb-4 md:mb-6 drop-shadow-[0_0_12px_rgba(255,255,255,0.2)]">
                  {proj.title}
                </h3>
                <p className="text-white/90 text-sm md:text-base font-light leading-relaxed mb-6 md:mb-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
                  {proj.description}
                </p>

                <div className="flex items-center gap-4 flex-wrap">
                  <button
                    onClick={() => handleOpenLink(proj.githubUrl)}
                    className="cursor-pointer px-6 py-2.5 rounded-full border border-white/15 bg-white text-black text-xs md:text-sm font-medium hover:bg-gray-200 hover:border-gray-200 transition-colors inline-flex items-center gap-2 shadow-[0_0_12px_rgba(255,255,255,0.2)]"
                  >
                    GitHub
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </button>
                  {proj.liveUrl && (
                    <button
                      onClick={() => handleOpenLink(proj.liveUrl)}
                      className="cursor-pointer px-6 py-2.5 rounded-full border border-white/40 bg-white/5 text-white text-xs md:text-sm font-medium hover:bg-white hover:text-black transition-colors inline-flex items-center gap-2 shadow-[0_0_12px_rgba(255,255,255,0.08)]"
                    >
                      Live
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 3h7v7m0 0L10 14" />
                      </svg>
                    </button>
                  )}
                  <button onClick={onCtaClick} className="cursor-pointer px-6 py-2.5 rounded-full border border-white/40 bg-white/5 text-white text-xs md:text-sm font-medium hover:bg-white hover:text-black transition-colors inline-flex items-center gap-2 shadow-[0_0_12px_rgba(255,255,255,0.08)]">
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </button>
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};

export default Project;
