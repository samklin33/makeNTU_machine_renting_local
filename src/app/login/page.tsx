"use client"
import React, { useEffect } from "react";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import InputArea from "@/components/ui/InputArea";
import { signInApi, signUpApi } from "@/lib/api";

export default function Login() {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const comfirmPasswordRef = useRef<HTMLInputElement>(null);
    const router = useRouter();
    const [account, setAccount] = useState("");
    const [password, setPassword] = useState("");
    const [comfirmPassword, setComfirmPassword] = useState("");
    const [permission, setPermission] = useState("");
    const [isSignUp, setIsSignUp] = useState(false);

    useEffect(() => {
        if (permission !== "") {
            console.log("Input: ",account, password, permission);
            direct();
        }
    }, [permission]);

    const handleRegister = async () => {
        if (!checkInput()) {
            return;
        }
        // try {
        //     const { token: token } = await signUpApi({ account, password, permission });
        //     localStorage.setItem("jwt-token: ", token);
        // } catch(error) {
        //     alert("發生錯誤");
        //     console.log(error);
        //     return;
        // }
        console.log(account, password, permission);
            try {
                const { token: token } = await signUpApi({ account, password, permission });
                localStorage.setItem("jwt-token: ", token);
            } catch(error) {
                alert("發生錯誤");
                console.log(error);
                return;
            }
        direct();
    }

    const handleLogin = async () => {
        console.log(account, password);
        if (!checkInput()) {
            return;
        }
        // try {
        //     const { token: token } = await signInApi({ account, password });
        //     localStorage.setItem("jwt-token: ", token);
        // } catch(error) {
        //     alert("發生錯誤");
        //     console.log(error);
        //     return;
        // }
    }

    const checkInput = async () => {
        if (!isSignUp && (account === "" || password === "")) {
            alert("帳號或密碼不得為空");
            return false;
        } else if (isSignUp) {
            if (account === "" || password === "" || comfirmPassword === "")    {
                alert("帳號或密碼不得為空");
                return false;    
            } else if (password !== comfirmPassword) {
                alert("密碼不一致");
                return false;
            }
        }
        if (account.startsWith("admin")) {
            setPermission("admin");
        } else if (account.startsWith("team")) {
            setPermission("contestant");
        } else {
            alert("帳號格式錯誤");
            return false;
        }
        console.log("checkInput: ", account, password, comfirmPassword, permission)
        return true;
    }
    const direct = () => {
        if (permission === 'contestant')  {
            router.push(`contestant/${account}`);
        } else if (permission === 'admin') {
            router.push(`admin/${account}`);
        } else {
            alert("找不到權限");
            return;
        }
    }

    return (
        <>
        <div className="m-2 flex flex-col items-center justify-between border-2 border-black">
            <div className="m-2 flex items-center gap-2 border-2 border-black active:none">
                <p className="font-bold">帳號：</p>
                <InputArea
                    ref={usernameRef}
                    editable={true}
                    value={account}
                    placeHolder={"Team account"}
                    onChange={(e) => setAccount(e)}
                />
            </div>
            <div className="m-2 flex items-center gap-2 border-2 border-black">
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
            {isSignUp && <div className="w-1/3 m-2 flex items-center gap-2 border-2 border-black">
                <p className="font-bold">確認密碼：</p>
                <InputArea
                    ref={comfirmPasswordRef}
                    value={comfirmPassword}
                    editable={true}
                    type={"password"}
                    placeHolder={"Comfirm Password"}
                    onChange={(e) => setComfirmPassword(e)}
                />
            </div>}
            {!isSignUp && <div className="m-2 flex items-center justify-center gap-2 border-2 border-black">
                <a className="m-1 text-xs font-bold underline hover:text-blue-800 hover:cursor-pointer" onClick={() => setIsSignUp(true)}>
                    <p>—第一次登入？註冊—</p>
                </a>
            </div>}
            <div className="m-2 flex gap-2 border-2 border-black">
                <button
                    className="m-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                    onClick={() => router.push("/")}
                >取消</button>
                {!isSignUp && <button
                    className="m-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                    onClick={handleLogin}
                >登入</button>}
                {isSignUp && <button
                    className="m-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleRegister}
                >註冊</button>}
            </div>
        </div>
        </>
    )
}