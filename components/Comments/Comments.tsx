import Image from "next/image";

export default function Comments() {
  return (
    <>
      <div className="">
        {/* write */}
        <div className="flex items-center gap-4">
          <Image
            src="https://i.ibb.co.com/vxw2Kgm/pexels-muffinsaurs-1214205.jpg"
            alt=""
            className="w-8 h-8 rounded-full object-cover"
            width={32}
            height={32}
          />
          <div className="flex flex-1 items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
            <input
              type="text"
              className="bg-transparent outline-none font-FiraCode font-medium flex-1"
              placeholder="Write A Comment ..."
            />
            <Image
              src="/images/emoji.png"
              alt=""
              className="cursor-pointer"
              width={16}
              height={16}
            />
          </div>
        </div>
        {/* comment */}
        <div className="">
          {/* comment */}
          <div className="flex justify-between mt-6 gap-4">
            {/* avatar */}
            <Image
              src="https://i.ibb.co.com/vxw2Kgm/pexels-muffinsaurs-1214205.jpg"
              alt=""
              className="w-10 h-10 rounded-full object-cover"
              width={40}
              height={40}
            />
            {/* desc */}
            <div className="flex flex-col gap-2">
              <span className="font-Exo2 font-semibold">
                PROGRAMMER RABBANI
              </span>
              <p className="font-FiraCode text-gray-500 text-justify capitalize">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
                suscipit quos voluptatem asperiores amet nisi, quas eaque
                repellendus debitis nemo ea distinctio quidem laboriosam iusto
                atque doloremque corrupti voluptate! Dicta quam eaque sapiente
                dignissimos fugit?
              </p>
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-2">
                  <Image
                    src="/images/like.png"
                    alt=""
                    width={12}
                    height={12}
                    className="w-3 h-3 cursor-pointer"
                  />
                  <span className="text-gray-300">| </span>
                  <span className="text-gray-500 font-medium font-FiraCode text-sm">
                    123 Likes
                  </span>
                </div>
                <div className="font-FiraCode text-gray-500 text-sm font-medium">
                  Reply
                </div>
              </div>
            </div>
            {/* icon */}

            <Image
              src="/images/more.png"
              alt=""
              width={16}
              height={16}
              className="w-4 h-4 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
}
