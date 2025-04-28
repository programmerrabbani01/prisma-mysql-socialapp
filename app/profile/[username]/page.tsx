import Feed from "@/components/Feed/Feed.tsx";
import HomeLeft from "@/components/HomeLeft/HomeLeft.tsx";
import HomeRight from "@/components/HomeRight/HomeRight.tsx";
import prisma from "@/lib/prisma.ts";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import { notFound } from "next/navigation";
// import ProfileMain from "@/components/Profile/ProfileMain.tsx";

export default async function ProfilePage({
  params,
}: {
  params: { username: string };
}) {
  const { username } = await params;

  // console.log("Username is like that", username);

  const user = await prisma.user.findFirst({
    where: {
      userName: username,
    },
    include: {
      _count: {
        select: {
          posts: true,
          followers: true,
          followings: true,
        },
      },
    },
  });

  if (!user) return notFound();

  // Fetch authenticated user
  const session = await auth();
  // console.log("🔍 Clerk Auth Session:", session);

  if (!session?.userId) {
    console.error("🚨 User is not authenticated");
    return { message: "Unauthorized", errors: "User ID is missing" };
  }

  let isBlocked;

  if (session?.userId) {
    const res = await prisma.blockUser.findFirst({
      where: {
        blockerId: user.id,
        blockedId: session?.userId,
      },
    });

    if (res) isBlocked = true;
  } else {
    isBlocked = false;
  }

  if (isBlocked) return notFound();

  const isValidCover =
    user.coverPic &&
    user.coverPic.trim() !== "" &&
    user.coverPic !== "No image";

  // const coverPicSrc = isValidCover ? user.coverPic : "/images/cover.jpg";

  const coverPicSrc = isValidCover ? user.coverPic! : "/images/cover.jpg";

  return (
    <>
      <div className="flex gap-6 pt-6">
        {/* left */}
        <div className="hidden xl:block w-[20%]">
          <HomeLeft type="profile" />
        </div>
        {/* center */}
        <div className="w-full lg:w-[70%] xl:w-[50%]">
          <div className="flex flex-col gap-6">
            {/* <ProfileMain /> */}
            <div className="flex flex-col items-center justify-center">
              <div className="w-full h-64 relative">
                <Image
                  src={coverPicSrc}
                  alt=""
                  fill
                  className="rounded-md object-cover"
                />
                <Image
                  src={user.avatar || "/images/profilePhoto.jpg"}
                  alt=""
                  width={128}
                  height={128}
                  className="object-cover w-32 h-32 rounded-full absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white"
                />
              </div>
              <h1 className="text-2xl font-Exo2 font-bold mt-20 mb-4">
                {user.name && user.surName
                  ? user.name + " " + user.surName
                  : user.userName}
              </h1>
              <div className="flex items-center justify-center gap-12 mb-4">
                <div className="flex flex-col items-center">
                  <span className="font-Exo2 font-bold">
                    {user._count.posts}
                  </span>
                  <span className="text-sm font-FiraCode font-medium">
                    Posts
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-Exo2 font-bold">
                    {user._count.followers}
                  </span>
                  <span className="text-sm font-FiraCode font-medium">
                    Followers
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-Exo2 font-bold">
                    {user._count.followings}
                  </span>
                  <span className="text-sm font-FiraCode font-medium">
                    Following
                  </span>
                </div>
              </div>
            </div>
            <Feed />
          </div>
        </div>
        {/* right */}
        <div className="hidden lg:block w-[30%]">
          <HomeRight user={user} />
        </div>
      </div>
    </>
  );
}
