'use client'
import React from "react";
import { useRouter } from "next/navigation";

type HeadBarProps = {
    user?: string;
}

export default function HeadBar({ user }: HeadBarProps) {
    const router = useRouter();

    return (
        <>
        <div className="h-16 m-2 flex items-center justify-center border-2 border-black">
            <h1 className="text-4xl font-bold text-blue-500">MakeNTU 機台租借網站</h1>
        </div>
        <div className="m-2 flex flex-row justify-end border-2 border-black">
            <div className="flex flex-row justify-between border-2 border-black">
                {<button
                    className="m-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => router.push("/reserve")}
                >機台登記</button>}
                {<button
                    className="m-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => router.push("/login")}
                >登入</button>}
                {<button
                    className="m-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => router.push("/")}
                >登出</button>}
            </div>
        </div>
        </>
    )
}