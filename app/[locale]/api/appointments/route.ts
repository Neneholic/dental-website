import { NextResponse } from 'next/server'
import { prisma } from '../../lib/db'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, service, date, message } = body

    // Validación básica
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Nombre y email son requeridos' },
        { status: 400 }
      )
    }

    // Crear cita en la base de datos
    const appointment = await prisma.appointment.create({
      data: {
        name,
        email,
        phone,
        service,
        date: date ? new Date(date) : null,
        message,
      },
    })

    return NextResponse.json(
      { message: 'Cita creada exitosamente', appointment },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error creating appointment:', error)
    return NextResponse.json(
      { error: 'Error al crear la cita' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const appointments = await prisma.appointment.findMany({
      orderBy: { createdAt: 'desc' },
    })
    return NextResponse.json(appointments)
  } catch (error) {
    console.error('Error fetching appointments:', error)
    return NextResponse.json(
      { error: 'Error al obtener citas' },
      { status: 500 }
    )
  }
}
