
import { NextResponse } from "next/server";
import { COOKIE_NAME, verifySessionToken } from "@/lib/session";

export function proxy(request) {
  const token = request.cookies.get(COOKIE_NAME)?.value;
  const session = verifySessionToken(token);
  const pathname = request.nextUrl.pathname;

  if (pathname.startsWith("/kitchen")) {
    if (!session) {
      const signInUrl = new URL("/sign-in", request.url);
      signInUrl.searchParams.set("next", pathname);
      return NextResponse.redirect(signInUrl);
    }

    if (session.role !== "staff") {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  if (
    (pathname.startsWith("/checkout") ||
      pathname.startsWith("/orders")) &&
    !session
  ) {
    const signInUrl = new URL("/sign-in", request.url);
    signInUrl.searchParams.set("next", pathname);
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/checkout/:path*", "/orders/:path*", "/kitchen/:path*"],
};
