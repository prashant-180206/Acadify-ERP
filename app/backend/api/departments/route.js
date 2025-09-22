import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

// only admins can create
export const POST = withRole(["ADMIN"], async (req) => {
  const body = await req.json()
  const department = await prisma.department.create({ data: body })
  return NextResponse.json(department, { status: 201 })
})

// but everyone can read
export async function GET() {
  const departments = await prisma.department.findMany()
  return NextResponse.json(departments)
}
// 👉 GET all or one department (if ?id= given)
export async function GET(req) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get("id")

  try {
    if (id) {
      const department = await prisma.department.findUnique({
        where: { d_id: parseInt(id) },
      })
      if (!department) {
        return NextResponse.json({ error: "Department not found" }, { status: 404 })
      }
      return NextResponse.json(department)
    } else {
      const departments = await prisma.department.findMany()
      return NextResponse.json(departments)
    }
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

// 👉 POST create department
export async function POST(req) {
  try {
    const body = await req.json()
    const { d_id, name, HodId, Email } = body

    const department = await prisma.department.create({
      data: { d_id, name, HodId, Email },
    })

    return NextResponse.json(department, { status: 201 })
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 })
  }
}

// 👉 PUT update department
export async function PUT(req) {
  try {
    const body = await req.json()
    if (!body.d_id) {
      return NextResponse.json({ error: "d_id is required" }, { status: 400 })
    }

    const updated = await prisma.department.update({
      where: { d_id: body.d_id },
      data: body,
    })

    return NextResponse.json(updated)
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 })
  }
}

// 👉 DELETE department
export async function DELETE(req) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get("id")

  if (!id) return NextResponse.json({ error: "id is required" }, { status: 400 })

  try {
    await prisma.department.delete({ where: { d_id: parseInt(id) } })
    return NextResponse.json({ message: "Department deleted" })
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 })
  }
}
