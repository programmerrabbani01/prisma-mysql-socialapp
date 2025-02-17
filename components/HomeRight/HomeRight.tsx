import UserInformationCard from "../Profile/UserInformationCard.tsx";
import UserMediaCard from "../Profile/UserMediaCard.tsx";
import AddFriend from "./AddFriend.tsx";
import FriendsBirthday from "./FriendsBirthday.tsx";
import FriendsRequest from "./FriendsRequest.tsx";

export default function HomeRight({ userId }: { userId?: string }) {
  return (
    <>
      <div className="flex flex-col gap-6">
        {userId ? (
          <>
            <UserInformationCard userId={userId} />
            <UserMediaCard userId={userId} />
          </>
        ) : null}
        <FriendsRequest />
        <FriendsBirthday />
        <AddFriend size="md" />
      </div>
    </>
  );
}
