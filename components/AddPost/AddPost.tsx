"use client";

import { createAPost } from "@/actions/postActions.ts";
// import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useFormState } from "react-dom";

const initialState = {
  message: "",
  post: undefined,
  errors: undefined,
};
export default function AddPost() {
  const [state, formAction] = useFormState(createAPost, initialState);

  return (
    <>
      <div className="p-4 bg-white rounded-lg flex gap-4 justify-between text-sm shadow-md">
        {/* avatar */}
        <Image
          src="https://i.ibb.co.com/MCD3Lgv/pexels-eka-nugraha-2148786385-30305153.jpg"
          alt=""
          className="w-12 h-12 object-cover rounded-full"
          width={48}
          height={48}
        />
        {/* post */}
        <div className="flex-1">
          {/* text input */}
          <form action={formAction} className="flex gap-4">
            <textarea
              placeholder="what's in your mind ?"
              className="bg-slate-100 rounded-lg outline-none flex-1 p-2 font-FiraCode font-medium"
              name="desc"
            ></textarea>
            <Image
              src="/images/emoji.png"
              alt=""
              className="w-5 h-5 cursor-pointer self-end"
              width={20}
              height={20}
            />
            <button className="">Send</button>
          </form>
          {state?.message && (
            <p className="text-green-500 font-medium mt-2">{state.message}</p>
          )}
          {state?.errors && (
            <p className="text-red-500 font-medium mt-2">{state.errors}</p>
          )}
          {/* post options */}
          <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
            <div className="flex gap-2 items-center cursor-pointer">
              <Image src="/images/addImage.png" alt="" width={20} height={20} />
              Photo
            </div>
            <div className="flex gap-2 items-center cursor-pointer">
              <Image src="/images/addVideo.png" alt="" width={20} height={20} />
              Video
            </div>
            <div className="flex gap-2 items-center cursor-pointer">
              <Image src="/images/poll.png" alt="" width={20} height={20} />
              Pool
            </div>
            <div className="flex gap-2 items-center cursor-pointer">
              <Image src="/images/addEvent.png" alt="" width={20} height={20} />
              Event
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
