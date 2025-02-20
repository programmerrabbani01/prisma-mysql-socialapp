import Image from "next/image";

export default function ProfileCard() {
  return (
    <>
      <div className="p-4 bg-white rounded-lg shadow-md flex flex-col gap-6">
        <div className="h-20 relative">
          <Image
            src="/images/coverPhoto.jpg"
            alt=""
            fill
            className="rounded-md object-cover"
          />
          <Image
            src="/images/profilePhoto.jpg"
            alt=""
            width={48}
            height={48}
            className="rounded-full w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10 object-cover"
          />
        </div>
        <div className="h-20 flex flex-col items-center gap-2">
          <span className="font-Exo2 font-semibold">G M GOLAM RABBANI</span>
          <div className="flex items-center gap-4">
            <div className="flex gap-1">
              <Image
                src="/images/profilePhoto.jpg"
                alt=""
                width={12}
                height={12}
                className="rounded-full w-3 h-3 object-cover"
              />
              <Image
                src="/images/profilePhoto.jpg"
                alt=""
                width={12}
                height={12}
                className="rounded-full w-3 h-3 object-cover"
              />
              <Image
                src="/images/profilePhoto.jpg"
                alt=""
                width={12}
                height={12}
                className="rounded-full w-3 h-3 object-cover"
              />
            </div>
            <span className="text-xs text-gray-500 font-FiraCode font-medium">
              500 Flowers
            </span>
          </div>
          <button className="p-2 rounded-md text-xs bg-blue-500 text-white font-FiraCode font-medium">
            My Profile
          </button>
        </div>
      </div>
    </>
  );
}
