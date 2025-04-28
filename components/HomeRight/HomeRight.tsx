import { User } from "@prisma/client";
import UserInformationCard from "../Profile/UserInformationCard.tsx";
import UserMediaCard from "../Profile/UserMediaCard.tsx";
import Ads from "./Ads.tsx";
import FriendsBirthday from "./FriendsBirthday.tsx";
import FriendsRequest from "./FriendsRequest.tsx";

export default function HomeRight({ user }: { user?: User }) {
  return (
    <>
      <div className="flex flex-col gap-6">
        {user ? (
          <>
            <UserInformationCard user={user} />
            <UserMediaCard user={user} />
          </>
        ) : null}
        <FriendsRequest />
        <FriendsBirthday />
        <Ads size="md" />
      </div>
    </>
  );
}
