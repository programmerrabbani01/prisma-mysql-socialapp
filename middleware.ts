import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Fix: Properly close the parentheses in the regex pattern
const isProtectedRoute = createRouteMatcher(["/profile(.*)"]);

export default clerkMiddleware(async (authPromise, req) => {
  const auth = await authPromise; // Await the resolved auth object
  if (isProtectedRoute(req)) {
    auth.protect(); // Now you can access the protect method
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
