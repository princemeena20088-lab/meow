import React from 'react';

export function FloatingHearts() {
  return <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden z-0">
    {Array.from({length: 14}, (_, i) => <span key={i} className="absolute animate-float-heart text-pink-300/70" style={{left:`${(i*37)%100}%`, bottom:'-2rem', animationDelay:`${(i%7)*1.1}s`, animationDuration:`${7+(i%5)}s`, fontSize:`${14+(i%4)*7}px`}}>♥</span>)}
  </div>;
}