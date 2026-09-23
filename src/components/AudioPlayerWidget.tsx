import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';
import { Language } from '../types';

interface AudioPlayerWidgetProps {
  lang: Language;
}

export const AudioPlayerWidget: React.FC<AudioPlayerWidgetProps> = ({ lang }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const timerRef = useRef<number | null>(null);

  // Traditional Central Highlands pentatonic scale frequencies (T'rung bamboo resonance)
  // Notes approx: C5 (523Hz), D5 (587Hz), E5 (659Hz), G5 (784Hz), A5 (880Hz), C6 (1046Hz)
  const pentatonicScale = [523.25, 587.33, 659.25, 783.99, 880.0, 1046.5, 880.0, 783.99];

  const playBambooNote = (freq: number, time: number) => {
    if (!audioCtxRef.current) return;
    const ctx = audioCtxRef.current;

    // Fundamental oscillator (triangle wave for mellow wooden chime)
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    // Secondary oscillator for wooden strike click
    const clickOsc = ctx.createOscillator();
    const clickGain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, time);

    // Exponential decay simulating hollow bamboo tube strike
    gain.gain.setValueAtTime(0.3, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.65);

    clickOsc.type = 'triangle';
    clickOsc.frequency.setValueAtTime(freq * 2.76, time); // Inharmonic bamboo overtone
    clickGain.gain.setValueAtTime(0.12, time);
    clickGain.gain.exponentialRampToValueAtTime(0.0001, time + 0.08);

    osc.connect(gain);
    clickOsc.connect(clickGain);
    gain.connect(ctx.destination);
    clickGain.connect(ctx.destination);

    osc.start(time);
    clickOsc.start(time);
    osc.stop(time + 0.7);
    clickOsc.stop(time + 0.1);
  };

  const toggleSound = () => {
    if (isPlaying) {
      setIsPlaying(false);
      if (timerRef.current) {
        window.clearInterval(timerRef.current);
        timerRef.current = null;
      }
      return;
    }

    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }
      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      setIsPlaying(true);

      let step = 0;
      const playChimeSequence = () => {
        if (!audioCtxRef.current) return;
        const now = audioCtxRef.current.currentTime;
        const freq = pentatonicScale[step % pentatonicScale.length];
        playBambooNote(freq, now);
        step++;
      };

      playChimeSequence();
      timerRef.current = window.setInterval(playChimeSequence, 280);
    } catch {
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        window.clearInterval(timerRef.current);
      }
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <div className="inline-flex items-center gap-2 bg-[#FAF9F2] border border-[#335C33]/20 rounded-full px-3 py-1.5 shadow-xs transition-all">
      <button
        onClick={toggleSound}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold cursor-pointer transition-all duration-200 active:scale-95 ${
          isPlaying
            ? 'bg-[#335C33] text-[#F6F6EE] shadow-sm ring-2 ring-[#335C33]/20'
            : 'bg-[#E3EDD3] text-[#335C33] hover:bg-[#D5E3C0]'
        }`}
        title={lang === 'en' ? "Play authentic T'rung bamboo acoustic chime" : "Phát âm thanh mô phỏng tiếng đàn T'rưng"}
      >
        {isPlaying ? <Volume2 className="w-3.5 h-3.5 text-[#E3EDD3]" /> : <VolumeX className="w-3.5 h-3.5 text-[#335C33]" />}
        <span>
          {isPlaying
            ? lang === 'en'
              ? "T'rưng Chime Playing"
              : "Đang phát Đàn T'rưng"
            : lang === 'en'
            ? "Listen to T'rưng"
            : "Nghe Thanh Âm T'rưng"}
        </span>

        {/* Animated Sound Wave Bars from Design System 6.8 */}
        {isPlaying && (
          <span className="flex gap-0.5 items-end h-3 ml-1">
            {[0.5, 1, 0.65, 0.85, 0.45, 0.9].map((h, i) => (
              <span
                key={i}
                className="w-0.5 bg-[#E3EDD3] rounded-full animate-pulse"
                style={{
                  height: `${h * 100}%`,
                  animationDuration: `${0.4 + i * 0.15}s`,
                }}
              />
            ))}
          </span>
        )}
      </button>

      <span className="text-[11px] text-[#8C5A35] font-medium hidden sm:inline-flex items-center gap-1 pr-1">
        <Sparkles className="w-3 h-3 text-[#8C5A35]" />
        {lang === 'en' ? 'Central Highlands Pentatonic Tone' : 'Âm hưởng ngũ cung đại ngàn'}
      </span>
    </div>
  );
};
