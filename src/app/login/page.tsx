"use client"
import React, { use } from "react";
import { useState, useRef, useContext } from "react";
import { useRouter } from "next/navigation";
import { UserContext } from "@/context/user";

export default function Login() {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const router = useRouter();
    const [account, setAccount] = useState("");
    const [password, setPassword] = useState("");
    const { user } = useContext(UserContext);

    const handleLogin = () => {
        console.log(account, password);
        if (account === "" || password === "") {
            alert("帳號或密碼不得為空");
            return;
        }
        const username = account;
        try {

            router.push(`contestant/${username}`);

            // add login logic here
            if (user?.permission === 'contestant')  {
                router.push(`contestant/${username}`);
            } else if (user?.permission === 'admin') {
                router.push(`admin/${username}`);
            } else {
                alert("找不到權限");
                return;
            }
        } catch (error) {
            alert("登入失敗");
            return;
        }
    }

    return (
        <>
        <div className="m-2 flex flex-col items-center justify-between border-2 border-black">
            <div className="m-2 flex gap-2 border-2 border-black active:none">
                <p className="font-bold">帳號：</p>
                <input
                    ref={usernameRef}
                    value={account}
                    placeholder="Team account"
                    className="border-2 border-black text-gray-800 rounded focus:outline-0"
                    type="text"
                    onChange={(e) => setAccount(e.target.value)}
                />
            </div>
            <div className="m-2 flex gap-2 border-2 border-black">
                <p className="font-bold">密碼：</p>
                <input
                    ref={passwordRef}
                    value={password}
                    placeholder="Enter Password"
                    className="border-2 border-black text-gray-800 rounded"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
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