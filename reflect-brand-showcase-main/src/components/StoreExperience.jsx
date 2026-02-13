import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const StoreExperience = () => {
    useScrollReveal();

    return (
        <section id="store" className="py-32 bg-background-secondary overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-24 items-center">
                    <div className="lg:w-1/2 order-2 lg:order-1 reveal">
                        <span className="text-[10px] font-bold tracking-[0.5em] text-primary/40 uppercase mb-6 block font-sans">Flagship Store</span>
                        <h2 className="text-6xl font-editorial font-bold text-primary mb-12 tracking-tighter italic leading-[0.9]">
                            Reflected <br /> Space
                        </h2>
                        <p className="text-lg text-primary/70 mb-12 leading-relaxed font-light italic">
                            Step into a world where minimalist architecture meets refined hospitality. Our space is more than a store—it's a sanctuary for the modern man to explore his identity through style.
                        </p>

                        <div className="grid grid-cols-2 gap-8 mb-12">
                            <div className="relative group overflow-hidden aspect-[4/5] reveal" style={{ transitionDelay: '0.1s' }}>
                                <img
                                    src="/store-interior-2.jpg"
                                    alt="Reflect Store Interior"
                                    className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                                />
                            </div>
                            <div className="relative group overflow-hidden aspect-[4/5] mt-12 reveal" style={{ transitionDelay: '0.3s' }}>
                                <img
                                    src="/store-interior-3.jpg"
                                    alt="Reflect Store Details"
                                    className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                                />
                            </div>
                        </div>

                        <button className="px-12 py-5 bg-primary text-white text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-primary/90 smooth-transition shadow-2xl">
                            Tailoring Console
                        </button>
                    </div>

                    <div className="lg:w-1/2 order-1 lg:order-2 reveal" style={{ transitionDelay: '0.4s' }}>
                        <div className="relative group overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] skew-y-1 hover:skew-y-0 transition-transform duration-1000">
                            <img
                                src="/store-interior-1.jpg"
                                alt="Reflect Store Interior Main"
                                className="w-full aspect-[2/3] md:aspect-auto md:h-[800px] object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 border-[30px] border-white/5 m-8 pointer-events-none"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StoreExperience;
