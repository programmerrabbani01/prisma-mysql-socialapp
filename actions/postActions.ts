"use server";

import prisma from "@/lib/prisma.ts";
import { auth } from "@clerk/nextjs/server";

export const createAPost = async (prevState, formData) => {
  console.log("✅ createAPost function is running...");

  try {
    // Fetch authenticated user
    const session = await auth();
    console.log("🔍 Clerk Auth Session:", session);

    if (!session?.userId) {
      console.error("🚨 User is not authenticated");
      return { message: "Unauthorized", errors: "User ID is missing" };
    }

    console.log("🆔 User ID:", session.userId);

    // Ensure formData is handled properly
    if (!(formData instanceof FormData)) {
      console.error("🚨 formData is not FormData");
      return { message: "Invalid form data", errors: "Bad request format" };
    }

    const desc = formData.get("desc");
    if (!desc) {
      return { message: "Description is required", errors: "Missing desc" };
    }

    // Create post
    const newPost = await prisma.post.create({
      data: {
        userId: session.userId,
        desc: desc,
      },
    });

    console.log("📝 New post created:", newPost);
    return { message: "Success", post: newPost };
  } catch (error) {
    console.error("❌ Error in createAPost:", error);
    return { message: "Failed to create new post", errors: error.message };
  }
};
