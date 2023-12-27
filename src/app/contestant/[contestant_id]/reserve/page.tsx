"use client"
import React, { useState, useRef } from "react";
import InputArea from "@/app/ui/InputArea";
import { useRouter, usePathname } from "next/navigation";

export default function reserve() {
    const fileRef = useRef<HTMLInputElement>(null);
    const noteRef = useRef<HTMLTextAreaElement>(null);
    const router = useRouter();
    const pathname = usePathname();
    const [type, setType] = useState("");
    const [title, setTitle] = useState("");
    const [note, setNote] = useState("");
    const [falseTitle, setFalseTitle] = useState(false);
    const [tooLong, setTooLong] = useState(false);
    const [NoteTooLong, setNoteTooLong] = useState(false);
    const [unselected, setUnselected] = useState(false);

    const handleSubmit = () => {
        if(!title) setFalseTitle(true) ;else setFalseTitle(false);
        if(title.length > 15) setTooLong(true) ;else setTooLong(false);
        if(note.length > 60) setNoteTooLong(true); else setNoteTooLong(false);
        if(type === "") setUnselected(true) ;else setUnselected(false);
        if(falseTitle || tooLong || NoteTooLong || unselected)return;
        const pathTemp = pathname.split("/");
        const teamName = pathTemp[2];
        const request = {teamName, title, type, note};
        console.log(request);
        // send data to server;
        router.push(`/contestant/${teamName}`);
    }

    return (
        <div className="p-3 flex flex-col items-center text-lg justify-between border-0 w-4/5 bg-gray-400">
            <div className="m-3 w-5/6 flex gap-2 border-0">
                <p className="font-bold w-1/4 text-right">隊伍編號：</p>

                <InputArea
                    editable={false}
                    value={"TEST"}
                    />
            </div>
            <div className="m-3 mb-0.5 w-5/6 flex gap-2 border-0">
                <p className="font-bold flex-end w-1/4 text-right">機台類型：</p>
                <select 
                    className="p-1 border-gray-300 border-2 text-gray-800 rounded-lg bg-white focus:outline-none"
                    value={type}
                    onChange={(e)=>setType(e.target.value)}
                    defaultValue="">
                    <option value="">--Select--</option>
                    <option value="3DP">3D列印機</option>
                    <option value="LCM">雷射切割機</option>
                </select>
            </div>
            <div className="flex items-end w-5/6 h-5">
                <div className="w-1/4"></div>
                <p className="w-3/4  pl-5 text-sm text-red-500 ">{unselected?"Please select machine type.": ""}</p>
            </div>
            <div className="m-3 mb-0.5 flex w-5/6 gap-2 border-0">
                <p className="font-bold w-1/4 text-right">檔案名稱：</p>
                <InputArea
                    ref={fileRef}
                    placeHolder={"file name"}
                    editable={true}
                    value={title}
                    onChange={(e) => setTitle(e)}
                />
            </div>
            <div className="flex items-end w-5/6 h-5">
                <div className="w-1/4"></div>
                <p className="w-3/4  pl-5 text-sm text-red-500 ">{falseTitle?"Please enter file title.": ""}{tooLong?"Title must be less than 15 words.":""}</p>
            </div>
            <div className="m-2 w-5/6 flex gap-2 border-0">
                <p className="font-bold w-1/4 text-right">備註：</p>
                <textarea
                    ref={noteRef}
                    className="resize-none p-1 border-2 text-gray-800 border-gray-300 rounded-lg focus:border-gray-600 focus:outline-none"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                />
            </div>
            <div className="flex items-end w-5/6 h-5">
                <div className="w-1/4"></div>
                <p className="w-3/4  pl-5 text-sm text-red-500 ">{NoteTooLong?"Note must be less than 60 words.": ""}{tooLong?"Title must be less than 15 words.":""}</p>
            </div>
            <div className="m-2 flex gap-2 border-2 border-black">
                <button
                    className="m-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                    onClick={() => router.back()}
                >取消</button>
                <button
                    className="m-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                    onClick={handleSubmit}>登記</button>
            </div>
        </div>
    )
}