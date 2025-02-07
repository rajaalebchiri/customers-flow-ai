import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";


export default defineSchema({
    chatMessages: defineTable({
        text: v.string(),
        sender: v.string(),
    }),
    users: defineTable({
        auth_id: v.string(),
        email: v.optional(v.string()),
        name: v.optional(v.string()),
        createdAt: v.string(),
        planID: v.optional(v.string()),
    }).index("id", ["auth_id"]),
    sessions: defineTable({
        userId
    })
});



export const ChatSession = Model({
    id: ID(), // Unique identifier for each chat session
    userId: Field.string(), // ID of the user who owns this chat session
    messages: Field.list(ChatMessage), // List of messages in the chat session
    createdAt: Field.number(), // Timestamp when the chat session was created
});

export const BillingPlan = Model({
    id: ID(), // Unique identifier for each plan
    name: Field.string(), // Plan name (e.g., "Basic", "Pro")
    price: Field.number(), // Price per month in cents
    features: Field.list(String()), // List of features included in the plan
});

export const Subscription = Model({
    id: ID(), // Unique identifier for each subscription
    userId: Field.string(), // ID of the user subscribed to the plan
    planId: Field.string(), // ID of the billing plan
    status: Field.string(), // Subscription status (e.g., "active", "canceled")
    startDate: Field.number(), // Start date of the subscription
    endDate: Field.optional(Number()), // End date of the subscription (if canceled)
});

export const CustomizationPreference = Model({
    id: ID(), // Unique identifier for each customization preference
    userId: Field.string(), // ID of the user who owns these preferences
    theme: Field.string(), // Theme name (e.g., "light", "dark")
    logo: Field.optional(String()), // URL of the custom logo (optional)
    welcomeMessage: Field.optional(String()), // Custom welcome message (optional)
    brandingEnabled: Field.boolean(), // Whether branding is enabled
});

export const WebsiteIntegration = Model({
    id: ID(), // Unique identifier for each website integration
    userId: Field.string(), // ID of the user who owns this integration
    domain: Field.string(), // Domain of the website where the chatbot is embedded
    apiKey: Field.string(), // API key for embedding the chatbot
    active: Field.boolean(), // Whether the integration is active
});