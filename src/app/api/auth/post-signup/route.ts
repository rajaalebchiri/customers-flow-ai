import { fetchMutation, fetchQuery } from "convex/nextjs";
import { api } from "../../../../../convex/_generated/api";

export async function POST(request: Request) {
    async function createUser(data: { email: string; authId: string }) {
        "use server";
        const plan = await fetchQuery(api.billing_plans.getPlan, {
            name: "free",
        });

        const userId = await fetchMutation(api.users.createUser, {
            email: data["email"] as string,
            authId: data["authId"] as string
        });
        await fetchMutation(api.subscriptions.createSubscription, {
            authId: userId || "",
            planId: plan?._id || "free",
            status: "active",
            email: data["email"] as string
        });
    }
    const res = await request.json()
    const { email, authId } = res;
    createUser({ email, authId })
    return Response.json({ message: "User ID received" })
}