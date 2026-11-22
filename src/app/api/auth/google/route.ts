export const dynamic = "force-static";

import { NextResponse } from "next/server";
import { db } from "@/lib/db";

// Simulated Google OAuth login.
// In production, this would use NextAuth.js with the Google provider,
// requiring GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET env vars.
// For now, it creates/returns a demo Google user.
export async function POST() {
  try {
    const email = "nikki.google.user@gmail.com";
    const name = "Nikki Learner";
    let user = await db.user.findUnique({ where: { email } });
    if (!user) {
      user = await db.user.create({
        data: { email, name, provider: "google", image: null },
      });
    }
    return NextResponse.json({
      user: { id: user.id, email: user.email, name: user.name },
    });
  } catch {
    return NextResponse.json({ error: "Google login failed" }, { status: 500 });
  }
}
