import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Hero = () => {
    useScrollReveal();

    return (
        <section className="relative h-screen min-h-[800px] w-full flex items-center overflow-hidden bg-background-accent">
            {/* Background Image Container */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/reflect-store.jpg"
                    alt="Reflect Clothing Store Interior"
                    className="w-full h-full object-cover"
                />
                {/* Editorial Overlay */}
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60"></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 w-full px-6 md:px-12 lg:px-24">
                <div className="max-w-[1800px] mx-auto grid grid-cols-12 gap-6 items-center">

                    <div className="col-span-12 lg:col-span-7 reveal">
                        <div className="mb-6 flex items-center gap-4">
                            <span className="text-[10px] font-bold tracking-[0.4em] text-white/70 uppercase">Flagship Store Concept</span>
                            <div className="w-12 h-[1px] bg-white/30 text-white/30 uppercase tracking-[0.4em] text-[10px]">Since 2024</div>
                        </div>

                        <h1 className="text-[12vw] lg:text-[10vw] font-editorial text-white leading-[0.8] tracking-tighter mb-8 drop-shadow-2xl">
                            unveil<br />
                            <span className="italic pl-[0.5em] opacity-90">confidence</span>
                        </h1>

                        <div className="flex items-start gap-12 mt-12">
                            <div className="hidden md:block w-px h-24 bg-gradient-to-b from-white/50 to-transparent"></div>
                            <div>
                                <p className="text-lg md:text-xl text-white/90 font-light max-w-sm mb-12 leading-relaxed drop-shadow-md">
                                    A unique space where minimalist architecture meets premium fashion. Step into the identity of modern style.
                                </p>
                                <div className="flex items-center gap-8">
                                    <button className="px-12 py-5 bg-white text-black font-bold border border-white hover:bg-transparent hover:text-white transition-all duration-500 uppercase text-[10px] tracking-[0.3em]">
                                        The Collection
                                    </button>
                                    <a href="#store" className="text-white text-[10px] font-bold uppercase tracking-[0.3em] border-b border-white pb-1 group flex items-center gap-2">
                                        Our Story
                                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Decorative floating element */}
                    <div className="hidden lg:block col-span-5 relative reveal lg:ml-auto lg:translate-x-12" style={{ transitionDelay: '0.2s' }}>
                        <div className="border border-white/20 p-2 transform rotate-3 hover:rotate-0 transition-transform duration-1000 max-w-sm ml-auto">
                            <div className="relative aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl">
                                <img src="/store-interior-2.jpg" alt="Interior Details" className="w-[120%] h-[120%] object-cover absolute -top-10 -left-10" />
                                <div className="absolute inset-0 border-[20px] border-white/10 m-4"></div>
                            </div>
                        </div>
                        <div className="absolute -bottom-8 -right-8 bg-white/95 backdrop-blur px-8 py-6 shadow-2xl">
                            <p className="text-primary font-editorial text-2xl tracking-tighter leading-none">Modern<br />Minimalism</p>
                            <div className="w-8 h-[2px] bg-primary mt-4"></div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Decorative vertical running text or details */}
            <div className="absolute right-12 bottom-12 hidden md:flex flex-col items-center gap-6 z-20">
                <div className="w-[1px] h-32 bg-gradient-to-b from-transparent to-white/50"></div>
                <div className="rotate-90 text-[10px] uppercase tracking-[0.5em] text-white/50 origin-left whitespace-nowrap">
                    Scroll to explore
                </div>
            </div>

            <div className="absolute left-12 bottom-12 hidden md:block z-20">
                <div className="text-[10px] uppercase tracking-[0.5em] text-white/50 mb-4">
                    Location
                </div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/80">
                    Bengaluru, India
                </p>
            </div>
        </section>
    );
};

export default Hero;
