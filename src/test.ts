interface User {
    fullname: string;
    clerkId: string;
    type: string;
    createdAt: Date;
    updatedAt: Date;

    domains: Domain[];

    subscription: Billings
}

interface Domain {
    name: string;
    icon: string;
    
    chatBot: ChatBot
    helpdesk: HelpDesk
    filterQuestions: FilterQuestions[]

    customer: Customer[]
    User: User
    userId: string

}

interface ChatBot {
    welcomeMessage: string;
    icon: string;
    Domain: Domain;
}

interface Billing {
    plan: Plan;
    credits: int;
    User: User;
}

interface HelpDesk {
    question: string;
    answered: string;
    Domain: Domain;
}

interface FilterQuestions {
    question: string;
    answered: string;
    domain: Domain
}

interface CustomerResponses {
    question: string;
    answered: string;
    customer: Customer;
}

interface Customer {
    email: string;
    
    questions: CustomerResponses[];

    chatRoom: ChatRoom[];

    Domain: Domain;

}

interface ChatRoom {
    live: boolean;
    mailed: boolean;
    createdAt: Date;
    updateAt: Date;
    Customer: Customer;
    message: ChatMessage[];
}

interface ChatMessage {
    message: string;
    role: string;
    createdAt: Date;
    updatedAt: Date;
    ChatRoom: ChatRoom;
}

enum Plans {
    STANDARD = "standard",
    PREMIUM = "premium",
    ENTERPRISE = "enterprise"
}

enum Roles {
    OWNER = "owner",
    Customer = "customer",