import { getSession } from "@auth0/nextjs-auth0";
import { api } from "convex/_generated/api";
import { fetchQuery } from "convex/nextjs";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {
        const session = await getSession(); // App Router uses a different method
        const user = session?.user;

        if (!user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const authenticatedUser = await fetchQuery(api.users.getUser, { authId: user.sub });

        if (!authenticatedUser) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        const domains = await fetchQuery(api.websites.getWebsites, {
            authId: authenticatedUser._id,
        });

        return NextResponse.json({ domains, authenticatedUser, user }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
