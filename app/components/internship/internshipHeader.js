"use client";
import React from "react";

const InternshipHeader = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-secondary overflow-hidden">
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          
          {/* Left Section: Content */}
          <div className="flex-1 text-center pt-16 pl-20 lg:text-left">

            {/* Enhanced Heading */}
            <div className="heading-container mb-8 md:mb-10">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight">
                Kickstart Your Career with Our{" "}
                <span className="text-primary">
                  Internship Program
                </span>
              </h1>
              
              {/* Decorative underline */}
              <div className="w-20 md:w-28 lg:w-32 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full mt-6 mx-auto lg:mx-0"></div>
            </div>

            {/* Enhanced Paragraph - INCREASED WIDTH */}
            <div className="paragraph-container mb-8 md:mb-10 max-w-3xl mx-auto lg:mx-0">
              <div className="relative">
                <div className="absolute -left-3 md:-left-4 top-0 w-1 h-full bg-gradient-to-b from-secondary to-transparent rounded-full hidden lg:block"></div>
                <p className="text-base sm:text-lg md:text-xl text-primary/90 leading-relaxed lg:pl-8 font-light">
                  Are you ready to gain real-world experience in <span className="text-primary font-medium">AI and technology</span>?
                  Join our internship program at Codework, where you'll learn, grow,
                  and contribute to <span className="text-primary font-medium">exciting projects</span>. Apply now and take the first
                  step toward your future!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Enhanced Bottom Decoration */}
      <div className="absolute bottom-0 right-0 opacity-20">
        <div className="w-32 h-16 md:w-64 md:h-32 bg-gradient-to-l from-secondary/30 to-transparent rounded-tl-full"></div>
      </div>
    </section>
  );
};

export default InternshipHeader;
