import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

// 👉 GET all or one teacher_course (if ?id= given)
export async function GET(req) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get("id")

  try {
    if (id) {
      const tc = await prisma.teacher_course.findUnique({
        where: { id: parseInt(id) },
        include: { teacher: true, course: true },
      })
      if (!tc) {
        return NextResponse.json({ error: "Teacher-Course assignment not found" }, { status: 404 })
      }
      return NextResponse.json(tc)
    } else {
      const tcs = await prisma.teacher_course.findMany({
        include: { teacher: true, course: true },
      })
      return NextResponse.json(tcs)
    }
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

// 👉 POST assign teacher to course
export async function POST(req) {
  try {
    const body = await req.json()
    const { teacher_id, course_id } = body

    const assignment = await prisma.teacher_course.create({
      data: { teacher_id, course_id },
    })

    return NextResponse.json(assignment, { status: 201 })
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 })
  }
}

// 👉 PUT (usually not needed, but allows changing course/teacher)
export async function PUT(req) {
  try {
    const body = await req.json()
    if (!body.id) {
      return NextResponse.json({ error: "id is required" }, { status: 400 })
    }

    const updated = await prisma.teacher_course.update({
      where: { id: body.id },
      data: { teacher_id: body.teacher_id, course_id: body.course_id },
    })

    return NextResponse.json(updated)
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 })
  }
}

// 👉 DELETE assignment
export async function DELETE(req) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get("id")

  if (!id) return NextResponse.json({ error: "id is required" }, { status: 400 })

  try {
    await prisma.teacher_course.delete({ where: { id: parseInt(id) } })
    return NextResponse.json({ message: "Assignment deleted" })
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 })
  }
}
