import Image from "next/image";
import Link from "next/link";

export default function UserInformationCard({ userId }: { userId: string }) {
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
              G M GOLAM RABBANI
            </span>
            <span className="text-sm text-gray-400 font-FiraCode font-semibold">
              @programmerRabbani
            </span>
          </div>
          <p className="font-FiraCode font-medium text-xs text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
            minus molestias dolores fuga nulla placeat soluta.
          </p>
          <div className="flex items-center gap-2">
            <Image src="/images/map.png" alt="" width={16} height={16} />
            <span className="text-gray-500 font-FiraCode text-xs">
              Living In <b>Patuakhali</b>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Image src="/images/school.png" alt="" width={16} height={16} />
            <span className="text-gray-500 font-FiraCode text-xs">
              Went To <b>Patuakhali GOVT. Collage</b>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Image src="/images/work.png" alt="" width={16} height={16} />
            <span className="text-gray-500 font-FiraCode text-xs">
              Works At <b>Self Employed</b>
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1">
              <Image src="/images/link.png" alt="" width={16} height={16} />
              <Link
                target="_blank"
                href="https://programmerrabbani.vercel.app/"
                className="text-blue-500 text-xs font-medium font-FiraCode"
              >
                programmerrabbani.com
              </Link>
            </div>
            <div className="flex items-center gap-1">
              <Image src="/images/date.png" alt="" width={16} height={16} />
              <span className="font-FiraCode text-xs font-medium text-gray-500">
                Joiend November 2024
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
