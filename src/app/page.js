"use client"; // Next.js App Router

import React, { useState, useEffect } from "react";

// Import components
import Header from "../components/Header";
import GradientBackground from "../components/GradientBackground";
import HeroSection from "../components/HeroSection";
import VisualizationContainer from "../components/VisualizationContainer";
import FeatureSection from "../components/FeatureSection";


export default function Home() {
  const [listening, setListening] = useState(false);
  const [feedback, setFeedback] = useState("What can I help with?");
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioChunks, setAudioChunks] = useState([]);
  const [isHovering, setIsHovering] = useState(false);
  const [isChatActive, setIsChatActive] = useState(false);
  const [isInactive, setIsInactive] = useState(true);

  // Initialize media recorder
  const initializeRecorder = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      
      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          setAudioChunks(chunks => [...chunks, e.data]);
        }
      };

      recorder.onstop = async () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
        await sendAudioForAnalysis(audioBlob);
        setAudioChunks([]); // Clear chunks after sending
      };

      setMediaRecorder(recorder);
    } catch (err) {
      console.error("Error accessing microphone:", err);
      setFeedback("Please enable microphone access to use this feature.");
    }
  };

  // Send audio to backend
  const sendAudioForAnalysis = async (audioBlob) => {
    try {
      const formData = new FormData();
      formData.append('audio', audioBlob);

      setFeedback("Analyzing your mix...");
      
      const response = await fetch('http://localhost:5000/analyze', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });

      if (!response.ok) throw new Error('Analysis failed');

      const data = await response.json();
      setFeedback(data.feedback);
    } catch (err) {
      console.error("Error during analysis:", err);
      setFeedback("Sorry, there was an error analyzing your mix. Please try again.");
    }
  };

  // Handle mic click
  const handleMicClick = async () => {
    if (!mediaRecorder) {
      await initializeRecorder();
      return;
    }

    if (listening) {
      mediaRecorder.stop();
      setListening(false);
    } else {
      setAudioChunks([]);
      mediaRecorder.start();
      setListening(true);
      setFeedback("Listening... Mix analysis in progress...");
    }
  };

  // Clean up media recorder on unmount
  useEffect(() => {
    return () => {
      if (mediaRecorder && mediaRecorder.state !== 'inactive') {
        mediaRecorder.stop();
      }
    };
  }, [mediaRecorder]);

  // Audio visualization now handled directly in the HeadphoneVisualization component

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden font-sans">
      <Header />
      <GradientBackground />
      
      <div className="relative z-10">
        <div className="relative mb-0 pt-32 pb-16">
          <VisualizationContainer 
            listening={listening}
            handleMicClick={handleMicClick}
            feedback={feedback}
            onChatStateChange={setIsChatActive}
            onStateChange={(state) => {
              setIsInactive(state === 'inactive');
            }}
          />
          
          {/* Invisible protective area to prevent hover glitches */}
          <div className="absolute w-full h-16 bottom-0 left-0 z-0"></div>
        </div>
        
        <HeroSection isChatActive={isChatActive} isInactive={isInactive} />
        
        <FeatureSection />
      </div>
    </div>
  );
}
