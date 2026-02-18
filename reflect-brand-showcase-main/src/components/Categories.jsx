import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const categories = [
    {
        name: 'Trousers',
        image: 'https://th.bing.com/th/id/OIP.5berA6OgVj_4G1C54PyhVgHaLH?w=204&h=306&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
        size: 'large',
        offset: '0px'
    },
    {
        name: 'Casual Wear',
        image: 'https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/2025/SEPTEMBER/25/A5bH1Nin_63fc2e93787a466099a2e6e871d155f4.jpg',
        size: 'small',
        offset: '40px'
    },
    {
        name: 'Formal Wear',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOT85qNyv6Tce79aq4oWLfjZVF3E2dNLn3Tw&s',
        size: 'medium',
        offset: '-20px'
    },
    {
        name: 'Shirts',
        image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=800',
        size: 'small',
        offset: '60px'
    },
    {
        name: 'Jeans',
        image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80&w=800',
        size: 'large',
        offset: '20px'
    },
    {
        name: 'Jackets',
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=800',
        size: 'medium',
        offset: '80px'
    },
];

const Categories = () => {
    useScrollReveal();

    return (
        <section id="categories" className="py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-end justify-between mb-24 reveal">
                    <div className="max-w-xl">
                        <span className="text-[10px] font-bold tracking-[0.5em] text-primary/40 uppercase block mb-4">Curated Style</span>
                        <h2 className="text-6xl md:text-7xl font-editorial tracking-tighter text-primary leading-none">
                            Shop by <br /> <span className="italic pl-12">Collections</span>
                        </h2>
                    </div>
                    <p className="text-primary-light font-light max-w-xs mt-8 md:mt-0 pb-1 italic">
                        Explore our thoughtfully designed pieces for the modern gentleman.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-24 md:gap-12 lg:gap-20">
                    {categories.map((cat, index) => (
                        <div
                            key={index}
                            className={`group relative reveal transition-all duration-1000`}
                            style={{
                                marginTop: cat.offset,
                                transitionDelay: `${index * 0.1}s`
                            }}
                        >
                            <div className={`overflow-hidden relative ${cat.size === 'large' ? 'aspect-[3/4]' :
                                    cat.size === 'medium' ? 'aspect-square' : 'aspect-[4/5]'
                                }`}>
                                <img
                                    src={cat.image}
                                    alt={cat.name}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700"></div>
                            </div>

                            <div className="mt-8 flex items-center justify-between">
                                <div>
                                    <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-primary/30 mb-1 block">Category 0{index + 1}</span>
                                    <h3 className="text-2xl font-editorial tracking-tighter text-primary group-hover:translate-x-2 transition-transform duration-500">{cat.name}</h3>
                                </div>
                                <div className="w-10 h-10 border border-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                    <span className="text-xs">→</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;
