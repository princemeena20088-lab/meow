import React, { useState } from 'react';
import { audioManager } from '../utils/audioPlayer';

export function MusicButton() {
  const [playing, setPlaying] = useState(audioManager.getIsPlaying());
  const toggle = () => { if (audioManager.getIsPlaying()) audioManager.stop(); else audioManager.start(); setPlaying(audioManager.getIsPlaying()); };
  return <button onClick={(e) => { e.stopPropagation(); toggle(); }} aria-label={playing ? 'Pause music' : 'Play music'} className="fixed right-4 top-4 z-30 rounded-full bg-white/90 shadow-md border border-pink-100 px-4 py-2 text-sm text-pink-600">{playing ? '♫ Music on' : '♫ Music'}</button>;
}