import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const get = query({
    args: {},
    handler: async (ctx) => {
        return await ctx.db.query("users").collect();
    },
});

export const getPlanType = query({
    args: {name: v.string()},
    handler: async (ctx, args) => {
        const plan = await ctx.db
            .query("billing_plans")
            .filter((q) => q.eq(q.field("name"), args.name))
            .unique()
        return plan
    },
});


export const createPlan = mutation({
    args: { name: v.string(), price: v.string(), features: v.array(v.string()), email: v.string() },
    handler: async (ctx, args) => {
        // First check if user exists

        console.log(args);

        const existingUser = await ctx.db
            .query("users")
            .filter((q) => q.eq(q.field("email"), args.email || ""))
            .unique();
        
        console.log("existing user", existingUser)

    },
});