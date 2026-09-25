"use client"

import type React from "react"
import { createContext, useContext, useEffect, useMemo, useState } from "react"

export type Locale = "en" | "ar"
export type Direction = "ltr" | "rtl"

const STORAGE_KEY = "proptham-locale"

const dictionaries = {
  en: {
    nav: {
      home: "Home",
      properties: "Properties",
      agents: "Agents",
      about: "About",
      contact: "Contact",
      signIn: "Sign In",
      signUp: "Sign Up",
      listProperty: "List Property",
    },
    language: {
      label: "Language",
      english: "English",
      arabic: "Arabic",
    },
    home: {
      heroTitle: "Find your destined property",
      heroSubtitle: "Discover the perfect property that fits your lifestyle and budget.",
      locationPlaceholder: "Location",
      propertyType: "Property Type",
      search: "Search",
      house: "House",
      apartment: "Apartment",
      condo: "Condo",
      townhouse: "Townhouse",
      whyTitle: "Why Choose Us",
      whySubtitle: "We provide exceptional service and expertise in real estate.",
      premiumTitle: "Premium Properties",
      premiumText: "Access to exclusive listings and premium properties in the best locations.",
      agentsTitle: "Expert Agents",
      agentsText: "Our team of experienced agents will guide you through every step.",
      secureTitle: "Secure Transactions",
      secureText: "Safe and secure property transactions with full legal support.",
    },
    filters: {
      location: "Location",
      locationPlaceholder: "Enter city, zip code",
      propertyType: "Property Type",
      priceRange: "Price Range",
      monthlyPriceRange: "Price Range (Monthly)",
      any: "Any",
      search: "Search",
    },
    pages: {
      propertiesTitle: "Properties",
      propertiesSubtitle: "Browse our selection of properties for sale and rent.",
      forSaleTitle: "Properties For Sale",
      forSaleSubtitle: "Browse our selection of properties available for purchase.",
      forRentTitle: "Properties For Rent",
      forRentSubtitle: "Browse our selection of properties available for rent.",
      aboutTitle: "About Proptham",
      aboutSubtitle: "Your trusted partner in real estate.",
      ourStory: "Our Story",
      storyOne:
        "Proptham was founded with a simple mission: to make real estate transactions transparent, efficient, and stress-free.",
      storyTwo:
        "Over the years, we've helped thousands of clients find their destined properties, sell their properties at the best possible price, and make smart investment decisions.",
      valuesTitle: "Our Values",
      valuesSubtitle: "The principles that guide everything we do.",
      integrity: "Integrity",
      integrityText: "We believe in honesty, transparency, and doing what's right for our clients.",
      excellence: "Excellence",
      excellenceText: "We strive for excellence in customer service, market analysis, and property marketing.",
      clientFocused: "Client-Focused",
      clientFocusedText: "Our clients' needs and goals are at the center of everything we do.",
      leadership: "Our Leadership Team",
      leadershipText: "Meet the experienced professionals who lead our company.",
      agentsTitle: "Our Real Estate Agents",
      agentsSubtitle:
        "Meet our team of experienced real estate professionals dedicated to helping you find your perfect property.",
      findAgent: "Find an Agent",
      findAgentSubtitle: "Search for an agent by name or specialty.",
      searchAgents: "Search agents...",
      specialties: "Specialties:",
      languages: "Languages:",
      experience: "Experience:",
      years: "years",
      viewProfile: "View Profile",
      joinTeam: "Join Our Team",
      joinTeamText:
        "Are you a real estate professional looking for a supportive team and excellent resources? We're always looking for talented agents to join Proptham.",
      viewOpenPositions: "View Open Positions",
      contactUs: "Contact Us",
      contactTitle: "Contact Us",
      contactSubtitle: "We're here to help you with all your real estate needs. Reach out to us with any questions.",
      office: "Our Office",
      phone: "Phone",
      email: "Email",
      mapPlaceholder: "Map would be displayed here",
      sendMessage: "Send Us a Message",
      sendMessageText: "Fill out the form below and we'll get back to you as soon as possible.",
      firstName: "First Name",
      lastName: "Last Name",
      subject: "Subject",
      message: "Message",
      messagePlaceholder: "I'm interested in learning more about...",
      careersTitle: "Careers at Proptham",
      careersSubtitle: "Join our growing team and help shape the future of real estate.",
      privacyTitle: "Privacy Policy",
      privacyText: "Your privacy matters to us. This page outlines how Proptham protects your information.",
      termsTitle: "Terms of Service",
      termsText: "Review the terms that apply when using Proptham services and tools.",
    },
    detail: {
      addToFavorites: "Add to favorites",
      share: "Share",
      description: "Description",
      features: "Features",
      location: "Location",
      airConditioning: "Air Conditioning",
      heating: "Heating",
      parking: "Parking",
      dishwasher: "Dishwasher",
      washerDryer: "Washer/Dryer",
      hardwoodFloors: "Hardwood Floors",
      mapPlaceholder: "Map view would be displayed here",
      scheduleTour: "Schedule a Tour",
      contactAgent: "Contact Agent",
      agentName: "Ahmed Mansour",
      agentTitle: "Real Estate Agent",
      name: "Name",
      yourName: "Your name",
      yourEmail: "Your email",
      yourPhone: "Your phone",
      message: "Message",
      interested: "I'm interested in this property...",
      sendMessage: "Send Message",
      similar: "Similar Properties",
    },
    auth: {
      welcomeBack: "Welcome back",
      signInSubtitle: "Enter your email to sign in to your account",
      createAccount: "Create an account",
      signUpSubtitle: "Enter your email below to create your account",
      forgotTitle: "Forgot password",
      forgotSubtitle: "Enter your email and we'll send you a reset link",
      email: "Email",
      password: "Password",
      confirmPassword: "Confirm Password",
      resetPassword: "Reset Password",
      noAccount: "Don't have an account? Sign Up",
      haveAccount: "Already have an account? Sign In",
      forgotPassword: "Forgot your password?",
      termsPrefix: "By clicking continue, you agree to our",
      and: "and",
    },
    featured: {
      title: "Featured Properties",
      subtitle: "Explore our handpicked selection of premium properties.",
      viewAll: "View All Properties",
    },
    property: {
      beds: "Beds",
      baths: "Baths",
      sqft: "Sq Ft",
      forSale: "For Sale",
      forRent: "For Rent",
    },
    testimonials: {
      title: "What Our Clients Say",
      subtitle: "Don't just take our word for it. Here's what our clients have to say.",
      items: [
        {
          quote:
            "Proptham made finding our destined property a breeze. Their team was professional, knowledgeable, and always available to answer our questions.",
          name: "Sarah Johnson",
          role: "Homeowner",
        },
        {
          quote:
            "We sold our property in record time thanks to Proptham. Their marketing strategy and network of buyers made all the difference.",
          name: "Michael Thompson",
          role: "Property Seller",
        },
        {
          quote:
            "As a first-time investor, I appreciated the guidance and expertise that Proptham provided. They helped me find the perfect investment property.",
          name: "Emily Rodriguez",
          role: "Property Investor",
        },
      ],
    },
    footer: {
      tagline: "Your trusted partner in real estate.",
      rights: "© Proptham. All rights reserved.",
      company: "Company",
      careers: "Careers",
      legal: "Legal",
      privacy: "Privacy",
      terms: "Terms",
      allProperties: "All Properties",
      forSale: "For Sale",
      forRent: "For Rent",
    },
    propertiesData: {
      "1": {
        title: "Modern Luxury Villa",
        location: "123 Palm Avenue, Beverly Hills, CA",
        type: "House",
        description:
          "This stunning modern villa offers luxurious living with high-end finishes throughout. Featuring an open floor plan, gourmet kitchen, and a private backyard with a pool.",
      },
      "2": {
        title: "Downtown Penthouse",
        location: "456 Skyline Drive, Los Angeles, CA",
        type: "Condo",
        description:
          "Breathtaking views from this luxury penthouse in the heart of downtown. Floor-to-ceiling windows, modern finishes, and a spacious open layout.",
      },
      "3": {
        title: "Charming Suburban Home",
        location: "789 Maple Street, Pasadena, CA",
        type: "House",
        description:
          "Beautiful family home in a quiet suburban neighborhood with a renovated kitchen, hardwood floors, and a spacious backyard.",
      },
      "4": {
        title: "Waterfront Apartment",
        location: "101 Harbor View, Marina del Rey, CA",
        type: "Apartment",
        description:
          "Stunning waterfront apartment with panoramic marina views, updated appliances, designer finishes, and private dock access.",
      },
      "5": {
        title: "Historic Craftsman Bungalow",
        location: "202 Heritage Lane, Pasadena, CA",
        type: "House",
        description:
          "Beautifully preserved historic craftsman bungalow with original woodwork, updated kitchen and bathrooms, and a lovely garden.",
      },
      "6": {
        title: "Modern Loft Apartment",
        location: "303 Arts District, Los Angeles, CA",
        type: "Apartment",
        description:
          "Industrial-chic loft in the vibrant Arts District with exposed brick walls, high ceilings, large windows, and an open layout.",
      },
    },
    agentsData: {
      "1": { title: "Senior Real Estate Agent", specialties: "Luxury Homes, Waterfront Properties", languages: "English, Spanish" },
      "2": { title: "Real Estate Consultant", specialties: "First-time Buyers, Residential", languages: "English, French" },
      "3": { title: "Commercial Property Specialist", specialties: "Commercial, Investment Properties", languages: "English, Mandarin" },
      "4": { title: "Residential Sales Agent", specialties: "Suburban Homes, Condos", languages: "English, Spanish" },
      "5": { title: "Luxury Property Specialist", specialties: "High-end Properties, Estates", languages: "English" },
      "6": { title: "Rental Property Manager", specialties: "Rental Properties, Property Management", languages: "English, Korean" },
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      properties: "العقارات",
      agents: "الوكلاء",
      about: "من نحن",
      contact: "اتصل بنا",
      signIn: "تسجيل الدخول",
      signUp: "إنشاء حساب",
      listProperty: "أضف عقارك",
    },
    language: {
      label: "اللغة",
      english: "الإنجليزية",
      arabic: "العربية",
    },
    home: {
      heroTitle: "اعثر على عقارك المقدر",
      heroSubtitle: "اكتشف العقار المناسب لأسلوب حياتك وميزانيتك.",
      locationPlaceholder: "الموقع",
      propertyType: "نوع العقار",
      search: "بحث",
      house: "منزل",
      apartment: "شقة",
      condo: "وحدة سكنية",
      townhouse: "تاون هاوس",
      whyTitle: "لماذا تختارنا",
      whySubtitle: "نقدم خدمة مميزة وخبرة موثوقة في سوق العقارات.",
      premiumTitle: "عقارات مميزة",
      premiumText: "وصول إلى قوائم حصرية وعقارات مميزة في أفضل المواقع.",
      agentsTitle: "وكلاء خبراء",
      agentsText: "فريقنا من الوكلاء ذوي الخبرة سيرشدك في كل خطوة.",
      secureTitle: "معاملات آمنة",
      secureText: "معاملات عقارية آمنة مع دعم قانوني كامل.",
    },
    filters: {
      location: "الموقع",
      locationPlaceholder: "أدخل المدينة أو الرمز البريدي",
      propertyType: "نوع العقار",
      priceRange: "نطاق السعر",
      monthlyPriceRange: "نطاق السعر الشهري",
      any: "أي",
      search: "بحث",
    },
    pages: {
      propertiesTitle: "العقارات",
      propertiesSubtitle: "تصفح مجموعتنا من العقارات المتاحة للبيع والإيجار.",
      forSaleTitle: "عقارات للبيع",
      forSaleSubtitle: "تصفح العقارات المتاحة للشراء.",
      forRentTitle: "عقارات للإيجار",
      forRentSubtitle: "تصفح العقارات المتاحة للإيجار.",
      aboutTitle: "عن Proptham",
      aboutSubtitle: "شريكك الموثوق في العقارات.",
      ourStory: "قصتنا",
      storyOne: "تأسست Proptham بهدف بسيط: جعل المعاملات العقارية واضحة وسهلة وخالية من التوتر.",
      storyTwo: "ساعدنا آلاف العملاء على العثور على منازلهم، وبيع عقاراتهم بأفضل سعر، واتخاذ قرارات استثمارية ذكية.",
      valuesTitle: "قيمنا",
      valuesSubtitle: "المبادئ التي توجه كل ما نقوم به.",
      integrity: "النزاهة",
      integrityText: "نؤمن بالصدق والشفافية وفعل ما يصب في مصلحة عملائنا.",
      excellence: "التميز",
      excellenceText: "نسعى للتميز في خدمة العملاء وتحليل السوق وتسويق العقارات.",
      clientFocused: "التركيز على العميل",
      clientFocusedText: "احتياجات عملائنا وأهدافهم في قلب كل ما نقوم به.",
      leadership: "فريق القيادة",
      leadershipText: "تعرف على الخبراء الذين يقودون شركتنا.",
      agentsTitle: "وكلاؤنا العقاريون",
      agentsSubtitle: "تعرف على فريقنا من الخبراء المكرسين لمساعدتك في العثور على العقار المثالي.",
      findAgent: "ابحث عن وكيل",
      findAgentSubtitle: "ابحث عن وكيل بالاسم أو التخصص.",
      searchAgents: "ابحث عن وكلاء...",
      specialties: "التخصصات:",
      languages: "اللغات:",
      experience: "الخبرة:",
      years: "سنوات",
      viewProfile: "عرض الملف",
      joinTeam: "انضم إلى فريقنا",
      joinTeamText: "هل أنت محترف عقاري تبحث عن فريق داعم وموارد ممتازة؟ نبحث دائما عن وكلاء موهوبين للانضمام إلى Proptham.",
      viewOpenPositions: "عرض الوظائف المتاحة",
      contactUs: "اتصل بنا",
      contactTitle: "اتصل بنا",
      contactSubtitle: "نحن هنا لمساعدتك في كل احتياجاتك العقارية. تواصل معنا لأي سؤال.",
      office: "مكتبنا",
      phone: "الهاتف",
      email: "البريد الإلكتروني",
      mapPlaceholder: "سيتم عرض الخريطة هنا",
      sendMessage: "أرسل لنا رسالة",
      sendMessageText: "املأ النموذج وسنرد عليك في أقرب وقت ممكن.",
      firstName: "الاسم الأول",
      lastName: "اسم العائلة",
      subject: "الموضوع",
      message: "الرسالة",
      messagePlaceholder: "أرغب في معرفة المزيد عن...",
      careersTitle: "الوظائف في Proptham",
      careersSubtitle: "انضم إلى فريقنا المتنامي وساعد في تشكيل مستقبل العقارات.",
      privacyTitle: "سياسة الخصوصية",
      privacyText: "خصوصيتك مهمة لنا. توضح هذه الصفحة كيف تحمي Proptham معلوماتك.",
      termsTitle: "شروط الخدمة",
      termsText: "راجع الشروط التي تنطبق عند استخدام خدمات وأدوات Proptham.",
    },
    detail: {
      addToFavorites: "أضف إلى المفضلة",
      share: "مشاركة",
      description: "الوصف",
      features: "المميزات",
      location: "الموقع",
      airConditioning: "تكييف",
      heating: "تدفئة",
      parking: "موقف سيارات",
      dishwasher: "غسالة صحون",
      washerDryer: "غسالة ومجفف",
      hardwoodFloors: "أرضيات خشبية",
      mapPlaceholder: "سيتم عرض الخريطة هنا",
      scheduleTour: "جدولة جولة",
      contactAgent: "تواصل مع الوكيل",
      agentName: "أحمد منصور",
      agentTitle: "وكيل عقاري",
      name: "الاسم",
      yourName: "اسمك",
      yourEmail: "بريدك الإلكتروني",
      yourPhone: "هاتفك",
      message: "الرسالة",
      interested: "أنا مهتم بهذا العقار...",
      sendMessage: "إرسال الرسالة",
      similar: "عقارات مشابهة",
    },
    auth: {
      welcomeBack: "مرحبا بعودتك",
      signInSubtitle: "أدخل بريدك الإلكتروني لتسجيل الدخول إلى حسابك",
      createAccount: "إنشاء حساب",
      signUpSubtitle: "أدخل بريدك الإلكتروني أدناه لإنشاء حسابك",
      forgotTitle: "نسيت كلمة المرور",
      forgotSubtitle: "أدخل بريدك الإلكتروني وسنرسل لك رابط إعادة التعيين",
      email: "البريد الإلكتروني",
      password: "كلمة المرور",
      confirmPassword: "تأكيد كلمة المرور",
      resetPassword: "إعادة تعيين كلمة المرور",
      noAccount: "ليس لديك حساب؟ أنشئ حسابا",
      haveAccount: "لديك حساب بالفعل؟ تسجيل الدخول",
      forgotPassword: "نسيت كلمة المرور؟",
      termsPrefix: "بالضغط على متابعة، أنت توافق على",
      and: "و",
    },
    featured: {
      title: "عقارات مختارة",
      subtitle: "استكشف مجموعة منتقاة من العقارات المميزة.",
      viewAll: "عرض كل العقارات",
    },
    property: {
      beds: "غرف",
      baths: "حمامات",
      sqft: "قدم مربع",
      forSale: "للبيع",
      forRent: "للإيجار",
    },
    testimonials: {
      title: "آراء عملائنا",
      subtitle: "لا تكتف بكلامنا فقط. هذه بعض آراء عملائنا.",
      items: [
        {
          quote: "ساعدتنا Proptham على العثور على منزل أحلامنا بسهولة. كان الفريق محترفا ومتعاونا دائما.",
          name: "سارة جونسون",
          role: "مالكة منزل",
        },
        {
          quote: "بعنا عقارنا في وقت قياسي بفضل Proptham. استراتيجية التسويق وشبكة المشترين أحدثتا فارقا كبيرا.",
          name: "مايكل طومسون",
          role: "بائع عقار",
        },
        {
          quote: "كمستثمرة لأول مرة، قدرت الإرشاد والخبرة التي قدمتها Proptham حتى وجدت العقار الاستثماري المناسب.",
          name: "إيميلي رودريغيز",
          role: "مستثمرة عقارية",
        },
      ],
    },
    footer: {
      tagline: "شريكك الموثوق في العقارات.",
      rights: "© Proptham. جميع الحقوق محفوظة.",
      company: "الشركة",
      careers: "الوظائف",
      legal: "قانوني",
      privacy: "الخصوصية",
      terms: "الشروط",
      allProperties: "كل العقارات",
      forSale: "للبيع",
      forRent: "للإيجار",
    },
    propertiesData: {
      "1": {
        title: "فيلا عصرية فاخرة",
        location: "123 شارع بالم، بيفرلي هيلز، كاليفورنيا",
        type: "منزل",
        description: "فيلا عصرية مذهلة توفر معيشة فاخرة بتشطيبات راقية، ومخطط مفتوح، ومطبخ فاخر، وحديقة خاصة مع مسبح.",
      },
      "2": {
        title: "بنتهاوس وسط المدينة",
        location: "456 سكاي لاين درايف، لوس أنجلوس، كاليفورنيا",
        type: "وحدة سكنية",
        description: "إطلالات خلابة من بنتهاوس فاخر في قلب وسط المدينة مع نوافذ ممتدة وتشطيبات عصرية ومساحة مفتوحة.",
      },
      "3": {
        title: "منزل ضواحي دافئ",
        location: "789 شارع مابل، باسادينا، كاليفورنيا",
        type: "منزل",
        description: "منزل عائلي جميل في حي هادئ مع مطبخ مجدد وأرضيات خشبية وحديقة واسعة.",
      },
      "4": {
        title: "شقة على الواجهة البحرية",
        location: "101 هاربور فيو، مارينا ديل ري، كاليفورنيا",
        type: "شقة",
        description: "شقة رائعة بإطلالات بانورامية على المارينا، أجهزة حديثة، تشطيبات أنيقة، ووصول إلى رصيف خاص.",
      },
      "5": {
        title: "بنغل تاريخي حرفي",
        location: "202 هيريتج لين، باسادينا، كاليفورنيا",
        type: "منزل",
        description: "بنغل تاريخي محفوظ بعناية مع تفاصيل خشبية أصلية ومطبخ وحمامات محدثة وحديقة جميلة.",
      },
      "6": {
        title: "شقة لوفت عصرية",
        location: "303 حي الفنون، لوس أنجلوس، كاليفورنيا",
        type: "شقة",
        description: "لوفت صناعي أنيق في حي الفنون مع جدران طوب مكشوفة وأسقف عالية ونوافذ كبيرة ومخطط مفتوح.",
      },
    },
    agentsData: {
      "1": { title: "وكيل عقاري أول", specialties: "المنازل الفاخرة، عقارات الواجهة البحرية", languages: "العربية، الإنجليزية، الإسبانية" },
      "2": { title: "مستشارة عقارية", specialties: "المشترون لأول مرة، السكني", languages: "العربية، الإنجليزية، الفرنسية" },
      "3": { title: "متخصص عقارات تجارية", specialties: "التجاري، العقارات الاستثمارية", languages: "العربية، الإنجليزية، الماندرين" },
      "4": { title: "وكيلة مبيعات سكنية", specialties: "منازل الضواحي، الوحدات السكنية", languages: "العربية، الإنجليزية، الإسبانية" },
      "5": { title: "متخصص عقارات فاخرة", specialties: "العقارات الراقية، القصور", languages: "العربية، الإنجليزية" },
      "6": { title: "مديرة عقارات للإيجار", specialties: "عقارات الإيجار، إدارة الممتلكات", languages: "العربية، الإنجليزية، الكورية" },
    },
  },
} as const

type Dictionary = (typeof dictionaries)[Locale]

const localeDirections: Record<Locale, Direction> = {
  en: "ltr",
  ar: "rtl",
}

type I18nContextValue = {
  locale: Locale
  direction: Direction
  t: Dictionary
  setLocale: (locale: Locale) => void
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined)

function getInitialLocale(): Locale {
  if (typeof window === "undefined") {
    return "en"
  }

  const storedLocale = window.localStorage.getItem(STORAGE_KEY)
  return storedLocale === "ar" ? "ar" : "en"
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale)

  const direction = localeDirections[locale]

  useEffect(() => {
    document.documentElement.lang = locale
    document.documentElement.dir = direction
    window.localStorage.setItem(STORAGE_KEY, locale)
  }, [direction, locale])

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      direction,
      t: dictionaries[locale],
      setLocale: setLocaleState,
    }),
    [direction, locale],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)

  if (!context) {
    throw new Error("useI18n must be used inside I18nProvider")
  }

  return context
}
