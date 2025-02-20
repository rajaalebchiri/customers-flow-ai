import { getSession } from "@auth0/nextjs-auth0";
import { api } from "convex/_generated/api";
import { fetchMutation, fetchQuery } from "convex/nextjs";

export const getPlan = async () => {
    try {
        const { user } = await getSession();

        if (!user) return;

        async function getPlanDB(data: { name: string}) {
                "use server";
                await fetchQuery(api.billing_plans.getPlanType, {
                    authId: data["authId"] as string,
                });
            }

        return user.sub

        
    } catch (error) {
        console.log(error)
        return error
    }

}