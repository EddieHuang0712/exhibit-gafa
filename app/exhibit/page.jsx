"use client";
import React, {useEffect, useState} from "react";
import clsx from "clsx";

const videos = [
    {
        id: 1,
        name: "video1",
        url: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: 2,
        name: "video2",
        url: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: 3,
        name: "video3",
        url: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: 4,
        name: "video4",
        url: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: 5,
        name: "video5",
        url: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: 6,
        name: "video6",
        url: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: 7,
        name: "video7",
        url: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: 8,
        name: "video8",
        url: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: 9,
        name: "video9",
        url: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: 10,
        name: "video10",
        url: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: 11,
        name: "video11",
        url: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: 12,
        name: "video12",
        url: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: 13,
        name: "video13",
        url: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: 14,
        name: "video14",
        url: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: 15,
        name: "video15",
        url: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: 16,
        name: "video16",
        url: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
];

const images = [
    {
        id: 1,
        name: "image1",
        url: "1.png"
    },
    {
        id: 2,
        name: "image2",
        url: "2.png"
    },
    {
        id: 3,
        name: "image3",
        url: "3.png"
    },
    {
        id: 4,
        name: "image4",
        url: "4.png"
    },
    {
        id: 5,
        name: "image5",
        url: "5.png"
    },
    {
        id: 6,
        name: "image6",
        url: "6.png"
    },
    {
        id: 7,
        name: "image7",
        url: "7.png"
    },
    {
        id: 8,
        name: "image8",
        url: "8.png"
    },
    {
        id: 9,
        name: "image9",
        url: "9.png"
    },
    {
        id: 10,
        name: "image10",
        url: "10.png"
    },
    {
        id: 11,
        name: "image11",
        url: "11.png"
    },
    {
        id: 12,
        name: "image12",
        url: "12.png"
    },
    {
        id: 13,
        name: "image13",
        url: "13.png"
    },
    {
        id: 14,
        name: "image14",
        url: "14.png"
    },
    {
        id: 15,
        name: "image15",
        url: "15.png"
    },
    {
        id: 16,
        name: "image16",
        url: "16.png"
    },
]

const VideoContainer = ({index, className, isPlayed}) => {
    return (
        <div
            className={clsx(
                `absolute aspect-[1.98] transition-all duration-700 animate-fadeIn`,
                className)}
        >
            {
                isPlayed ?
                    <video className="w-full h-full" src={`https://eddiehuang.oss-cn-guangzhou.aliyuncs.com/gafa/video${12}.mp4`} autoPlay={true} loop={true}/>
                    :
                    <img className="w-full h-full bg-[#d9d9d9]" src={`https://eddiehuang.oss-cn-guangzhou.aliyuncs.com/gifs/gafa-video1.gif`} alt={`${index}`}/>
            }
        </div>
    )
}

export default function Exhibit() {
    const [num, setNum] = useState(0)

    // @ts-ignore
    useEffect(() => {
        console.log('加载外部脚本');
        const script = document.createElement('script');
        script.src = 'https://js.pusher.com/8.2.0/pusher.min.js';
        script.async = true;

        script.onload = () => {
            // 外部JavaScript文件加载完成后执行初始化命令
            Pusher.logToConsole = true;

            let pusher = new Pusher('8ab2c384ac5036519b69', {
                cluster: 'us3'
            });

            let channel = pusher.subscribe('event-channel');
            channel.bind('event-name', function (data) {
                console.log('收到事件', data);
                setNum(data.num);
            });
        };

        document.body.appendChild(script);
    }, []);

    return (
        <main className="flex w-screen h-screen flex-col items-center justify-between bg-white px-[6vw] py-[5vw]">
            <div
                className={`relative w-full h-full flex flex-wrap ${num === 0 ? 'justify-between' : 'justify-center'} items-center gap-6`}>
                <VideoContainer
                    isPlayed={num === 1}
                    index={1}
                    className={`${num === 0 ? 'top-[0] left-[0%] w-[23.5%]' : num === 1 ? 'top-[5vw] left-[10%] w-[80%]' : 'hidden opacity-0'}`}
                />
                <VideoContainer
                    isPlayed={num === 2}
                    index={2}
                    className={`${num === 0 ? 'top-[0] left-[25.33%] w-[23.5%]' : num === 2 ? 'top-[5vw] left-[10%] w-[80%]' : 'hidden opacity-0'}`}
                />
                <VideoContainer
                    index={3}
                    className={`${num === 0 ? 'top-[0] left-[50.66%] w-[23.5%]' : num === 3 ? 'top-[5vw] left-[10%] w-[80%]' : 'hidden opacity-0'}`}
                />
                <VideoContainer
                    index={4}
                    className={`${num === 0 ? 'top-[0] left-[76%] w-[23.5%]' : num === 4 ? 'top-[5vw] left-[10%] w-[80%]' : 'hidden opacity-0'}`}
                />
                <VideoContainer
                    index={5}
                    className={`${num === 0 ? 'top-[12vw] left-[0%] w-[23.5%]' : num === 5 ? 'top-[5vw] left-[10%] w-[80%]' : 'hidden opacity-0'}`}
                />
                <VideoContainer
                    index={6}
                    className={`${num === 0 ? 'top-[12vw] left-[25.33%] w-[23.5%]' : num === 6 ? 'top-[5vw] left-[10%] w-[80%]' : 'hidden opacity-0'}`}
                />
                <VideoContainer
                    index={7}
                    className={`${num === 0 ? 'top-[12vw] left-[50.66%] w-[23.5%]' : num === 7 ? 'top-[5vw] left-[10%] w-[80%]' : 'hidden opacity-0'}`}
                />
                <VideoContainer
                    index={8}
                    className={`${num === 0 ? 'top-[12vw] left-[76%] w-[23.5%]' : num === 8 ? 'top-[5vw] left-[10%] w-[80%]' : 'hidden opacity-0'}`}
                />
                <VideoContainer
                    index={9}
                    className={`${num === 0 ? 'top-[24vw] left-[0%] w-[23.5%]' : num === 9 ? 'top-[5vw] left-[10%] w-[80%]' : 'hidden opacity-0'}`}
                />
                <VideoContainer
                    index={10}
                    className={`${num === 0 ? 'top-[24vw] left-[25.33%] w-[23.5%]' : num === 10 ? 'top-[5vw] left-[10%] w-[80%]' : 'hidden opacity-0'}`}
                />
                <VideoContainer
                    index={11}
                    className={`${num === 0 ? 'top-[24vw] left-[50.66%] w-[23.5%]' : num === 11 ? 'top-[5vw] left-[10%] w-[80%]' : 'hidden opacity-0'}`}
                />
                <VideoContainer
                    index={12}
                    isPlayed={num === 12}
                    className={`${num === 0 ? 'top-[24vw] left-[76%] w-[23.5%]' : num === 12 ? 'top-[5vw] left-[10%] w-[80%]' : 'hidden opacity-0'}`}
                />
                <VideoContainer
                    index={13}
                    className={`${num === 0 ? 'top-[36vw] left-[0%] w-[23.5%]' : num === 13 ? 'top-[5vw] left-[10%] w-[80%]' : 'hidden opacity-0'}`}
                />
                <VideoContainer
                    index={14}
                    className={`${num === 0 ? 'top-[36vw] left-[25.33%] w-[23.5%]' : num === 14 ? 'top-[5vw] left-[10%] w-[80%]' : 'hidden opacity-0'}`}
                />
                <VideoContainer
                    index={15}
                    className={`${num === 0 ? 'top-[36vw] left-[50.66%] w-[23.5%]' : num === 15 ? 'top-[5vw] left-[10%] w-[80%]' : 'hidden opacity-0'}`}
                />
                <VideoContainer
                    index={16}
                    className={`${num === 0 ? 'top-[36vw] left-[76%] w-[23.5%]' : num === 16 ? 'top-[5vw] left-[10%] w-[80%]' : 'hidden opacity-0'}`}
                />
            </div>
        </main>
    );
}
