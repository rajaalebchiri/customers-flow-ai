"use client";

type ChatInitialValuesProps = {
    realtime: boolean;
    setRealtime: React.Dispatch<React.SetStateAction<string | undefined>>;
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
            ceated: Date;
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
    
}