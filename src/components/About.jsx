import React, { useEffect, useRef } from 'react';
import aboutImage from '../assets/about_section/temp5.jpeg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const frontendSkills = ["React.js", "JavaScript", "Node.js", "FastAPI", "Tailwind CSS", "HTML5", "CSS3"];
const backendSkills = ["Python", "C++", "PostgreSQL", "MongoDB", "Redis", "REST APIs", "Docker", "GitHub"];
const aiSkills = ["YOLO", "OpenCV", "PyTorch", "EasyOCR", "XLM-RoBERTa", "CLIP", "Prompt Engineering"];
const toolsSkills = ["Git", "VS Code", "Postman", "CI/CD", "CesiumJS", "GeoTIFF", "Open-Meteo", "Scikit-learn"];

const aboutWords = [
  { text: "Hey," }, { text: "I'm" },
  { text: "Atharva", className: "font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400" },
  { text: "Nimbalkar.", className: "font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400" },
  { text: "An" }, { text: "aspiring" }, { text: "software" }, { text: "developer" }, { text: "and" }, { text: "AI/ML" }, { text: "engineer" }, { text: "passionate" }, { text: "about" }, { text: "building" }, { text: "real-world" }, { text: "systems" }, { text: "that" }, { text: "solve" }, { text: "industrial" }, { text: "and" }, { text: "research" }, { text: "problems." },
  { text: "My" }, { text: "work" }, { text: "spans" }, { text: "computer" }, { text: "vision," }, { text: "deep" }, { text: "learning," }, { text: "and" }, { text: "full-stack" }, { text: "product" }, { text: "development" }, { text: "using" },
  { text: "Python,", className: "text-white font-medium" },
  { text: "PyTorch,", className: "text-white font-medium" },
  { text: "TensorFlow,", className: "text-white font-medium" },
  { text: "YOLOv8,", className: "text-white font-medium" },
  { text: "and" }, { text: "CNNs" }, { text: "on" }, { text: "the" }, { text: "ML" }, { text: "side," }, { text: "and" },
  { text: "React,", className: "text-white font-medium" },
  { text: "Node.js,", className: "text-white font-medium" },
  { text: "Express,", className: "text-white font-medium" },
  { text: "MongoDB,", className: "text-white font-medium" },
  { text: "PostgreSQL,", className: "text-white font-medium" },
  { text: "and" },
  { text: "FastAPI", className: "text-white font-medium" },
  { text: "on" }, { text: "the" }, { text: "backend." },
  { text: "I've" }, { text: "built" }, { text: "systems" }, { text: "spanning" }, { text: "plant" }, { text: "phenotyping" }, { text: "CV" }, { text: "pipelines," }, { text: "multimodal" }, { text: "content" }, { text: "moderation," }, { text: "and" }, { text: "3D" }, { text: "solar" }, { text: "modeling" }, { text: "platforms." },
  { text: "I" }, { text: "interned" }, { text: "at" }, { text: "Cummins" }, { text: "India" }, { text: "Ltd.," }, { text: "working" }, { text: "on" }, { text: "Industry" }, { text: "4.0" }, { text: "monitoring" }, { text: "systems" }, { text: "and" }, { text: "SCADA" }, { text: "architecture" }, { text: "—" }, { text: "blending" }, { text: "software" }, { text: "engineering" }, { text: "with" }, { text: "practical," }, { text: "measurable" }, { text: "impact." }
];

