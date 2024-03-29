/* eslint-disable @next/next/no-server-import-in-page */
// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(req: NextRequest) {

  const path = req.cookies.get("route") || "/"

  return NextResponse.rewrite(new URL(path, req.url))
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/',
}