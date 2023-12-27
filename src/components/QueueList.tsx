import React from "react";

export default function QueueList() {
    return (
        <>
        <div className="m-2 h-full flex flex-col items-center justify-between border-2 border-black">
            <div className="h-full w-1/2 flex flex-col items-center justify-between rounded border-2 border-black overflow-y-auto">
                <div className="m-2 g-4 w-full flex flex-row items-center justify-between border-2 border-black">
                    <p>預約人</p>
                    <p>檔案名稱</p>
                    <p>列印類型</p>
                    <p>列印狀態</p>
                    {/* {information?.queue.map((queue, index) => (
                        <Queue key={index} queue={queue} />
                    ))} */}
                </div>
            </div>
        </div>
        </>
    )
}