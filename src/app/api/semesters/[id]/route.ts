import { NextResponse } from 'next/server';

// DUMMY MODE
export async function DELETE() {
  return NextResponse.json({ success: true, message: 'Berhasil dihapus' });
}
