import { useState, useEffect, useRef } from 'react';

export const useVisualizationState = (onHoverChange) => {
  const [currentState, setCurrentState] = useState('inactive');
  const cycleCount = useRef(0);
  const transitioningRef = useRef(false);
  
  // Create a function to update state with logging
  const updateState = (newState) => {
    if (transitioningRef.current) return; // Prevent state updates during transitions
    
    console.log(`State transition: ${currentState} -> ${newState}`);
    
    if (newState === 'inactive' && currentState === 'chat') {
      cycleCount.current += 1;
      console.log('Completed animation cycle:', cycleCount.current);
      transitioningRef.current = true; // Lock transitions
      
      // Set inactive state immediately
      setCurrentState('inactive');
      
      // Wait for the specified delay before allowing next transition
      const delay = cycleCount.current === 1 ? 4500 : 15000; // Updated to 15 seconds
      setTimeout(() => {
        transitioningRef.current = false; // Unlock transitions
        updateState('activeListening');
      }, delay);
      
      return;
    }
    
    setCurrentState(newState);
  };
  
  useEffect(() => {
    if (onHoverChange) {
      onHoverChange(currentState !== 'inactive');
    }
  }, [currentState, onHoverChange]);
  
  // Initial transition from inactive to activeListening
  useEffect(() => {
    if (currentState === 'inactive' && cycleCount.current === 0) {
      const timer = setTimeout(() => {
        console.log('Initial transition to activeListening state');
        updateState('activeListening');
      }, 15000); // Updated to 15 seconds for first visit
      
      return () => clearTimeout(timer);
    }
  }, []);

  return {
    currentState,
    setCurrentState: updateState,
    isInactive: currentState === 'inactive',
    isActiveListening: currentState === 'activeListening',
    isChat: currentState === 'chat'
  };
};
