'use client'
import Link from 'next/link';
import React from 'react';
import logo from '../../assets/logo.png'
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { IoHomeOutline } from 'react-icons/io5';
import { TfiTime } from 'react-icons/tfi';
import { ImStatsDots } from 'react-icons/im';

const Navbar = () => {
    const path = usePathname()
    return (
        <div className='bg-base-100 shadow-sm'>
            <div className="navbar w-10/12 mx-auto ">
                <div className="navbar-start">
                    <Link href='/' className="btn btn-ghost text-xl"><Image src={logo} alt="navbar-logo" /></Link>
                </div>
                <div className="navbar-end">
                    <Link href='/' className={path === '/' ? 'bg-[#244D3F] text-[#FFFFFF] p-3 rounded-sm font-semibold flex items-center gap-1' : 'p-3 text-[#64748B] font-semibold flex items-center gap-1'}><IoHomeOutline />Home</Link>
                    <Link href='/timeline' className={path === '/timeline' ? 'bg-[#244D3F] text-[#FFFFFF] p-3 rounded-sm font-semibold flex items-center gap-1' : 'p-3 text-[#64748B] font-semibold flex items-center gap-1'}><TfiTime />Timeline</Link>
                    <Link href='/stats' className={path === '/stats' ? 'bg-[#244D3F] text-[#FFFFFF] p-3 rounded-sm font-semibold flex items-center gap-1' : 'p-3 text-[#64748B] font-semibold flex items-center gap-1'}><ImStatsDots />Stats</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;