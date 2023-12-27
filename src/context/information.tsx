'use client'
import { createContext, useState } from "react";

export type information = {
    team: string;
    type: string;
    index: number;
    title: string;
    note?: string;
    status: string;
}

export type Information = {
    information?: information | null;
    setInformation?: (information: information) => void;
}

export const Information = createContext<Information>({
    information: null,
    setInformation: () => {},
});

type Props = {
    children: React.ReactNode;
}
export const InformationProvider = ({ children }: Props) => {
    const [information, setInformation] = useState<information | null>(null);

    return (
        <Information.Provider value={{ information, setInformation }}>
            {children}
        </Information.Provider>
    )
}