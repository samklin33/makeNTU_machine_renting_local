'use client'
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import QueueListForAdmin from "@/components/QueueListForAdmin";
import MachineList from "@/components/MachineList";
import Map from "@/components/Map";

export default function admin() {
    const router = useRouter();

    const handleSave = () => {
    }

    return (
        <>
        <Map />
        <div className="m-2 flex items-top justify-start border-2 border-black">
            <QueueListForAdmin />
            <div className="h-full w-1/2 m-2 flex flex-col items-center justify-center rounded border-2 border-black">
                <MachineList />
                <div className=" g-4 w-full flex flex-row items-end justify-end border-2 border-black">
                    <button
                        className="m-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={handleSave}
                    >儲存</button>
                </div>
            </div>
        </div>
        </>
    )
}