import { formatDate } from "@/lib/formatDate.ts";
import { User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

export default function UserInformationCard({ user }: { user: User }) {
  return (
    <>
      <div className="p-4 bg-white shadow-md rounded-lg text-sm flex flex-col gap-4">
        {/* top */}
        <div className="flex justify-between items-center">
          <span className="font-Exo2 font-bold text-gray-500">
            User Information
          </span>
          <Link
            href=""
            className="font-FiraCode text-blue-600 font-medium text-xs"
          >
            See All
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xl font-bold font-Exo2">
              {user.name && user.surName
                ? user.name + " " + user.surName
                : user.userName}
            </span>
            <span className="text-sm text-gray-400 font-FiraCode font-semibold">
              @{user.userName}
            </span>
          </div>
          {user.desc && (
            <p className="font-FiraCode font-medium text-xs text-gray-500">
              {user.desc}
            </p>
          )}
          {user.city && (
            <div className="flex items-center gap-2">
              <Image src="/images/map.png" alt="" width={16} height={16} />
              <span className="text-gray-500 font-FiraCode text-xs">
                Living In <b>{user.city}</b>
              </span>
            </div>
          )}

          {user.school && (
            <div className="flex items-center gap-2">
              <Image src="/images/school.png" alt="" width={16} height={16} />
              <span className="text-gray-500 font-FiraCode text-xs">
                Went To <b>{user.school}</b>
              </span>
            </div>
          )}

          {user.work && (
            <div className="flex items-center gap-2">
              <Image src="/images/work.png" alt="" width={16} height={16} />
              <span className="text-gray-500 font-FiraCode text-xs">
                Works At <b>{user.work}</b>
              </span>
            </div>
          )}

          <div className="flex flex-col gap-2">
            {user.webSite && (
              <div className="flex items-center gap-1">
                <Image src="/images/link.png" alt="" width={16} height={16} />
                <Link
                  target="_blank"
                  href={user.webSite}
                  className="text-blue-500 text-xs font-medium font-FiraCode"
                >
                  {user.webSite}
                </Link>
              </div>
            )}

            <div className="flex items-center gap-1">
              <Image src="/images/date.png" alt="" width={16} height={16} />
              <span className="font-FiraCode text-xs font-medium text-gray-500">
                Joiend {formatDate(user.createdAt.toString())}
              </span>
            </div>
          </div>
          <button className="bg-blue-500 text-white font-Exo2 font-semibold rounded-lg p-2 text-sm">
            Follow
          </button>
          <span className="text-xs text-red-400 font-FiraCode font-medium cursor-pointer self-end">
            Block User
          </span>
        </div>
      </div>
    </>
  );
}
