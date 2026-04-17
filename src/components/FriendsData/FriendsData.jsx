'use client'
import React, { useContext, useEffect } from 'react';
import Friend from '../Friend/Friend';
import { FriendContext } from '@/Context/FriendContext';

const FriendsData = ({allFriends}) => {
    const {setTotalFriends, setOnTrack, setOverdue} = useContext(FriendContext);
    useEffect(() => {
        setTotalFriends(allFriends.length);
        const onTrackCount = allFriends.filter(f => f.status === 'on-track').length;
        const overdueCount = allFriends.filter(f=>f.status === 'overdue').length;
        setOnTrack(onTrackCount);
        setOverdue(overdueCount);

    }, [allFriends, setTotalFriends, setOnTrack, setOverdue]);
    
    
    
    
    return (
        <div className='grid mg:grid-cols-2 lg:grid-cols-4 gap-6 my-4'>
            {
                allFriends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
            }
        </div>
    );
};

export default FriendsData;