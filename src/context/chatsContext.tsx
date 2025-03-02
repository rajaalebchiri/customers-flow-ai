"use client";

import { createContext, useContext, useState } from "react";

type ChatInitialValuesProps = {
    realtime: boolean;
    chatRoom: string | undefined;
    setChatRoom: React.Dispatch<React.SetStateAction<string | undefined>>;
    setRealtime: React.Dispatch<React.SetStateAction<boolean>>;
    chats: {
        message: string;
        id: string;
        role: 'assistant' | 'user' | null;
        created: Date;
        seen: boolean;
    }[];
    setChats: React.Dispatch<
        React.SetStateAction<{
            message: string;
            id: string;
            role: 'assistant' | 'user' | null;
            created: Date;
            seen: boolean;
        }[]>>
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChatIntialValues: ChatInitialValuesProps = {
    chatRoom: undefined,
    setChatRoom: () => undefined,
    chats: [],
    setChats: () => undefined,
    loading: false,
    setLoading: () => undefined,
    realtime: false,
    setRealtime: () => undefined,
}

const chatContext = createContext(ChatIntialValues);

const { Provider } = chatContext;

export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
    const [chats, setChats] = useState(ChatIntialValues.chats);
    const [loading, setLoading] = useState(ChatIntialValues.loading);
    const [realtime, setRealtime] = useState(ChatIntialValues.realtime);
    const [chatRoom, setChatRoom] = useState(ChatIntialValues.chatRoom);

    const values = {
        chats,
        setChats,
        loading,
        setLoading,
        realtime,
        setRealtime,
        chatRoom,
        setChatRoom,
    }

    return <Provider value={values}>{children}</Provider>
}

export const useChatContext = () => {
    const state = useContext(chatContext);
    return state
}