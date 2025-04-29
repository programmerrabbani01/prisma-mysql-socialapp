import { User } from "@prisma/client";
import UserInformationCard from "../Profile/UserInformationCard.tsx";
import UserMediaCard from "../Profile/UserMediaCard.tsx";
import Ads from "./Ads.tsx";
import FriendsBirthday from "./FriendsBirthday.tsx";
import FriendsRequest from "./FriendsRequest.tsx";
import { Suspense } from "react";

export default function HomeRight({ user }: { user?: User }) {
  return (
    <>
      <div className="flex flex-col gap-6">
        {user ? (
          <>
            <Suspense fallback="loading...">
              <UserInformationCard user={user} />
            </Suspense>
            <Suspense fallback="loading...">
              <UserMediaCard user={user} />
            </Suspense>
          </>
        ) : null}
        <FriendsRequest />
        <FriendsBirthday />
        <Ads size="md" />
      </div>
    </>
  );
}
