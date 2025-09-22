import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

// 👉 GET all or one student (if ?id= given)
export async function GET(req) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get("id") // PRN_Number

  try {
    if (id) {
      const student = await prisma.students.findUnique({
        where: { PRN_Number: parseInt(id) },
      })
      if (!student) {
        return NextResponse.json({ error: "Student not found" }, { status: 404 })
      }
      return NextResponse.json(student)
    } else {
      const students = await prisma.students.findMany()
      return NextResponse.json(students)
    }
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

// 👉 POST create student
export async function POST(req) {
  try {
    const body = await req.json()

    const student = await prisma.students.create({
      data: body,
    })

    return NextResponse.json(student, { status: 201 })
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 })
  }
}

// 👉 PUT update student
export async function PUT(req) {
  try {
    const body = await req.json()
    if (!body.PRN_Number) {
      return NextResponse.json({ error: "PRN_Number is required" }, { status: 400 })
    }

    const updated = await prisma.students.update({
      where: { PRN_Number: body.PRN_Number },
      data: body,
    })

    return NextResponse.json(updated)
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 })
  }
}

// 👉 DELETE student
export async function DELETE(req) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get("id")

  if (!id) return NextResponse.json({ error: "PRN_Number is required" }, { status: 400 })

  try {
    await prisma.students.delete({ where: { PRN_Number: parseInt(id) } })
    return NextResponse.json({ message: "Student deleted" })
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 })
  }
}
