"use client";

import React from 'react'
import { useEffect, useState } from 'react';
import { useChatContext } from './chatsContext';
import { usePathname, useRouter } from 'next/navigation';
import { toast } from 'sonner';


type Props = {}

const useSideBar = (props: Props) => {

    const [expand, setExpand] = useState<boolean | undefined>(undefined);
    const router = useRouter();
    const pathname = usePathname();
    const [realtime, setRealtime] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const { chatRoom } = useChatContext();

    const onActivateRealtime = async (e: any) => {
        try {
            const realtime = await onToggleRealtime(
                chatRoom!,
                e.target.ariaChecked == 'true' ? false : true
            )
            if (realtime) {
                setRealtime(realtime.chatRoom.live)
                toast("Success", {
                    description: realtime.message
                });
            }
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div>useSideBar</div>
  )
}

export default useSideBar