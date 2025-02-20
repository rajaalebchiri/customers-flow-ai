import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";


export default defineSchema({
    messages: defineTable({
        text: v.string(),
        sender: v.string(),
    }),
    users: defineTable({
        auth_id: v.string(),
        email: v.optional(v.string()),
        name: v.optional(v.string()),
        planID: v.optional(v.string()),
    }).index("id", ["auth_id"]),
    sessions: defineTable({
        userId: v.string(),
        messages: v.array(v.id("messages")),
    }),
    billing_plans: defineTable({
        name: v.string(),
        price: v.number(),
        features: v.array(v.string())
    }),
    subscriptions: defineTable({
        userId: v.string(),
        planId: v.string(),
        status: v.string(),
        startDate: v.string(),
        endDate: v.string()
    }),
    websites: defineTable({
        userId: v.string(),
        domain: v.string(),
        apiKey: v.string(),
        active: v.boolean()
    }),
    customizations: defineTable({
        userId: v.string(),
        websiteId: v.string(),
        theme: v.string(),
        logo: v.optional(v.string()),
        welcomeMessage: v.optional(v.string()),
        brandingEnabled: v.boolean()
    })
});