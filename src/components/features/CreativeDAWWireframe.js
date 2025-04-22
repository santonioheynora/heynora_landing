"use client";

import React from "react";
import { motion } from "framer-motion";
import CreativeAssistant from "./CreativeAssistant";

const CreativeDAWWireframe = () => {
  return (
    <div className="relative w-full rounded-xl overflow-hidden border border-white/10 shadow-xl">
      {/* DAW Header */}
      <div className="bg-black/80 backdrop-blur-sm p-3 border-b border-white/10 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="flex space-x-1">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-white text-sm font-medium">New Project - Music Production Software</span>
        </div>
        <div className="flex space-x-3">
          <div className="text-white/70 text-xs px-2 py-1 rounded bg-white/5">
            120 BPM
          </div>
          <div className="text-white/70 text-xs px-2 py-1 rounded bg-white/5">
            4/4
          </div>
          <div className="text-white/70 text-xs px-2 py-1 rounded bg-white/5">
            C Minor
          </div>
        </div>
      </div>

      {/* DAW Main Content */}
      <div className="bg-gray-900/90 h-[400px] relative">
        {/* Timeline */}
        <div className="bg-black/40 h-8 border-b border-white/10 flex items-center px-3">
          <div className="flex w-full">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="flex-1 border-r border-white/10 flex justify-center">
                <span className="text-white/50 text-xs">{i + 1}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Empty Timeline with Minimal Content */}
        <div className="h-[352px] relative">
          {/* Track Headers */}
          <div className="absolute left-0 top-0 w-[120px] h-full border-r border-white/10 bg-black/30 flex flex-col">
            {["Kick", "Snare", "Hi-hat", "Melody", "Bass", "Vocals"].map((track, i) => (
              <div 
                key={i} 
                className="h-[60px] border-b border-white/10 flex items-center justify-center"
              >
                <span className="text-white/70 text-xs">{track}</span>
              </div>
            ))}
          </div>

          {/* Track Content */}
          <div className="absolute left-[120px] right-0 top-0 h-full">
            {/* Minimal track content - just a few clips to show it's a work in progress */}
            <div className="h-[60px] relative"> {/* Kick track */}
              <div className="absolute left-0 top-[15px] h-[30px] w-[calc(100%-10px)] bg-gradient-to-r from-blue-500/20 to-blue-700/20 rounded-sm border border-blue-500/30"></div>
            </div>
            <div className="h-[60px] relative"> {/* Snare track */}
              <div className="absolute left-[25%] top-[15px] h-[30px] w-[25%] bg-gradient-to-r from-purple-500/20 to-purple-700/20 rounded-sm border border-purple-500/30"></div>
            </div>
            <div className="h-[60px] relative"> {/* Hi-hat track */}
              <div className="absolute left-0 top-[15px] h-[30px] w-[calc(100%-10px)] bg-gradient-to-r from-green-500/20 to-green-700/20 rounded-sm border border-green-500/30"></div>
            </div>
            <div className="h-[60px] relative"> {/* Melody track - empty to show creative block */}
              {/* Intentionally empty to represent creative block */}
            </div>
            <div className="h-[60px] relative"> {/* Bass track - empty to show creative block */}
              {/* Intentionally empty to represent creative block */}
            </div>
            <div className="h-[60px] relative"> {/* Vocals track - empty to show creative block */}
              {/* Intentionally empty to represent creative block */}
            </div>

            {/* Playhead */}
            <div className="absolute left-[50%] top-0 bottom-0 w-[2px] bg-white/50 z-10"></div>

            {/* Grid lines */}
            <div className="absolute inset-0 grid grid-cols-16 pointer-events-none">
              {[...Array(16)].map((_, i) => (
                <div key={i} className="border-r border-white/5 h-full"></div>
              ))}
            </div>
          </div>

          {/* Blinking cursor in empty area to indicate waiting for input */}
          <motion.div 
            className="absolute left-[50%] top-[50%] w-[2px] h-[20px] bg-white/70"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          />

          {/* Creative Assistant Component */}
          <CreativeAssistant />
        </div>
      </div>
    </div>
  );
};

export default CreativeDAWWireframe;
