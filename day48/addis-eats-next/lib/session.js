
import "server-only";
import { createHmac, timingSafeEqual } from "node:crypto";

const COOKIE_NAME = "addis_eats_session";
const SESSION_DURATION = 60 * 60 * 24; // 24 hours

function getSecret() {
  const secret = process.env.SESSION_SECRET;

  if (!secret || secret.length < 32) {
    throw new Error(
      "SESSION_SECRET must be set to a private secret of at least 32 characters."
    );
  }

  return secret;
}

function sign(value) {
  return createHmac("sha256", getSecret())
    .update(value)
    .digest("base64url");
}

export function createSessionToken(email, role = "customer") {
  const payload = {
    email,
    role,
    exp: Math.floor(Date.now() / 1000) + SESSION_DURATION,
  };

  const encodedPayload = Buffer.from(JSON.stringify(payload)).toString(
    "base64url"
  );

  return `${encodedPayload}.${sign(encodedPayload)}`;
}

export function verifySessionToken(token) {
  if (typeof token !== "string") return null;

  const parts = token.split(".");
  if (parts.length !== 2) return null;

  const [payload, suppliedSignature] = parts;

  try {
    const expectedSignature = sign(payload);
    const supplied = Buffer.from(suppliedSignature);
    const expected = Buffer.from(expectedSignature);

    if (
      supplied.length !== expected.length ||
      !timingSafeEqual(supplied, expected)
    ) {
      return null;
    }

    const session = JSON.parse(
      Buffer.from(payload, "base64url").toString("utf8")
    );

    if (
      typeof session.email !== "string" ||
      !["customer", "staff"].includes(session.role) ||
      !Number.isFinite(session.exp) ||
      session.exp <= Math.floor(Date.now() / 1000)
    ) {
      return null;
    }

    return {
      email: session.email,
      role: session.role,
      exp: session.exp,
    };
  } catch {
    return null;
  }
}

export { COOKIE_NAME, SESSION_DURATION };
