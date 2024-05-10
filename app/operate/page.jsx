"use client"
import React, {forwardRef, useEffect, useRef, useState} from "react";
import clsx from "clsx";

const buttons = [
    {id: 12, name: 'button12'},
    {id: 11, name: 'button11'},
    {id: 10, name: 'button10'},
    {id: 9, name: 'button9'},
    {id: 8, name: 'button8'},
    {id: 7, name: 'button7'},
    {id: 6, name: 'button6'},
    {id: 5, name: 'button5'},
    {id: 4, name: 'button4'},
    {id: 3, name: 'button3'},
    {id: 2, name: 'button2'},
    {id: 1, name: 'button1'},
];

const FloorButton = forwardRef((props, ref) => {
    const {className, id, onClick} = props

    return (
        <button
            className={clsx(
                `relative h-fit hover:scale-125 transition-all duration-300 ease-in-out`,
                className)}
            onClick={onClick}
            ref={ref}
        >
            <img className="w-full" src={`f${id}.png`} alt={`floor${id}`}/>
        </button>
    );
})

export default function Operate() {
    const [selectedId, setSelectedId] = useState(0);
    const [isTextShowed, setIsTextShowed] = useState(false);

    const selectedRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        console.log(selectedRef,selectedId)
        if (selectedId > 0) {
            containerRef.current.style.width = '100%'
        } else {
            containerRef.current.style.width = '30%'
        }
        if (selectedRef.current) {
            if (selectedId > 0) {
                selectedRef.current.style.width = '40%'
            } else {
                selectedRef.current.style.width = selectedId <= 10 ? `${40 - 10 + selectedId}%` : '40%'
            }
            const containerRect = containerRef.current.getBoundingClientRect();
            const selectedRect = selectedRef.current.getBoundingClientRect();
            const scrollPosition = selectedRect.top - containerRect.top - containerRect.height / 2 + selectedRect.height / 2;

            console.log(containerRef.current.scrollTop, scrollPosition)

            containerRef.current.scrollTo({
                top: containerRef.current.scrollTop + scrollPosition,
                behavior: 'smooth',
            });
        }
    }, [selectedId]);

    const handleClick = async (num) => {
        setSelectedId(num)
        if ((selectedId === num && num !== 0) || (selectedId !== num && num === 0)) {
            if (isTextShowed) {
                setIsTextShowed(false)
                setSelectedId(0)
                //发送请求到操作端
                try {
                    await fetch('/api/channels-event', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({num: 0}),
                    });
                } catch (e) {
                    console.error('failed to push data');
                }
            } else if (num !== 0) {
                setIsTextShowed(true)
            }
        } else {
            //发送请求到操作端
            try {
                await fetch('/api/channels-event', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({num}),
                });
            } catch (e) {
                console.error('failed to push data');
            }
        }
    }

    return (
        <main
            className="relative h-screen bg-white">
            <div
                className={`flex relative flex-col w-[30%] h-full mx-auto items-center overflow-auto py-16 ${selectedId === 0 ? 'transition-all duration-500 ease-in-out' : ''}`}
                ref={containerRef}
            >
                <div
                    onClick={() => handleClick(0)}
                    className="fixed w-screen h-full z-0">
                </div>
                <FloorButton
                    id={12}
                    className="w-[40%] mt-[0%] z-[12]"
                    ref={selectedId === 12 ? selectedRef : null}
                    onClick={() => handleClick(12)}
                >
                </FloorButton>
                <FloorButton
                    id={11}
                    className="w-[40%] mt-[-4%] z-[11]"
                    ref={selectedId === 11 ? selectedRef : null}
                    onClick={() => handleClick(11)}
                >
                </FloorButton>
                <FloorButton
                    id={10}
                    className="w-[40%] mt-[-7%] z-[10]"
                    ref={selectedId === 10 ? selectedRef : null}
                    onClick={() => handleClick(10)}
                >
                </FloorButton>
                <FloorButton
                    id={9}
                    className="w-[39%] mt-[-7%] z-[9]"
                    ref={selectedId === 9 ? selectedRef : null}
                    onClick={() => handleClick(9)}
                >
                </FloorButton>
                <FloorButton
                    id={8}
                    className="w-[38%] mt-[-7%] z-[8]"
                    ref={selectedId === 8 ? selectedRef : null}
                    onClick={() => handleClick(8)}
                >
                </FloorButton>
                <FloorButton
                    id={7}
                    className="w-[37%] mt-[-7%] z-[7]"
                    ref={selectedId === 7 ? selectedRef : null}
                    onClick={() => handleClick(7)}
                >
                </FloorButton>
                <FloorButton
                    id={6}
                    className="w-[36%] mt-[-7%] z-[6]"
                    ref={selectedId === 6 ? selectedRef : null}
                    onClick={() => handleClick(6)}
                >
                </FloorButton>
                <FloorButton
                    id={5}
                    className="w-[35%] mt-[-7%] z-[5]"
                    ref={selectedId === 5 ? selectedRef : null}
                    onClick={() => handleClick(5)}
                >
                </FloorButton>
                <FloorButton
                    id={4}
                    className="w-[34%] mt-[-7%] z-[4]"
                    ref={selectedId === 4 ? selectedRef : null}
                    onClick={() => handleClick(4)}
                >
                </FloorButton>
                <FloorButton
                    id={3}
                    className="w-[33%] mt-[-7%] z-[3]"
                    ref={selectedId === 3 ? selectedRef : null}
                    onClick={() => handleClick(3)}
                >
                </FloorButton>
                <FloorButton
                    id={2}
                    className="w-[32%] mt-[-7%] z-[2]"
                    ref={selectedId === 2 ? selectedRef : null}
                    onClick={() => handleClick(2)}
                >
                </FloorButton>
                <FloorButton
                    id={1}
                    className="w-[31%] mt-[-7%] z-[1]"
                    ref={selectedId === 1 ? selectedRef : null}
                    onClick={() => handleClick(1)}
                >
                </FloorButton>
                {isTextShowed &&
                    <>
                        <div className="fixed top-[7%] left-[5%] text-[1.2vw] text-[#FFE600]">
                            向光而行
                        </div>
                        <div className="fixed top-[7%] right-[5%] text-[1.2vw] text-[#FFE600] text-right">
                            <p>广州美术学院</p>
                            <p>科智媒体艺术中心</p>
                        </div>
                        <div className="fixed bottom-[7%] right-[5%] text-[1.2vw] text-[#FFE600] text-right">
                            2024
                        </div>
                        <div className="fixed top-[17%] left-[5%] text-[1.2vw] w-fit h-fit overflow-hidden text-black">
                            <p>档案编号:2024-Y-0012</p><br/>
                            <p>受访者-杨女士</p>
                            <p>年龄-42岁</p>
                            <p>家乡-贵州</p>
                            <p>职业-餐饮店后厨面点师</p>
                            <p>居住地址-广州某城中村自建房3楼集体宿舍</p>
                            <div className="absolute top-0 left-[100%] w-full h-full bg-white animate-slideRight"/>
                        </div>
                        <div className="fixed top-[52%] left-[5%] text-[1.2vw] w-fit h-fit overflow-hidden text-black">
                            <p>居住感受-</p>
                            <p>今年三月份来这里的餐厅工作</p>
                            <p>被分配到这个宿舍</p>
                            <p>这里有阳台，采光通风挺好</p>
                            <p>几个员工住一起聊天挺快乐的</p>
                            <p>都心态好</p>
                            <p>现在是和前厅经理一间房间</p>
                            <p>平常一起分享事情</p>
                            <p>打打闹闹说说笑笑</p>
                            <p>上班挺开心的</p>
                            <p>每天走路十分钟到餐厅</p>
                            <p>一起上下班</p>
                            <p>买小吃</p>
                            <div className="absolute top-0 left-[100%] w-full h-full bg-white animate-slideRight"/>
                        </div>
                        <div className="fixed top-[32%] right-[5%] text-[1.2vw] w-fit h-fit overflow-hidden text-right text-black">
                            <p>记忆物品-</p>
                            <p>工衣</p>
                            <p>梳妆镜</p>
                            <div className="absolute top-0 right-[100%] w-full h-full bg-white animate-slideLeft"/>
                        </div>
                        <div className="fixed top-[45%] right-[5%] text-[1.2vw] w-fit h-fit overflow-hidden text-right text-black">
                            <p>房屋规格-三房一厅</p>
                            <p>租金-700/月</p>
                            <div className="absolute top-0 right-[100%] w-full h-full bg-white animate-slideLeft"/>
                        </div>
                        <div className="fixed top-[56%] right-[5%] text-[1.2vw] w-fit h-fit overflow-hidden text-right text-black">
                            <p>预估受光面积-20平方米/83平方米</p>
                            <p>预估受光时间-6小时/天</p>
                            <div className="absolute top-0 right-[100%] w-full h-full bg-white animate-slideLeft"/>
                        </div>
                        <div className="fixed top-[68%] right-[5%] text-[1.2vw] w-fit h-fit overflow-hidden text-right text-black">
                            <p>未来期待-</p>
                            <p>好好上班供儿子女儿上学</p>
                            <p>让孩子过得更好，多读点书</p>
                            <p>退休后希望回老家的小房子住</p>
                            <p>在小院子种点花花草草</p>
                            <div className="absolute top-0 right-[100%] w-full h-full bg-white animate-slideLeft"/>
                        </div>
                    </>
                }
            </div>
        </main>
    );
}
