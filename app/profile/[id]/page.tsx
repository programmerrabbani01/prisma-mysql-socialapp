import Feed from "@/components/Feed/Feed.tsx";
import HomeLeft from "@/components/HomeLeft/HomeLeft.tsx";
import HomeRight from "@/components/HomeRight/HomeRight.tsx";

export default function ProfilePage() {
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
            <Feed />
          </div>
        </div>
        {/* right */}
        <div className="hidden lg:block w-[30%]">
          <HomeRight userId="Test" />
        </div>
      </div>
    </>
  );
}
