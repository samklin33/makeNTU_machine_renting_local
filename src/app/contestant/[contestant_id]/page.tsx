"use client"
import React from "react";
import { useRouter } from "next/navigation";
import QueueList from "@/app/components/QueueList";

export default function contestant() {
    const router = useRouter();
    return (
        <>
        <div className="h-16 m-2 flex items-center justify-center border border-2 border-black">
            <QueueList />
            <div className="flex flex-row justify-between border border-2 border-black">
                <button
                    className="m-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => router.push("/")}
                >登出</button>
                <button 
                    className="m-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => router.push("/reserve")}>機台登記</button>
            </div>
        </div>
        </>
    )
}