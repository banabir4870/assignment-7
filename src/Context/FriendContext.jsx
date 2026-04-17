'use client'
import React, { createContext, useState } from 'react';

export const FriendContext = createContext();


const FriendProvider = ({children}) => {
    const [totalFriends, setTotalFriends] = useState(0);
    const [onTrack, setOnTrack] = useState(0);
    const [overdue, setOverdue] = useState(0);


    const data = {totalFriends, setTotalFriends, onTrack, setOnTrack, overdue, setOverdue};
    return (
        <FriendContext.Provider value={data}>
            {children}
        </FriendContext.Provider>
    );
};

export default FriendProvider;