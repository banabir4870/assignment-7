import Image from 'next/image';
import React from 'react';
import logoXl from '../../assets/logo-xl.png'
import facebookLogo from '../../assets/facebook.png'
import instaLogo from '../../assets/instagram.png'
import twiterLogo from '../../assets/twitter.png'

const Footer = () => {
    return (
        <footer className="bg-[#244D3F] text-primary-content py-20 mt-16 w-full">
            <div className='w-11/12 lg:w-9/12 mx-auto'>
                <aside className='flex flex-col justify-center items-center space-y-4'>
                    <Image src={logoXl} alt='footer-logo'></Image>
                    <p className='text-[#FFFFFF]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                </aside>
                <nav className='mt-6 mb-10 space-y-4 text-center'>
                    <h1>Social Links</h1>
                    <div className="flex justify-center gap-3">
                        <a>
                            <Image src={instaLogo} alt=''></Image>
                        </a>
                        <a>
                            <Image src={facebookLogo} alt=''></Image>
                        </a>
                        <a>
                            <Image src={twiterLogo} alt=''></Image>
                        </a>
                    </div>
                </nav>
                <hr className='border-gray-500' />
                <div className='lg:flex justify-between items-center mt-7 text-[#FAFAFA]'>
                    <div className='text-center lg:text-left'>
                        <p>© 2026 KeenKeeper. All rights reserved.</p>
                    </div>
                    <div>
                        <ul className='flex justify-between lg:gap-12'>
                            <li>Privacy Policy </li>
                            <li>Terms of Service</li>
                            <li>Cookies</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;