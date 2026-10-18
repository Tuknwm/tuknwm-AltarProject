'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { loginUser } from '@/lib/actions/auth/login';
import { getSession } from '@/lib/actions/auth/session';
import { useUserStore } from '@/store/useUserStore';

export const useAuthForm = (initialError?: string | null) => {
  const [view, setView] = useState<'login' | 'forgot'>('login');
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(initialError ?? null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  useEffect(() => {
    if (initialError) {
      setErrorMessage(initialError);
    }
  }, [initialError]);

  const router = useRouter();
  const setUser = useUserStore((state) => state.setUser);
  const setLoadingStore = useUserStore((state) => state.setLoading);

  const toggleView = (newView: 'login' | 'forgot') => {
    setErrorMessage(null);
    setSuccessMessage(null);
    setView(newView);
  };

  const handleManualLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;

    setIsLoading(true);
    setErrorMessage(null);

    try {
      const result = await loginUser(formData);

      if (result.success) {
        
        if (result.data?.user) {
          setUser(result.data.user);
          setLoadingStore(false);
          router.push('/dashboard');
          return;
        }

const session = await getSession();

        if (session.success && session.data) {
          setUser(session.data);
          setLoadingStore(false);
          router.push('/dashboard');
        } else {
          setErrorMessage(session.message || 'Failed to retrieve account profile.');
        }
      } else {
        setErrorMessage(result.message);
      }
    } catch {
      
      setErrorMessage('A system error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setErrorMessage('Google login is not available in demo mode.');
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;
    setIsLoading(true);
    setErrorMessage(null);
    setSuccessMessage(null);
    // demo mode: no-op, just show success
    setTimeout(() => {
      setSuccessMessage('Password reset link has been sent to your email.');
      setFormData({ ...formData, email: '' });
      setIsLoading(false);
    }, 800);
  };

  const handleDemoLogin = async () => {
    if (isLoading) return;
    setIsLoading(true);
    setErrorMessage(null);
    try {
      const result = await loginUser({ email: 'demo@altar.ac.id', password: 'demo' });
      if (result.success) {
        if (result.data?.user) {
          setUser(result.data.user);
          setLoadingStore(false);
          router.push('/dashboard');
          return;
        }
        const session = await getSession();
        if (session.success && session.data) {
          setUser(session.data);
          setLoadingStore(false);
          router.push('/dashboard');
        }
      }
    } catch {
      setErrorMessage('A system error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    view,
    formData,
    setFormData,
    isLoading,
    errorMessage,
    successMessage,
    toggleView,
    handleManualLogin,
    handleGoogleLogin,
    handleForgotPassword,
    handleDemoLogin,
  };
};