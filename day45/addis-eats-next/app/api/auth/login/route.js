
import { NextResponse } from "next/server";
import {
  COOKIE_NAME,
  SESSION_DURATION,
  createSessionToken,
} from "@/lib/session";

export const runtime = "nodejs";

export async function POST(request) {
  try {
    const body = await request.json();

    const email =
      typeof body.email === "string"
        ? body.email.trim().toLowerCase()
        : "";

    const password =
      typeof body.password === "string" ? body.password : "";

    const role = body.role === "staff" ? "staff" : "customer";

    const expectedEmail =
      role === "staff"
        ? process.env.STAFF_USER_EMAIL
        : process.env.DEMO_USER_EMAIL;

    const expectedPassword =
      role === "staff"
        ? process.env.STAFF_USER_PASSWORD
        : process.env.DEMO_USER_PASSWORD;

    if (!expectedEmail || !expectedPassword) {
      return NextResponse.json(
        { message: "This account is not configured on the server." },
        { status: 500 }
      );
    }

    if (
      email !== expectedEmail.trim().toLowerCase() ||
      password !== expectedPassword
    ) {
      return NextResponse.json(
        { message: "Email or password is incorrect." },
        { status: 401 }
      );
    }

    const token = createSessionToken(email, role);

    const response = NextResponse.json({
      success: true,
      message: "Signed in successfully.",
      role,
    });

    response.cookies.set(COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: SESSION_DURATION,
    });

    return response;
  } catch {
    return NextResponse.json(
      { message: "Unable to sign in. Please try again." },
      { status: 400 }
    );
  }
}
