import { contactInquiries, quoteRequests, users, type User, type InsertUser, type ContactInquiry, type InsertContactInquiry, type QuoteRequest, type InsertQuoteRequest } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry>;
  createQuoteRequest(request: InsertQuoteRequest): Promise<QuoteRequest>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactInquiries: Map<number, ContactInquiry>;
  private quoteRequests: Map<number, QuoteRequest>;
  private currentUserId: number;
  private currentContactId: number;
  private currentQuoteId: number;

  constructor() {
    this.users = new Map();
    this.contactInquiries = new Map();
    this.quoteRequests = new Map();
    this.currentUserId = 1;
    this.currentContactId = 1;
    this.currentQuoteId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactInquiry(insertInquiry: InsertContactInquiry): Promise<ContactInquiry> {
    const id = this.currentContactId++;
    const inquiry: ContactInquiry = { 
      ...insertInquiry, 
      id,
      createdAt: new Date()
    };
    this.contactInquiries.set(id, inquiry);
    return inquiry;
  }

  async createQuoteRequest(insertRequest: InsertQuoteRequest): Promise<QuoteRequest> {
    const id = this.currentQuoteId++;
    const request: QuoteRequest = { 
      ...insertRequest, 
      id,
      createdAt: new Date(),
      company: insertRequest.company || null,
      phone: insertRequest.phone || null
    };
    this.quoteRequests.set(id, request);
    return request;
  }
}

export const storage = new MemStorage();
