"use client";

// Import necessary dependencies
import { useEffect, useRef } from 'react';
import TypewriterComponent from 'typewriter-effect';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export const LandingHero = () => {
  
  const videoRef = useRef(null);

  useEffect(() => {
    // Uncomment the next line if you want the video to autoplay
    // videoRef.current.play();
  }, []);

  return (
    <div className="text-center">
      <h1 style={{ marginTop: 0, color: 'white', fontSize: '2.5rem'}}> <center>SINGL </center></h1>
      <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center">
        <TypewriterComponent
          options={{
            strings: [
              'Improved Data Quality',
              'End to End Data Governance',
              'Faster Access to Master Data',
              'Talk to your Data with Gen AI',
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </div>

      <br />
      <br />

      {/* Video Section */}
      <video
        ref={videoRef}
        controls
        poster="/video.png" // Replace with the path to your poster image
        autoPlay // Optional: Add autoplay for mobile
        muted // Autoplay requires the video to be muted on many mobile devices
        className="w-full max-w-2xl mx-auto rounded-md shadow-lg"
      >
        <source
          src="https://www.alpharithm.com/wp-content/uploads/2021/05/Alpharithm_SiNGL_Promo_D3.mp4?_=1"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <center>
        <br />
        <br />
        <div>
          <Link href={ '/sign-up'}>
            <Button
              variant="premium"
              className="md:text-lg p-4 md:p-6 rounded-full font-semibold"
            >
              Explore SINGL with a free DEMO
            </Button>
          </Link>
        </div>
        <br />
        <div className="text-zinc-400 text-xs md:text-sm font-normal">
          Powered by Alpharithm
        </div>
      </center>
    </div>
  );
};