import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const About = () => {
    useScrollReveal();

    return (
        <section id="about" className="py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">

                    {/* Left Column: Image with Overlapping Identity Frame */}
                    <div className="relative reveal">
                        <div className="aspect-[4/5] bg-background-accent relative overflow-hidden">
                            <img
                                src="/about-store.jpg"
                                alt="Reflect Store Interior"
                                className="w-full h-full object-cover grayscale contrast-125"
                            />

                            {/* Overlapping Identity Frame - Positioned in the absolute corner and reduced size */}
                            <div className="absolute top-0 right-0 w-1/2 aspect-square hidden lg:block shadow-2xl relative overflow-hidden group z-20">
                                <img
                                    src="/about-overlap.jpg"
                                    alt="Reflect Identity"
                                    className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-black/40 p-8 flex flex-col justify-end">
                                    <p className="text-2xl font-editorial tracking-tighter italic text-white mb-2 line-clamp-2 leading-tight">"True style is a reflection of identity."</p>
                                    <div className="w-8 h-[2px] bg-white"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Text Content */}
                    <div className="reveal relative lg:mt-12" style={{ transitionDelay: '0.2s' }}>
                        <span className="text-[10px] font-bold tracking-[0.5em] text-primary/40 uppercase mb-6 block">Our Identity</span>
                        <h2 className="text-6xl font-editorial text-primary mb-12 tracking-tighter leading-none italic relative z-10">
                            Redefining the <br /> Modern Man
                        </h2>

                        <div className="space-y-8 text-lg font-light leading-relaxed text-primary/70">
                            <p>
                                At Reflect Clothing, we believe fashion is more than just fabric. It is the visual language of confidence and the silent narrative of who you are.
                            </p>
                            <div className="pl-8 border-l-2 border-primary/10 py-4 space-y-6">
                                <div>
                                    <h4 className="text-sm font-bold tracking-widest uppercase text-primary mb-2">Premium Quality</h4>
                                    <p className="text-sm">Finest fabrics sourced from around the globe.</p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold tracking-widest uppercase text-primary mb-2">Modern Style</h4>
                                    <p className="text-sm">Minimalist aesthetic meet contemporary silhouettes.</p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold tracking-widest uppercase text-primary mb-2">Comfortable Fit</h4>
                                    <p className="text-sm">Designed for daily confidence and movement.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
