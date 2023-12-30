'use client'
import React, { useContext } from "react";
import { RequestContext } from "@/context/Request";
import { AccountContext } from "@/context/Account";
import RequestCard from "./RequestCard";
import prisma from "../../prisma/client";
export default async function QueueList() {
    const { requests } = useContext(RequestContext);
    const { user } = useContext(AccountContext);
    
    // const requestList = await prisma.request.findMany();
    const testRequest = {
        group: "team1",
        filename: "test1",
        type: "3DP",
        status: "waiting",
    };
    const testUser1 = {
        name: "team1", 
        permission: "contestant",
    }
    const testUser2 = {
        name: "team2", 
        permission: "contestant",
    }

    return (
        <>
        <div className="m-2 relative flex flex-col items-center justify-start border-2 border-black">
            <div className="max-h-[50vh] w-1/2 flex flex-col items-center justify-start bg-white rounded border-2 border-black overflow-y-auto">
                <div className="w-full sticky top-0 bg-white z-10">
                    <div className="g-4 w-full flex flex-row items-center justify-between border-2 border-black">
                        <p className="text-sm">預約組別</p>
                        <p className="text-sm">檔案名稱</p>
                        <p className="text-sm">列印類型</p>
                        <p className="text-sm">列印狀態</p>
                        {/* By tim_2240 Maybe use a table?*/}
                    </div>
                </div>
                <RequestCard information={testRequest} isSender={testRequest.group === testUser1.name}/>
                <RequestCard information={testRequest} isSender={testRequest.group === testUser2.name}/>
                {/* {requests.map((request) => {
                    if (request.status !== "finished") {
                        return (
                            <RequestCard
                                key={request.id}
                                information={request}
                                isSender={request.group === user?.name}
                            />
                        )}
                    return null;
                })} */}
                {/* {
                    requestList.map((request)=>(
                        <RequestCard information={{
                            group:String(request.group),
                            filename:request.filename,
                            type:request.type,
                            status:request.status
                        }}></RequestCard>
                        )
                    )
                } */}
            </div>
        </div>
        </>
    )
}