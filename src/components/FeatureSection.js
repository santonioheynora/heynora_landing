import React from 'react';
import Image from 'next/image';

const FeatureSection = () => {
  return (
    <section className="relative z-10 w-full max-w-6xl mx-auto mt-20 px-6 md:px-10">
      <div className="text-center mb-8">
        <h3 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-orange-400 via-pink-500 to-blue-400 text-transparent bg-clip-text">
          Mix Analysis &amp; Feedback
        </h3>
        <p className="mt-3 text-lg text-gray-300 max-w-3xl mx-auto">
          AI-powered feedback on mix quality. Quick improvement hacks (not just "good" or "bad").
          Help producers adjust their mixes effectively with structured, actionable insights.
        </p>
      </div>

      {/* Feature Mockup Image */}
      <div className="flex justify-center">
        <Image
          src="/mix_analysis_mockup.png"
          alt="HeyNora Mix Analysis Mockup"
          width={800}
          height={450}
          className="rounded-lg shadow-2xl"
        />
      </div>
    </section>
  );
};

export default FeatureSection;
