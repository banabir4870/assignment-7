'use client'
import { FriendContext } from '@/Context/FriendContext';
import React, { useContext } from 'react';
import { Pie, PieChart, Tooltip } from 'recharts';


const StatsClient = () => {
    const { timelineHistory } = useContext(FriendContext)
    const callCount = timelineHistory.filter(i => i.type === "Call").length;
    const textCount = timelineHistory.filter(i => i.type === "Text").length;
    const videoCount = timelineHistory.filter(i => i.type === "Video").length;
    console.log('call:', callCount, 'text:', textCount, 'video:', videoCount)
    const data = [
        { name: "Call", value: callCount, fill: "#244D3F" },
        { name: "Text", value: textCount, fill: "#7E35E1" },
        { name: "Video", value: videoCount, fill: "#37A163" },
    ];
    return (
        <div className="w-9/12 mx-auto my-20">

            <h1 className="text-4xl font-bold mb-10">Friendship Analytics</h1>
            <div className='bg-base-100 shadow-sm p-8'>
                <h2 className="text-xl font-semibold text-[#244D3F]">By Interaction Type</h2>
                {
                    !data || data.length === 0 || data.every(item => item.value === 0) ? <p className='text-center my-6'>No Interactions Found</p> : <>
                        <div className='my-6'>

                            <PieChart
                                style={{
                                    width: "100%",
                                    maxWidth: "500px",
                                    maxHeight: "40vh",
                                    margin: "auto",
                                    aspectRatio: 1,
                                }}
                                responsive
                            >
                                <Pie
                                    data={data}
                                    innerRadius="80%"
                                    outerRadius="100%"
                                    // Corner radius is the rounded edge of each pie slice
                                    cornerRadius="50%"
                                    fill="#8884d8"
                                    // padding angle is the gap between each pie slice
                                    paddingAngle={5}
                                    dataKey="value"
                                    isAnimationActive={true}
                                />
                                <Tooltip />
                            </PieChart>
                        </div>
                        <div className='flex justify-center gap-6'>
                            <p className='flex items-center'><span className='text-[#7E35E1] text-2xl'>•</span>Text</p>
                            <p className='flex items-center'><span className='text-[#244D3F] text-2xl'>•</span>Call</p>
                            <p className='flex items-center'><span className='text-[#37A163] text-2xl'>•</span>Video</p>
                        </div>
                    </>
                }

            </div>

        </div>
    );
};

export default StatsClient;