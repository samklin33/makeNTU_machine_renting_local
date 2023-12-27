'use client'
import { createContext, useState } from "react";
import { User } from "@/context/user";

export type information = {
    team: User["account"];
    type: string;
    index: number;
    title: string;
    note?: string;
    status: string;
    timestamp: Date;
}

export type InformationContext = {
    informations: information[];
    setInformation: (informations: information[]) => void;
    // sendInformation: (information: Omit<InformationContext, "timestamp">) => Promise<void>;
}

export const InformationContext = createContext<InformationContext>({
    informations: [],
    setInformation: () => {},
    // sendInformation: async () => {},
});

type Props = {
    children: React.ReactNode;
}
export const InformationProvider = ({ children }: Props) => {
    const [informations, setInformation] = useState<information[]>([]);

    return (
        <InformationContext.Provider value={{ informations, setInformation }}>
            {children}
        </InformationContext.Provider>
    )
}