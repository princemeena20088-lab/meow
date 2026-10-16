class AudioManager {
 private audio: HTMLAudioElement | null = null;
 private playing = false;
 start() {
   if (typeof window === 'undefined') return;
   if (!this.audio) {
     // Replace this source with a music file you have permission to use.
     this.audio = new Audio();
     this.audio.loop = true;
     this.audio.volume = 0.25;
   }
   if (!this.audio.src) return;
   void this.audio.play().then(()=>{this.playing=true;}).catch(()=>{this.playing=false;});
 }
 stop() { if(this.audio){this.audio.pause();this.playing=false;} }
 getIsPlaying() { return this.playing; }
}
export const audioManager = new AudioManager();