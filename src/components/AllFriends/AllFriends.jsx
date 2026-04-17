import FriendsData from '../FriendsData/FriendsData';

const AllFriends = async () => {
    const res = await fetch('https://keenkeeper-a7-banabir.vercel.app/allFriends.json', {cache: 'no-store'});
    const allFriends = await res.json();

    return (
        <div>
            <h2 className='text-2xl font-semibold'>Your Friends</h2>
            <FriendsData allFriends={allFriends}></FriendsData>
        </div>
    );
};

export default AllFriends;