import React, { useState } from 'react';
import HeadphoneVisualization from './HeadphoneVisualization';

const VisualizationContainer = ({ listening, getWaveHeight, getWaveColor, handleMicClick, feedback, onChatStateChange, onStateChange }) => {
  // State to track if the headphone is being hovered
  const [isHeadphoneHovered, setIsHeadphoneHovered] = useState(false);
  
  // Pass hover state up to parent components
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
    <div className="relative flex flex-col items-center">
      {/* New Headphone Visualization with integrated waves */}
      <HeadphoneVisualization 
        listening={listening} 
        handleMicClick={handleMicClick}
        onHoverChange={onHeadphoneHoverChange}
        onChatStateChange={onChatStateChange}
        onStateChange={handleStateChange}
      />
    </div>
  );
};

export default VisualizationContainer;
