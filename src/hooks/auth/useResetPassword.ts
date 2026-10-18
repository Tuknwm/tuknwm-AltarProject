'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export const useResetPassword = () => {
  const [passwords, setPasswords] = useState({ new: '', confirm: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'error' | 'success'; text: string } | null>(null);

  const router = useRouter();
  const searchParams = useSearchParams();

  const email = searchParams.get('email') || '';
  const token = searchParams.get('token') || '';

  const [isExpired] = useState(() => !email || !token);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;

    if (passwords.new !== passwords.confirm) {
      setMessage({ type: 'error', text: 'Passwords do not match' });
      return;
    }

    setIsLoading(true);
    setMessage(null);

    // demo mode: simulate success
    setTimeout(() => {
      setMessage({ type: 'success', text: 'Password reset successfully.' });
      setTimeout(() => router.push('/auth/login'), 3000);
      setIsLoading(false);
    }, 800);
  };

  return {
    passwords,
    setPasswords,
    isLoading,
    message,
    token,
    isExpired,
    handleSubmit
  };
};
