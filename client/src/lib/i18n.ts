import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      navigation: {
        home: "Home",
        about: "About Us",
        services: "Services",
        industries: "Industries",
        whyUs: "Why Us",
        contact: "Contact",
        energy: "Energy"
      },
      hero: {
        title: "International Trade & Supply Chain Solutions",
        subtitle: "Connecting global markets with reliable procurement, supply chain management, and trade facilitation services across Canada and beyond.",
        getQuote: "Get Quote",
        ourServices: "Our Services",
        keyProducts: {
          title: "Specialized in:",
          agricultural: "Agricultural Products",
          electronics: "Electronic Equipment", 
          vehicles: "Transport Vehicles"
        }
      },
      services: {
        title: "Our Services",
        description: "Comprehensive trade solutions designed to streamline your international business operations",
        supplyChain: {
          title: "Supply Chain Management",
          description: "End-to-end supply chain optimization, from sourcing to delivery, ensuring efficient and cost-effective operations."
        },
        procurement: {
          title: "International Procurement",
          description: "Global sourcing solutions connecting you with reliable suppliers and manufacturers worldwide."
        },
        documentation: {
          title: "Trade Documentation",
          description: "Complete documentation services including customs clearance, certificates, and compliance management."
        },
        analysis: {
          title: "Market Analysis",
          description: "In-depth market research and analysis to identify opportunities and optimize your trade strategies."
        },
        partnership: {
          title: "Partnership Development",
          description: "Building strategic partnerships and facilitating business relationships across international markets."
        },
        risk: {
          title: "Risk Management",
          description: "Comprehensive risk assessment and mitigation strategies for international trade operations."
        }
      },
      industries: {
        title: "Industries We Serve",
        description: "Specialized expertise across diverse sectors with tailored solutions for each industry's unique requirements",
        clickToExplore: "Click to explore products"
      },
      whyUs: {
        title: "Why Choose Alta Trade",
        description: "Our commitment to excellence and proven track record make us your trusted partner in international trade",
        advantages: {
          expertise: {
            title: "Proven Expertise",
            description: "Years of experience in international trade with deep understanding of global markets and regulations."
          },
          network: {
            title: "Trusted Network", 
            description: "Extensive network of verified suppliers, manufacturers, and logistics partners worldwide."
          },
          delivery: {
            title: "Timely Delivery",
            description: "Commitment to meeting deadlines with efficient project management and clear communication."
          },
          optimization: {
            title: "Cost Optimization",
            description: "Strategic sourcing and negotiation to deliver maximum value and competitive pricing."
          }
        }
      },
      about: {
        title: "About Alta Trade Ltd.",
        description: "Alta Trade Ltd. is a registered Canadian company specializing in international trade brokerage. We help companies worldwide organize wholesale purchases of agricultural products, electronic equipment, and vehicles.",
        mission: "The company works exclusively with legal entities. All transactions are conducted through the banking system and are accompanied by official contracts and documents.",
        vision: "With an annual turnover of $200 million CAD, we focus on reliability, transparency, and customer satisfaction, building lasting relationships with clients across Canada and around the world.",
        companyInfo: {
          title: "Professional Trade Brokerage",
          subtitle: "Registered in Canada • International Operations • B2B Only",
          description: "We specialize in facilitating wholesale trade transactions with full legal compliance and documentation."
        }
      },
      contact: {
        title: "Get In Touch",
        description: "Ready to expand your business globally? Contact us today for a consultation and personalized quote.",
        information: "Contact Information",
        email: "Email",
        phone: "Phone",
        address: "Address",
        businessHours: "Business Hours",
        mondayFriday: "Monday - Friday: 9:00 AM - 6:00 PM PST",
        saturday: "Saturday: 10:00 AM - 2:00 PM PST",
        quote: {
          title: "Request a Quote",
          fullName: "Full Name",
          email: "Email Address",
          company: "Company Name",
          phone: "Phone Number",
          service: "Service Type",
          selectService: "Select a service",
          details: "Project Details",
          detailsPlaceholder: "Please describe your project requirements, timeline, and any specific needs...",
          submit: "Submit Quote Request"
        },
        general: {
          title: "General Inquiry",
          name: "Name",
          email: "Email",
          subject: "Subject",
          subjectPlaceholder: "What's this about?",
          message: "Message",
          messagePlaceholder: "Your message...",
          submit: "Send Message"
        }
      },
      footer: {
        description: "Your trusted partner in international trade, connecting Canadian businesses with global opportunities through reliable supply chain solutions.",
        quickLinks: "Quick Links",
        services: "Services",
        copyright: "© 2025 Alta Trade Ltd. All rights reserved.",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        cookies: "Cookie Policy"
      },
      cookiePolicy: {
        title: "Cookie Policy",
        lastUpdated: "Last updated",
        date: "January 2025",
        whatAreCookies: {
          title: "What are Cookies?",
          description: "Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better browsing experience by remembering your preferences and improving our services."
        },
        howWeUseCookies: {
          title: "How We Use Cookies",
          description: "Alta Trade Ltd. uses cookies for the following purposes:",
          functionality: "Essential website functionality and navigation",
          preferences: "Remembering your language preferences and settings",
          security: "Maintaining security and preventing fraud",
          analytics: "Understanding how visitors use our website to improve our services"
        },
        typesOfCookies: {
          title: "Types of Cookies We Use",
          essential: {
            title: "Essential Cookies",
            description: "These cookies are necessary for our website to function properly. They enable basic features like page navigation, language selection, and form submissions. You cannot opt out of these cookies."
          },
          functional: {
            title: "Functional Cookies",
            description: "These cookies remember your preferences and choices to provide you with a more personalized experience, such as your preferred language setting."
          },
          analytics: {
            title: "Analytics Cookies",
            description: "We use these cookies to understand how visitors interact with our website, helping us improve our content and user experience."
          }
        },
        managingCookies: {
          title: "Managing Your Cookie Preferences",
          description: "You can control and manage cookies through your browser settings. Most browsers allow you to block or delete cookies, though this may affect your browsing experience.",
          browserSettings: "Browser Cookie Settings:"
        },
        thirdPartyCookies: {
          title: "Third-Party Cookies",
          description: "We may use third-party services that place cookies on your device. These services have their own privacy policies and cookie practices, which we encourage you to review."
        },
        updates: {
          title: "Updates to This Policy",
          description: "We may update this Cookie Policy from time to time to reflect changes in our practices or for legal requirements. We will notify you of any significant changes by posting the updated policy on our website."
        },
        contact: {
          title: "Contact Us",
          description: "If you have any questions about our use of cookies or this Cookie Policy, please contact us:"
        }
      },
      termsOfService: {
        title: "Terms of Service",
        lastUpdated: "Last updated",
        date: "January 2025",
        acceptance: {
          title: "Acceptance of Terms",
          description: "By accessing and using the services of Alta Trade Ltd., you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services."
        },
        services: {
          title: "Description of Services",
          description: "Alta Trade Ltd. provides international trade brokerage and supply chain management services, including but not limited to:",
          supplyChain: "Supply chain management and optimization",
          procurement: "International procurement and sourcing",
          documentation: "Trade documentation and compliance services",
          consultation: "Market analysis and business consultation"
        },
        eligibility: {
          title: "Eligibility and Registration",
          description: "Our services are exclusively available to business entities. By using our services, you represent and warrant that:",
          businessOnly: "You are a legally registered business entity",
          legalEntity: "You have the legal authority to enter into binding agreements",
          authority: "You are authorized to act on behalf of your organization",
          compliance: "You will comply with all applicable laws and regulations"
        },
        userObligations: {
          title: "User Obligations",
          description: "As a user of our services, you agree to:",
          accurateInfo: "Provide accurate and complete information in all communications",
          legalCompliance: "Comply with all applicable international trade laws and regulations",
          payment: "Make payments according to agreed terms and schedules",
          communication: "Maintain professional communication and conduct"
        },
        payment: {
          title: "Payment Terms",
          description: "Payment terms and conditions are established on a per-project basis through formal agreements:",
          terms: "Payment terms are specified in individual service agreements",
          banking: "All transactions are conducted through official banking channels",
          currency: "Payments are typically processed in CAD or USD as agreed"
        },
        limitations: {
          title: "Limitation of Liability",
          description: "Alta Trade Ltd. provides services on a professional basis with industry-standard care:",
          disclaimer: "Important Disclaimer",
          disclaimerText: "Our liability is limited to the value of services provided. We are not responsible for market fluctuations, regulatory changes, or force majeure events beyond our control."
        },
        intellectual: {
          title: "Intellectual Property",
          description: "All content, trademarks, and intellectual property on this website remain the exclusive property of Alta Trade Ltd. Unauthorized use is prohibited without written consent."
        },
        confidentiality: {
          title: "Confidentiality",
          description: "We maintain strict confidentiality regarding all client information and business relationships. Client data is protected according to Canadian privacy laws and international standards."
        },
        termination: {
          title: "Termination",
          description: "Either party may terminate services with proper notice as specified in individual agreements. We reserve the right to terminate services immediately in cases of:",
          breach: "Material breach of these terms",
          nonPayment: "Non-payment of agreed fees",
          illegal: "Illegal or unethical business practices"
        },
        governing: {
          title: "Governing Law",
          description: "These Terms of Service are governed by the laws of British Columbia, Canada, and any disputes will be resolved in the courts of British Columbia."
        },
        modifications: {
          title: "Modifications",
          description: "Alta Trade Ltd. reserves the right to modify these terms at any time. Changes will be posted on our website and users will be notified of significant changes affecting existing agreements."
        },
        contact: {
          title: "Contact Information",
          description: "For questions regarding these Terms of Service or our business practices, please contact us:"
        }
      },
      energy: {
        title: "Energy & Electronics Solutions",
        subtitle: "Comprehensive range of energy equipment and electronic devices to power your business operations and enhance productivity.",
        batteries: {
          title: "Batteries",
          description: "High-performance batteries for industrial applications, backup power systems, and renewable energy storage solutions."
        },
        inverters: {
          title: "Inverters",
          description: "Professional-grade power inverters for converting DC to AC power, essential for solar installations and backup power systems."
        },
        solarPanels: {
          title: "Solar Panels",
          description: "Premium solar panels and photovoltaic systems for commercial and industrial renewable energy projects."
        },
        portablePower: {
          title: "Portable Power",
          description: "Portable power stations and mobile energy solutions for remote operations and emergency backup power."
        },
        computerEquipment: {
          title: "Computer and Peripheral Equipment",
          description: "Business computers, servers, networking equipment, and peripheral devices for modern office environments."
        },
        homeAppliances: {
          title: "Electronic and Home Appliances",
          description: "Professional-grade electronic devices and appliances for commercial establishments and business facilities."
        },
        cta: {
          title: "Need Energy Solutions?",
          description: "Contact us for customized quotes on energy equipment and electronic devices tailored to your business requirements.",
          button: "Request Quote"
        }
      },
      vehicles: {
        title: "Vehicles & Transportation",
        subtitle: "Comprehensive vehicle solutions for business and commercial transportation needs, from passenger cars to commercial vehicles.",
        carsAndVans: {
          title: "Cars and Vans",
          description: "Wide selection of passenger cars, family vehicles, SUVs, and commercial vans for business transportation. New and pre-owned options with comprehensive inspections and warranty coverage."
        },
        carParts: {
          title: "Car Parts",
          description: "Genuine and aftermarket automotive parts, components, and accessories. Professional-grade parts for maintenance, repairs, and vehicle customization needs."
        },
        cta: {
          title: "Need Vehicle Solutions?",
          description: "Contact us for customized quotes on vehicles and automotive parts tailored to your business transportation requirements.",
          button: "Request Quote"
        }
      }
    }
  },
  ua: {
    translation: {
      navigation: {
        home: "Головна",
        about: "Про нас",
        services: "Послуги",
        industries: "Галузі",
        whyUs: "Чому ми",
        contact: "Контакти",
        energy: "Енергетика"
      },
      hero: {
        title: "Міжнародна торгівля та рішення для ланцюгів постачання",
        subtitle: "З'єднуємо світові ринки з надійними послугами закупівель, управління ланцюгами постачання та сприяння торгівлі по всій Канаді та за її межами.",
        getQuote: "Отримати пропозицію",
        ourServices: "Наші послуги",
        keyProducts: {
          title: "Спеціалізуємося на:",
          agricultural: "Сільськогосподарська продукція",
          electronics: "Електронне обладнання", 
          vehicles: "Транспортні засоби"
        }
      },
      services: {
        title: "Наші послуги",
        description: "Комплексні торговельні рішення, розроблені для оптимізації ваших міжнародних бізнес-операцій",
        supplyChain: {
          title: "Управління ланцюгами постачання",
          description: "Комплексна оптимізація ланцюга постачання, від джерела до доставки, забезпечуючи ефективні та економічно вигідні операції."
        },
        procurement: {
          title: "Міжнародні закупівлі",
          description: "Глобальні рішення для постачання, що з'єднують вас з надійними постачальниками та виробниками по всьому світу."
        },
        documentation: {
          title: "Торговельна документація",
          description: "Повний пакет послуг документування, включаючи митне оформлення, сертифікати та управління відповідністю."
        },
        analysis: {
          title: "Аналіз ринку",
          description: "Поглиблене дослідження та аналіз ринку для виявлення можливостей та оптимізації ваших торговельних стратегій."
        },
        partnership: {
          title: "Розвиток партнерства",
          description: "Побудова стратегічних партнерств та сприяння бізнес-відносинам на міжнародних ринках."
        },
        risk: {
          title: "Управління ризиками",
          description: "Комплексна оцінка ризиків та стратегії пом'якшення для операцій міжнародної торгівлі."
        }
      },
      industries: {
        title: "Галузі, які ми обслуговуємо",
        description: "Спеціалізована експертиза в різних секторах з індивідуальними рішеннями для унікальних вимог кожної галузі",
        clickToExplore: "Натисніть, щоб переглянути продукцію"
      },
      whyUs: {
        title: "Чому обирають Alta Trade",
        description: "Наша прихильність до досконалості та перевірений послужний список роблять нас вашим надійним партнером у міжнародній торгівлі",
        advantages: {
          expertise: {
            title: "Доведена експертиза",
            description: "Роки досвіду в міжнародній торгівлі з глибоким розумінням глобальних ринків та регулювань."
          },
          network: {
            title: "Надійна мережа",
            description: "Широка мережа перевірених постачальників, виробників та логістичних партнерів по всьому світу."
          },
          delivery: {
            title: "Своєчасна доставка",
            description: "Зобов'язання дотримуватися термінів з ефективним управлінням проектами та чіткою комунікацією."
          },
          optimization: {
            title: "Оптимізація витрат",
            description: "Стратегічне джерелознавство та переговори для забезпечення максимальної цінності та конкурентоспроможних цін."
          }
        }
      },
      about: {
        title: "Про Alta Trade Ltd.",
        description: "Alta Trade Ltd. — це зареєстрована в Канаді компанія, яка спеціалізується на міжнародному торговому брокерстві. Ми допомагаємо компаніям у всьому світі організовувати оптові закупівлі сільськогосподарської продукції, електронного обладнання та транспортних засобів.",
        mission: "Компанія працює виключно з юридичними особами. Усі транзакції відбуваються через банківську систему та супроводжуються офіційними контрактами й документами.",
        vision: "З річним оборотом $200 мільйонів канадських доларів, ми зосереджуємося на надійності, прозорості та задоволенні клієнтів, будуючи тривалі відносини з клієнтами по всій Канаді та в усьому світі.",
        companyInfo: {
          title: "Професійне торгове брокерство",
          subtitle: "Зареєстровано в Канаді • Міжнародні операції • Тільки B2B",
          description: "Ми спеціалізуємося на сприянні оптовим торговим операціям з повним правовим дотриманням та документуванням."
        }
      },
      contact: {
        title: "Зв'яжіться з нами",
        description: "Готові розширити свій бізнес глобально? Зв'яжіться з нами сьогодні для консультації та персоналізованої пропозиції.",
        information: "Контактна інформація",
        email: "Електронна пошта",
        phone: "Телефон",
        address: "Адреса",
        businessHours: "Робочі години",
        mondayFriday: "Понеділок - П'ятниця: 9:00 - 18:00 PST",
        saturday: "Субота: 10:00 - 14:00 PST",
        quote: {
          title: "Запит пропозиції",
          fullName: "Повне ім'я",
          email: "Електронна адреса",
          company: "Назва компанії",
          phone: "Номер телефону",
          service: "Тип послуги",
          selectService: "Оберіть послугу",
          details: "Деталі проекту",
          detailsPlaceholder: "Будь ласка, опишіть вимоги до вашого проекту, терміни та будь-які специфічні потреби...",
          submit: "Надіслати запит пропозиції"
        },
        general: {
          title: "Загальний запит",
          name: "Ім'я",
          email: "Електронна пошта",
          subject: "Тема",
          subjectPlaceholder: "Про що йдеться?",
          message: "Повідомлення",
          messagePlaceholder: "Ваше повідомлення...",
          submit: "Надіслати повідомлення"
        }
      },
      footer: {
        description: "Ваш надійний партнер у міжнародній торгівлі, що з'єднує канадські підприємства з глобальними можливостями через надійні рішення ланцюга постачання.",
        quickLinks: "Швидкі посилання",
        services: "Послуги",
        copyright: "© 2025 Alta Trade Ltd. Всі права захищені.",
        privacy: "Політика конфіденційності",
        terms: "Умови обслуговування",
        cookies: "Політика файлів cookie"
      },
      cookiePolicy: {
        title: "Політика файлів Cookie",
        lastUpdated: "Останнє оновлення",
        date: "Січень 2025",
        whatAreCookies: {
          title: "Що таке файли Cookie?",
          description: "Файли cookie - це невеликі текстові файли, які зберігаються на вашому пристрої під час відвідування нашого веб-сайту. Вони допомагають нам надавати вам кращий досвід перегляду, запам'ятовуючи ваші налаштування та покращуючи наші послуги."
        },
        howWeUseCookies: {
          title: "Як ми використовуємо файли Cookie",
          description: "Alta Trade Ltd. використовує файли cookie для таких цілей:",
          functionality: "Основна функціональність веб-сайту та навігація",
          preferences: "Запам'ятовування ваших мовних налаштувань та параметрів",
          security: "Підтримання безпеки та запобігання шахрайству",
          analytics: "Розуміння того, як відвідувачі використовують наш веб-сайт для покращення наших послуг"
        },
        typesOfCookies: {
          title: "Типи файлів Cookie, які ми використовуємо",
          essential: {
            title: "Основні файли Cookie",
            description: "Ці файли cookie необхідні для правильної роботи нашого веб-сайту. Вони забезпечують базові функції, такі як навігація по сторінках, вибір мови та подання форм. Ви не можете відмовитися від цих файлів cookie."
          },
          functional: {
            title: "Функціональні файли Cookie",
            description: "Ці файли cookie запам'ятовують ваші налаштування та вибір, щоб надати вам більш персоналізований досвід, наприклад, ваше обране налаштування мови."
          },
          analytics: {
            title: "Аналітичні файли Cookie",
            description: "Ми використовуємо ці файли cookie, щоб зрозуміти, як відвідувачі взаємодіють з нашим веб-сайтом, допомагаючи нам покращувати наш контент та досвід користувачів."
          }
        },
        managingCookies: {
          title: "Управління налаштуваннями Cookie",
          description: "Ви можете контролювати та керувати файлами cookie через налаштування вашого браузера. Більшість браузерів дозволяють блокувати або видаляти файли cookie, хоча це може вплинути на ваш досвід перегляду.",
          browserSettings: "Налаштування файлів Cookie в браузері:"
        },
        thirdPartyCookies: {
          title: "Сторонні файли Cookie",
          description: "Ми можемо використовувати сторонні сервіси, які розміщують файли cookie на вашому пристрої. Ці сервіси мають власні політики конфіденційності та практики використання файлів cookie, які ми рекомендуємо переглянути."
        },
        updates: {
          title: "Оновлення цієї політики",
          description: "Ми можемо час від часу оновлювати цю Політику файлів Cookie, щоб відобразити зміни в наших практиках або через правові вимоги. Ми повідомимо вас про будь-які значні зміни, розмістивши оновлену політику на нашому веб-сайті."
        },
        contact: {
          title: "Зв'яжіться з нами",
          description: "Якщо у вас є запитання щодо нашого використання файлів cookie або цієї Політики файлів Cookie, будь ласка, зв'яжіться з нами:"
        }
      },
      termsOfService: {
        title: "Умови обслуговування",
        lastUpdated: "Останнє оновлення",
        date: "Січень 2025",
        acceptance: {
          title: "Прийняття умов",
          description: "Відвідуючи та користуючись послугами Alta Trade Ltd., ви погоджуєтеся дотримуватися цих Умов обслуговування та всіх відповідних законів і нормативних актів. Якщо ви не погоджуєтеся з будь-якими з цих умов, вам заборонено користуватися нашими послугами."
        },
        services: {
          title: "Опис послуг",
          description: "Alta Trade Ltd. надає послуги міжнародного торгового брокерства та управління ланцюгами постачання, включаючи, але не обмежуючись:",
          supplyChain: "Управління та оптимізація ланцюгів постачання",
          procurement: "Міжнародні закупівлі та пошук постачальників",
          documentation: "Торгова документація та послуги з дотримання вимог",
          consultation: "Аналіз ринку та бізнес-консультації"
        },
        eligibility: {
          title: "Право на участь та реєстрація",
          description: "Наші послуги доступні виключно для бізнес-структур. Використовуючи наші послуги, ви заявляєте та гарантуєте, що:",
          businessOnly: "Ви є юридично зареєстрованою бізнес-структурою",
          legalEntity: "Ви маєте юридичні повноваження укладати обов'язкові угоди",
          authority: "Ви уповноважені діяти від імені вашої організації",
          compliance: "Ви будете дотримуватися всіх відповідних законів та нормативних актів"
        },
        userObligations: {
          title: "Зобов'язання користувача",
          description: "Як користувач наших послуг, ви погоджуєтеся:",
          accurateInfo: "Надавати точну та повну інформацію у всіх комунікаціях",
          legalCompliance: "Дотримуватися всіх відповідних законів та нормативних актів міжнародної торгівлі",
          payment: "Здійснювати платежі згідно з узгодженими умовами та графіками",
          communication: "Підтримувати професійну комунікацію та поведінку"
        },
        payment: {
          title: "Умови оплати",
          description: "Умови та положення щодо оплати встановлюються для кожного проекту окремо через формальні угоди:",
          terms: "Умови оплати вказуються в індивідуальних угодах про послуги",
          banking: "Всі транзакції здійснюються через офіційні банківські канали",
          currency: "Платежі зазвичай обробляються в CAD або USD згідно з домовленістю"
        },
        limitations: {
          title: "Обмеження відповідальності",
          description: "Alta Trade Ltd. надає послуги на професійній основі з дотриманням галузевих стандартів:",
          disclaimer: "Важливе застереження",
          disclaimerText: "Наша відповідальність обмежується вартістю наданих послуг. Ми не несемо відповідальності за ринкові коливання, нормативні зміни або форс-мажорні обставини, що не залежать від нас."
        },
        intellectual: {
          title: "Інтелектуальна власність",
          description: "Весь контент, торгові марки та інтелектуальна власність на цьому веб-сайті залишаються виключною власністю Alta Trade Ltd. Несанкціоноване використання заборонено без письмової згоди."
        },
        confidentiality: {
          title: "Конфіденційність",
          description: "Ми дотримуємося суворої конфіденційності щодо всієї клієнтської інформації та бізнес-відносин. Дані клієнтів захищаються відповідно до канадських законів про конфіденційність та міжнародних стандартів."
        },
        termination: {
          title: "Припинення",
          description: "Будь-яка сторона може припинити надання послуг з належним повідомленням, як зазначено в індивідуальних угодах. Ми залишаємо за собою право негайно припинити надання послуг у випадках:",
          breach: "Істотного порушення цих умов",
          nonPayment: "Несплати узгоджених зборів",
          illegal: "Незаконної або неетичної бізнес-практики"
        },
        governing: {
          title: "Керуюче право",
          description: "Ці Умови обслуговування регулюються законами Британської Колумбії, Канада, і будь-які спори будуть вирішуватися в судах Британської Колумбії."
        },
        modifications: {
          title: "Зміни",
          description: "Alta Trade Ltd. залишає за собою право змінювати ці умови в будь-який час. Зміни будуть опубліковані на нашому веб-сайті, і користувачі будуть повідомлені про значні зміни, що впливають на існуючі угоди."
        },
        contact: {
          title: "Контактна інформація",
          description: "З питаннями щодо цих Умов обслуговування або нашої бізнес-практики, будь ласка, зв'яжіться з нами:"
        }
      },
      energy: {
        title: "Енергетичні та електронні рішення",
        subtitle: "Широкий спектр енергетичного обладнання та електронних пристроїв для забезпечення роботи вашого бізнесу та підвищення продуктивності.",
        batteries: {
          title: "Батареї",
          description: "Високопродуктивні батареї для промислових застосувань, систем резервного живлення та рішень зберігання відновлюваної енергії."
        },
        inverters: {
          title: "Інвертори",
          description: "Професійні інвертори потужності для перетворення постійного струму в змінний, необхідні для сонячних установок та систем резервного живлення."
        },
        solarPanels: {
          title: "Сонячні панелі",
          description: "Преміум сонячні панелі та фотоелектричні системи для комерційних та промислових проектів відновлюваної енергії."
        },
        portablePower: {
          title: "Портативні джерела живлення",
          description: "Портативні електростанції та мобільні енергетичні рішення для віддалених операцій та аварійного резервного живлення."
        },
        computerEquipment: {
          title: "Комп'ютерне та периферійне обладнання",
          description: "Бізнес-комп'ютери, сервери, мережеве обладнання та периферійні пристрої для сучасних офісних середовищ."
        },
        homeAppliances: {
          title: "Електроніка та побутова техніка",
          description: "Професійні електронні пристрої та техніка для комерційних закладів та бізнес-об'єктів."
        },
        cta: {
          title: "Потрібні енергетичні рішення?",
          description: "Зв'яжіться з нами для отримання індивідуальних пропозицій на енергетичне обладнання та електронні пристрої, адаптовані до ваших бізнес-потреб.",
          button: "Запитати пропозицію"
        }
      },
      vehicles: {
        title: "Транспортні засоби та логістика",
        subtitle: "Комплексні рішення для автомобілів та комерційного транспорту, від легкових автомобілів до комерційних транспортних засобів.",
        carsAndVans: {
          title: "Автомобілі та фургони",
          description: "Широкий вибір легкових автомобілів, сімейних транспортних засобів, позашляховиків та комерційних фургонів для бізнес-транспорту. Нові та вживані варіанти з комплексними перевірками та гарантійним покриттям."
        },
        carParts: {
          title: "Автозапчастини",
          description: "Оригінальні та неоригінальні автомобільні запчастини, компоненти та аксесуари. Професійні запчастини для обслуговування, ремонту та тюнінгу автомобілів."
        },
        cta: {
          title: "Потрібні транспортні рішення?",
          description: "Зв'яжіться з нами для отримання індивідуальних пропозицій на транспортні засоби та автозапчастини, адаптовані до ваших бізнес-потреб.",
          button: "Запитати пропозицію"
        }
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
