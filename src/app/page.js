import AllFriends from "@/components/AllFriends/AllFriends";
import Banner from "@/components/Banner/Banner";
import FriendProvider from "@/Context/FriendContext";

export default function Home() {
  return (
    <div className="w-9/12 mx-auto">
      <main>
        <Banner></Banner>
        <AllFriends></AllFriends>
      </main>
    </div>
  );
}
