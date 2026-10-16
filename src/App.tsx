import React, { useState } from 'react';
import { FloatingHearts } from './components/FloatingHearts';
import { MusicButton } from './components/MusicButton';
import { OpeningSection } from './components/OpeningSection';
import { MessagesSection } from './components/MessagesSection';
import { PhotoSection } from './components/PhotoSection';
import { PromiseSection } from './components/PromiseSection';
import { QuestionSection } from './components/QuestionSection';
import { FinalPersonalNote } from './components/FinalPersonalNote';
import { audioManager } from './utils/audioPlayer';

type AppScreen = 'opening' | 'messages' | 'photos' | 'promises' | 'question' | 'final_note';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>('opening');

  const handleOpenFromEnvelope = () => {
    audioManager.start();
    setCurrentScreen('messages');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMessagesComplete = () => {
    setCurrentScreen('photos');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePhotosBack = () => {
    setCurrentScreen('messages');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePhotosContinue = () => {
    setCurrentScreen('promises');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePromisesBack = () => {
    setCurrentScreen('photos');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePromisesContinue = () => {
    setCurrentScreen('question');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuestionBack = () => {
    setCurrentScreen('promises');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuestionComplete = () => {
    setCurrentScreen('final_note');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRestart = () => {
    setCurrentScreen('opening');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      onClick={() => {
        // Ensure first tap anywhere on the app starts audio
        if (!audioManager.getIsPlaying()) {
          audioManager.start();
        }
      }}
      className="min-h-screen w-full bg-gradient-to-b from-[#FFF8F6] via-[#FFF1F4] to-[#FFF7F8] text-[#4A3E3D] relative overflow-x-hidden flex flex-col justify-between"
    >
      {/* Background Floating Hearts */}
      <FloatingHearts />

      {/* Floating Music Controller */}
      <MusicButton />

      {/* Main Container */}
      <main className="w-full max-w-md mx-auto flex-1 flex flex-col justify-center relative z-10 pt-4 pb-6">
        {currentScreen === 'opening' && (
          <OpeningSection onOpen={handleOpenFromEnvelope} />
        )}

        {currentScreen === 'messages' && (
          <MessagesSection onComplete={handleMessagesComplete} />
        )}

        {currentScreen === 'photos' && (
          <PhotoSection
            onContinue={handlePhotosContinue}
            onBack={handlePhotosBack}
          />
        )}

        {currentScreen === 'promises' && (
          <PromiseSection
            onContinue={handlePromisesContinue}
            onBack={handlePromisesBack}
          />
        )}

        {currentScreen === 'question' && (
          <QuestionSection
            onComplete={handleQuestionComplete}
            onBack={handleQuestionBack}
          />
        )}

        {currentScreen === 'final_note' && (
          <FinalPersonalNote onRestart={handleRestart} />
        )}
      </main>

      {/* Tiny quiet footer watermark */}
      <footer className="text-center py-2 text-[11px] text-[#B89EA3] z-10 select-none">
        made with care 🤍
      </footer>
    </div>
  );
}
