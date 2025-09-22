import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

// 👉 GET all or one lecture (if ?id= given)
export async function GET(req) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get("id")

  try {
    if (id) {
      const lecture = await prisma.lecture.findUnique({
        where: { id: parseInt(id) },
        include: { course: true, teacher: true },
      })
      if (!lecture) {
        return NextResponse.json({ error: "Lecture not found" }, { status: 404 })
      }
      return NextResponse.json(lecture)
    } else {
      const lectures = await prisma.lecture.findMany({
        include: { course: true, teacher: true },
      })
      return NextResponse.json(lectures)
    }
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

// 👉 POST create lecture
export async function POST(req) {
  try {
    const body = await req.json()
    const { course_id, teacher_id, lecture_date, topic } = body

    const lecture = await prisma.lecture.create({
      data: {
        course_id,
        teacher_id,
        lecture_date: new Date(lecture_date), // ensure DateTime
        topic,
      },
    })

    return NextResponse.json(lecture, { status: 201 })
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 })
  }
}

// 👉 PUT update lecture
export async function PUT(req) {
  try {
    const body = await req.json()
    if (!body.id) {
      return NextResponse.json({ error: "id is required" }, { status: 400 })
    }

    const updated = await prisma.lecture.update({
      where: { id: body.id },
      data: {
        course_id: body.course_id,
        teacher_id: body.teacher_id,
        lecture_date: body.lecture_date ? new Date(body.lecture_date) : undefined,
        topic: body.topic,
      },
    })

    return NextResponse.json(updated)
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 })
  }
}

// 👉 DELETE lecture
export async function DELETE(req) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get("id")

  if (!id) return NextResponse.json({ error: "id is required" }, { status: 400 })

  try {
    await prisma.lecture.delete({ where: { id: parseInt(id) } })
    return NextResponse.json({ message: "Lecture deleted" })
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 })
  }
}
