'use client';

import { useState } from 'react';
import { Hero } from '@/components/home/Hero';
import dynamic from 'next/dynamic';

const LoadingScreen = dynamic(() => import('@/components/home/LoadingScreen'), { ssr: false });

export default function Home() {
  const [showLoader, setShowLoader] = useState(() => {
    if (typeof window === 'undefined') return true;
    try { return !sessionStorage.getItem('hasVisited'); } catch { return false; }
  });
  const [heroReady, setHeroReady] = useState(false);
  const [fromLoader, setFromLoader] = useState(false);

  return (
    <main>
      {showLoader && (
        <LoadingScreen
          onReady={() => setHeroReady(true)}
          onDone={() => { setShowLoader(false); setFromLoader(true); }}
        />
      )}
      {/* render Hero only when exit animation starts — avoids flash before loading screen */}
      {(!showLoader || heroReady) && <Hero showBanner={fromLoader} />}
    </main>
  );
}
