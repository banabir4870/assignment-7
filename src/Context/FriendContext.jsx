'use client'
import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const FriendContext = createContext();


const FriendProvider = ({ children }) => {
    const [totalFriends, setTotalFriends] = useState(0);
    const [onTrack, setOnTrack] = useState(0);
    const [overdue, setOverdue] = useState(0);
    const [timelineHistory, setTimelineHistory] = useState([])
    const interaction = timelineHistory.length;
    const addToTimeline = (type, name) => {
        
        const newHistory = {
            type: type,
            name: name,
            date: new Date().toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'short',
                year: 'numeric'
            })
        }
        setTimelineHistory(prev => [...prev, newHistory]);
        toast.success(`${newHistory.type} With ${newHistory.name} Successful`)
    }


    const data = { totalFriends, setTotalFriends, onTrack, setOnTrack, overdue, setOverdue, timelineHistory, setTimelineHistory, addToTimeline, interaction };
    return (
        <FriendContext.Provider value={data}>
            {children}
        </FriendContext.Provider>
    );
};

export default FriendProvider;