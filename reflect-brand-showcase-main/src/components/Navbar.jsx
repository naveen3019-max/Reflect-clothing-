import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Search, User } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Shop', href: '#categories' },
        { name: 'New Arrivals', href: '#new-arrivals' },
        { name: 'Journal', href: '#' },
    ];

    const rightLinks = [
        { name: 'About', href: '#about' },
        { name: 'Store', href: '#store' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-700 ${isScrolled ? 'bg-white/95 backdrop-blur-xl py-3 shadow-[0_1px_0_0_rgba(0,0,0,0.05)]' : 'bg-transparent py-8'}`}>
            <div className="max-w-[1800px] mx-auto px-6 md:px-12">
                <div className="flex justify-between items-center relative">

                    {/* Left Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-12 flex-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`text-[10px] font-bold tracking-[0.3em] uppercase transition-all duration-500 relative group ${isScrolled ? 'text-primary' : 'text-white'}`}
                            >
                                {link.name}
                                <span className={`absolute -bottom-1 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${isScrolled ? 'bg-primary' : 'bg-white'}`}></span>
                            </a>
                        ))}
                    </div>

                    {/* Centered Logo */}
                    <div className="flex-shrink-0 lg:absolute lg:left-1/2 lg:-translate-x-1/2">
                        <a href="#" className={`text-4xl font-editorial tracking-[-0.05em] transition-all duration-700 ${isScrolled ? 'text-primary' : 'text-white'}`}>
                            reflect
                        </a>
                    </div>

                    {/* Right Desktop Navigation + Icons */}
                    <div className="hidden lg:flex items-center justify-end space-x-12 flex-1">
                        <div className="flex items-center space-x-12 mr-12 border-r border-accent/20 pr-12">
                            {rightLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`text-[10px] font-bold tracking-[0.3em] uppercase transition-all duration-500 relative group ${isScrolled ? 'text-primary' : 'text-white'}`}
                                >
                                    {link.name}
                                    <span className={`absolute -bottom-1 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${isScrolled ? 'bg-primary' : 'bg-white'}`}></span>
                                </a>
                            ))}
                        </div>

                        <div className="flex items-center space-x-6">
                            <button className={`smooth-transition ${isScrolled ? 'text-primary/70 hover:text-primary' : 'text-white/80 hover:text-white'}`}>
                                <Search size={18} strokeWidth={1.5} />
                            </button>
                            <button className={`smooth-transition relative ${isScrolled ? 'text-primary/70 hover:text-primary' : 'text-white/80 hover:text-white'}`}>
                                <ShoppingBag size={18} strokeWidth={1.5} />
                                <span className={`absolute -top-2 -right-2 text-[8px] font-bold w-4 h-4 rounded-full flex items-center justify-center transition-all duration-500 ${isScrolled ? 'bg-primary text-white' : 'bg-white text-primary'}`}>0</span>
                            </button>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={`p-2 transition-colors duration-500 ${isScrolled ? 'text-primary' : 'text-white'}`}
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-0 left-0 w-full h-screen bg-white z-[60] flex flex-col items-center justify-center space-y-8 animate-in fade-in duration-500">
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="absolute top-8 right-8 text-primary"
                    >
                        <X size={32} />
                    </button>
                    {[...navLinks, ...rightLinks].map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-3xl font-editorial text-primary"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="flex items-center space-x-8 pt-8 text-primary/50">
                        <Search size={24} />
                        <User size={24} />
                        <ShoppingBag size={24} />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
