// DUMMY MODE — no real HTTP requests
import type { ActionResponse } from '@/types/api';

const DUMMY_ASDOS = [
  { id_asdos: 'asdos-1', username: 'Budi Santoso', nim: '2021001', deactivated_at: null },
  { id_asdos: 'asdos-2', username: 'Siti Rahayu', nim: '2021002', deactivated_at: null },
  { id_asdos: 'asdos-3', username: 'Ahmad Fauzi', nim: '2021003', deactivated_at: null },
  { id_asdos: 'asdos-4', username: 'Dewi Kartika', nim: '2021004', deactivated_at: null },
];

const DUMMY_KELAS = [
  { id: 'kelas-1', nama_kelas: 'IF-A', jurusan: 'Informatika', jumlah_siswa: 30, created_at: '2024-01-01', updated_at: '2024-01-01' },
  { id: 'kelas-2', nama_kelas: 'IF-B', jurusan: 'Informatika', jumlah_siswa: 28, created_at: '2024-01-01', updated_at: '2024-01-01' },
  { id: 'kelas-3', nama_kelas: 'SI-A', jurusan: 'Sistem Informasi', jumlah_siswa: 32, created_at: '2024-01-01', updated_at: '2024-01-01' },
  { id: 'kelas-4', nama_kelas: 'SI-B', jurusan: 'Sistem Informasi', jumlah_siswa: 29, created_at: '2024-01-01', updated_at: '2024-01-01' },
];

const DUMMY_MK = [
  { id: 'mk-1', nama_mk: 'Pemrograman Web', kode_mk: 'IF301', sks: 3, created_at: '2024-01-01', updated_at: '2024-01-01' },
  { id: 'mk-2', nama_mk: 'Basis Data', kode_mk: 'IF201', sks: 3, created_at: '2024-01-01', updated_at: '2024-01-01' },
  { id: 'mk-3', nama_mk: 'Algoritma & Pemrograman', kode_mk: 'IF101', sks: 4, created_at: '2024-01-01', updated_at: '2024-01-01' },
  { id: 'mk-4', nama_mk: 'Jaringan Komputer', kode_mk: 'IF401', sks: 3, created_at: '2024-01-01', updated_at: '2024-01-01' },
];

const DUMMY_RUANGAN = [
  { id: 'room-1', nama_ruangan: 'Lab Komputer 1', lantai: 2, kapasitas: 40, created_at: '2024-01-01', updated_at: '2024-01-01' },
  { id: 'room-2', nama_ruangan: 'Lab Komputer 2', lantai: 2, kapasitas: 35, created_at: '2024-01-01', updated_at: '2024-01-01' },
  { id: 'room-3', nama_ruangan: 'Ruang 301', lantai: 3, kapasitas: 30, created_at: '2024-01-01', updated_at: '2024-01-01' },
  { id: 'room-4', nama_ruangan: 'Ruang 401', lantai: 4, kapasitas: 30, created_at: '2024-01-01', updated_at: '2024-01-01' },
];

const DUMMY_SEMESTER = [
  { id: 'sem-1', tahun_ajaran: '2024/2025', tipe_semester: 'Ganjil' as const, created_at: '2024-07-01', updated_at: '2024-07-01' },
  { id: 'sem-2', tahun_ajaran: '2024/2025', tipe_semester: 'Genap' as const, created_at: '2025-01-01', updated_at: '2025-01-01' },
  { id: 'sem-3', tahun_ajaran: '2025/2026', tipe_semester: 'Ganjil' as const, created_at: '2025-07-01', updated_at: '2025-07-01' },
];

const DUMMY_LECTURERS = [
  { id: 'lec-1', nama: 'Dr. Hendra Wijaya', nip: '197801012005011001', created_at: '2024-01-01', updated_at: '2024-01-01' },
  { id: 'lec-2', nama: 'Dr. Rina Puspita', nip: '198003152006042001', created_at: '2024-01-01', updated_at: '2024-01-01' },
  { id: 'lec-3', nama: 'Prof. Agus Salim', nip: '196905201994031002', created_at: '2024-01-01', updated_at: '2024-01-01' },
];

const DUMMY_USERS = [
  { id: 'user-1', username: 'Budi Santoso', email: 'budi@demo.com' },
  { id: 'user-2', username: 'Siti Rahayu', email: 'siti@demo.com' },
  { id: 'user-3', username: 'Ahmad Fauzi', email: 'ahmad@demo.com' },
];

