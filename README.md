# Alta Trade Ltd. - Official Website

Professional bilingual business website for Alta Trade Ltd, providing comprehensive international trade and supply chain management services.

## Features

- 🌍 **Bilingual Support**: Full Ukrainian and English translations
- 📱 **Responsive Design**: Optimized for all devices
- 💼 **B2B Focus**: Specialized for business-to-business operations
- 📊 **$200M+ Trade Volume**: Established company with proven track record
- 📧 **Contact Forms**: Working SMTP integration for quotes and inquiries
- ⚖️ **Legal Compliance**: Cookie Policy and Terms of Service included

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS, shadcn/ui
- **Backend**: Express.js, Node.js
- **Database**: PostgreSQL with Drizzle ORM (ready for production)
- **Email**: Nodemailer with SMTP
- **Internationalization**: i18next
- **Build**: Vite, esbuild

## Company Information

**Alta Trade Ltd.**  
Registered Canadian company specializing in international trade brokerage  
Annual Turnover: $200 million CAD  

**Services:**
- International procurement and sourcing
- Supply chain management and optimization  
- Trade documentation and compliance
- Market analysis and business consultation

**Contact:**
- Email: kazmirchuk.o.life@gmail.com
- Phone: +1 204 430 9931
- Address: Burrard Building, 1111 - 1030 West Georgia, Vancouver, BC, V6E-2Y3, Canada
- LinkedIn: [Alta Trade Ltd.](https://linkedin.com/company/alta-trade-ltd)

## Deployment

### Vercel (Recommended)
1. Push code to GitHub repository
2. Connect GitHub to Vercel
3. Set environment variables:
   - `SMTP_USER`: Email server username
   - `SMTP_PASS`: Email server password
4. Deploy automatically

### Local Development
```bash
npm install
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

## Environment Variables

Create `.env` file with:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

## License

© 2025 Alta Trade Ltd. All rights reserved.