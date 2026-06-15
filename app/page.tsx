"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col justify-center items-center px-4 text-center bg-radial from-stone-900 to-stone-950">
    
      <div className="max-w-2xl space-y-6">
        <span className="text-amber-500 text-sm font-extrabold tracking-widest uppercase bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/20">
          Welcome to Crave
        </span>
        
        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-none">
          Discover the Best <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
            Delicious Meals
          </span>
        </h1>
        
        <p className="text-stone-400 text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
          Explore a wide variety of global recipes, look up ingredients, and find step-by-step instructions for your next favorite dish.
        </p>

       
        <div className="pt-4">
          <Link 
            href="/products" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-black text-lg rounded-xl shadow-xl shadow-amber-500/10 active:scale-95 transition-all duration-200 group"
          >
            Explore Products
            <span className="text-xl transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}