import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-accent/20 pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">

                    {/* Brand Info */}
                    <div className="lg:col-span-4 space-y-8">
                        <span className="text-4xl font-editorial tracking-tighter text-primary">reflect</span>
                        <p className="text-sm font-light leading-relaxed text-primary/60 max-w-sm italic">
                            The ultimate destination for the modern man. We redefine confidence through minimalist architecture and premium craftsmanship.
                        </p>
                        <div className="flex space-x-6">
                            {[Instagram, Twitter, Facebook, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="text-primary/40 hover:text-primary transition-all duration-300 transform hover:-translate-y-1">
                                    <Icon size={18} strokeWidth={1.5} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2 space-y-8">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Navigation</h4>
                        <ul className="space-y-4">
                            {['Shop All', 'Categories', 'Journal', 'Lookbook'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-xs font-light text-primary/60 hover:text-primary transition-colors flex items-center group italic">
                                        <span className="w-0 group-hover:w-4 h-px bg-primary mr-0 group-hover:mr-2 transition-all"></span>
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-2 space-y-8">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Support</h4>
                        <ul className="space-y-4">
                            {['Shipping', 'Size Guide', 'Store Locator', 'Contact'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-xs font-light text-primary/60 hover:text-primary transition-colors italic">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="lg:col-span-4 space-y-8">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">The Circular</h4>
                        <p className="text-xs font-light text-primary/60 italic">Join our curation for early access and seasonal inspirations.</p>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full bg-transparent border-b border-primary/20 py-4 focus:outline-none focus:border-primary transition-colors text-sm font-light italic"
                            />
                            <button className="absolute right-0 bottom-4 text-primary/40 hover:text-primary transition-colors">
                                <Send size={16} strokeWidth={1} />
                            </button>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-accent/20 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-[10px] font-bold uppercase tracking-[0.3em] text-primary/30">
                    <p>&copy; {new Date().getFullYear()} Reflect Clothing. All Rights Reserved.</p>
                    <div className="flex space-x-8">
                        <a href="#" className="hover:text-primary">Privacy Policy</a>
                        <a href="#" className="hover:text-primary">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
