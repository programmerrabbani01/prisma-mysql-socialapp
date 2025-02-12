import AddFriend from "./AddFriend.tsx";
import FriendsBirthday from "./FriendsBirthday.tsx";
import FriendsRequest from "./FriendsRequest.tsx";

export default function HomeRight({ userId }: { userId?: string }) {
  return (
    <>
      <div className="flex flex-col gap-6">
        <FriendsRequest />
        <FriendsBirthday />
        <AddFriend size="md" />
      </div>
    </>
  );
}
