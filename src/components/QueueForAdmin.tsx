import React, { useContext } from "react";
import { InformationContext } from "@/context/information";

export default function Queue() {
    const { information } = useContext(InformationContext);

    return (
        <>
        <div className="m-2 g-4 w-full flex flex-row items-center justify-between border-2 border-black">
            <p>{information?.title}</p>
            <p>{information?.type}</p>
            <p>{information?.note}</p>
            <button className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded">有問題</button>
        </div>
        </>
    )
}