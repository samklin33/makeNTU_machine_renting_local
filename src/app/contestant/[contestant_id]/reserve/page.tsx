import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function reserve() {
    const router = useRouter();
    const [type, setType] = useState("");
    const [title, setTitle] = useState("");
    const [note, setNote] = useState("");

    const handleSubmit = () => {
        router.push(`/${(router as any).query.contestant_id}`);
    }

    return (
        <>
        <div className="m-2 flex flex-col items-center justify-between border border-2 border-black">
            <div className="m-2 flex gap-2 border border-2 border-black">
                <p className="font-bold">隊伍編號：</p>
                <input
                    className="border border-2 border-black rounded"
                    type="text"
                    placeholder={(router as any).query.contestant_id as string}
                />
            </div>
            <div className="m-2 flex gap-2 border border-2 border-black">
                <p className="font-bold">機台類型：</p>
                <select 
                    className="border border-2 border-black rounded"
                    onChange={(e) => setType(e.target.value)}
                >
                    <option value="3DP">3D列印機</option>
                    <option value="LCM">雷射切割機</option>
                </select>
            </div>
            <div className="m-2 flex gap-2 border border-2 border-black">
                <p className="font-bold">檔案名稱：</p>
                <input
                    className="border border-2 border-black rounded"
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="m-2 flex gap-2 border border-2 border-black">
                <p className="font-bold">備註：</p>
                <textarea
                    className="border border-2 border-black rounded"
                    onChange={(e) => setNote(e.target.value)}
                />
            </div>
            <div className="m-2 flex gap-2 border border-2 border-black">
                <button
                    className="m-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                    onClick={() => router.back()}
                >取消</button>
                <button 
                    className="m-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                    onClick={handleSubmit}>登記</button>
            </div>
        </div>
        </>
    )
}