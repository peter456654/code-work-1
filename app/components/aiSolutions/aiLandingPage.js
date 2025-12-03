"use client";
import React from "react";
import Link from "next/link";

const AiLandingPage = () => {
  return (
    <section className="relative w-full h-auto sm:h-[80vh] md:h-screen flex items-center bg-primary overflow-hidden">
      {/* Background Container with enhanced overlay */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Enhanced overlay with brand colors - made darker */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/95"></div>
      </div>

      {/* Background Decorative Elements */}
      {/* <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-secondary/20 rounded-full animate-blob"></div>
        <div className="absolute top-60 right-32 w-32 h-32 bg-secondary/15 rounded-full animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-40 left-1/3 w-48 h-48 bg-secondary/25 rounded-full animate-blob animation-delay-4000"></div>
      </div> */}

      {/* Floating Elements */}
      {/* <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-16 w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
        <div className="absolute top-48 right-20 w-2 h-2 bg-white/60 rounded-full animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-56 left-1/4 w-4 h-4 bg-secondary/80 rounded-full animate-pulse animation-delay-2000"></div>
        <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-white/40 rounded-full animate-pulse animation-delay-3000"></div>
      </div> */}

      {/* Simplified Content Container */}
      <div className="relative z-10 w-[80%] mx-auto px-4 pt-16 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-28 text-left">
        
        {/* Section Badge */}
        <div>
          <span className="text-secondary text-base sm:text-lg font-medium">— AI Innovation —</span>
        </div>

        {/* Enhanced Heading Container */}
        <div className="heading-container mb-8 sm:mb-10 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight text-white">
            <span className="text-white">Empowering </span>
            <span className="bg-gradient-to-r from-secondary via-cyan-400 to-secondary bg-clip-text text-transparent">
              Innovation
            </span>
            <br />
            <span className="text-white">with </span>
            <span className="text-secondary">AI Technology</span>
            
            {/* Decorative underline */}
            <div className="w-32 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full mt-6"></div>
          </h1>
        </div>

        {/* Simplified Paragraph Container */}
        <div className="paragraph-container">
          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-secondary to-transparent rounded-full"></div>
            <p className="text-lg sm:text-xl md:text-xl lg:text-xl xl:text-2xl leading-relaxed text-white/90 font-light max-w-5xl">
              We deliver <span className="text-secondary font-medium">intelligent solutions</span> powered by AI and advanced technologies. 
              Our expertise helps businesses <span className="text-secondary font-medium">innovate and grow</span> in the digital landscape.
            </p>
          </div>
          {/* Left-aligned CTA */}
          <div className="mt-6 flex justify-start">
            <Link href="/our-company-case-studies">
              <button
                type="button"
                className="flex justify-center gap-3 sm:gap-4 items-center shadow-xl text-sm bg-transparent backdrop-blur-md font-medium isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-secondary hover:text-primary before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 sm:px-5 md:px-6 lg:px-7 py-2 sm:py-2.5 md:py-3 overflow-hidden border-2 rounded-full group text-white text-xs sm:text-sm md:text-base"
              >
                View Case Studies
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-white group-hover:border-none p-0.5 sm:p-1 rotate-45"
                  viewBox="0 0 16 19"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                    className="fill-white group-hover:fill-primary"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>

      

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default AiLandingPage;
