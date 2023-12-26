"use client"
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import QueueList from "@/components/QueueList";

export default function contestant() {
    const router = useRouter();
    const pathname = usePathname();
    console.log();
    return (
        <>
        <div className="h-16 m-2 flex items-center justify-center border-2 border-black">
            <QueueList />
            <div className="flex flex-row justify-between border-2 border-black">
                <button
                    className="m-1 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
                    onClick={() => router.push("/")}
                >登出</button>
                <button 
                    className="m-1 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
                    onClick={() => router.push(`${pathname}/reserve`)}>機台登記</button>
            </div>
        </div>
        </>
    )
}