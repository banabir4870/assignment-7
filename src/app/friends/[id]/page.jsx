import Image from 'next/image';
import React from 'react';
import { BsCameraVideo } from 'react-icons/bs';
import { HiOutlineBellSnooze } from 'react-icons/hi2';
import { IoArchiveOutline, IoChatboxEllipsesOutline } from 'react-icons/io5';
import { LuPhoneCall } from 'react-icons/lu';
import { MdOutlineDelete } from 'react-icons/md';

const FriendsDetail = async ({ params }) => {
    const { id } = await params;
    const res = await fetch('https://keenkeeper-a7-banabir.vercel.app/allFriends.json');
    const allFriends = await res.json();
    const expectedFriend = allFriends.find(friends => friends.id == id);

    return (
        <div className='w-9/12 mx-auto grid lg:grid-cols-3 my-20 gap-4'>
            {/* left side */}
            <div className='col-span-1'>
                <div className="card bg-base-100 shadow-sm">
                    <div className="card-body text-center flex flex-col justify-center items-center">
                        <Image src={expectedFriend.picture} alt={expectedFriend.name} width={70} height={70} className='rounded-full object-cover' />
                        <h2 className='text-2xl text-[#1F2937] font-semibold'>{expectedFriend.name}</h2>
                        <div className={`badge leading-none text-[#FFFFFF] ${expectedFriend.status === 'overdue' ? 'bg-[#EF4444]' : expectedFriend.status === 'almost due' ? 'bg-[#EFAD44]' : expectedFriend.status === 'on-track' ? 'bg-[#244D3F]' : ''}`}>{expectedFriend.status}</div>
                        <div className='flex gap-2'>
                            {
                                expectedFriend.tags.map((tag, ind) => <div key={ind} className="badge badge-soft badge-success">{tag}</div>)
                            }</div>
                        <p>{`"${expectedFriend.bio}"`}</p>
                        <p>Email: {expectedFriend.email}</p>
                    </div>
                </div>
                <div className='flex flex-col gap-4 mt-6'>
                    <button className='btn font-medium bg-base-100 shadow-sm w-full flex items-center gap-2'><HiOutlineBellSnooze className='text-lg' />Snooze 2 Weeks</button>
                    <button className='btn font-medium bg-base-100 shadow-sm w-full flex items-center gap-2'><IoArchiveOutline className='text-lg' />Archive</button>
                    <button className='btn font-medium text-[#EF4444] bg-base-100 shadow-sm w-full flex items-center gap-2'><MdOutlineDelete className='text-lg' />Delete</button>
                </div>
            </div>
            {/* right side */}
            <div className='col-span-2 space-y-6'>
                <div className='grid lg:grid-cols-3 gap-6'>
                    <div className="card bg-base-100 shadow-sm">
                        <div className="card-body text-center">
                            <h2 className="text-center text-3xl font-semibold text-[#244D3F]">{expectedFriend.days_since_contact}</h2>
                            <p className='text-xl text-[#64748B]'>Days Since Contact</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-sm">
                        <div className="card-body text-center">
                            <h2 className="text-center text-3xl font-semibold text-[#244D3F]">{expectedFriend.goal}</h2>
                            <p className='text-xl text-[#64748B]'>Goal (Days)</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-sm">
                        <div className="card-body text-center">
                            <h2 className="text-center text-3xl font-semibold text-[#244D3F]">
                                {new Date(expectedFriend.next_due_date).toLocaleDateString('en-US', {
                                    month: 'short',
                                    day: 'numeric',
                                    year: 'numeric',
                                })}
                            </h2>
                            <p className='text-xl text-[#64748B]'>Next Due</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card bg-base-100 shadow-sm">
                        <div className="card-body">
                            <div className='flex justify-between items-center'>
                                <h2 className="text-xl font-semibold text-[#244D3F]">Relationship Goal</h2>
                                <button className='btn'>Edit</button>
                            </div>
                            <p className='text-lg text-[#64748B]'>Connect every <span className='text-[#1F2937] font-bold'>{expectedFriend.goal} days</span></p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card bg-base-100 shadow-sm">
                        <div className="card-body">
                            <div className='flex justify-between items-center'>
                                <h2 className="text-xl font-semibold text-[#244D3F]">Quick Check-In</h2>
                            </div>
                            <div className='grid grid-cols-3 gap-4'>
                                <button className='btn h-auto w-full flex flex-col items-center text-lg justify-center p-4'><LuPhoneCall className='text-2xl' />Call</button>
                                <button className='btn h-auto w-full flex flex-col items-center text-lg justify-center p-4'><IoChatboxEllipsesOutline className='text-2xl' />Text</button>
                                <button className='btn h-auto w-full flex flex-col items-center text-lg justify-center p-4'><BsCameraVideo className='text-2xl' />Video</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendsDetail;