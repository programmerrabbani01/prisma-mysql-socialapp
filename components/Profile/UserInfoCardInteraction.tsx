export default function UserInfoCardInteraction({
  userId,
  currentUserId,
  isUserBlocked,
  isFollowing,
  isFollowingSent,
}: {
  userId: string;
  currentUserId: string;
  isUserBlocked: boolean;
  isFollowing: boolean;
  isFollowingSent: boolean;
}) {
  return (
    <>
      <form action="">
        <button className="bg-blue-500 w-full text-white font-Exo2 font-semibold rounded-lg p-2 text-sm">
          {isFollowing
            ? "Following"
            : isFollowingSent
            ? "Friend Request Sent"
            : "Follow"}
        </button>
      </form>
      <form action="" className="self-end">
        <span className="text-xs text-red-400 font-FiraCode font-medium cursor-pointer ">
          {isUserBlocked ? "Unblock User" : "Block User"}
        </span>
      </form>
    </>
  );
}
