'use client';
import { useEffect } from 'react';
import DashboardLayout, { type MenuGroup } from '@/components/dashboard/DashboardLayout';
import { asdosMenuItems } from '@/components/dashboard/asdos/AsdosHome';
import { koordinatorMenuItems } from '@/components/dashboard/koordinator/KoordinatorHome';
import { useRoleGuard } from '@/hooks/dashboard/useRoleGuard';
import { useUserStore } from '@/store/useUserStore';
import { usePrefetchStore } from '@/store/usePrefetchStore';

export default function AsdosLayout({ children }: { children: React.ReactNode }) {
  const { isLoading } = useRoleGuard('asdos');
  const { user } = useUserStore();
  const { isPrefetched, isPrefetching, setPrefetched } = usePrefetchStore();

  useEffect(() => {
    if (isLoading || isPrefetched || isPrefetching || !user?.id) return;
    setPrefetched();
  }, [user?.id]); // eslint-disable-line react-hooks/exhaustive-deps

  if (isLoading || !user) {
    return null;
  }

  const menuGroups: MenuGroup[] = [];
  if (user?.id_koordinator) {
    menuGroups.push({ id: 'koordinator', title: 'Coordinator', items: koordinatorMenuItems });
  }
  if (user?.id_asisten) {
    menuGroups.push({ id: 'asdos', title: 'Teaching Assistant', items: asdosMenuItems });
  }
  if (menuGroups.length === 0) {
    menuGroups.push({ id: 'asdos', title: 'Teaching Assistant', items: asdosMenuItems });
  }

  return (
    <DashboardLayout menuGroups={menuGroups} homeHref="/asdos" bgImage="/gedung-untar.png" bgImageDesktop="/gedung-untar-fl.webp">
      {children}
    </DashboardLayout>
  );
}
