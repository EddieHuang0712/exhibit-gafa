"use client";
import React, {useEffect, useState} from "react";
import clsx from "clsx";

const VideoContainer = ({index, className, isPlayed}) => {
    return (
        <div
            className={clsx(
                `absolute aspect-[1.98] transition-all duration-700 animate-fadeIn`,
                className)}
        >
            {
                isPlayed ?
                    <video className="w-full h-full"
                           src={`https://eddiehuang.oss-cn-guangzhou.aliyuncs.com/gafa/video${index}.mp4`} autoPlay={true}
                           loop={true}/>
                    :
                    <video className="w-full h-full"
                           src={`https://eddiehuang.oss-cn-guangzhou.aliyuncs.com/gafa/video${index}.mp4`} autoPlay={true} muted={true}
                           loop={true}/>
                // <img className="w-full h-full bg-[#d9d9d9]" src={`https://eddiehuang.oss-cn-guangzhou.aliyuncs.com/gafa/gafa-video${index}.gif`} alt={`${index}`}/>
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
        <main className="flex w-screen h-screen flex-col items-center justify-between bg-transparent px-[6vw] py-[5vw]">
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
                    isPlayed={num === 3}
                    index={3}
                    className={`${num === 0 ? 'top-[0] left-[50.66%] w-[23.5%]' : num === 3 ? 'top-[5vw] left-[10%] w-[80%]' : 'hidden opacity-0'}`}
                />
                <VideoContainer
                    isPlayed={num === 4}
                    index={4}
                    className={`${num === 0 ? 'top-[0] left-[76%] w-[23.5%]' : num === 4 ? 'top-[5vw] left-[10%] w-[80%]' : 'hidden opacity-0'}`}
                />
                <VideoContainer
                    isPlayed={num === 5}
                    index={5}
                    className={`${num === 0 ? 'top-[12vw] left-[0%] w-[23.5%]' : num === 5 ? 'top-[5vw] left-[10%] w-[80%]' : 'hidden opacity-0'}`}
                />
                <VideoContainer
                    isPlayed={num === 6}
                    index={6}
                    className={`${num === 0 ? 'top-[12vw] left-[25.33%] w-[23.5%]' : num === 6 ? 'top-[5vw] left-[10%] w-[80%]' : 'hidden opacity-0'}`}
                />
                <VideoContainer
                    isPlayed={num === 7}
                    index={7}
                    className={`${num === 0 ? 'top-[12vw] left-[50.66%] w-[23.5%]' : num === 7 ? 'top-[5vw] left-[10%] w-[80%]' : 'hidden opacity-0'}`}
                />
                <VideoContainer
                    isPlayed={num === 8}
                    index={8}
                    className={`${num === 0 ? 'top-[12vw] left-[76%] w-[23.5%]' : num === 8 ? 'top-[5vw] left-[10%] w-[80%]' : 'hidden opacity-0'}`}
                />
                <VideoContainer
                    isPlayed={num === 9}
                    index={9}
                    className={`${num === 0 ? 'top-[24vw] left-[0%] w-[23.5%]' : num === 9 ? 'top-[5vw] left-[10%] w-[80%]' : 'hidden opacity-0'}`}
                />
                <VideoContainer
                    isPlayed={num === 10}
                    index={10}
                    className={`${num === 0 ? 'top-[24vw] left-[25.33%] w-[23.5%]' : num === 10 ? 'top-[5vw] left-[10%] w-[80%]' : 'hidden opacity-0'}`}
                />
                <VideoContainer
                    isPlayed={num === 11}
                    index={11}
                    className={`${num === 0 ? 'top-[24vw] left-[50.66%] w-[23.5%]' : num === 11 ? 'top-[5vw] left-[10%] w-[80%]' : 'hidden opacity-0'}`}
                />
                <VideoContainer
                    isPlayed={num === 12}
                    index={12}
                    className={`${num === 0 ? 'top-[24vw] left-[76%] w-[23.5%]' : num === 12 ? 'top-[5vw] left-[10%] w-[80%]' : 'hidden opacity-0'}`}
                />
                <VideoContainer
                    isPlayed={num === 13}
                    index={13}
                    className={`${num === 0 ? 'top-[36vw] left-[0%] w-[23.5%]' : num === 13 ? 'top-[5vw] left-[10%] w-[80%]' : 'hidden opacity-0'}`}
                />
                <VideoContainer
                    isPlayed={num === 14}
                    index={14}
                    className={`${num === 0 ? 'top-[36vw] left-[25.33%] w-[23.5%]' : num === 14 ? 'top-[5vw] left-[10%] w-[80%]' : 'hidden opacity-0'}`}
                />
                <VideoContainer
                    isPlayed={num === 15}
                    index={15}
                    className={`${num === 0 ? 'top-[36vw] left-[50.66%] w-[23.5%]' : num === 15 ? 'top-[5vw] left-[10%] w-[80%]' : 'hidden opacity-0'}`}
                />
                <VideoContainer
                    isPlayed={num === 16}
                    index={16}
                    className={`${num === 0 ? 'top-[36vw] left-[76%] w-[23.5%]' : num === 16 ? 'top-[5vw] left-[10%] w-[80%]' : 'hidden opacity-0'}`}
                />
            </div>
        </main>
    );
}
