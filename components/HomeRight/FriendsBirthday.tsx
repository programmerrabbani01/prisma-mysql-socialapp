import Image from "next/image";
import Link from "next/link";

export default function FriendsBirthday() {
  return (
    <>
      <div className="p-4 bg-white shadow-md rounded-lg text-sm flex flex-col gap-4">
        {/* top */}
        <div className="flex justify-between items-center">
          <span className="font-Exo2 font-bold text-gray-500">Birthdays</span>
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
            <button className="bg-blue-500 text-white rounded-md px-2 py-1 text-xs font-Exo2 font-bold">
              Celebrate
            </button>
          </div>
        </div>
        {/* upcoming */}
        <div className="p-4 bg-slate-100 rounded-lg flex items-center gap-4">
          <Image src="/images/gift.png" alt="" width={24} height={24} />
          <Link href="" className="flex flex-col gap-1">
            <span className="text-xs text-gray-700 font-FiraCode font-semibold">
              Upcoming Birthdays
            </span>
            <span className="text-xs text-gray-500 font-FiraCode font-semibold">
              See Other 16 Have Upcoming Birthdays
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
