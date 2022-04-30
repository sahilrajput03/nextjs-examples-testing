import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
// pages/_middleware.ts

export function middleware(req, res) {
  //   const { pathname } = req.nextUrl;
  //   console.log("hello world.. 123", pathname);
  //   console.log(window);
  console.log(process.browser);
  //   console.log("i am code...");
  //   NextResponse.next();
  //   return new Response("Hello, world!");
}
