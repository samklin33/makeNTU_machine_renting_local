"use client"
import React from "react";
import { useState, useRef, useContext } from "react";
import { useRouter } from "next/navigation";
import InputArea from "../ui/InputArea";

export default function Login() {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const router = useRouter();
    const [account, setAccount] = useState("");
    const [password, setPassword] = useState("");
    const [permission, setPermission] = useState("");

    const handleLogin = async () => {
        console.log(account, password);
        const username = account;
        if (account === "" || password === "") {
            alert("帳號或密碼不得為空");
            return;
        }
        if (username.startsWith("admin")) {
            setPermission("admin");
        } else if (username.startsWith("team")) {
            setPermission("contestant");
        } else {
            alert("帳號格式錯誤");
            return;
        }
        try {
            // add login logic here
            const response = await fetch('api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password, permission }),
            });
            if (!response.ok) {
                alert("登入失敗");
                console.log(response);
                return;
            }

            if (permission === 'contestant')  {
                router.push(`contestant/${username}`);
            } else if (permission === 'admin') {
                router.push(`admin/${username}`);
            } else {
                alert("找不到權限");
                return;
            }
        } catch (error) {
            alert("發生錯誤");
            console.log(error);
            return;
        }
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