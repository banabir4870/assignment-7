'use client'
import { FriendContext } from '@/Context/FriendContext';
import React, { useContext, useState } from 'react';
import HistoryCard from '@/components/HistoryCard/HistoryCard';
import { IoIosArrowDown } from 'react-icons/io';

const TimelineClient = () => {
    const { timelineHistory } = useContext(FriendContext);
    const [filter, setFilter] = useState('all');
    const filterTimline = filter === 'all' ? timelineHistory : timelineHistory.filter(history => history.type === filter)
    return (
        <div className='w-9/12 mx-auto my-20'>
            <h1 className='text-5xl font-bold'>Timeline</h1>
            <div className="dropdown dropdown-bottom mt-4 mb-6">

                {/* button */}
                <div tabIndex={0} role="button" className="btn m-1 flex items-center">
                    Filter By {filter} <IoIosArrowDown className='text-xl' />
                </div>

                {/* menu */}
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm">

                    <li><a onClick={() => setFilter("all")}>All</a></li>
                    <li><a onClick={() => setFilter("Call")}>Call</a></li>
                    <li><a onClick={() => setFilter("Text")}>Text</a></li>
                    <li><a onClick={() => setFilter("Video")}>Video</a></li>
                </ul>
            </div>

            <div>
                {
                    filterTimline.length === 0 ? <p className='text-center p-6 bg-base-100 shadow-sm'>No Timeline Data Found</p> : filterTimline.map((history, ind) => <HistoryCard key={ind} history={history}></HistoryCard>)
                }
            </div>
        </div>
    );
};

export default TimelineClient;