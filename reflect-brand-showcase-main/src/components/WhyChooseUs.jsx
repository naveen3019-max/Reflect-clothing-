import React from 'react';
import { Truck, ShieldCheck, RefreshCcw, HeadphonesIcon } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const stats = [
    { icon: <Truck size={24} strokeWidth={1} />, title: 'Free Shipping', desc: 'On all orders above $200' },
    { icon: <ShieldCheck size={24} strokeWidth={1} />, title: 'Premium Quality', desc: '100% authentic materials' },
    { icon: <RefreshCcw size={24} strokeWidth={1} />, title: 'Easy Returns', desc: 'No questions asked policy' },
    { icon: <HeadphonesIcon size={24} strokeWidth={1} />, title: 'Expert Advice', desc: '24/7 fashion consultation' },
];

const WhyChooseUs = () => {
    useScrollReveal();

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                    {stats.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center reveal" style={{ transitionDelay: `${index * 0.1}s` }}>
                            <div className="w-16 h-16 bg-background-accent rounded-full flex items-center justify-center text-primary mb-6 transition-transform duration-500 hover:rotate-12 hover:scale-110">
                                {item.icon}
                            </div>
                            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-3">{item.title}</h4>
                            <p className="text-xs text-primary/40 leading-relaxed max-w-[150px] italic">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
