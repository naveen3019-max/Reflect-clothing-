import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const CollectionLookbook = () => {
    useScrollReveal();

    return (
        <section className="py-32 bg-background-secondary overflow-hidden">
            <div className="max-w-[1700px] mx-auto px-6">
                <div className="grid grid-cols-12 gap-6 items-center">

                    {/* Left side running text/detail */}
                    <div className="hidden lg:col-span-1 lg:flex flex-col items-center justify-center space-y-24 reveal">
                        <div className="rotate-90 origin-center text-[10px] font-bold tracking-[0.8em] text-primary/20 uppercase whitespace-nowrap">
                            Premium Identity
                        </div>
                        <div className="w-px h-32 bg-primary/10"></div>
                    </div>

                    {/* Main editorial composition */}
                    <div className="col-span-12 lg:col-span-11 grid grid-cols-12 gap-6 relative">

                        {/* Large Background Text */}
                        <div className="absolute -top-12 -left-24 text-[15vw] font-editorial text-primary/5 select-none pointer-events-none tracking-tighter italic">
                            Lookbook
                        </div>

                        {/* Image Layer 1 */}
                        <div className="col-span-12 lg:col-span-6 reveal z-10" style={{ transitionDelay: '0.1s' }}>
                            <div className="relative aspect-[4/5] overflow-hidden shadow-2xl skew-y-1 hover:skew-y-0 transition-transform duration-1000">
                                <img src="/store-interior-1.jpg" alt="Lookbook Front" className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-1000" />
                                <div className="absolute bottom-12 right-12 bg-white/95 p-12 max-w-sm hidden md:block">
                                    <h4 className="text-4xl font-editorial tracking-tighter mb-4 italic">The Reflection</h4>
                                    <p className="text-sm text-primary-light leading-relaxed font-light italic">
                                        Each garment is a mirror to your ambition. Our flagship space is designed to empower the modern professional.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Image Layer 2 (Overlapping) */}
                        <div className="col-span-12 lg:col-span-5 lg:-ml-24 mt-12 lg:mt-48 reveal z-20" style={{ transitionDelay: '0.3s' }}>
                            <div className="relative aspect-square overflow-hidden shadow-2xl border-[15px] border-white group">
                                <img src="/store-interior-3.jpg" alt="Details" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40">
                                    <span className="text-white text-[10px] font-bold tracking-[0.4em] uppercase border border-white px-8 py-3">View Details</span>
                                </div>
                            </div>
                            <div className="mt-8 pl-12 border-l border-primary/20">
                                <h3 className="text-[10vw] lg:text-[7vw] font-editorial tracking-tighter leading-none text-primary opacity-90 -mt-12 lg:-mt-20">
                                    Vibe <span className="italic">01</span>
                                </h3>
                                <p className="text-xs uppercase tracking-[0.4em] text-primary/40 mt-6 font-bold">Reflected Excellence</p>
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="col-span-12 lg:col-span-4 lg:absolute lg:right-0 lg:top-0 h-full flex flex-col justify-center reveal" style={{ transitionDelay: '0.5s' }}>
                            <div className="lg:max-w-xs space-y-8 mt-12 lg:mt-0">
                                <div className="bg-primary h-[2px] w-16"></div>
                                <p className="text-primary/70 font-light leading-relaxed">
                                    Style is not about being noticed, it's about being remembered. Our V2 collection focuses on high-contrast textures and tailored silhouettes.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center border-b border-primary/10 pb-4">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-primary/40">Quality</span>
                                        <span className="text-xs font-serif italic text-primary">Handpicked Fabrics</span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-primary/10 pb-4">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-primary/40">Design</span>
                                        <span className="text-xs font-serif italic text-primary">Minimal Geometry</span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-primary/10 pb-4">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-primary/40">Fit</span>
                                        <span className="text-xs font-serif italic text-primary">Signature Cut</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default CollectionLookbook;
