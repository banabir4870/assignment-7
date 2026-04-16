import React from 'react';
import { FiPlus } from 'react-icons/fi';

const Banner = () => {
    return (
        <div className='mt-20 mb-8 text-center'>
            <div>
                <h1 className='text-xl md:text-4xl lg:text-5xl font-bold text-[#1F2937] mb-4'>Friends to keep close in your life</h1>
                <p className='text-[#64748B] mb-8'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br /> relationships that matter most.</p>
                <button className='btn items-center bg-[#244D3F] text-white'><FiPlus />Add a Friend</button>
            </div>
            <div className='my-10 grid grid-cols-2 lg:grid-cols-4 gap-6'>
                <div className="card bg-base-100 shadow-sm">
                    <div className="card-body text-center">
                        <h2 className="text-center text-3xl font-semibold text-[#244D3F]">0</h2>
                        <p className='text-xl text-[#64748B]'>Total Friends</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-sm">
                    <div className="card-body text-center">
                        <h2 className="text-center text-3xl font-semibold text-[#244D3F]">0</h2>
                        <p className='text-xl text-[#64748B]'>On Track</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-sm">
                    <div className="card-body text-center">
                        <h2 className="text-center text-3xl font-semibold text-[#244D3F]">0</h2>
                        <p className='text-xl text-[#64748B]'>Need Attention</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-sm">
                    <div className="card-body text-center">
                        <h2 className="text-center text-3xl font-semibold text-[#244D3F]">0</h2>
                        <p className='text-xl text-[#64748B]'>Interactions This Month</p>
                    </div>
                </div>
            </div>
            <hr className='border-gray-300'/>
        </div>
    );
};

export default Banner;