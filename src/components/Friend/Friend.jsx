import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Friend = ({ friend }) => {
    return (
        <Link href={`/friends/${friend.id}`}>
            <div className="card bg-base-100 shadow-sm">
                <div className="card-body text-center flex flex-col justify-center items-center">
                    <Image src={friend.picture} alt={friend.name} width={70} height={70} className='rounded-full object-cover' />
                    <h2 className='text-2xl text-[#1F2937] font-semibold'>{friend.name}</h2>
                    <p>{friend.days_since_contact}d ago</p>
                    <div className='flex gap-2'>
                        {
                            friend.tags.map((tag, ind) => <div key={ind} className="badge badge-soft badge-success">{tag}</div>)
                        }</div>
                    <div className={`badge leading-none text-[#FFFFFF] ${friend.status === 'overdue' ? 'bg-[#EF4444]' : friend.status === 'almost due' ? 'bg-[#EFAD44]' : friend.status === 'on-track' ? 'bg-[#244D3F]' : ''}`}>{friend.status}</div>
                </div>
            </div>
        </Link>
    );
};

export default Friend;