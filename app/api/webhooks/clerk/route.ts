import prisma from "@/lib/prisma.ts";
import { verifyWebhook } from "@clerk/nextjs/webhooks";

// ngrok http 3000 -> need always run this

export async function POST(req: Request) {
  try {
    const evt = await verifyWebhook(req);

    // Do something with payload
    // For this guide, log payload to console
    const { id, image_url } = evt.data;
    const userName = evt.data.username || "Anonymous";
    const eventType = evt.type;
    // console.log(
    //   `Received webhook with ID ${id} and event type of ${eventType}`
    // );
    // console.log("Webhook payload:", evt.data);

    if (eventType === "user.created") {
      try {
        await prisma.user.create({
          data: {
            id,
            userName,
            avatar: image_url || "No Image",
            coverPic: "No image",
          },
        });
        return new Response("User Created !", { status: 200 });
      } catch (error) {
        console.log(error);
        return new Response("Failed to create user!", { status: 500 });
      }
    }

    if (eventType === "user.updated") {
      try {
        await prisma.user.update({
          where: {
            id,
          },
          data: {
            userName,
            avatar: image_url || "No Image",
          },
        });
        return new Response("User updated !", { status: 200 });
      } catch (error) {
        console.log(error);
        return new Response("Failed to create user!", { status: 500 });
      }
    }

    return new Response("Webhook received", { status: 200 });
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error verifying webhook", { status: 400 });
  }
}