const DUMMY_KOOR = [
  { id_koor: 'koor-1', username: 'Dr. Hendra Wijaya', nip: '197801012005011001', deactivated_at: null },
  { id_koor: 'koor-2', username: 'Dr. Rina Puspita', nip: '198003152006042001', deactivated_at: null },
];

const DUMMY_SESSIONS_TODAY = [
  {
    id_sesi: 'sesi-1',
    nama_kelas: 'IF-A',
    mata_kuliah: 'Pemrograman Web',
    ruangan: 'Lab Komputer 1',
    pengajar: 'Dr. Hendra Wijaya',
    waktu: '07:00-09:30',
    tipe_jadwal: 'REGULAR' as const,
    id_asdos1: 'asdos-1',
    id_asdos2: null,
    mode_presensi: 'OFFLINE',
    is_online: false,
  },
  {
    id_sesi: 'sesi-2',
    nama_kelas: 'SI-B',
    mata_kuliah: 'Basis Data',
    ruangan: 'Lab Komputer 2',
    pengajar: 'Dr. Rina Puspita',
    waktu: '09:30-12:00',
    tipe_jadwal: 'REGULAR' as const,
    id_asdos1: 'asdos-1',
    id_asdos2: 'asdos-2',
    mode_presensi: 'OFFLINE',
    is_online: false,
  },
];

const DUMMY_SESSION_TIMELINE = [
  { id_sesi: 'sesi-1', tipe: 'REGULAR' as const, tanggal: '2026-10-18', nama_kelas: 'IF-A', mata_kuliah: 'Pemrograman Web', ruangan: 'Lab Komputer 1', pengajar: 'Dr. Hendra Wijaya', waktu: '07:00-09:30' },
  { id_sesi: 'sesi-2', tipe: 'REGULAR' as const, tanggal: '2026-10-18', nama_kelas: 'SI-B', mata_kuliah: 'Basis Data', ruangan: 'Lab Komputer 2', pengajar: 'Dr. Rina Puspita', waktu: '09:30-12:00' },
  { id_sesi: 'sesi-3', tipe: 'REGULAR' as const, tanggal: '2026-10-20', nama_kelas: 'IF-B', mata_kuliah: 'Algoritma & Pemrograman', ruangan: 'Ruang 301', pengajar: 'Prof. Agus Salim', waktu: '13:00-15:30' },
  { id_sesi: 'sesi-4', tipe: 'PENGGANTI' as const, tanggal: '2026-10-21', nama_kelas: 'SI-A', mata_kuliah: 'Jaringan Komputer', ruangan: 'Ruang 401', pengajar: 'Dr. Hendra Wijaya', waktu: '07:00-09:30' },
];

const DUMMY_PRESENSI = [
  {
    id_presensi: 'pres-1', id_sesi: 'sesi-1', nama_mata_kuliah: 'Pemrograman Web', nama_kelas: 'IF-A',
    nama_ruangan: 'Lab Komputer 1', nama_asdos: 'Budi Santoso', waktu_checkin: '2026-10-11T07:02:00Z',
    waktu_checkout: '2026-10-11T09:30:00Z', tanggal_mengajar: '2026-10-11', deskripsi_materi: 'Pengenalan HTML & CSS',
    tipe_absensi: 'HADIR', is_verified: true, is_paid: false, menggantikan: false,
  },
  {
    id_presensi: 'pres-2', id_sesi: 'sesi-2', nama_mata_kuliah: 'Basis Data', nama_kelas: 'SI-B',
    nama_ruangan: 'Lab Komputer 2', nama_asdos: 'Budi Santoso', waktu_checkin: '2026-10-12T09:32:00Z',
    waktu_checkout: '2026-10-12T12:00:00Z', tanggal_mengajar: '2026-10-12', deskripsi_materi: 'SQL Dasar',
    tipe_absensi: 'HADIR', is_verified: false, is_paid: false, menggantikan: false,
  },
  {
    id_presensi: 'pres-3', id_sesi: 'sesi-3', nama_mata_kuliah: 'Algoritma & Pemrograman', nama_kelas: 'IF-B',
    nama_ruangan: 'Ruang 301', nama_asdos: 'Siti Rahayu', waktu_checkin: '2026-10-13T13:01:00Z',
    waktu_checkout: '2026-10-13T15:30:00Z', tanggal_mengajar: '2026-10-13', deskripsi_materi: 'Rekursi',
    tipe_absensi: 'HADIR', is_verified: true, is_paid: true, menggantikan: false,
  },
];

