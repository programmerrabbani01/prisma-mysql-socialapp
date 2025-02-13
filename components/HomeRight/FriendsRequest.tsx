import Image from "next/image";
import Link from "next/link";

export default function FriendsRequest() {
  return (
    <>
      <div className="p-4 bg-white shadow-md rounded-lg text-sm flex flex-col gap-4">
        {/* top */}
        <div className="flex justify-between items-center">
          <span className="font-Exo2 font-bold text-gray-500">
            Friend Request
          </span>
          <Link
            href=""
            className="font-FiraCode text-blue-600 font-medium text-xs"
          >
            See All
          </Link>
        </div>
        {/* bottom */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="https://i.ibb.co.com/VMKmzRp/ella.png"
              alt=""
              width={40}
              height={40}
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className=" font-FiraCode font-semibold">GOLAM RABBANI</span>
          </div>
          <div className="flex gap-3 justify-end">
            <Image
              src="/images/accept.png"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Image
              src="/images/reject.png"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="https://i.ibb.co.com/VMKmzRp/ella.png"
              alt=""
              width={40}
              height={40}
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className=" font-FiraCode font-semibold">GOLAM RABBANI</span>
          </div>
          <div className="flex gap-3 justify-end">
            <Image
              src="/images/accept.png"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Image
              src="/images/reject.png"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="https://i.ibb.co.com/VMKmzRp/ella.png"
              alt=""
              width={40}
              height={40}
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className=" font-FiraCode font-semibold">
              G M GOLAM RABBANI
            </span>
          </div>
          <div className="flex gap-3 justify-end">
            <Image
              src="/images/accept.png"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Image
              src="/images/reject.png"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
}
