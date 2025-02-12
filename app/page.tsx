import AddPost from "@/components/AddPost/AddPost.tsx";
import Feed from "@/components/Feed/Feed.tsx";
import HomeLeft from "@/components/HomeLeft/HomeLeft.tsx";
import HomeRight from "@/components/HomeRight/HomeRight.tsx";
import Stories from "@/components/Stories/Stories.tsx";

export default function Home() {
  return (
    <>
      <div className="flex gap-6 pt-6">
        {/* left */}
        <div className="hidden xl:block w-[20%]">
          <HomeLeft />
        </div>
        {/* center */}
        <div className="w-full lg:w-[70%] xl:w-[50%]">
          <div className="flex flex-col gap-6">
            <Stories />
            <AddPost />
            <Feed />
          </div>
        </div>
        {/* right */}
        <div className="hidden lg:block w-[30%]">
          <HomeRight />
        </div>
      </div>
    </>
  );
}