const DUMMY_SUBSTITUTIONS = [
  {
    id: 'sub-1', status: 'PENDING' as const, reason: 'Dosen berhalangan hadir',
    coordinator_reason: null, substitute_date: '2026-10-25', original_date: '2026-10-18',
    time_slot: '07:00-09:30', room: 'Lab Komputer 1', id_dosen: 'lec-1',
    id_asdos1: 'asdos-1', id_asdos2: null, substitute_teacher: 'Budi Santoso',
    session: { id_sesi: 'sesi-1', nama_kelas: 'IF-A', mata_kuliah: 'Pemrograman Web', ruangan: 'Lab Komputer 1', pengajar: 'Dr. Hendra Wijaya', waktu: '07:00-09:30', tipe_jadwal: 'REGULAR' as const },
    created_at: '2026-10-10T10:00:00Z', updated_at: '2026-10-10T10:00:00Z',
  },
  {
    id: 'sub-2', status: 'VERIFIED' as const, reason: 'Ruangan pengganti',
    coordinator_reason: 'Disetujui', substitute_date: '2026-10-22', original_date: '2026-10-15',
    time_slot: '09:30-12:00', room: 'Ruang 301', id_dosen: null,
    id_asdos1: 'asdos-2', id_asdos2: null, substitute_teacher: 'Siti Rahayu',
    session: { id_sesi: 'sesi-2', nama_kelas: 'SI-B', mata_kuliah: 'Basis Data', ruangan: 'Lab Komputer 2', pengajar: 'Dr. Rina Puspita', waktu: '09:30-12:00', tipe_jadwal: 'REGULAR' as const },
    created_at: '2026-10-08T08:00:00Z', updated_at: '2026-10-09T09:00:00Z',
  },
];

const DUMMY_USER = {
  id: 'user-demo',
  email: 'demo@altar.ac.id',
  username: 'Demo User',
  id_asisten: 'asdos-1',
  id_koordinator: 'koor-1',
};

function paginate<T>(items: T[], page: number, limit: number) {
  const total = items.length;
  const total_page = Math.ceil(total / limit);
  const start = (page - 1) * limit;
  return { items: items.slice(start, start + limit), total, page, limit, total_page };
}

function ok<T>(data: T, message = 'Berhasil'): ActionResponse<T> {
  return { success: true, message, data };
}

