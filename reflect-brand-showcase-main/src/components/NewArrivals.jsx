import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const newArrivals = [
    { id: 5, name: 'Suede Bomber Jacket', price: '$210', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=600' },
    { id: 6, name: 'Cashmere Blend Hoodie', price: '$155', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=600' },
    { id: 7, name: 'Linen Casual Shirt', price: '$75', image: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&q=80&w=600' },
    { id: 8, name: 'Slim Fit Blazer', price: '$245', image: 'https://rukminim2.flixcart.com/image/480/640/xif0q/blazer/g/r/h/40-black-blazer-men-style-original-imagyz9qxtty3cnx.jpeg?q=20' },
];

const NewArrivals = () => {
    useScrollReveal();

    return (
        <section id="new-arrivals" className="py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-24 reveal">
                    <span className="text-[10px] font-bold tracking-[0.5em] text-primary/40 uppercase mb-4 block">The Latest Drop</span>
                    <h2 className="text-6xl md:text-7xl font-editorial text-primary tracking-tighter leading-none italic uppercase">
                        New <span className="text-outline italic">Arrivals</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {newArrivals.map((item, index) => (
                        <div key={item.id} className="relative aspect-[3/4] overflow-hidden group cursor-pointer reveal" style={{ transitionDelay: `${index * 0.15}s` }}>
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale contrast-110 group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-700"></div>

                            <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                <div className="bg-white/95 backdrop-blur-md p-6 shadow-2xl border-l-2 border-primary">
                                    <h3 className="text-base font-editorial tracking-tighter text-primary mb-2 italic">{item.name}</h3>
                                    <div className="flex justify-between items-center">
                                        <p className="text-xs font-bold text-primary/40 tracking-[0.2em]">{item.price}</p>
                                        <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-primary text-outline-hover">Shop Now</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewArrivals;
