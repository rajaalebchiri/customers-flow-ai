import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const get = query({
    args: {},
    handler: async (ctx) => {
        return await ctx.db.query("users").collect();
    },
});


export const createUser = mutation({
    args: { authId: v.string(), email: v.string() },
    handler: async (ctx, args) => {
        // First check if user exists

        console.log(args);

        const existingUser = await ctx.db
            .query("users")
            .filter((q) => q.eq(q.field("email"), args.email || ""))
            .unique();
        
        console.log("existing user", existingUser)

        // If user doesn't exist, create new user
        if (existingUser == null) {
            const userId = await ctx.db.insert("users", {
                auth_id: args.authId,
                email: args.email
            });
            return userId;
        }

        // Return existing user's ID if already exists
        return existingUser.auth_id;
    },
});