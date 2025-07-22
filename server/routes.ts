import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactInquirySchema, insertQuoteRequestSchema } from "@shared/schema";
import nodemailer from "nodemailer";

// Create nodemailer transporter with proper Gmail settings
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactInquirySchema.parse(req.body);
      
      // Store in memory
      const inquiry = await storage.createContactInquiry(validatedData);
      
      // Send email notification
      const mailOptions = {
        from: process.env.SMTP_USER || "kazmirchuk.o.life@gmail.com",
        to: "kazmirchuk.o.life@gmail.com",
        subject: `New Contact Inquiry: ${validatedData.subject}`,
        html: `
          <h2>New Contact Inquiry from Alta Trade Website</h2>
          <p><strong>Name:</strong> ${validatedData.name}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Subject:</strong> ${validatedData.subject}</p>
          <p><strong>Message:</strong></p>
          <p>${validatedData.message}</p>
          <hr>
          <p><small>Sent from Alta Trade Ltd. website</small></p>
        `,
      };

      await transporter.sendMail(mailOptions);
      
      res.json({ success: true, message: "Contact inquiry sent successfully" });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ 
        success: false, 
        message: error instanceof Error ? error.message : "Failed to send contact inquiry" 
      });
    }
  });

  // Quote request submission
  app.post("/api/quote", async (req, res) => {
    try {
      const validatedData = insertQuoteRequestSchema.parse(req.body);
      
      // Store in memory
      const request = await storage.createQuoteRequest(validatedData);
      
      // Send email notification
      const mailOptions = {
        from: process.env.SMTP_USER || "kazmirchuk.o.life@gmail.com",
        to: "kazmirchuk.o.life@gmail.com",
        subject: `New Quote Request: ${validatedData.service}`,
        html: `
          <h2>New Quote Request from Alta Trade Website</h2>
          <p><strong>Name:</strong> ${validatedData.name}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Company:</strong> ${validatedData.company || 'Not provided'}</p>
          <p><strong>Phone:</strong> ${validatedData.phone || 'Not provided'}</p>
          <p><strong>Service Type:</strong> ${validatedData.service}</p>
          <p><strong>Project Details:</strong></p>
          <p>${validatedData.message}</p>
          <hr>
          <p><small>Sent from Alta Trade Ltd. website</small></p>
        `,
      };

      await transporter.sendMail(mailOptions);
      
      res.json({ success: true, message: "Quote request sent successfully" });
    } catch (error) {
      console.error("Quote request error:", error);
      res.status(400).json({ 
        success: false, 
        message: error instanceof Error ? error.message : "Failed to send quote request" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
