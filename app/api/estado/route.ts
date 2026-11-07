import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    abierto: true,
    cafesDisponibles: 4,
    proximaCata: '2026-08-28',
  });
}