import React from 'react';
import Friend from '../Friend/Friend';

const AllFriends = async () => {
    const res = await fetch('http://localhost:3000/allFriends.json', {cache: 'no-store'});
    const allFriends = await res.json();
    return (
        <div>
            <h2 className='text-2xl font-semibold'>Your Friends</h2>
            <div className='grid mg:grid-cols-2 lg:grid-cols-4 gap-6 my-4'>
                {
                    allFriends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
                }
            </div>
        </div>
    );
};

export default AllFriends;