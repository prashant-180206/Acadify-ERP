import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

// 👉 GET all or one submission
export async function GET(req) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get("id")

  try {
    if (id) {
      const submission = await prisma.assignment_submission.findUnique({
        where: { submission_id: parseInt(id) },
      })
      if (!submission) {
        return NextResponse.json({ error: "Submission not found" }, { status: 404 })
      }
      return NextResponse.json(submission)
    } else {
      const submissions = await prisma.assignment_submission.findMany()
      return NextResponse.json(submissions)
    }
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

// 👉 POST create submission
export async function POST(req) {
  try {
    const body = await req.json()
    const { assignment_id, student_course_code, submissionDate, status, grade, remarks } = body

    const submission = await prisma.assignment_submission.create({
      data: {
        assignment_id,
        student_course_code,
        submissionDate: submissionDate ? new Date(submissionDate) : null,
        status,
        grade,
        remarks,
      },
    })

    return NextResponse.json(submission, { status: 201 })
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 })
  }
}

// 👉 PUT update submission
export async function PUT(req) {
  try {
    const body = await req.json()
    if (!body.submission_id) {
      return NextResponse.json({ error: "submission_id is required" }, { status: 400 })
    }

    const updated = await prisma.assignment_submission.update({
      where: { submission_id: body.submission_id },
      data: {
        assignment_id: body.assignment_id,
        student_course_code: body.student_course_code,
        submissionDate: body.submissionDate ? new Date(body.submissionDate) : undefined,
        status: body.status,
        grade: body.grade,
        remarks: body.remarks,
      },
    })

    return NextResponse.json(updated)
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 })
  }
}

// 👉 DELETE submission
export async function DELETE(req) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get("id")

  if (!id) return NextResponse.json({ error: "submission_id is required" }, { status: 400 })

  try {
    await prisma.assignment_submission.delete({ where: { submission_id: parseInt(id) } })
    return NextResponse.json({ message: "Submission deleted" })
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 })
  }
}
