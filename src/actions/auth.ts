import { getSession } from "@auth0/nextjs-auth0";
import { api } from "convex/_generated/api";
import { fetchQuery } from "convex/nextjs";

const authenticatedUser = async () => {
    try {
        const session = await getSession();
        const user = session?.user;
        const authenticatedUser = await fetchQuery(api.users.getUser, { authId: user?.sub });


        if (user && authenticatedUser) {
            const domains = await fetchQuery(api.websites.getWebsites, {
                authId: authenticatedUser?._id || "",
            });
            console.log(domains, authenticatedUser, user)
        }
        
    } catch (error) {
        console.error(error);
    }
}

export {authenticatedUser}