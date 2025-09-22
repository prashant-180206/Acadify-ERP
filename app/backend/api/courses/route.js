import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

// GET all courses
export async function GET(req) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get("id")

  try {
    if (id) {
      // return one course
      const course = await prisma.course.findUnique({
        where: { course_id: parseInt(id) },
      })
      if (!course) return NextResponse.json({ error: "Course not found" }, { status: 404 })
      return NextResponse.json(course)
    } else {
      // return all courses
      const courses = await prisma.course.findMany()
      return NextResponse.json(courses)
    }
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

// POST create course
export async function POST(req) {
  try {
    const body = await req.json()
    const course = await prisma.course.create({ data: body })
    return NextResponse.json(course, { status: 201 })
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 })
  }
}

// PUT update course
export async function PUT(req) {
  try {
    const body = await req.json()
    if (!body.course_id) {
      return NextResponse.json({ error: "course_id is required" }, { status: 400 })
    }

    const updated = await prisma.course.update({
      where: { course_id: body.course_id },
      data: body,
    })
    return NextResponse.json(updated)
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 })
  }
}

// DELETE course
export async function DELETE(req) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get("id")

  if (!id) return NextResponse.json({ error: "id is required" }, { status: 400 })

  try {
    await prisma.course.delete({ where: { course_id: parseInt(id) } })
    return NextResponse.json({ message: "Course deleted" })
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 })
  }
}
