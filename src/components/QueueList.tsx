'use client'
import React, { useContext } from "react";
import Queue from "./Queue";
// import { InformationContext } from "@/context/information";

export default function QueueList() {
    // const { information } = React.useContext(InformationContext);

    return (
        <>
        <div className="m-2 flex flex-col items-center justify-center border-2 border-black">
            <div className="h-full w-1/2 flex flex-col items-center justify-center rounded border-2 border-black overflow-y-auto">
                <div className="m-2 g-4 w-full flex flex-row items-center justify-between border-2 border-black">
                    <p>預約人</p>
                    <p>檔案名稱</p>
                    <p>列印類型</p>
                    <p>列印狀態</p>
                    {/* By tim_2240 Maybe use a table?*/}
                </div>
                {/* add information queue fetching */}
                {/* {information?.map((queue, index) => (
                    <Queue key={index} queue={queue} />
                ))} */}
            </div>
        </div>
        </>
    )
}