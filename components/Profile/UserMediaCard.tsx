import { User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

export default function UserMediaCard({ user }: { user: User }) {
  return (
    <>
      <div className="p-4 bg-white shadow-md rounded-lg text-sm flex flex-col gap-4">
        {/* top */}
        <div className="flex justify-between items-center">
          <span className="font-Exo2 font-bold text-gray-500">User Media</span>
          <Link
            href=""
            className="font-FiraCode text-blue-600 font-medium text-xs"
          >
            See All
          </Link>
        </div>
        {/* bottom */}
        <div className="flex flex-wrap justify-between gap-4">
          <div className="relative w-1/5 h-24">
            <Image
              src="https://i.ibb.co.com/Gvv8tDmN/rose.jpg"
              alt=""
              fill
              className="object-cover rounded-md"
            />
          </div>
          <div className="relative w-1/5 h-24">
            <Image
              src="https://i.ibb.co.com/Gvv8tDmN/rose.jpg"
              alt=""
              fill
              className="object-cover rounded-md"
            />
          </div>
          <div className="relative w-1/5 h-24">
            <Image
              src="https://i.ibb.co.com/Gvv8tDmN/rose.jpg"
              alt=""
              fill
              className="object-cover rounded-md"
            />
          </div>
          <div className="relative w-1/5 h-24">
            <Image
              src="https://i.ibb.co.com/Gvv8tDmN/rose.jpg"
              alt=""
              fill
              className="object-cover rounded-md"
            />
          </div>
          <div className="relative w-1/5 h-24">
            <Image
              src="https://i.ibb.co.com/Gvv8tDmN/rose.jpg"
              alt=""
              fill
              className="object-cover rounded-md"
            />
          </div>
          <div className="relative w-1/5 h-24">
            <Image
              src="https://i.ibb.co.com/Gvv8tDmN/rose.jpg"
              alt=""
              fill
              className="object-cover rounded-md"
            />
          </div>
          <div className="relative w-1/5 h-24">
            <Image
              src="https://i.ibb.co.com/Gvv8tDmN/rose.jpg"
              alt=""
              fill
              className="object-cover rounded-md"
            />
          </div>
          <div className="relative w-1/5 h-24">
            <Image
              src="https://i.ibb.co.com/Gvv8tDmN/rose.jpg"
              alt=""
              fill
              className="object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </>
  );
}
