import Image from "next/image";
import Comments from "../Comments/Comments.tsx";

export default function Post() {
  return (
    <>
      <div className="flex flex-col gap-4">
        {/* user */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="https://i.ibb.co.com/MCD3Lgv/pexels-eka-nugraha-2148786385-30305153.jpg"
              alt=""
              width={40}
              height={40}
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="font-bold font-Exo2">G M GOLAM RABBANBI</span>
          </div>
          <Image src="/images/more.png" alt="" width={16} height={16} />
        </div>
        {/* description */}
        <div className="flex flex-col gap-4">
          <div className="w-full min-h-96 relative">
            <Image
              src="https://i.ibb.co.com/0VHkTjY/pexels-han-798356342-30149856.jpg"
              alt=""
              fill
              className="object-cover rounded-md"
            />
          </div>
          <p className="text-justify font-FiraCode font-medium text-gray-500 capitalize">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            minima neque dolorum unde, repellendus fuga, laudantium similique
            officiis expedita enim fugiat excepturi eius voluptates! Modi
            doloremque molestias dolorum dicta laboriosam.
          </p>
        </div>
        {/* interaction */}
        <div className="flex items-center justify-between text-sm my-4">
          <div className="flex gap-8">
            <div className="flex items-center gap-4 bg-slate-100 p-[.4rem]  rounded-xl">
              <Image
                src="/images/like.png"
                alt=""
                width={16}
                height={16}
                className="cursor-pointer"
              />
              <span className="text-gray-300">|</span>
              <span className="text-gray-500 font-medium font-FiraCode">
                123 <span className="hidden md:inline">Likes</span>
              </span>
            </div>
            <div className="flex items-center gap-4 bg-slate-100 p-[.4rem]  rounded-xl">
              <Image
                src="/images/comment.png"
                alt=""
                width={16}
                height={16}
                className="cursor-pointer"
              />
              <span className="text-gray-300">|</span>
              <span className="text-gray-500 font-medium font-FiraCode">
                123 <span className="hidden md:inline">Comments</span>
              </span>
            </div>
          </div>
          <div className="">
            <div className="flex items-center gap-4 bg-slate-100 p-[.4rem] rounded-xl">
              <Image
                src="/images/share.png"
                alt=""
                width={16}
                height={16}
                className="cursor-pointer"
              />
              <span className="text-gray-300">|</span>
              <span className="text-gray-500 font-medium font-FiraCode">
                123 <span className="hidden md:inline">Shares</span>
              </span>
            </div>
          </div>
        </div>
        {/* comments */}
        <Comments />
      </div>
    </>
  );
}
