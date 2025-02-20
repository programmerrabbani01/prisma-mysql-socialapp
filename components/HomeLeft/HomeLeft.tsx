import Link from "next/link";
import ProfileCard from "../Profile/ProfileCard.tsx";
import Image from "next/image";
import Ads from "../HomeRight/Ads.tsx";

export default function HomeLeft({ type }: { type: "home" | "profile" }) {
  return (
    <>
      <div className="flex flex-col gap-6">
        {type === "home" && <ProfileCard />}
        <div className="p-4 bg-white rounded-lg shadow-md flex flex-col gap-2">
          <Link
            href=""
            className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100 transition-all duration-300"
          >
            <Image src="/images/posts.png" alt="" width={20} height={20} />
            <span className="text-sm text-gray-500 font-FiraCode font-medium">
              My Posts
            </span>
          </Link>
          <hr className="border-t border-gray-100 w-36 self-center" />

          <Link
            href=""
            className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100 transition-all duration-300"
          >
            <Image src="/images/activity.png" alt="" width={20} height={20} />
            <span className="text-sm text-gray-500 font-FiraCode font-medium">
              Activity
            </span>
          </Link>
          <hr className="border-t border-gray-100 w-36 self-center" />

          <Link
            href=""
            className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100 transition-all duration-300"
          >
            <Image
              src="/images/marketplace.png"
              alt=""
              width={20}
              height={20}
            />
            <span className="text-sm text-gray-500 font-FiraCode font-medium">
              Marketplace
            </span>
          </Link>
          <hr className="border-t border-gray-100 w-36 self-center" />

          <Link
            href=""
            className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100 transition-all duration-300"
          >
            <Image src="/images/events.png" alt="" width={20} height={20} />
            <span className="text-sm text-gray-500 font-FiraCode font-medium">
              Events
            </span>
          </Link>
          <hr className="border-t border-gray-100 w-36 self-center" />

          <Link
            href=""
            className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100 transition-all duration-300"
          >
            <Image src="/images/albums.png" alt="" width={20} height={20} />
            <span className="text-sm text-gray-500 font-FiraCode font-medium">
              Albums
            </span>
          </Link>
          <hr className="border-t border-gray-100 w-36 self-center" />

          <Link
            href=""
            className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100 transition-all duration-300"
          >
            <Image src="/images/videos.png" alt="" width={20} height={20} />
            <span className="text-sm text-gray-500 font-FiraCode font-medium">
              Videos
            </span>
          </Link>
          <hr className="border-t border-gray-100 w-36 self-center" />

          <Link
            href=""
            className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100 transition-all duration-300"
          >
            <Image src="/images/news.png" alt="" width={20} height={20} />
            <span className="text-sm text-gray-500 font-FiraCode font-medium">
              News
            </span>
          </Link>
          <hr className="border-t border-gray-100 w-36 self-center" />

          <Link
            href=""
            className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100 transition-all duration-300"
          >
            <Image src="/images/courses.png" alt="" width={20} height={20} />
            <span className="text-sm text-gray-500 font-FiraCode font-medium">
              Courses
            </span>
          </Link>
          <hr className="border-t border-gray-100 w-36 self-center" />

          <Link
            href=""
            className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100 transition-all duration-300"
          >
            <Image src="/images/lits.png" alt="" width={20} height={20} />
            <span className="text-sm text-gray-500 font-FiraCode font-medium">
              Lists
            </span>
          </Link>
          <hr className="border-t border-gray-100 w-36 self-center" />

          <Link
            href=""
            className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100 transition-all duration-300"
          >
            <Image src="/images/settings.png" alt="" width={20} height={20} />
            <span className="text-sm text-gray-500 font-FiraCode font-medium">
              Settings
            </span>
          </Link>
        </div>
        <Ads size="sm" />
      </div>
    </>
  );
}
