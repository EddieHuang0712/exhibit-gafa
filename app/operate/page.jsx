"use client"
import React, {forwardRef, useEffect, useRef, useState} from "react";
import clsx from "clsx";

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

const InfoBlock = ({className, isRight = false, children}) => {
    return (
        <div className={clsx(
            `fixed text-[1vw] w-fit h-fit overflow-hidden text-black ${isRight ? 'text-right' : 'text-left'}`,
            className)}
            >
            {children}
            <div className={`absolute top-0 w-full h-full bg-white ${isRight ? 'right-[100%] animate-slideLeft' : 'left-[100%] animate-slideRight'}`}/>
        </div>
    )
}

const IntervieweeInfo = ({isLeft = false, children}) => {
    return (
        <>
            <div className="fixed top-[7%] left-[4%] text-[1.2vw] text-[#FFE600]">
                向光而行
            </div>
            <div className="fixed top-[7%] right-[4%] text-[1.2vw] text-[#FFE600] text-right">
                <p>广州美术学院</p>
                <p>科智媒体艺术中心</p>
            </div>
            <div className={`fixed text-[1.2vw] text-[#FFE600] ${isLeft ? 'bottom-[12%] left-[4%] text-left' : 'bottom-[7%] right-[4%] text-right'}`}>
                2024
            </div>
            {children}
        </>
    )
}

