"use client";
import React from 'react';
import Link from 'next/link';
import { Info } from 'lucide-react';
import { AboutModal } from '@/components/ui/AboutModal';

const DemoBanner = ({ autoShow }: { autoShow?: boolean }) => {
  const [visible, setVisible] = React.useState(autoShow ?? false);

  React.useEffect(() => {
    if (autoShow) return;
    try {
      if (!sessionStorage.getItem('demo-banner-seen')) setVisible(true);
    } catch { setVisible(true); }
  }, [autoShow]);

  const dismiss = () => {
    setVisible(false);
    try { sessionStorage.setItem('demo-banner-seen', '1'); } catch { }
  };

  return (
    <>
    <div className={`fixed inset-0 z-[199] bg-black/30 backdrop-blur-sm transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={dismiss} />
    <div
      className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[200] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
    >
      <div className="bg-white rounded-[8px] shadow-[0_16px_48px_rgba(0,0,0,0.2)] w-[400px] h-[400px] max-w-[calc(100vw-3rem)] flex flex-col items-center justify-between p-8">
        <div className="flex flex-col items-center text-center gap-4 flex-1 justify-center">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L2 20h20L12 2z" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" strokeLinejoin="round"/>
            <path d="M12 9v5" stroke="#92400E" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="12" cy="16.5" r="1" fill="#92400E"/>
          </svg>
          <p className="text-[18px] font-extrabold text-[#0D1B2A]">Demo Version</p>
          <p className="text-[13px] text-[#6B7280] leading-relaxed">
            This is a <span className="text-[#0D1B2A] font-bold">prototype demo</span>. No real data is stored or sent — all content is fictional and for display purposes only.
          </p>
        </div>
        <button
          onClick={dismiss}
          className="w-full py-3 bg-[#941C2F] text-white text-[14px] font-bold rounded-[8px] hover:bg-[#7a1727] active:scale-[0.98] transition-all shadow-[0_4px_12px_rgba(148,28,47,0.3)]"
        >
          Okay
        </button>
      </div>
    </div>
    </>
  );
};

const HeroDesktop = () => {
  const [aboutOpen, setAboutOpen] = React.useState(false);
  return (
    <div className="min-h-screen w-full flex items-center bg-canvas font-['Plus_Jakarta_Sans',sans-serif]">
      <AboutModal isOpen={aboutOpen} onClose={() => setAboutOpen(false)} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="relative w-[55%] self-stretch shrink-0">
        <div className="absolute inset-0 bg-[url('/gedung-untar-fl.webp')] bg-cover bg-center bg-no-repeat z-0" />
        <div
          className="absolute inset-y-0 right-0 w-[60%] z-10 bg-gradient-to-r from-canvas/0 via-canvas/80 to-canvas"
        />
      </div>

      <div className="flex flex-col flex-1 justify-center items-start gap-10 pl-20 pr-16 relative z-20">

        <div
          className="text-left"
          style={{ animation: 'fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s both' }}
        >
          <h1 className="text-[56px] font-extrabold text-[#0D1B2A] tracking-[-1px] leading-[1.1] mb-5">
            Welcome to<br />
            <span className="text-crimson">ALTAR.</span>
          </h1>
          <p className="text-[18px] text-[#6B7280] leading-[1.6] font-medium max-w-[450px] m-0">
            QR-based system for attendance, teaching logs, and substitute class submissions — all in one place.
          </p>
        </div>

        <div
          className="flex flex-col items-start gap-4"
          style={{ animation: 'fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.35s both' }}
        >
          <Link
            href="/auth/login"
            prefetch={true}
            className="inline-flex items-center justify-center px-16 bg-crimson text-white py-[18px] rounded-full text-[16px] font-bold no-underline cursor-pointer transition-all duration-200 ease-out shadow-[0_8px_24px_rgba(148,28,47,0.3)] hover:shadow-[0_12px_32px_rgba(148,28,47,0.4)] hover:-translate-y-1 active:scale-[0.97] active:translate-y-0"
          >
            Sign In
          </Link>
          <div className="flex items-center gap-4 mt-2">
            <p className="text-[13px] text-[#8A9BAD] font-medium">
              © Altar - Universitas Tarumanagara
            </p>
            <button
              onClick={() => setAboutOpen(true)}
              className="flex items-center gap-1.5 text-[13px] text-[#8A9BAD] font-medium hover:text-crimson transition-colors"
            >
              <Info size={14} />
              About
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};

const HeroMobile = () => {
  const [isIOS, setIsIOS] = React.useState(false);
  const [aboutOpen, setAboutOpen] = React.useState(false);
  React.useEffect(() => {
    setIsIOS(/iPhone|iPod/.test(navigator.userAgent));
  }, []);

  return (

    <div className="min-h-[100svh] w-full flex bg-canvas font-['Plus_Jakarta_Sans',sans-serif]">
      <AboutModal isOpen={aboutOpen} onClose={() => setAboutOpen(false)} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="relative w-full min-h-[100svh] bg-canvas flex flex-col">

        <div className="relative w-full h-[50svh] min-h-[300px] shrink-0">
          <div className="absolute inset-0 bg-gray-300 bg-[url('/gedung-untar.png')] bg-cover bg-[center_top] z-0" />
          <div
            className="absolute inset-0 z-10"
            style={{
              background: 'linear-gradient(to top, #f4f4f5 0%, #f4f4f5 12%, rgba(244, 244, 245, 0.85) 22%, rgba(244, 244, 245, 0.55) 35%, rgba(244, 244, 245, 0.2) 50%, transparent 65%)'
            }}
          />
        </div>

        <div className={isIOS
          ? "absolute inset-0 z-20 flex flex-col items-start justify-center px-[clamp(2rem,6vw,4rem)] gap-7"
          : "bg-canvas px-[clamp(2rem,6vw,4rem)] pb-[clamp(2rem,7vw,3.5rem)] pt-[clamp(1rem,4vw,2rem)] flex flex-col flex-1 justify-center gap-7 relative z-20"
        }>

          <div
            className="flex flex-col items-start md:items-center text-left md:text-center"
            style={{ animation: 'fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.2s both' }}
          >
            <h1 className="text-[clamp(32px,8vw,48px)] font-extrabold text-[#0D1B2A] tracking-[-0.5px] leading-[1.1] mb-[clamp(12px,3vw,20px)]">
              Welcome to<br />
              <span className="text-crimson">ALTAR.</span>
            </h1>
            <p className="text-[clamp(14px,3.5vw,18px)] text-[#6B7280] leading-[1.6] font-medium max-w-[clamp(280px,80vw,450px)] m-0">
              QR-based system for attendance, teaching logs, and substitute class submissions — all in one place.
            </p>
          </div>

          <div
            className="w-full flex flex-col items-center"
            style={{ animation: 'fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.35s both' }}
          >
            <Link
              href="/auth/login"
              prefetch={true}
              className="flex items-center justify-center w-full max-w-[400px] bg-crimson text-white py-[clamp(18px,4vw,22px)] rounded-full text-[clamp(16px,4vw,18px)] font-bold no-underline cursor-pointer mb-4 transition-all duration-150 ease-out shadow-[0_8px_24px_rgba(148,28,47,0.3)] tracking-[0.2px] active:scale-[0.97] active:shadow-[0_4px_12px_rgba(148,28,47,0.2)]"
            >
              Sign In
            </Link>
            <p className="text-[clamp(12px,3vw,14px)] text-[#8A9BAD] font-medium">
              © Altar - Universitas Tarumanagara
            </p>
            <button
              onClick={() => setAboutOpen(true)}
              className="flex items-center gap-1.5 text-[clamp(12px,3vw,14px)] text-[#8A9BAD] font-medium hover:text-crimson transition-colors mt-1"
            >
              <Info size={13} />
              About
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export const Hero = ({ showBanner }: { showBanner?: boolean }) => {
  return (
    <>
      <DemoBanner autoShow={showBanner} />
      <div className="lg:hidden">
        <HeroMobile />
      </div>
      <div className="hidden lg:block">
        <HeroDesktop />
      </div>
    </>
  );
};

