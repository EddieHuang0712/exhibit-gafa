"use client";
import {useRouter} from "next/navigation";

export default function Home() {
    const router = useRouter();

    const handleClick = async () => {
        // 添加密码校验
        const password = prompt("请输入密码");
        if (password !== "123456") {
            alert("密码错误");
            return;
        }
        // 跳转到操作页
        router.push("/operate");
    }

    return (
        <main className="flex w-screen h-screen bg-white items-center justify-center">
            <div className="w-3/5 h-full bg-[#fdfcda]">
                <h1 className="text-xl text-[#fd7800] p-4">GAFA-科智媒体艺术中心</h1>
                <div className="flex flex-col w-2/5 p-4 absolute top-[40%]">
                    <p className="font-bold text-4xl text-[#d97f35] mb-4">远程演示软件</p>
                    <p className="text-2xl text-[#e4ae74]">本次的项目实现了远程演示的功能，演示人员在操作页进行交互操作，在展示页可以实时显示对应的内容。</p>
                </div>
            </div>
            <div className="w-2/5 h-full flex flex-col justify-end items-center">
                <div className="w-full h-3/5 flex flex-col justify-start items-center">
                    <div className="font-bold text-3xl mb-6">点击进入不同页面</div>
                    <div className="flex items-center justify-center gap-6 mb-28">
                        <button
                            onClick={() => handleClick()}
                            className="w-44 aspect-[3.75] bg-[#3d45f4] text-white rounded-[4px] flex items-center justify-center cursor-pointer font-light active:border-[#000000] hover:opacity-90">操作页
                        </button>
                        <button
                            onClick={() => router.push("/exhibit")}
                            className="w-44 aspect-[3.75] bg-[#3d45f4] text-white rounded-[4px] flex items-center justify-center cursor-pointer font-light active:border-[#000000] hover:opacity-90">展示页
                        </button>
                    </div>
                    <div className="flex-1 flex items-center text-gray-600">
                        <span>Copyright © EddieHuang</span>
                    </div>
                </div>
            </div>
        </main>
    )
}
