import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json({ error: "Username and password are required" }, { status: 400 });
    }
    const hashedPassword = crypto.createHash("sha256").update(password).digest("hex");
    const user = await db.user.findUnique({ where: { email } });
    if (!user || user.password !== hashedPassword) {
      return NextResponse.json({ error: "Invalid username or password" }, { status: 401 });
    }
    return NextResponse.json({
      user: { id: user.id, email: user.email, name: user.name },
    });
  } catch {
    return NextResponse.json({ error: "Login failed" }, { status: 500 });
  }
}
