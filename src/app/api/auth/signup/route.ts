import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  try {
    const { email, password, name } = await req.json();
    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
    }
    // Check if user exists
    const existing = await db.user.findUnique({ where: { email } });
    if (existing) {
      return NextResponse.json({ error: "An account with this email already exists" }, { status: 409 });
    }
    // Hash password (simple SHA-256 for demo; use bcrypt in production)
    const hashedPassword = crypto.createHash("sha256").update(password).digest("hex");
    const user = await db.user.create({
      data: { email, name: name || null, password: hashedPassword, provider: "credentials" },
    });
    return NextResponse.json({
      user: { id: user.id, email: user.email, name: user.name },
    });
  } catch {
    return NextResponse.json({ error: "Failed to create account" }, { status: 500 });
  }
}
