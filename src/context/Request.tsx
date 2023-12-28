'use client'
import { createContext, useState } from "react";
// import { Account } from "@/context/Account";

export type Request = {
    id: number;
    group: string;
    type: string;
    number: number;
    filename: string;
    comment: string;
    status: string;
    createAt: Date;
}

export type RequestContext = {
    requests: Request[];
    setRequests: (requests: Request[]) => void;
    // sendInformation: (request: Omit<InformationContext, "timestamp">) => Promise<void>;
}

export const RequestContext = createContext<RequestContext>({
    requests: [],
    setRequests: () => {},
    // sendInformation: async () => {},
});

type Props = {
    children: React.ReactNode;
}
export const RequestProvider = ({ children }: Props) => {
    const [requests, setRequests] = useState<Request[]>([]);

    return (
        <RequestContext.Provider value={{ requests, setRequests }}>
            {children}
        </RequestContext.Provider>
    )
}