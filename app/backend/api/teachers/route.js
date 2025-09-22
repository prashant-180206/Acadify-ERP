import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

// 👉 GET all or one teacher (if ?id= given)
export async function GET(req) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get("id") // t_id

  try {
    if (id) {
      const teacher = await prisma.teacher.findUnique({
        where: { t_id: parseInt(id) },
      })
      if (!teacher) {
        return NextResponse.json({ error: "Teacher not found" }, { status: 404 })
      }
      return NextResponse.json(teacher)
    } else {
      const teachers = await prisma.teacher.findMany()
      return NextResponse.json(teachers)
    }
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

// 👉 POST create teacher
export async function POST(req) {
  try {
    const body = await req.json()

    const teacher = await prisma.teacher.create({
      data: body,
    })

    return NextResponse.json(teacher, { status: 201 })
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 })
  }
}

// 👉 PUT update teacher
export async function PUT(req) {
  try {
    const body = await req.json()
    if (!body.t_id) {
      return NextResponse.json({ error: "t_id is required" }, { status: 400 })
    }

    const updated = await prisma.teacher.update({
      where: { t_id: body.t_id },
      data: body,
    })

    return NextResponse.json(updated)
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 })
  }
}

// 👉 DELETE teacher
export async function DELETE(req) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get("id")

  if (!id) return NextResponse.json({ error: "t_id is required" }, { status: 400 })

  try {
    await prisma.teacher.delete({ where: { t_id: parseInt(id) } })
    return NextResponse.json({ message: "Teacher deleted" })
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 })
  }
}
