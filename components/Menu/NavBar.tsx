import Link from "next/link";
import MobileNav from "./MobileNav.tsx";
import Image from "next/image";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default function NavBar() {
  return (
    <>
      <div className="h-24 flex justify-between items-center">
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
        <div className="hidden md:flex w-[50%] items-center justify-between">
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

          <div className="hidden xl:flex items-center bg-slate-100 p-2 rounded-xl">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none"
            />
            <Image src="/images/search.png" alt="" width={14} height={14} />
          </div>
        </div>
        {/* Right */}
        <div className="w-[30%] flex gap-4 xl:gap-8 items-center justify-end ">
          <ClerkLoading>
            <div className="inline-block h-4 w-4 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedIn>
              <div className="cursor-pointer hidden sm:block">
                <Image src="/images/people.png" alt="" width={20} height={20} />
              </div>
              <div className="cursor-pointer hidden sm:block">
                <Image
                  src="/images/messages.png"
                  alt=""
                  width={20}
                  height={20}
                />
              </div>
              <div className="cursor-pointer hidden sm:block">
                <Image
                  src="/images/notifications.png"
                  alt=""
                  width={20}
                  height={20}
                />
              </div>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <div className="cursor-pointer flex items-center gap-2">
                <Image src="/images/login.png" alt="" width={20} height={20} />
                <Link
                  href="/sign-in"
                  className="text-sm text-gray-500 font-bold font-Exo2"
                >
                  Login/register
                </Link>
              </div>
            </SignedOut>
          </ClerkLoaded>
          <MobileNav />
        </div>
      </div>
    </>
  );
}