async function request<T = unknown>(
  endpoint: string,
  options: { method?: string; body?: unknown } = {},
): Promise<ActionResponse<T>> {
  const method = options.method ?? 'GET';
  const ep = endpoint.split('?')[0];
  const qs = new URLSearchParams(endpoint.includes('?') ? endpoint.split('?')[1] : '');
  const page = Number(qs.get('page') ?? 1);
  const limit = Number(qs.get('limit') ?? 10);

  // mutating ops always succeed
  if (method === 'POST' || method === 'PATCH' || method === 'PUT' || method === 'DELETE') {
    if (ep.startsWith('/auth/login')) return ok({ token: 'dummy-token' } as T);
    if (ep.startsWith('/koor/kiosk/generate-qr')) return ok({ qr_token: 'DUMMY-QR-TOKEN-2026' } as T);
    if (ep.startsWith('/koor/kiosk/verify') || ep.startsWith('/koor/kiosk/deactivate'))
      return ok({ token: 'dummy-token' } as T);
    if (ep.startsWith('/presensi/check-in') || ep.startsWith('/presensi/online'))
      return ok(DUMMY_PRESENSI[0] as T, 'Check-in berhasil');
    if (ep.startsWith('/presensi/check-out'))
      return ok(DUMMY_PRESENSI[0] as T, 'Check-out berhasil');
    return ok(null as T, 'Berhasil');
  }

  // auth
  if (ep.startsWith('/auth/me')) return ok(DUMMY_USER as T);
  if (ep.startsWith('/auth/is-asdos') || ep.startsWith('/auth/is-koor') || ep.startsWith('/auth/logout'))
    return ok(null as T, 'OK');

  // asdos / koor / users
  if (ep.startsWith('/asdos/') && !ep.startsWith('/asdos/?')) {
    const id = ep.split('/')[2];
    const item = DUMMY_ASDOS.find(a => a.id_asdos === id) ?? DUMMY_ASDOS[0];
    return ok({ id: item.id_asdos, user_id: 'user-1', nim: item.nim, phone_number: '08123456789', user: { username: item.username, email: `${item.nim}@demo.com` } } as T);
  }
  if (ep === '/asdos' || ep === '/asdos/') return ok(DUMMY_ASDOS as T);
  if (ep === '/koor' || ep === '/koor/') return ok(DUMMY_KOOR as T);
  if (ep === '/users' || ep === '/users/') return ok(DUMMY_USERS as T);

  // data master
  if (ep === '/classes' || ep === '/classes/') return ok(paginate(DUMMY_KELAS, page, limit) as T);
  if (ep === '/courses' || ep === '/courses/') return ok(paginate(DUMMY_MK, page, limit) as T);
  if (ep === '/rooms' || ep === '/rooms/') return ok(paginate(DUMMY_RUANGAN, page, limit) as T);
  if (ep === '/semesters' || ep === '/semesters/') return ok(paginate(DUMMY_SEMESTER, page, limit) as T);
  if (ep === '/lecturers' || ep === '/lecturers/') return ok(paginate(DUMMY_LECTURERS, page, limit) as T);

  // sessions
  if (ep === '/sessions/me') return ok(DUMMY_SESSIONS_TODAY as T);
  if (ep === '/sessions' || ep === '/sessions/') return ok({ total: DUMMY_SESSION_TIMELINE.length, items: DUMMY_SESSION_TIMELINE } as T);

  // jadwal timeline
  if (ep.startsWith('/jadwal/my-sessions') || ep.startsWith('/jadwal/sessions'))
    return ok({ start_date: '2026-10-01', end_date: '2026-10-31', id_semester: 'sem-3', asdos_id: 'asdos-1', total: DUMMY_SESSION_TIMELINE.length, items: DUMMY_SESSION_TIMELINE } as T);

  // presensi
  if (ep === '/presensi/me') return ok(DUMMY_PRESENSI as T);
  if (ep.startsWith('/presensi/rekap/me')) return ok({ total_hadir: 8, total_tidak_hadir: 1 } as T);
  if (ep.startsWith('/presensi/rekap')) return ok([
    { id_asdos: 'asdos-1', nama_asdos: 'Budi Santoso', total_hadir: 8, total_tidak_hadir: 1 },
    { id_asdos: 'asdos-2', nama_asdos: 'Siti Rahayu', total_hadir: 7, total_tidak_hadir: 2 },
    { id_asdos: 'asdos-3', nama_asdos: 'Ahmad Fauzi', total_hadir: 6, total_tidak_hadir: 0 },
  ] as T);
  if (ep === '/presensi' || ep === '/presensi/') return ok(DUMMY_PRESENSI as T);

  // substitute sessions
  if (ep.startsWith('/substitute-sessions/me')) return ok({ items: DUMMY_SUBSTITUTIONS, total: DUMMY_SUBSTITUTIONS.length } as T);
  if (ep.match(/^\/substitute-sessions\/[^/]+$/)) {
    const id = ep.split('/')[2];
    return ok((DUMMY_SUBSTITUTIONS.find(s => s.id === id) ?? DUMMY_SUBSTITUTIONS[0]) as T);
  }
  if (ep === '/substitute-sessions' || ep === '/substitute-sessions/')
    return ok({ items: DUMMY_SUBSTITUTIONS, total: DUMMY_SUBSTITUTIONS.length } as T);

  // kiosk
  if (ep.startsWith('/koor/kiosk/generate-qr')) return ok({ qr_token: 'DUMMY-QR-TOKEN-2026' } as T);

  return ok(null as T);
}

/* eslint-disable @typescript-eslint/no-unused-vars */
export const apiClient = {
  get: <T = unknown>(endpoint: string, _o?: object) => request<T>(endpoint, { method: 'GET' }),
  post: <T = unknown>(endpoint: string, body?: unknown, _o?: object) => request<T>(endpoint, { method: 'POST', body }),
  put: <T = unknown>(endpoint: string, body?: unknown, _o?: object) => request<T>(endpoint, { method: 'PUT', body }),
  patch: <T = unknown>(endpoint: string, body?: unknown, _o?: object) => request<T>(endpoint, { method: 'PATCH', body }),
  delete: <T = unknown>(endpoint: string, _o?: object) => request<T>(endpoint, { method: 'DELETE' }),
};
/* eslint-enable @typescript-eslint/no-unused-vars */
