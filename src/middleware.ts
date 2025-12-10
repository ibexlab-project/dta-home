import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const MOBILE_USER_AGENT =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const userAgent = request.headers.get("user-agent") || "";

  // 정적 자산 및 API는 리다이렉션하지 않음
  const skipRedirect =
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/public") ||
    pathname.includes(".");

  if (skipRedirect) return NextResponse.next();

  // 이미 모바일 경로이면 그대로 통과
  if (pathname.startsWith("/m/")) return NextResponse.next();

  const isMobile = MOBILE_USER_AGENT.test(userAgent);
  if (!isMobile) return NextResponse.next();

  // locale 및 나머지 경로 계산
  let locale = "en";
  let restPath = "";

  const localeMatch = pathname.match(/^\/(en|th)(\/.*)?$/);
  if (localeMatch) {
    locale = localeMatch[1];
    restPath = localeMatch[2] || "";
  } else if (pathname === "/") {
    locale = "en";
    restPath = "";
  } else {
    return NextResponse.next();
  }

  const redirectUrl = new URL(`/m/${locale}${restPath}`, request.url);
  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt).*)"],
};

