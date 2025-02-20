import Image from "next/image";

export default function Ads({ size }: { size: "sm" | "md" | "lg" }) {
  return (
    <>
      <div className="p-4 bg-white shadow-md rounded-lg text-sm flex flex-col gap-4">
        {/* Top */}
        <div className="flex items-center justify-between text-gray-500">
          <span className="font-Exo2 font-bold">Sponsored Ads</span>
          <Image src="/images/more.png" alt="" width={16} height={16} />
        </div>
        {/* Bottom */}
        <div
          className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}
        >
          <div
            className={`relative w-full ${
              size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"
            }`}
          >
            <Image
              src="https://i.ibb.co.com/Gvv8tDmN/rose.jpg"
              alt=""
              fill
              className="rounded-lg object-cover"
            />
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="https://i.ibb.co.com/Gvv8tDmN/rose.jpg"
              alt=""
              width={24}
              height={24}
              className="w-6 h-6 rounded-full object-cover"
            />
            <span className="text-blue-500 font-Exo2 font-bold">
              BigChef Lounge
            </span>
          </div>
          <p
            className={`font-FiraCode font-semibold text-gray-400  ${
              size === "sm" ? "text-xs" : "text-sm"
            }`}
          >
            {size === "sm"
              ? "Lorem ipsum dolor sit amet consectetur adipisicing elit."
              : size === "md"
              ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ullam quam expedita quisquam dolore voluptatibus soluta illo, error eaque sunt odio eveniet, totam voluptas natus."
              : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ullam quam expedita quisquam dolore voluptatibus soluta illo, error eaque sunt odio eveniet, totam voluptas natus. Placeat ex dignissimos quisquam aspernatur quidem, a fuga tempore rerum omnis? Accusamus sit nostrum, commodi et, facilis harum eos ducimus natus repudiandae, itaque nisi magnam."}
          </p>
          <button className="bg-gray-200 text-gray-500 p-2 rounded-lg text-sm font-FiraCode font-bold">
            Learn More
          </button>
        </div>
      </div>
    </>
  );
}
