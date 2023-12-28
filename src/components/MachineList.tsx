import React from "react";
import RequestCardForMachine from "./RequestCardForMachine"

export type MachineListProps = {
    index: number;
}

export default function MachineList({ index }: MachineListProps) {

    const testRequest = {
        filename: "test1",
        type: "3DP",
        comment: "test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1",
        status: "waiting",
    };

    return (
        <>
        <div className="m-1 w-1/2 h-full flex flex-col">
            <h3 className="text-2xl font-bold">機器{index}</h3>
            <div className="min-h-60 flex flex-col items-center justify-start bg-white rounded border-2 border-black overflow-y-auto">
                <div className="w-full sticky top-0 bg-white z-10">
                    <div className="g-3 w-full flex flex-row items-center justify-between border-2 border-black">
                        <p className="text-sm">檔案名稱</p>
                        <p className="text-sm">列印備註</p>
                        <p className="text-sm">完成列印</p>
                    </div>
                </div>
                <RequestCardForMachine information={testRequest}/>
            </div>
        </div>
        </>
    )
}