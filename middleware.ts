// // all code is perfect. it's totally protected route

// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// // Corrected path pattern
// const isProtectedRoute = createRouteMatcher(["/", "/profile(.*)"]);
// // const isProtectedRoute = createRouteMatcher([""]);

// // Define public routes (e.g., webhooks)
// const isPublicRoute = createRouteMatcher(["/api/webhooks/clerk"]);

// export default clerkMiddleware(async (auth, req) => {
//   console.log("Request URL:", req.url); // Debugging line

//   // Skip authentication on public route
//   if (isPublicRoute(req)) {
//     console.log("✅ Allowing public route:", req.url);
//     return; // Skip authentication for webhooks
//   }

//   // If the request path starts with "/api/webhooks/clerk", don't run auth protection
//   if (req.nextUrl.pathname.startsWith("/api/webhooks/clerk")) {
//     return;
//   }

//   if (isProtectedRoute(req)) {
//     console.log("Route is protected:", req.url); // Debugging line
//     await auth.protect(); // Ensure this is awaited if it's async
//   }
// });

// // export const config = {
// //   matcher: [
// //     // Skip Next.js internals and all static files, unless found in search params
// //     "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
// //     // Always run for API routes
// //     "/(api|trpc)(.*)",
// //   ],
// // };

// export const config = {
//   matcher: [
//     // Skip Next.js internals and all static files, unless found in search params
//     "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
//     // Always run for API routes
//     "/(api|trpc)(.*)",
//   ],
// };

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Corrected path pattern
const isProtectedRoute = createRouteMatcher(["/", "/profile(.*)"]);

// Define public routes (e.g., webhooks)
const isPublicRoute = createRouteMatcher(["/api/webhooks/clerk"]);

export default clerkMiddleware(async (auth, req) => {
  // Add this log to verify middleware is running
  console.log("Middleware triggered for:", req.url);
  console.log("Clerk middleware is running");
  console.log("Request received:", req.method, req.url);
  // Skip authentication on public route
  if (isPublicRoute(req)) {
    console.log("✅ Allowing public route:", req.url);
    return; // Skip authentication for webhooks
  }

  // If the request path starts with "/api/webhooks/clerk", don't run auth protection
  if (req.nextUrl.pathname.startsWith("/api/webhooks/clerk")) {
    return;
  }

  if (isProtectedRoute(req)) {
    console.log("Route is protected:", req.url); // Debugging line
    await auth.protect(); // Ensure this is awaited if it's async
  }
});

// export const config = {
//   matcher: ["/(api|trpc)(.*)"], // Make sure this is set correctly
// };

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)", // This line ensures that the middleware runs for API routes
  ],
};
