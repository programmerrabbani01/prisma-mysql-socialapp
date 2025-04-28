"use server";

import prisma from "@/lib/prisma.ts";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function ProfileCard() {
  // Fetch authenticated user
  const session = await auth();
  // console.log("🔍 Clerk Auth Session:", session);

  if (!session?.userId) {
    console.error("🚨 User is not authenticated");
    return { message: "Unauthorized", errors: "User ID is missing" };
  }

  const user = await prisma.user.findFirst({
    where: {
      id: session?.userId,
    },
    include: {
      _count: {
        select: {
          followers: true,
        },
      },
    },
  });

  if (!user) return notFound();

  console.log("user id is", user);

  const isValidCover =
    user.coverPic &&
    user.coverPic.trim() !== "" &&
    user.coverPic !== "No image";

  // const coverPicSrc = isValidCover ? user.coverPic : "/images/cover.jpg";

  const coverPicSrc = isValidCover ? user.coverPic! : "/images/cover.jpg";

  return (
    <>
      <div className="p-4 bg-white rounded-lg shadow-md flex flex-col gap-6">
        <div className="h-20 relative">
          <Image
            src={coverPicSrc}
            alt=""
            fill
            className="rounded-md object-cover"
          />
          <Image
            src={user.avatar || "/images/profilePhoto.jpg"}
            alt=""
            width={48}
            height={48}
            className="rounded-full w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10 object-cover"
          />
        </div>
        <div className="h-20 flex flex-col items-center gap-2">
          <span className="font-Exo2 font-semibold">
            {user.name && user.surName
              ? user.name + " " + user.surName
              : user.userName}
          </span>
          <div className="flex items-center gap-4">
            <div className="flex gap-1">
              <Image
                src="/images/profilePhoto.jpg"
                alt=""
                width={12}
                height={12}
                className="rounded-full w-3 h-3 object-cover"
              />
              <Image
                src="/images/profilePhoto.jpg"
                alt=""
                width={12}
                height={12}
                className="rounded-full w-3 h-3 object-cover"
              />
              <Image
                src="/images/profilePhoto.jpg"
                alt=""
                width={12}
                height={12}
                className="rounded-full w-3 h-3 object-cover"
              />
            </div>
            <span className="text-xs text-gray-500 font-FiraCode font-medium">
              {user._count.followers} Flowers
            </span>
          </div>
          <button className="p-2 rounded-md text-xs bg-blue-500 text-white font-FiraCode font-medium">
            My Profile
          </button>
        </div>
      </div>
    </>
  );
}
