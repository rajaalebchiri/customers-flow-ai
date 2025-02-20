import { fetchMutation } from "convex/nextjs";
import { api } from "../../../../../convex/_generated/api";

export async function POST(request: Request) {
    async function createTask(data: { email: string; authId: string}) {
        "use server";
        await fetchMutation(api.users.createUser, {
            email: data["email"] as string,
            authId: data["authId"] as string,
        });
    }
    const res = await request.json()
    const { email, authId } = res;
    createTask({ email, authId })
    return Response.json({ message: "User ID received" })
}