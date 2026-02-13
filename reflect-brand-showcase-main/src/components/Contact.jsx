import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Contact = () => {
    useScrollReveal();

    return (
        <section id="contact" className="py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-12 gap-20">

                    <div className="lg:col-span-12 text-center mb-12 reveal">
                        <span className="text-[10px] font-bold tracking-[0.6em] text-primary/40 uppercase mb-6 block">Get in Touch</span>
                        <h2 className="text-7xl md:text-8xl font-editorial text-primary tracking-tighter leading-none italic uppercase">
                            Connect <span className="text-outline italic">With Us</span>
                        </h2>
                    </div>

                    {/* Left: Contact Info */}
                    <div className="lg:col-span-5 reveal" style={{ transitionDelay: '0.2s' }}>
                        <div className="space-y-16">
                            <div className="group">
                                <h3 className="text-[10px] font-bold tracking-[0.4em] text-primary mb-6 uppercase border-b border-primary/10 pb-2 inline-block">Visit Flagship</h3>
                                <p className="text-2xl font-editorial tracking-tight text-primary leading-tight lowercase">
                                    No. 12, Reflect Avenue,<br /> Indiranagar, Bengaluru,<br /> Karnataka 560038
                                </p>
                            </div>

                            <div className="group">
                                <h3 className="text-[10px] font-bold tracking-[0.4em] text-primary mb-6 uppercase border-b border-primary/10 pb-2 inline-block">Consultation</h3>
                                <div className="space-y-2">
                                    <p className="text-2xl font-editorial tracking-tight text-primary lowercase hover:pl-4 transition-all duration-500">
                                        concierge@reflect.com
                                    </p>
                                    <p className="text-2xl font-editorial tracking-tight text-primary lowercase hover:pl-4 transition-all duration-500">
                                        +91 98765 43210
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-primary/10">
                                <div>
                                    <span className="text-[8px] font-bold uppercase tracking-widest text-primary/40 block mb-2">Hours</span>
                                    <p className="text-xs font-light italic">Mon - Sun: 11AM - 9PM</p>
                                </div>
                                <div>
                                    <span className="text-[8px] font-bold uppercase tracking-widest text-primary/40 block mb-2">Social</span>
                                    <div className="flex gap-4">
                                        <span className="text-[10px] border-b border-primary/20 pb-1 cursor-pointer hover:text-primary-light">Instagram</span>
                                        <span className="text-[10px] border-b border-primary/20 pb-1 cursor-pointer hover:text-primary-light">Twitter</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Modern Form */}
                    <div className="lg:col-span-7 reveal" style={{ transitionDelay: '0.4s' }}>
                        <form className="space-y-12">
                            <div className="grid md:grid-cols-2 gap-12">
                                <div className="relative">
                                    <input
                                        type="text"
                                        className="w-full bg-transparent border-b border-primary/10 py-4 focus:outline-none focus:border-primary transition-colors text-sm font-light italic placeholder:text-primary/20"
                                        placeholder="your name *"
                                    />
                                </div>
                                <div className="relative">
                                    <input
                                        type="email"
                                        className="w-full bg-transparent border-b border-primary/10 py-4 focus:outline-none focus:border-primary transition-colors text-sm font-light italic placeholder:text-primary/20"
                                        placeholder="email address *"
                                    />
                                </div>
                            </div>
                            <div className="relative">
                                <select className="w-full bg-transparent border-b border-primary/10 py-4 focus:outline-none focus:border-primary transition-colors text-sm font-light italic text-primary/40 appearance-none">
                                    <option>General Inquiry</option>
                                    <option>Bespoke Consultation</option>
                                    <option>Feedback</option>
                                </select>
                                <div className="absolute right-0 bottom-4 pointer-events-none text-[10px]">↓</div>
                            </div>
                            <div className="relative">
                                <textarea
                                    className="w-full bg-transparent border-b border-primary/10 py-4 h-32 focus:outline-none focus:border-primary transition-colors text-sm font-light italic placeholder:text-primary/20 resize-none"
                                    placeholder="tell us your thoughts *"
                                ></textarea>
                            </div>
                            <button className="w-full bg-primary text-white py-6 text-[10px] font-bold uppercase tracking-[0.5em] hover:bg-black transition-all duration-500 shadow-2xl skew-x-1 hover:skew-x-0">
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
