// all code is perfect. it's totally protected route

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Corrected path pattern
const isProtectedRoute = createRouteMatcher(["/", "/profile(.*)"]);
// const isProtectedRoute = createRouteMatcher([""]);

export default clerkMiddleware(async (auth, req) => {
  console.log("Request URL:", req.url); // Debugging line
  if (isProtectedRoute(req)) {
    console.log("Route is protected:", req.url); // Debugging line
    await auth.protect(); // Ensure this is awaited if it's async
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
