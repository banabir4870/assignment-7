import AllFriends from "@/components/AllFriends/AllFriends";
import Banner from "@/components/Banner/Banner";
import FriendProvider from "@/Context/FriendContext";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-9/12 mx-auto">
      <main>
        <FriendProvider>

          <Banner></Banner>
          <AllFriends></AllFriends>
        </FriendProvider>
      </main>
    </div>
  );
}
