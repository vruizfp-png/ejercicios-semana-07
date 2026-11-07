import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre, personas } = body;

    // Validar que exista el nombre y que personas sea un número entre 1 y 6
    if (!nombre || typeof personas !== 'number' || personas < 1 || personas > 6) {
      return NextResponse.json(
        { error: 'Datos incorrectos. Se requiere nombre y número de personas entre 1 y 6.' },
        { status: 400 }
      );
    }

    // Si todo es correcto, responder con 201 Created
    return NextResponse.json(
      { reserva: { nombre, personas } },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { error: 'Formato JSON inválido' },
      { status: 400 }
    );
  }
}