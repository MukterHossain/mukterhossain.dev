'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import loaderStyle from './hero.module.css'

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);

  // Dynamic role rotation
  const roles = [
    'Full Stack Developer',
    'UI/UX Designer',
    'Problem Solver',
    'Tech Enthusiast'
  ];

  useEffect(() => {
    setIsLoaded(true);
    
    // Rotate roles every 3 seconds
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

  // Scroll to projects section
//   const scrollToProjects = () => {
//     const projectsSection = document.getElementById('projects');
//     if (projectsSection) {
//       projectsSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className={`space-y-8 text-center lg:text-left transform transition-all duration-1000 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            
            {/* Greeting */}
            <div className="space-y-2">
              <p className="text-lg text-gray-600 font-medium">
                👋 Hello, I'm
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  MD MUKTER HOSSAIN
                </span>
              </h1>
            </div>

            {/* Dynamic Role */}
            <div className="h-16 flex items-center justify-center lg:justify-start">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700">
                I'm a{' '}
                <span className="relative">
                  <span 
                    key={currentRole}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse"
                  >
                    {roles[currentRole]}
                  </span>
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse"></span>
                </span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
              I craft exceptional digital experiences through clean code and innovative design. 
              Passionate about turning ideas into reality with modern web technologies and 
              user-centered solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/projects"
                // onClick={scrollToProjects}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-blue-500/25"
              >
                View My Work
              </Link>
              
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-blue-500 hover:text-blue-600 hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-center"
              >
                Get In Touch
              </Link>
            </div>
            {/* Round shape */}
            <div className={loaderStyle.loader}>

            </div>

            {/* Stats */}
            <div className="flex justify-center lg:justify-start space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">3+</div>
                <div className="text-sm text-gray-600">Years Exp</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Photo */}
          <div className={`relative transform transition-all duration-1000 delay-300 ${
            isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            
            {/* Background Decorations */}
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
            
            {/* Main Photo Container */}
            <div className="relative z-10 mx-auto w-80 h-80 lg:w-96 lg:h-96">
              
              {/* Photo Frame */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                
                {/* Replace with your actual photo */}
                <Image
                  src="https://i.ibb.co.com/3zj13YK/Mukter-Hossain1.jpg"
                  alt="John Doe - Portfolio Photo"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 320px, 384px"
                />
                
                {/* Photo Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center animate-bounce">
                <span className="text-2xl">💻</span>
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center animate-bounce animation-delay-1000">
                <span className="text-2xl">🚀</span>
              </div>

              <div className="absolute top-1/2 -right-8 w-8 h-8 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="absolute top-1/4 -left-8 w-6 h-6 bg-purple-500 rounded-full animate-pulse animation-delay-1000"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-600 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default Hero;