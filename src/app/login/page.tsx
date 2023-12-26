"use client"
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
    const router = useRouter();
    const [account, setAccount] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        router.push(`contestant/${account}`);
    }

    return (
        <>
        <div className="m-2 flex flex-col items-center justify-between border border-2 border-black">
            <div className="m-2 flex gap-2 border border-2 border-black">
                <p className="font-bold">帳號：</p>
                <input
                    className="border border-2 border-black rounded"
                    type="text"
                    onChange={(e) => setAccount(e.target.value)}
                />
            </div>
            <div className="m-2 flex gap-2 border border-2 border-black">
                <p className="font-bold">密碼：</p>
                <input
                    className="border border-2 border-black rounded"
                    type="text"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="m-2 flex gap-2 border border-2 border-black">
                <button
                    className="m-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                    onClick={() => router.push("/")}
                >取消</button>
                <button 
                    className="m-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                    onClick={handleLogin}
                >登入</button>
            </div>
        </div>
        </>
    )
}