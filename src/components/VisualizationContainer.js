import React, { useState } from 'react';
import ChatMessageDisplay from './ChatMessageDisplay';
import HeadphoneVisualization from './HeadphoneVisualization';

const VisualizationContainer = ({ listening, getWaveHeight, getWaveColor, handleMicClick, feedback, onChatStateChange, onStateChange }) => {
  // State to track if the headphone is being hovered
  const [isHeadphoneHovered, setIsHeadphoneHovered] = useState(false);
  
  // Determine if we should show the chat message
  const showChatMessage = !listening && !isHeadphoneHovered;
  
  // Callback to receive hover state from HeadphoneVisualization
  const onHeadphoneHoverChange = (isHovering) => {
    setIsHeadphoneHovered(isHovering);
  };

  // Pass state changes up
  const handleStateChange = (state) => {
    if (onStateChange) {
      onStateChange(state);
    }
  };
  
  return (
    <div className="relative -mt-9 flex flex-col items-center">
      {/* New Headphone Visualization with integrated waves */}
      <HeadphoneVisualization 
        listening={listening} 
        handleMicClick={handleMicClick}
        onHoverChange={onHeadphoneHoverChange}
        onChatStateChange={onChatStateChange}
        onStateChange={handleStateChange}
      />
      
      {/* Chat Message - only shown when not hovering and not listening */}
      {showChatMessage && <ChatMessageDisplay feedback={feedback} />}
    </div>
  );
};

export default VisualizationContainer;
