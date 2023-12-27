"use client"
import React from "react";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import InputArea from "../ui/InputArea";

export default function Login() {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const router = useRouter();
    const [account, setAccount] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        console.log(account, password);
        const username = account;
        router.push(`contestant/${username}`);
    }

    return (
        <>
        <div className="m-2 flex flex-col items-center justify-between border-2 border-black">
            <div className="m-2 flex gap-2 border-2 border-black active:none">
                <p className="font-bold">帳號：</p>
                <InputArea
                    ref={usernameRef}
                    editable={true}
                    value={account}
                    placeHolder={"Team account"}
                    onChange={(e) => setAccount(e)}
                />
            </div>
            <div className="m-2 flex gap-2 border-2 border-black">
                <p className="font-bold">密碼：</p>
                <InputArea
                    ref={passwordRef}
                    value={password}
                    editable={true}
                    type={"password"}
                    placeHolder={"Enter Password"}
                    onChange={(e) => setPassword(e)}
                />
            </div>
            <div className="m-2 flex gap-2 border-2 border-black">
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