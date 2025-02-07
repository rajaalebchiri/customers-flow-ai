import { getSession } from "@auth0/nextjs-auth0";

export const getPlan = async () => {
    try {
        const { user } = await getSession();

        if (!user) return;

        return user

        
    } catch (error) {
        console.log(error)
        return error
    }

}