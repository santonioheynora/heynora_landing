"use client"; // Next.js App Router

import React, { useState, useEffect } from "react";

// Import components
import Header from "../components/Header";
import GradientBackground from "../components/GradientBackground";
import HeroSection from "../components/HeroSection";
import VisualizationContainer from "../components/VisualizationContainer";
import FeatureSection from "../components/FeatureSection";
import UpcomingFeatures from "../components/UpcomingFeatures";
import FinalCTA from "../components/FinalCTA";


export default function Home() {
  // State variables for visualization components
  const [listening, setListening] = useState(false);
  const [feedback, setFeedback] = useState("What can I help with?");
  const [isHovering, setIsHovering] = useState(false);
  const [isChatActive, setIsChatActive] = useState(false);
  const [isInactive, setIsInactive] = useState(true);
  const [vizState, setVizState] = useState('inactive');

  // Simple toggle for visualization demo
  const handleMicClick = () => {
    setListening(!listening);
  };

  // Audio visualization now handled directly in the HeadphoneVisualization component

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden font-sans">
      <Header showWaitlistButton={vizState !== 'inactive'} />
      <GradientBackground />
      
      <div className="relative z-10">
        <HeroSection 
          isChatActive={vizState === 'chat'}
          isInactive={vizState === 'inactive'}
          feedback={feedback}
          visualizationComponent={
            <VisualizationContainer 
              listening={listening}
              handleMicClick={handleMicClick}
              feedback={feedback}
              onChatStateChange={setIsChatActive}
              onStateChange={(state) => {
                setVizState(state);
              }}
            />
          }
        />
        
        <FeatureSection />
        
        <UpcomingFeatures />
        
        <FinalCTA />
      </div>
    </div>
  );
}
