import Link from "next/link";
import MobileNav from "./MobileNav.tsx";
import Image from "next/image";

export default function NavBar() {
  return (
    <>
      <div className="h-20 flex justify-between items-center">
        {/* left */}
        <div className="md:hidden lg:block w-[20%]">
          <Link
            href="/"
            className="text-xl font-Exo2 font-semibold uppercase bg-gradient-to-r from-[#D91656] via-blue-500 to-[#FF4545] bg-clip-text text-transparent"
          >
            socialoo
          </Link>
        </div>
        {/* center */}
        <div className="hidden md:flex w-[50%]">
          {/* links */}
          <div className="flex gap-6 text-gray-500 font-Exo2 font-semibold text-sm">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/home.png"
                alt="Homepage"
                width={16}
                height={16}
                className="w-4 h-4"
              />
              <span className="">Home</span>
            </Link>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/friends.png"
                alt="Friends"
                width={16}
                height={16}
                className="w-4 h-4"
              />
              <span className="">Friends</span>
            </Link>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/stories.png"
                alt="Stories"
                width={16}
                height={16}
                className="w-4 h-4"
              />
              <span className="">Stories</span>
            </Link>
          </div>
        </div>
        {/* Right */}
        <div className="w-[30%] flex gap-4 xl:gap-8 items-center justify-end ">
          <MobileNav />
        </div>
      </div>
    </>
  );
}
