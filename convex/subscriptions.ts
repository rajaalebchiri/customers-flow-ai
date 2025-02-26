import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getSubscription = query({
    args: {},
    handler: async (ctx) => {
        return await ctx.db.query("users").collect();
    },
});

export const createSubscription = mutation({
    args: { authId: v.string(), email: v.string(), planId: v.string(), status: v.string(), },
    handler: async (ctx, args) => {

        const subscriptionId = await ctx.db.insert("subscriptions", {
            userId: args.authId,
            planId: args.planId,
            status: args.status,
            startDate: new Date().toISOString(),
            endDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString()
        });

        return subscriptionId
    },
});