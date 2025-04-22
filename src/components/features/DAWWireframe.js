import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";

// Import NoraAssistant with no SSR to avoid hydration errors
const NoraAssistant = dynamic(() => import("./NoraAssistant"), { ssr: false });

const DAWWireframe = () => {
  // Generate timeline grid
  const generateTimelineGrid = () => {
    // Create a realistic DAW timeline with colored blocks representing tracks
    const tracks = [
      { name: "Kick", color: "bg-blue-500/40", blocks: [0, 4, 8, 12, 16, 20, 24, 28] },
      { name: "Snare", color: "bg-pink-500/40", blocks: [4, 12, 20, 28] },
      { name: "Hi-Hat", color: "bg-yellow-500/40", blocks: [2, 3, 6, 7, 10, 11, 14, 15, 18, 19, 22, 23, 26, 27, 30, 31] },
      { name: "Bass", color: "bg-green-500/40", blocks: [0, 1, 2, 3, 8, 9, 10, 11, 16, 17, 18, 19, 24, 25, 26, 27] },
      { name: "Synth", color: "bg-purple-500/40", blocks: [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31] },
    ];

    return (
      <div className="space-y-1">
        {tracks.map((track, trackIndex) => (
          <div key={trackIndex} className="flex">
            <div className="w-20 text-xs text-gray-400 pr-2 flex items-center">{track.name}</div>
            <div className="flex-1 grid grid-cols-32 gap-[1px]">
              {Array.from({ length: 32 }).map((_, blockIndex) => {
                const isBlockActive = track.blocks.includes(blockIndex);
                const isOnBeat = blockIndex % 4 === 0;
                
                return (
                  <div
                    key={blockIndex}
                    className={`
                      h-6 rounded-sm transition-all duration-200
                      ${isBlockActive ? track.color : isOnBeat ? 'bg-gray-700' : 'bg-gray-800'}
                      ${isBlockActive ? 'border border-white/10' : ''}
                    `}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>
    );
  };

  // Generate playhead animation
  const PlayHead = () => (
    <motion.div 
      className="absolute top-0 bottom-0 w-[2px] bg-white/70 z-10 pointer-events-none"
      initial={{ left: "0%" }}
      animate={{ left: ["0%", "100%"] }}
      transition={{ 
        duration: 8,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop"
      }}
    />
  );

  return (
    <div className="relative bg-[#1e1e1e] text-white w-full max-w-[1000px] mx-auto rounded-xl shadow-2xl border border-gray-700 overflow-hidden h-[400px]">
      {/* Header */}
      <div className="flex justify-between items-center p-3 bg-[#252525] border-b border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="flex gap-2">
            <button className="w-3 h-3 bg-red-500 rounded-full" />
            <button className="w-3 h-3 bg-yellow-400 rounded-full" />
            <button className="w-3 h-3 bg-green-500 rounded-full" />
          </div>
          <div className="text-sm font-medium text-gray-300 flex items-center">
            <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
            Project - Untitled Mix.flp
          </div>
        </div>
      </div>

      {/* Transport Controls */}
      <div className="flex items-center justify-between p-2 bg-[#2d2d2d] border-b border-gray-700">
        <div className="flex space-x-3">
          <button className="text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="19 20 9 12 19 4 19 20"></polygon>
              <line x1="5" y1="19" x2="5" y2="5"></line>
            </svg>
          </button>
          <button className="text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="5 4 15 12 5 20 5 4"></polygon>
            </svg>
          </button>
          <button className="text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="6" y="4" width="4" height="16"></rect>
              <rect x="14" y="4" width="4" height="16"></rect>
            </svg>
          </button>
          <button className="text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </button>
        </div>
        <div className="text-xs text-gray-400">120 BPM | 4/4 | 00:00:00</div>
      </div>

      {/* Main Content */}
      <div className="flex h-[calc(100%-80px)]">
        {/* Channel Rack / Sidebar */}
        <div className="w-48 bg-[#252525] p-3 border-r border-gray-700 h-full overflow-y-auto">
          <div className="text-xs font-semibold mb-3 text-gray-300 uppercase">Channel Rack</div>
          <ul className="text-xs text-gray-300 space-y-2">
            {["Kick", "Snare", "Hi-Hat", "Bass", "Synth", "Vocal", "FX 1", "FX 2"].map((channel, i) => (
              <li key={i} className="flex items-center justify-between p-1.5 hover:bg-gray-700/30 rounded">
                <span>{channel}</span>
                <div className="flex items-center space-x-1">
                  <div className={`w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-green-500' : 'bg-gray-500'}`}></div>
                  <div className="w-8 h-1.5 bg-gray-700 rounded-full">
                    <div className={`h-full rounded-full ${['bg-blue-500', 'bg-pink-500', 'bg-yellow-500', 'bg-green-500', 'bg-purple-500'][i % 5]} w-[60%]`}></div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Arrangement / Timeline */}
        <div className="flex-1 bg-[#1a1a1a] p-3 relative overflow-hidden">
          <div className="text-xs font-semibold mb-3 text-gray-300 uppercase">Arrangement</div>
          
          {/* Timeline ruler */}
          <div className="flex border-b border-gray-700 mb-2 pb-1">
            <div className="w-20"></div> {/* Spacer for track names */}
            <div className="flex-1 grid grid-cols-32 gap-[1px]">
              {Array.from({ length: 32 }).map((_, i) => (
                <div key={i} className="text-[10px] text-gray-500 flex justify-center">
                  {i % 4 === 0 ? i + 1 : ''}
                </div>
              ))}
            </div>
          </div>
          
          {/* Tracks */}
          {generateTimelineGrid()}
          
          {/* Animated playhead */}
          <PlayHead />
        </div>
      </div>

      {/* Nora Assistant with hover state change and integrated chat response */}
      <div className="absolute bottom-4 right-4 z-50">
        <NoraAssistant />
      </div>
    </div>
  );
};

export default DAWWireframe;
