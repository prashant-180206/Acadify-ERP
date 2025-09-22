import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

// 👉 GET all or one attendance record
export async function GET(req) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get("id")

  try {
    if (id) {
      const record = await prisma.attendance.findUnique({
        where: { id: parseInt(id) },
        include: { course: true, teacher: true },
      })
      if (!record) {
        return NextResponse.json({ error: "Attendance record not found" }, { status: 404 })
      }
      return NextResponse.json(record)
    } else {
      const records = await prisma.attendance.findMany({
        include: { course: true, teacher: true },
      })
      return NextResponse.json(records)
    }
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

// 👉 POST create attendance record
export async function POST(req) {
  try {
    const body = await req.json()
    const { course_id, teacher_id, date, present } = body

    const record = await prisma.attendance.create({
      data: {
        course_id,
        teacher_id,
        date: new Date(date),
        present,
      },
    })

    return NextResponse.json(record, { status: 201 })
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 })
  }
}

// 👉 PUT update attendance record
export async function PUT(req) {
  try {
    const body = await req.json()
    if (!body.id) {
      return NextResponse.json({ error: "id is required" }, { status: 400 })
    }

    const updated = await prisma.attendance.update({
      where: { id: body.id },
      data: {
        course_id: body.course_id,
        teacher_id: body.teacher_id,
        date: body.date ? new Date(body.date) : undefined,
        present: body.present,
      },
    })

    return NextResponse.json(updated)
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 })
  }
}

// 👉 DELETE attendance record
export async function DELETE(req) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get("id")

  if (!id) return NextResponse.json({ error: "id is required" }, { status: 400 })

  try {
    await prisma.attendance.delete({ where: { id: parseInt(id) } })
    return NextResponse.json({ message: "Attendance record deleted" })
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 })
  }
}
