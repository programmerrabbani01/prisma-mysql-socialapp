"use client";

import Image from "next/image";
import { useRef } from "react";

export default function Stories() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleDragScroll = (e: MouseEvent) => {
    e.preventDefault();
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= e.movementX;
    }
  };
  return (
    <>
      <div
        // className="p-4 bg-white rounded-lg shadow-md overflow-scroll scrollbar-hidden text-xs" if u use this className u don't need use others
        className="p-4 bg-white rounded-lg shadow-md overflow-hidden text-xs cursor-grab"
        ref={scrollContainerRef}
        onMouseDown={(e) => {
          e.currentTarget.style.cursor = "grabbing";
          e.currentTarget.addEventListener("mousemove", handleDragScroll);
        }}
        onMouseUp={(e) => {
          e.currentTarget.style.cursor = "grab";
          e.currentTarget.removeEventListener("mousemove", handleDragScroll);
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.cursor = "grab";
          e.currentTarget.removeEventListener("mousemove", handleDragScroll);
        }}
      >
        <div className="flex gap-8 w-max">
          <div className="flex flex-col gap-2 items-center cursor-pointer ">
            <Image
              src="/images/story.jpg"
              alt=""
              width={80}
              height={80}
              className="w-20 h-20 rounded-full ring-2 aspect-square"
            />
            <span className="font-FiraCode font-medium">Rabbani</span>
          </div>
          <div className="flex flex-col gap-2 items-center cursor-pointer ">
            <Image
              src="/images/story.jpg"
              alt=""
              width={80}
              height={80}
              className="w-20 h-20 rounded-full ring-2 aspect-square"
            />
            <span className="font-FiraCode font-medium">Rabbani</span>
          </div>
          <div className="flex flex-col gap-2 items-center cursor-pointer ">
            <Image
              src="/images/story.jpg"
              alt=""
              width={80}
              height={80}
              className="w-20 h-20 rounded-full ring-2 aspect-square"
            />
            <span className="font-FiraCode font-medium">Rabbani</span>
          </div>
          <div className="flex flex-col gap-2 items-center cursor-pointer ">
            <Image
              src="/images/story.jpg"
              alt=""
              width={80}
              height={80}
              className="w-20 h-20 rounded-full ring-2 aspect-square"
            />
            <span className="font-FiraCode font-medium">Rabbani</span>
          </div>
          <div className="flex flex-col gap-2 items-center cursor-pointer ">
            <Image
              src="/images/story.jpg"
              alt=""
              width={80}
              height={80}
              className="w-20 h-20 rounded-full ring-2 aspect-square"
            />
            <span className="font-FiraCode font-medium">Rabbani</span>
          </div>
          <div className="flex flex-col gap-2 items-center cursor-pointer ">
            <Image
              src="/images/story.jpg"
              alt=""
              width={80}
              height={80}
              className="w-20 h-20 rounded-full ring-2 aspect-square"
            />
            <span className="font-FiraCode font-medium">Rabbani</span>
          </div>
          <div className="flex flex-col gap-2 items-center cursor-pointer ">
            <Image
              src="/images/story.jpg"
              alt=""
              width={80}
              height={80}
              className="w-20 h-20 rounded-full ring-2 aspect-square"
            />
            <span className="font-FiraCode font-medium">Rabbani</span>
          </div>
          <div className="flex flex-col gap-2 items-center cursor-pointer ">
            <Image
              src="/images/story.jpg"
              alt=""
              width={80}
              height={80}
              className="w-20 h-20 rounded-full ring-2 aspect-square"
            />
            <span className="font-FiraCode font-medium">Rabbani</span>
          </div>
          <div className="flex flex-col gap-2 items-center cursor-pointer ">
            <Image
              src="/images/story.jpg"
              alt=""
              width={80}
              height={80}
              className="w-20 h-20 rounded-full ring-2 aspect-square"
            />
            <span className="font-FiraCode font-medium">Rabbani</span>
          </div>
          <div className="flex flex-col gap-2 items-center cursor-pointer ">
            <Image
              src="/images/story.jpg"
              alt=""
              width={80}
              height={80}
              className="w-20 h-20 rounded-full ring-2 aspect-square"
            />
            <span className="font-FiraCode font-medium">Rabbani</span>
          </div>
        </div>
      </div>
    </>
  );
}
