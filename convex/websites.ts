import { v } from "convex/values";
import { query } from "./_generated/server";


export const getWebsites = query({
    args: { authId: v.string() },
    handler: async (ctx, args) => {
        return await ctx.db
            .query("websites")
            .filter((q) => q.eq(q.field("userId"), args.authId))
            .collect();
    }
})
