import { getServerSession } from "next-auth/next"
import { NextResponse } from "next/server"
import authOptions from "../app/api/auth/[...nextauth]/authOptions"

export function withRole(allowedRoles, handler) {
  return async (req, ...args) => {
    const session = await getServerSession(authOptions)

    if (!session || !allowedRoles.includes(session.user.role)) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 })
    }

    return handler(req, ...args)
  }
}
