'use client'
import { createContext, useState } from "react";

export type User = {
    account: string;
    password: string;
    permission: string;
}

export type UserContext = {
    user?: User | null;
    setUser?: (user: User) => void;
}

export const UserContext = createContext<UserContext>({
    user: null,
    setUser: () => {},
});

type Props = {
    children: React.ReactNode;
}
export const UserProvider = ({ children }: Props) => {
    const [user, setUser] = useState<User | null>(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}