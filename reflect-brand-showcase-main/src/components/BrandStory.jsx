import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const BrandStory = () => {
    useScrollReveal();

    return (
        <section className="py-32 bg-primary text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    <div className="reveal">
                        <span className="text-[10px] font-bold tracking-[0.5em] text-white/40 uppercase mb-8 block">The Narrative</span>
                        <h2 className="text-6xl md:text-8xl font-editorial tracking-tighter leading-[0.85] mb-12 italic">
                            A Legacy of <br /> <span className="text-outline border-white/20">Excellence</span>
                        </h2>
                        <div className="flex gap-16">
                            <div>
                                <p className="text-4xl font-editorial italic mb-2">12+</p>
                                <p className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold">Years of Craft</p>
                            </div>
                            <div>
                                <p className="text-4xl font-editorial italic mb-2">50k</p>
                                <p className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold">Global Clients</p>
                            </div>
                            <div>
                                <p className="text-4xl font-editorial italic mb-2">100%</p>
                                <p className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold">Premium Quality</p>
                            </div>
                        </div>
                    </div>

                    <div className="reveal" style={{ transitionDelay: '0.2s' }}>
                        <div className="max-w-lg space-y-8 font-light leading-relaxed text-white/70 italic text-xl border-l border-white/10 pl-12">
                            <p>
                                Established with a vision to revolutionize men's fashion, Reflect Clothing has grown from a bespoke tailoring workshop into a global brand synonymous with confidence.
                            </p>
                            <p>
                                Our journey is defined by a relentless pursuit of perfection, using only the world's most luxurious fabrics to create pieces that stand the test of time and trend.
                            </p>
                            <div className="pt-8">
                                <button className="text-[10px] font-bold uppercase tracking-[0.6em] border-b border-white/20 pb-2 hover:border-white transition-all duration-500">
                                    Our Mission →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandStory;
