import React from 'react';
import callImg from '../../assets/call.png'
import textImg from '../../assets/text.png'
import videoImg from '../../assets/video.png'
import Image from 'next/image';


const HistoryCard = ({ history }) => {
    const getImg = (type) => {
        if (type === 'call') {
            return <Image src={callImg} alt='Call Image'></Image>
        };
        if (type === 'text') {
            return <Image src={textImg} alt='Call Image'></Image>
        };
        if (type === 'video') {
            return <Image src={videoImg} alt='Call Image'></Image>
        };

    }
    return (
        <div className="bg-base-100 shadow-sm my-6 p-4 flex gap-4 items-center">
            <div className="">
                {getImg(history.type)}
            </div>
            <div>
                <h2><span className='text-[#244D3F] text-xl font-medium'>{history.type}</span> with {history.name}</h2>
                <p>{history.date}</p>
            </div>
        </div>
    );
};

export default HistoryCard;