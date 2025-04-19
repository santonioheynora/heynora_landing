import React from 'react';
import { useVisualizationState } from '@/hooks/useVisualizationState';
import { InactiveState } from './visualization/states/InactiveState';
import { ActiveListeningState } from './visualization/states/ActiveListeningState';
import { ChatState } from './visualization/states/ChatState';

const HeadphoneVisualization = ({ listening, handleMicClick, onHoverChange, onChatStateChange, onStateChange }) => {
  const { isInactive, isActiveListening, isChat, setCurrentState } = useVisualizationState(onHoverChange);

  // Pass state changes up
  React.useEffect(() => {
    if (onStateChange) {
      if (isInactive) onStateChange('inactive');
      else if (isActiveListening) onStateChange('active');
      else if (isChat) onStateChange('chat');
    }
  }, [isInactive, isActiveListening, isChat, onStateChange]);
  
  const handleChatStateChange = () => {
    console.log('Changing to chat state...');
    setCurrentState('chat');
    if (onChatStateChange) {
      onChatStateChange(true);
    }
  };

  const handleChatComplete = () => {
    console.log('Chat sequence complete, returning to inactive state...');
    // Reset to inactive state
    setCurrentState('inactive');
    if (onChatStateChange) {
      onChatStateChange(false);
    }

    // Clear any existing animations/transitions
    const cleanup = () => {
      setCurrentState('inactive');
    };

    // Ensure proper cleanup
    cleanup();
  };
  
  return (
    <div 
      className="relative w-[292px] h-[316px] mx-auto flex items-center justify-center"
      onClick={(e) => {
        // Only trigger mic click if we're not clicking inside the chat interface
        if (e.target === e.currentTarget) {
          handleMicClick();
        }
      }}
    >
      <InactiveState show={isInactive} />
      <ActiveListeningState 
        show={isActiveListening}
        listening={listening}
        onChatClick={handleChatStateChange}
      />
      <ChatState 
        show={isChat} 
        onComplete={handleChatComplete}
      />
    </div>
  );
};

export default HeadphoneVisualization;
