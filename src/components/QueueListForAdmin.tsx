'use client'
import React, { useContext } from "react";
import QueueForAdmin from "./QueueForAdmin";
// import { InformationContext } from "@/context/information";

export default function QueueList() {
    // const { information } = React.useContext(InformationContext);

    return (
        <>
            <div className="h-full w-1/2 m-2 flex flex-col items-center justify-center rounded border-2 border-black overflow-y-auto">
                <div className="m-2 g-4 w-full flex flex-row items-center justify-between border-2 border-black">
                    <p>檔案名稱</p>
                    <p>列印類型</p>
                    <p>備註</p>
                    <p>有問題</p>
                </div>
                {/* add information queue fetching */}
                {/* {information?.map((queue, index) => (
                    <QueueForAdmin key={index} queue={queue} />
                ))} */}
            </div>
        </>
    )
}