import React, { useContext } from "react";
import { InformationContext } from "@/context/information";
import { UserContext } from "@/context/user";

export default function Queue() {
    const { information } = useContext(InformationContext);
    const { user } = useContext(UserContext);
    const isSender = user?.account === information?.team;

    return (
        <>
        <div
            className={`m-2 g-4 w-full flex flex-row items-center justify-between border-2 border-black ${
                isSender ? "bg-yellow" : "bg-white"
            }`}
        >
            <p>{information?.team}</p>
            <p>{information?.title}</p>
            <p>{information?.type}</p>
            <p>{information?.status}</p>
        </div>
        </>
    )
}