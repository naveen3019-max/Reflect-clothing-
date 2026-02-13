import React from 'react';
import { ShoppingCart, Heart } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const products = [
    { id: 1, name: 'Premium Cotton Tee', category: 'T-Shirts', price: '$45', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=600' },
    { id: 2, name: 'Minimalist Oxford Shirt', category: 'Shirts', price: '$85', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=600' },
    { id: 3, name: 'Classic Slim Jeans', category: 'Jeans', price: '$120', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80&w=600' },
    { id: 4, name: 'Tailored Chinos', category: 'Trousers', price: '$95', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuPD4_l1G5j3LVhFuafyX5dfd4-X0hfisESA&s' },
];

const FeaturedProducts = () => {
    useScrollReveal();

    return (
        <section id="featured" className="py-24 bg-background-secondary">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal">
                    <div className="mb-6 md:mb-0">
                        <span className="text-[10px] font-bold tracking-[0.4em] text-primary/40 uppercase mb-2 block">Curated Selection</span>
                        <h2 className="text-5xl font-editorial text-primary tracking-tighter italic">Featured Pieces</h2>
                    </div>
                    <button className="text-[10px] font-bold text-primary border-b border-primary/20 pb-1 hover:text-primary-light hover:border-primary-light smooth-transition uppercase tracking-[0.3em]">
                        View Collection
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product, index) => (
                        <div key={product.id} className="group bg-white p-6 reveal" style={{ transitionDelay: `${index * 0.1}s` }}>
                            <div className="aspect-[3/4] overflow-hidden bg-background-accent mb-8 relative">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                />
                                <button className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white text-primary shadow-xl">
                                    <Heart size={16} strokeWidth={1.5} />
                                </button>
                                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                    <button className="w-full bg-primary text-white py-4 text-[10px] font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-2 hover:bg-primary/95 transition-colors">
                                        <ShoppingCart size={14} /> Add to Bag
                                    </button>
                                </div>
                            </div>
                            <div className="text-center">
                                <p className="text-[9px] uppercase tracking-[0.4em] text-primary/40 font-bold mb-2">{product.category}</p>
                                <h3 className="text-lg font-editorial tracking-tighter text-primary mb-2 italic">{product.name}</h3>
                                <p className="text-sm font-medium text-primary/60">{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
