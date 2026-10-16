import React from 'react';
export function OpeningSection({onOpen}:{onOpen:()=>void}) {
 return <section className="px-6 py-10 text-center">
  <div className="text-6xl mb-5">💌</div><p className="text-sm tracking-[0.25em] uppercase text-pink-400 mb-3">a little letter for you</p>
  <h1 className="font-handwritten text-4xl text-rose-500 mb-4">Hey cutie… ♡</h1>
  <p className="text-base leading-7 mb-8">I made a tiny little corner of the internet just for you. Ready to open your surprise?</p>
  <button onClick={onOpen} className="rounded-full bg-rose-400 hover:bg-rose-500 text-white px-8 py-3 shadow-lg transition">Open your letter 💗</button>
 </section>;
}