const About = () => {
  const textRef = useRef(null);
  const introMobileRef = useRef(null);
  const introDesktopRef = useRef(null);

  useEffect(() => {
    const headings = [introMobileRef.current, introDesktopRef.current];
    
    headings.forEach((heading) => {
      if (heading) {
        gsap.fromTo(
          heading,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: heading,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });

    if (textRef.current) {
      const words = textRef.current.querySelectorAll('.word');
      gsap.fromTo(
        words,
        { color: '#52525b', opacity: 0.2 },
        {
          color: '#ffffff',
          opacity: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 85%',
            end: 'bottom 50%',
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <section id="about" className="min-h-screen bg-transparent text-white pt-24 pb-0 px-6 md:px-16 flex flex-col justify-between relative overflow-hidden">


      <div className="max-w-7xl mx-auto w-full z-10">

        {/* Mobile Intro Text (Visible only on mobile/tablet) */}
        <h2 ref={introMobileRef} className="lg:hidden text-center text-[18vw] md:text-[8rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-800 drop-shadow-2xl leading-none mb-10 md:mb-16">
          Intro
        </h2>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center">

          {/* Left Column - Image */}
          <div className="flex justify-center lg:justify-start pl-0 lg:pl-20">
            <div className="w-56 md:w-80 lg:w-96 rounded-2xl overflow-hidden p-4 bg-gradient-to-br from-black/60 via-purple-900/20 to-black shadow-2xl">
              <img
                src={aboutImage}
                alt="About"
                className="w-full h-full object-cover block"
              />
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="flex flex-col justify-center space-y-8 z-10 w-full px-4 md:px-0">
            {/* Desktop Intro Text (Visible only on desktop) */}
            <h2 ref={introDesktopRef} className="hidden lg:block text-[11rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-800 drop-shadow-2xl leading-none">
              Intro
            </h2>
            <div className="relative bg-white/5 backdrop-blur-md p-6 md:p-10 rounded-3xl border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-white/[0.07] transition-colors duration-300 text-center lg:text-left">
              <p ref={textRef} className="text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed font-light">
                {aboutWords.map((wordObj, index) => (
                  <React.Fragment key={index}>
                    <span className={`word ${wordObj.className || ''}`}>
                      {wordObj.text}
                    </span>
                    {index < aboutWords.length - 1 && " "}
                  </React.Fragment>
                ))}
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Scrolling Skills Marquee */}
      <div className="flex flex-col border-t border-b border-white/5 bg-black/40 backdrop-blur-sm py-4 mt-auto -mx-6 md:-mx-16">
        {/* First Row */}
        <div className="flex overflow-hidden whitespace-nowrap mb-2">
          <div className="flex animate-marquee w-max">
            {[...frontendSkills, ...frontendSkills, ...frontendSkills, ...frontendSkills].map((item, i) => (
              <div key={`front-${i}`} className="flex items-center">
                <span className="text-gray-400 font-medium tracking-widest px-4 md:px-8 text-sm md:text-lg">{item}</span>
                <span className="text-gray-700 font-bold px-2 md:px-4">.</span>
              </div>
            ))}
          </div>
        </div>
        {/* Second Row */}
        <div className="flex overflow-hidden whitespace-nowrap">
          <div className="flex animate-marquee-reverse w-max">
            {[...backendSkills, ...backendSkills, ...backendSkills, ...backendSkills].map((item, i) => (
              <div key={`back-${i}`} className="flex items-center">
                <span className="text-gray-400 font-medium tracking-widest px-4 md:px-8 text-sm md:text-lg">{item}</span>
                <span className="text-gray-700 font-bold px-2 md:px-4">.</span>
              </div>
            ))}
          </div>
        </div>
        {/* Third Row */}
        <div className="flex overflow-hidden whitespace-nowrap mt-2">
          <div className="flex animate-marquee w-max">
            {[...aiSkills, ...aiSkills, ...aiSkills, ...aiSkills].map((item, i) => (
              <div key={`ai-${i}`} className="flex items-center">
                <span className="text-gray-400 font-medium tracking-widest px-4 md:px-8 text-sm md:text-lg">{item}</span>
                <span className="text-gray-700 font-bold px-2 md:px-4">.</span>
              </div>
            ))}
          </div>
        </div>
        {/* Fourth Row */}
        <div className="flex overflow-hidden whitespace-nowrap mt-2">
          <div className="flex animate-marquee-reverse w-max">
            {[...toolsSkills, ...toolsSkills, ...toolsSkills, ...toolsSkills].map((item, i) => (
              <div key={`tools-${i}`} className="flex items-center">
                <span className="text-gray-400 font-medium tracking-widest px-4 md:px-8 text-sm md:text-lg">{item}</span>
                <span className="text-gray-700 font-bold px-2 md:px-4">.</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default About;