export default function Operate() {
    const [selectedId, setSelectedId] = useState(0);
    const [preId, setPreId] = useState(0);
    const [isTextShowed, setIsTextShowed] = useState(false);

    const selectedRef = useRef(null);
    const preRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        if (selectedId > 0) {
            containerRef.current.children[0].style.width = '100%'
        } else {
            containerRef.current.children[0].style.width = '30%'
        }
        if (selectedRef.current) {
            if (selectedId > 0) {
                selectedRef.current.style.width = '40%'
            } else {
                selectedRef.current.style.width = selectedRef.current.id <= 10 ? `${40 - 10 + selectedRef.current.id}%` : '40%'
            }
            const containerRect = containerRef.current.getBoundingClientRect();
            const selectedRect = selectedRef.current.getBoundingClientRect();
            const scrollPosition = selectedRect.top - containerRect.top - containerRect.height / 2 + selectedRect.height / 2;
            containerRef.current.scrollTo({
                top: containerRef.current.scrollTop + scrollPosition,
                behavior: 'smooth',
            });
        }
    }, [selectedId]);

    useEffect(() => {
        if (preRef.current) {
            const containerRect = containerRef.current.getBoundingClientRect();
            const preRect = preRef.current.getBoundingClientRect();
            const scrollPosition = preRect.top - containerRect.top - containerRect.height / 2 + preRect.height / 2;
            containerRef.current.scrollTo({
                top: containerRef.current.scrollTop + scrollPosition,
                behavior: 'smooth',
            });
        }
    },[preId])

    const handleClick = async (event, num) => {
        event.stopPropagation();
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
                    setPreId(selectedId)
                } catch (e) {
                    console.error('failed to push data');
                }
            } else if (num !== 0) {
                setIsTextShowed(true)
            } else {
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
                    setPreId(selectedId)
                } catch (e) {
                    console.error('failed to push data');
                }
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
                onClick={(event) => handleClick(event,0)}
                className={`flex relative flex-col w-full h-full mx-auto items-center ${selectedId === 0 ? 'overflow-auto': 'overflow-hidden'} py-16 ${selectedId === 0 ? 'transition-all duration-500 ease-in-out' : ''}`}
                ref={containerRef}
            >
                <div className="flex flex-col w-[30%] h-fit items-center">
                    <FloorButton
                        id={12}
                        className="w-[40%] mt-[0%] z-[12]"
                        ref={selectedId === 16 ? selectedRef : preId === 16 ? preRef : null}
                        onClick={(event) => handleClick(event, 16)}
                    >
                    </FloorButton>
                    <FloorButton
                        id={11}
                        className="w-[40%] mt-[-4%] z-[11]"
                        ref={selectedId === 15 ? selectedRef : preId === 15 ? preRef : null}
                        onClick={(event) => handleClick(event, 15)}
                    >
                    </FloorButton>
                    <FloorButton
                        id={10}
                        className="w-[40%] mt-[-7%] z-[10]"
                        ref={selectedId === 14 ? selectedRef : preId === 14 ? preRef : null}
                        onClick={(event) => handleClick(event, 14)}
                    >
                    </FloorButton>
                    <FloorButton
                        id={9}
                        className="w-[39%] mt-[-7%] z-[9]"
                        ref={selectedId === 13 ? selectedRef : preId === 13 ? preRef : null}
                        onClick={(event) => handleClick(event, 13)}
                    >
                    </FloorButton>
                    <FloorButton
                        id={8}
                        className="w-[38%] mt-[-7%] z-[8]"
                        ref={selectedId === 11 ? selectedRef : preId === 11 ? preRef : null}
                        onClick={(event) => handleClick(event, 11)}
                    >
                    </FloorButton>
                    <FloorButton
                        id={7}
                        className="w-[37%] mt-[-7%] z-[7]"
                        ref={selectedId === 10 ? selectedRef : preId === 10 ? preRef : null}
                        onClick={(event) => handleClick(event, 10)}
                    >
                    </FloorButton>
                    <FloorButton
                        id={6}
                        className="w-[36%] mt-[-7%] z-[6]"
                        ref={selectedId === 7 ? selectedRef : preId === 7 ? preRef : null}
                        onClick={(event) => handleClick(event, 7)}
                    >
                    </FloorButton>
                    <FloorButton
                        id={5}
                        className="w-[35%] mt-[-7%] z-[5]"
                        ref={selectedId === 6 ? selectedRef : preId === 6 ? preRef : null}
                        onClick={(event) => handleClick(event, 6)}
                    >
                    </FloorButton>
                    <FloorButton
                        id={4}
                        className="w-[34%] mt-[-7%] z-[4]"
                        ref={selectedId === 4 ? selectedRef : preId === 4 ? preRef : null}
                        onClick={(event) => handleClick(event, 4)}
                    >
                    </FloorButton>
                    <FloorButton
                        id={3}
                        className="w-[33%] mt-[-7%] z-[3]"
                        ref={selectedId === 3 ? selectedRef : preId === 3 ? preRef : null}
                        onClick={(event) => handleClick(event, 3)}
                    >
                    </FloorButton>
                    <FloorButton
                        id={2}
                        className="w-[32%] mt-[-7%] z-[2]"
                        ref={selectedId === 2 ? selectedRef : preId === 2 ? preRef : null}
                        onClick={(event) => handleClick(event, 2)}
                    >
                    </FloorButton>
                    <FloorButton
                        id={1}
                        className="w-[31%] mt-[-7%] z-[1]"
                        ref={selectedId === 1 ? selectedRef : preId === 1 ? preRef : null}
                        onClick={(event) => handleClick(event, 1)}
                    >
                    </FloorButton>
                </div>
                {isTextShowed && selectedId === 16 &&
                    <>
                        <IntervieweeInfo>
                            <InfoBlock className="top-[17%] left-[4%]">
                                <p>档案编号:2024-Y-0012</p><br/>
                                <p>受访者-杨女士</p>
                                <p>年龄-42岁</p>
                                <p>家乡-贵州</p>
                                <p>职业-餐饮店后厨面点师</p>
                                <p>居住地址-广州某城中村自建房3楼集体宿舍</p>
                            </InfoBlock>
                            <InfoBlock className="top-[52%] left-[4%]">
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
                            </InfoBlock>
                            <InfoBlock className="top-[32%] right-[4%]" isRight={true}>
                                <p>记忆物品-</p>
                                <p>工衣</p>
                                <p>梳妆镜</p>
                            </InfoBlock>
                            <InfoBlock className="top-[45%] right-[4%]" isRight={true}>
                                <p>房屋规格-三房一厅</p>
                                <p>租金-700/月</p>
                            </InfoBlock>
                            <InfoBlock className="top-[56%] right-[4%]" isRight={true}>
                                <p>预估受光面积-20平方米/83平方米</p>
                                <p>预估受光时间-6小时/天</p>
                            </InfoBlock>
                            <InfoBlock className="top-[68%] right-[4%]" isRight={true}>
                                <p>未来期待-</p>
                                <p>好好上班供儿子女儿上学</p>
                                <p>让孩子过得更好，多读点书</p>
                                <p>退休后希望回老家的小房子住</p>
                                <p>在小院子种点花花草草</p>
                            </InfoBlock>
                        </IntervieweeInfo>
                    </>
                }
                {isTextShowed && selectedId === 15 &&
                    <>
                        <IntervieweeInfo>
                            <InfoBlock className="top-[17%] left-[4%]">
                                <p>档案编号:2024-Y-0011</p><br/>
                                <p>受访者-理发师先生</p>
                                <p>年龄-22岁</p>
                                <p>家乡-广东人</p>
                            </InfoBlock>
                            <InfoBlock className="top-[42%] left-[4%]">
                                <p>职业-男士理发师 造型师</p>
                            </InfoBlock>
                            <InfoBlock className="top-[54%] left-[4%]">
                                <p>居住地址-广州某城中村</p>
                                <p>房屋规格：三层半</p>
                                <p>租金：1250/月</p>
                                <p>预估受光面积：9平方米/93平方米</p>
                                <p>预估受光时间：5小时/天</p>
                            </InfoBlock>
                            <InfoBlock className="top-[80%] left-[4%]">
                                <p>入住原因-</p>
                                <p>2023年8月决定出来开店的</p>
                                <p>9月份理发店开始营业</p>
                            </InfoBlock>
                            <InfoBlock className="top-[25%] right-[4%]" isRight={true}>
                                <p>深刻记忆-</p>
                                <p>为许多顾客在人生重要节点理发做造型</p>
                                <p>得到顾客的夸赞和反馈会很开心</p>
                                <p>有成就感</p>
                                <p>上下班路上有花店、咖啡店、宠物店</p>
                                <p>平时买买花和咖啡也为自己提供了情绪价值</p>
                                <p>附近的居民和老板都比较熟悉</p>
                                <p>很像原始的社区生活</p>
                                <p>温暖</p>
                                <p>有人情味</p>
                            </InfoBlock>
                            <InfoBlock className="top-[58%] right-[4%]" isRight={true}>
                                <p>记忆物品-</p>
                                <p>店里的宣传海报</p>
                                <p>这里的点点滴滴</p>
                                <p>还有不同时间的海报都是我们的代表和回忆</p>
                            </InfoBlock>
                            <InfoBlock className="top-[72%] right-[4%]" isRight={true}>
                                <p>未来期待-</p>
                                <p>想做社区营造</p>
                                <p>基于现在租住的阁楼</p>
                                <p>做微观的、小一些的项目社区类集合空间、工作坊</p>
                            </InfoBlock>
                        </IntervieweeInfo>
                    </>
                }
                {isTextShowed && selectedId === 14 &&
                    <>
                        <IntervieweeInfo>
                            <InfoBlock className="top-[17%] left-[4%]">
                                <p>档案编号:2024-Y-0010</p>
                                <p>受访者-曾阿姨</p>
                                <p>年龄-43岁</p>
                                <p>家乡-湖南</p>
                                <p>职业-现退休</p>
                                <p>居住地址-前广州某村自建房</p>
                                <p>房屋规格：一房</p>
                                <p>租金：100/月（十几年前）</p>
                                <p>预估受光面积：4平方米/41平方米</p>
                                <p>预估受光时间：4小时/天</p>
                            </InfoBlock>
                            <InfoBlock className="top-[50%] left-[4%]">
                                <p>入住原因-</p>
                                <p>外地过来广州打工</p>
                                <p>因为经济条件不太好</p>
                                <p>就找了城中村的自建房</p>
                                <p>比较便宜</p>
                                <p>也里上班地方近</p>
                            </InfoBlock>
                            <InfoBlock className="top-[72%] left-[4%]">
                                <p>未来期待-</p>
                                <p>供孩子上大学就很开心了</p>
                                <p>希望孩子比自己过得好</p>
                                <p>有文化、有好的工作、有自己的房子结婚成家</p>
                                <p>一家人开心健康就很满足了</p>
                            </InfoBlock>
                            <InfoBlock className="top-[23%] right-[4%]" isRight={true}>
                                <p>居住感受-</p>
                                <p>是很多年前的事情了</p>
                                <p>当时住的环境不太好</p>
                                <p>上下楼梯是木板拼的比较简陋</p>
                                <p>厕所是在一楼，生活不太方便</p>
                                <p>但是附近居民人很好</p>
                                <p>相处融洽</p>
                                <p>会互相送菜一起吃饭</p>
                                <p>不会歧视外地人</p>
                                <p>心地善良、热情</p>
                            </InfoBlock>
                            <InfoBlock className="top-[58%] right-[4%]" isRight={true}>
                                <p>深刻记忆-</p>
                                <p>很多年前了</p>
                                <p>当时在工厂做工挺辛苦的</p>
                                <p>一天24个小时轮班，一班是12个小时</p>
                                <p>机器不停在运转</p>
                                <p>当时工资是360块钱一个月，一天是干12个小时</p>
                                <p>工资很低，但也在那个工厂干了19年</p>
                                <p>当时也不舍得吃早餐，想节省一些存钱供两个孩子上学</p>
                                <p>一个四岁，一个六岁，是外公外婆带着在上学</p>
                            </InfoBlock>
                        </IntervieweeInfo>
                    </>
                }
                {isTextShowed && selectedId === 13 &&
                    <>
                        <IntervieweeInfo>
                            <InfoBlock className="top-[17%] left-[4%]">
                                <p>档案编号:2024-Y-0009</p>
                                <p>受访者-林阿姨</p>
                            </InfoBlock>
                            <InfoBlock className="top-[26%] left-[4%]">
                                <p>年龄-51岁</p>
                                <p>家乡-广州本地</p>
                                <p>职业-工厂房东</p>
                                <p>居住地址-广州南亭村西社大街xx巷的自建房</p>
                            </InfoBlock>
                            <InfoBlock className="top-[42%] left-[4%]">
                                <p>房屋规格-两室一厅</p>
                                <p>租金-0/月</p>
                                <p>预估受光面积-10平方米/65平方米</p>
                                <p>预估受光时间-5小时/天</p>
                            </InfoBlock>
                            <InfoBlock className="top-[57%] left-[4%]">
                                <p>入住原因-</p>
                                <p>本地人</p>
                                <p>从小居住在这里</p>
                                <p>零几年建的房子</p>
                                <p>有十多年了</p>
                                <p>也一直在这边工作</p>
                            </InfoBlock>
                            <InfoBlock className="top-[77%] left-[4%]">
                                <p>居住感受-</p>
                                <p>阳光一般般</p>
                                <p>不过是在大学城这边</p>
                                <p>附近的环境还是挺好的,鸟语花香</p>
                                <p>经常有和附近住的大学生聊天也很开心</p>
                            </InfoBlock>
                            <InfoBlock className="top-[32%] right-[4%]" isRight={true}>
                                <p>深刻记忆-</p>
                                <p>看到很多学生丰富的生活和有趣的性格</p>
                                <p>墨菲也曾居住过这里</p>
                                <p>有个代表作《谷围南亭》还挺喜欢的</p>
                            </InfoBlock>
                            <InfoBlock className="top-[50%] right-[4%]" isRight={true}>
                                <p>记忆物品-</p>
                                <p>缝纫机</p>
                                <p>以前家里是做这个谋生</p>
                                <p>继承了手艺</p>
                                <p>做点小活补贴家用</p>
                                <p>爱好也是做手工</p>
                            </InfoBlock>
                            <InfoBlock className="top-[74%] right-[4%]" isRight={true}>
                                <p>未来期待-</p>
                                <p>开心健康就足够了</p>
                                <p>希望有机会去外面世界看看</p>
                                <p>一家人在一起开心快乐最重要</p>
                            </InfoBlock>
                        </IntervieweeInfo>
                    </>
                }
                {isTextShowed && selectedId === 11 &&
                    <>
                        <IntervieweeInfo>
                            <InfoBlock className="top-[17%] left-[4%]">
                                <p>档案编号:2024-Y-0008</p>
                                <p>受访者-秦大叔</p>
                            </InfoBlock>
                            <InfoBlock className="top-[44%] left-[4%]">
                                <p>年龄-51岁</p>
                                <p>性别-男</p>
                                <p>家乡-清远</p>
                                <p>职业-城中村房东</p>
                                <p>居住地址-某城中村</p>
                            </InfoBlock>
                            <InfoBlock className="top-[66%] left-[4%]">
                                <p>房屋规格：一室一厅</p>
                                <p>租金：无</p>
                            </InfoBlock>
                            <InfoBlock className="top-[78%] left-[4%]">
                                <p>未来期待-希望这个楼可以翻新一下</p>
                            </InfoBlock>
                            <InfoBlock className="top-[23%] right-[4%]" isRight={true}>
                                <p>预估受光面积-10平方米/46平方米</p>
                                <p>预估受光时间：8小时/天</p>
                            </InfoBlock>
                            <InfoBlock className="top-[35%] right-[4%]" isRight={true}>
                                <p>入住原因-</p>
                                <p>因为这里有地皮</p>
                                <p>就在1993年搬过来了</p>
                            </InfoBlock>
                            <InfoBlock className="top-[48%] right-[4%]" isRight={true}>
                                <p>深刻记忆-</p>
                                <p>入住的时候</p>
                                <p>非常高兴</p>
                                <p>还有放鞭炮</p>
                                <p>这里光线也不错</p>
                                <p>三面都有光线透出来</p>
                                <p>村里也经常有一些趣事发生</p>
                                <p>印象比较深刻的是之前有一只牛发疯撞倒楼下的树</p>
                                <p>还帮着去抓了次牛哈哈</p>
                            </InfoBlock>
                            <InfoBlock className="top-[78%] right-[4%]" isRight={true}>
                                <p>记忆物品-</p>
                                <p>陶瓷碗</p>
                                <p>一开始来这边就想着衣食住行都能越来越好</p>
                            </InfoBlock>
                        </IntervieweeInfo>
                    </>
                }
                {isTextShowed && selectedId === 10 &&
                    <>
                        <IntervieweeInfo>
                            <InfoBlock className="top-[17%] left-[4%]">
                                <p>档案编号:2024-Y-0007</p>
                                <p>受访者-服装厂阿姨</p>
                                <p>年龄-40岁</p>
                                <p>家乡-湖南</p>
                                <p>职业-服装厂工人</p>
                            </InfoBlock>
                            <InfoBlock className="top-[44%] left-[4%]">
                                <p>居住地址-广州某城中村自建房3楼</p>
                                <p>房屋规格-一房一厅</p>
                                <p>租金-1200/月</p>
                                <p>预估受光面积-4平方米/35平方米</p>
                                <p>预估受光时间-5小时/天</p>
                            </InfoBlock>
                            <InfoBlock className="top-[66%] left-[4%]">
                                <p>居住感受-</p>
                                <p>离工厂近</p>
                                <p>比较方便</p>
                                <p>就是路不太好走都是小巷子</p>
                                <p>卫生条件和环境不太好</p>
                                <p>治安还是有些担心</p>
                            </InfoBlock>
                            <InfoBlock className="top-[32%] right-[4%]" isRight={true}>
                                <p>深刻记忆-</p>
                                <p>刚开始来广州打工的时候办不了居住证</p>
                                <p>只能带着儿子在外面暂住</p>
                                <p>有次管理员凌晨查岗</p>
                                <p>就抱着儿子在窗帘里藏着才躲过一劫</p>
                                <p>当年打拼很苦吃饭也没什么油水</p>
                                <p>但一直维持着积极向上的心态，一直有打拼的决心</p>
                                <p>拿到钱的时候非常开心，不知道累，只知道干活</p>
                                <p>在服装厂从97干到19年</p>
                                <p>当时在城中村的坚持信念</p>
                                <p>不断积累才有了后面比较好的生活</p>
                            </InfoBlock>
                            <InfoBlock className="top-[70%] right-[4%]" isRight={true}>
                                <p>记忆物品-</p>
                                <p>我的家，家给我的动力才让我有使不完的劲去工作</p>
                            </InfoBlock>
                            <InfoBlock className="top-[80%] right-[4%]" isRight={true}>
                                <p>未来期待-</p>
                                <p>已经很美满了，儿孙满堂，身体健康，儿女幸福</p>
                            </InfoBlock>
                        </IntervieweeInfo>
                    </>
                }
                {isTextShowed && selectedId === 7 &&
                    <>
                        <IntervieweeInfo>
                            <InfoBlock className="top-[17%] left-[4%]">
                                <p>档案编号-2024-Y-0006</p>
                                <p>受访者-黄女士</p>
                                <p>年龄-52岁</p>
                                <p>家乡-广州本地</p>
                                <p>职业-财务 现退休</p>
                            </InfoBlock>
                            <InfoBlock className="top-[40%] left-[4%]">
                                <p>居住地址-广州某城中村自建房4楼</p>
                                <p>房屋规格-一房一厅</p>
                                <p>租金-1500/月</p>
                                <p>预估受光面积-4平方米/32平方米</p>
                                <p>预估受光时间-4.5小时/天</p>
                            </InfoBlock>
                            <InfoBlock className="top-[68%] left-[4%]">
                                <p>记忆物品-</p>
                                <p>认为女儿是她最得意的作品</p>
                            </InfoBlock>
                            <InfoBlock className="top-[78%] left-[4%]">
                                <p>未来期待-</p>
                                <p>希望女儿成家，多出去走走，看看世界</p>
                            </InfoBlock>
                            <InfoBlock className="top-[28%] right-[4%]" isRight={true}>
                                <p>居住感受-</p>
                                <p>城中村环境虽然不太好</p>
                                <p>白天也需要开灯</p>
                                <p>但有很多年轻时的记忆</p>
                                <p>不过结婚后就搬离父母的自建房了</p>
                                <p>搬过几次家</p>
                            </InfoBlock>
                            <InfoBlock className="top-[52%] right-[4%]" isRight={true}>
                                <p>深刻记忆-</p>
                                <p>曾在下班时间经过市场</p>
                                <p>多次被小偷抢珍珠且在市场滑倒腿骨折</p>
                                <p>虽经历很多不好的事但依旧乐观</p>
                                <p>很多事情都一笑而过</p>
                                <p>觉得“女儿幸福就是我的幸福”</p>
                                <p>因为工作一直觉得对女儿有愧,陪伴时间较少</p>
                                <p>前几年爸爸去世后</p>
                                <p>妈妈出现认知障碍</p>
                                <p>有些不认得人</p>
                                <p>现在会常常回家陪妈妈吃饭聊天</p>
                            </InfoBlock>
                        </IntervieweeInfo>
                    </>
                }
                {isTextShowed && selectedId === 6 &&
                    <>
                        <IntervieweeInfo>
                            <InfoBlock className="top-[17%] left-[4%]">
                                <p>档案编号:2024-Y-0005</p>
                                <p>受访者-邹大叔</p>
                            </InfoBlock>
                            <InfoBlock className="top-[28%] left-[4%]">
                                <p>深刻记忆-</p>
                                <p>大概是一年搬一次家，遇到过小偷撬门，居住环境恶劣，</p>
                                <p>后来打工认识了现在的妻子，</p>
                                <p>相遇相知相爱，互相陪伴也努力攒钱。</p>
                                <p>记得出来单干的第一年，没有生意做，每天在外面跑，</p>
                                <p>被跑帐，靠腿和公交，</p>
                                <p>有几次下雨在公交上冷得打抖，干了又湿，还是坚持扛货。</p>
                                <p>想好做什么，就一直向前走，闷头干，</p>
                                <p>凑钱交首付买房，过了几年小孩上学就离开了城中村。</p>
                                <p>如今的工作室在城中村，做网上销售的。</p>
                            </InfoBlock>
                            <InfoBlock className="top-[68%] left-[4%]">
                                <p>居住感受-</p>
                                <p>当时年轻，二十多岁没钱</p>
                                <p>只能找便宜的住宿，也要考虑办公需求</p>
                                <p>就找了这个楼窄也比较阴暗的小房子</p>
                                <p>大概是500一个月生活</p>
                                <p>后面因为交通就换了离路口近一些的要700一个月</p>
                                <p>当时为了活下去，没什么伟大的愿望</p>
                            </InfoBlock>
                            <InfoBlock className="top-[30%] right-[4%]" isRight={true}>
                                <p>家乡-江西</p>
                                <p>年龄-45岁</p>
                                <p>职业-业务推广经理</p>
                                <p>居住地址-广州某城中村自建房1楼</p>
                                <p>房屋规格-一房</p>
                                <p>租金-700/月</p>
                                <p>预估受光面积-3平方米/20平方米</p>
                                <p>预估受光时间-3小时/天</p>
                            </InfoBlock>
                            <InfoBlock className="top-[70%] right-[4%]" isRight={true}>
                                <p>记忆物品-</p>
                                <p>沙发</p>
                                <p>05年的二手沙发，放在办公室的，一直留到现在</p>
                            </InfoBlock>
                        </IntervieweeInfo>
                    </>
                }
                {isTextShowed && selectedId === 4 &&
                    <>
                        <IntervieweeInfo>
                            <InfoBlock className="top-[17%] left-[4%]">
                                <p>档案编号:2024-Y-0004</p>
                                <p>受访者-花店老板</p>
                            </InfoBlock>
                            <InfoBlock className="top-[30%] left-[4%]">
                                <p>年龄-大于20岁</p>
                                <p>家乡-广东人</p>
                                <p>职业-花店主理人</p>
                                <p>居住地址-广州南亭村美良鲜花铺</p>
                                <p>房屋规格-两室一厅</p>
                                <p>租金-2000/月</p>
                                <p>预估受光面积-12平方米/86平方米</p>
                                <p>预估受光时间-7小时/天</p>
                            </InfoBlock>
                            <InfoBlock className="top-[70%] left-[4%]">
                                <p>入住原因-</p>
                                <p>疫情刚开放的时候刚好毕业</p>
                                <p>因为喜欢这里的人情味</p>
                                <p>善于沟通和感受爱</p>
                                <p>就在学校附近的城中村开了这间花店并住在这里</p>
                            </InfoBlock>
                            <InfoBlock className="top-[20%] right-[4%]" isRight={true}>
                                <p>深刻记忆-</p>
                                <p>开花店可以让不同情绪的人们感受到温馨温暖</p>
                                <p>顾客的夸赞会给予我们成就感</p>
                                <p>收获能量</p>
                                <p>也能见证别人的爱情</p>
                                <p>那些准备惊喜并期待回应的少年也让我们印象深刻</p>
                            </InfoBlock>
                            <InfoBlock className="top-[46%] right-[4%]" isRight={true}>
                                <p>记忆物品-</p>
                                <p>鲜花</p>
                                <p>花店</p>
                                <p>花充斥着美好的回忆</p>
                                <p>让我们结实更多的缘分和故事</p>
                                <p>让我们更加能够表达爱、接受爱</p>
                                <p>也带给我们很多创作灵感</p>
                                <p>花店是爱情的桥梁</p>
                                <p>容纳了很多爱意</p>
                            </InfoBlock>
                            <InfoBlock className="top-[78%] right-[4%]" isRight={true}>
                                <p>未来期待-</p>
                                <p>希望花店做到中国最强</p>
                            </InfoBlock>
                        </IntervieweeInfo>
                    </>
                }
                {isTextShowed && selectedId === 3 &&
                    <>
                        <IntervieweeInfo>
                            <InfoBlock className="top-[17%] left-[4%]">
                                <p>档案编号:2024-Y-0003</p>
                                <p>受访者-刘司机</p>
                            </InfoBlock>
                            <InfoBlock className="top-[30%] left-[4%]">
                                <p>年龄-35岁</p>
                                <p>性别-男</p>
                                <p>家乡-广东</p>
                            </InfoBlock>
                            <InfoBlock className="top-[50%] left-[4%]">
                                <p>职业-滴滴司机</p>
                                <p>居住地址-广州石牌村307栋</p>
                                <p>房屋规格：一室一厅</p>
                                <p>租金：1000/月</p>
                                <p>预估受光面积-2平方米/38平方米</p>
                                <p>预估受光时间：4小时/天</p>
                            </InfoBlock>
                            <InfoBlock className="top-[72%] left-[4%]">
                                <p>记忆物品-</p>
                                <p>行李箱、被褥、换洗衣物、洗漱用品</p>
                                <p>热水壶、水杯、太阳镜电简、修车工具</p>
                                <p>一些零件、坐垫、膏药</p>
                            </InfoBlock>
                            <InfoBlock className="top-[20%] right-[4%]" isRight={true}>
                                <p>住房评价-</p>
                                <p>待在房间的时间挺少的</p>
                                <p>就睡个觉</p>
                                <p>一般照不到阳光</p>
                                <p>衣服不容易干</p>
                                <p>老鼠蟑螂挺多的</p>
                                <p>不过周未就回家住了</p>
                                <p>也还好</p>
                                <p>对生活品质没什么要求</p>
                                <p>有个落脚的地儿就行</p>
                            </InfoBlock>
                            <InfoBlock className="top-[54%] right-[4%]" isRight={true}>
                                <p>入住背景-</p>
                                <p>通勤、油费贵(前几年因为疫情公司破产</p>
                                <p>创业失败就做了快车司机</p>
                                <p>买了房子的，就是比较远</p>
                                <p>老婆孩子在住，来回油费太贵了</p>
                                <p>就一个人在城中村租了间房，周末回家住</p>
                            </InfoBlock>
                            <InfoBlock className="top-[78%] right-[4%]" isRight={true}>
                                <p>生活习惯-</p>
                                <p>多数时间坐在车里等订单</p>
                                <p>上下班高峰期比较忙，其他时间还好</p>
                            </InfoBlock>
                        </IntervieweeInfo>
                    </>
                }
                {isTextShowed && selectedId === 2 &&
                    <>
                        <IntervieweeInfo>
                            <InfoBlock className="top-[17%] left-[4%]">
                                <p>档案编号:2024-Y-0002</p>
                                <p>受访者-胡先生</p>
                                <p>年龄-39岁</p>
                            </InfoBlock>
                            <InfoBlock className="top-[30%] left-[4%]">
                                <p>家乡-云南</p><br/>
                                <p>职业-餐厅后厨帮工</p>
                            </InfoBlock>
                            <InfoBlock className="top-[50%] left-[4%]">
                                <p>居住地址-广州某城中村自建房2楼员工宿舍</p>
                                <p>房屋规格-两房一厅</p>
                                <p>租金-0/月</p>
                            </InfoBlock>
                            <InfoBlock className="top-[72%] left-[4%]">
                                <p>预估受光面积-20平方米/83平方米</p>
                                <p>预估受光时间-6小时/天</p>
                            </InfoBlock>
                            <InfoBlock className="top-[20%] right-[4%]" isRight={true}>
                                <p>居住感受-</p>
                                <p>今年三月八号搬过来的</p>
                                <p>房子光线挺好</p>
                                <p>有个阳台采光不错的</p>
                                <p>是餐厅的员工宿舍</p>
                                <p>员工免费住</p>
                                <p>宿舍是四个人住</p>
                                <p>相处融洽</p>
                                <p>之前一个人住有些孤独</p>
                                <p>现在挺快乐的</p>
                                <p>餐厅的氛围也是很好</p>
                                <p>生活节奏也比较快</p>
                                <p>每天过的很充实</p>
                            </InfoBlock>
                            <InfoBlock className="top-[62%] right-[4%]" isRight={true}>
                                <p>记忆物品-</p>
                                <p>帽子</p>
                                <p>希望有机会戴上厨师帽</p>
                            </InfoBlock>
                            <InfoBlock className="top-[78%] right-[4%]" isRight={true}>
                                <p>未来期待-</p>
                                <p>希望生活越来越好</p>
                                <p>可以成为厨师</p>
                            </InfoBlock>
                        </IntervieweeInfo>
                    </>
                }
                {isTextShowed && selectedId === 1 &&
                    <>
                        <IntervieweeInfo isLeft={true}>
                            <InfoBlock className="top-[17%] left-[4%]">
                                <p>档案编号:2024-Y-0001</p>
                                <p>受访者-姜老师</p>
                                <p>年龄-53岁</p>
                                <p>性别-男</p>
                                <p>家乡-湖南</p>
                                <p>职业-美术馆美术员</p>
                                <p>居住地址-宋庄</p>
                                <p>房屋规格：一室一厅</p>
                                <p>租金：保密</p>
                            </InfoBlock>
                            <InfoBlock className="top-[46%] left-[4%]">
                                <p>入住原因-</p>
                                <p>2005年到2023年都住在城中村</p>
                                <p>准确的来说是宋庄</p>
                                <p>这里聚集了来自全国各地的艺术家</p>
                                <p>大概有20000人吧</p>
                                <p>但是因为一些政策要通地铁</p>
                                <p>现在也不能算是以前的那种城中村了</p>
                                <p>当时一开始住在一个院子里</p>
                                <p>一个四合院</p>
                                <p>但是后来因为去的时间不多</p>
                                <p>没必要租一个那么大的</p>
                                <p>就搬到了密集型的城中村</p>
                                <p>去那里潜心搞创作</p>
                            </InfoBlock>
                            <InfoBlock className="top-[16%] right-[4%]" isRight={true}>
                                <p>深刻记忆-</p>
                                <p>我觉得在这里大家很和谐</p>
                                <p>因为艺术家多嘛，氛围也好</p>
                                <p>并且物价也低呀，二十块钱就可以吃的很好</p>
                                <p>在那里我觉得我的效率特别的高</p>
                                <p>可能在家里一个月才能画完的画一个星期就画完了</p>
                                <p>现在也还是很怀念住在城中村的时光</p>
                                <p>在那里住了十多年了</p>
                                <p>而且这个城市印象最好的就是在城中村了</p>
                                <p>在那里我觉得我浮躁的心得到了洗涤</p>
                                <p>创作没人打扰很容易进入心流状态</p>
                                <p>每次听到画笔在纸上的沙沙声</p>
                                <p>我都觉得很享受像是一种修行，比起繁华大都市</p>
                                <p>我更加喜欢所谓的城中村</p>
                            </InfoBlock>
                            <InfoBlock className="top-[56%] right-[4%]" isRight={true}>
                                <p>记忆物品-</p>
                                <p>画作</p>
                                <p>我觉得最能代表我的就是我在这边创作的作品吧</p>
                                <p>尤其是我前几年的工笔</p>
                                <p>我自己也很满意，在这里像是一种修行</p>
                            </InfoBlock>
                            <InfoBlock className="top-[72%] right-[4%]" isRight={true}>
                                <p>搬离原因-</p>
                                <p>主要是因为疫情原因，当时想过去住</p>
                                <p>但房东每次都说先不要过来，不让外省进</p>
                                <p>然后疫情期间又多了很多的自由时间</p>
                                <p>我就在湖南这边自己租了一个工作室搞创作</p>
                                <p>我觉得这边好像也住习惯了</p>
                                <p>那边也去得少，还要交租金，后来去年我就把那边房子退了</p>
                            </InfoBlock>
                        </IntervieweeInfo>
                    </>
                }
            </div>
        </main>
    );
}
