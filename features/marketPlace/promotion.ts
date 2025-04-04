export type PromotionItem = {
    id: string;
    title: string;
    expire: string;
    coverImageUrl: string;
    type: string;
    price: {
      old: number | string;
      new: number | string;
    };
    reduction: string;
    promotionType: string;
    dealType: string;
  };
  
  type PromotionItemDetails = {
    addedOn: string;
    apptCount: number;
    cost: string;
    createdBy: string;
    currency: string;
    details: {
      title: string;
    };
    duration: number;
    favList: any[];
    hairType: string;
    itemMedia: string[];
    likes: number;
    pageDetails: {
      businessName: string;
      logo?: string;
      businessAddress: {
        Geometry: {
          Point: [number, number];
        };
        AdditionalInfo: string;
        TimeZone: {
          Name: string;
          Offset: number;
        };
        Categories: string[];
        Label: string;
        Country: string;
        Region: string;
        Interpolated: boolean;
      }[];
      pageId: string;
    };
    pageId: string;
    reviews?: {
      count: number;
      score: number;
    };
    showcaseViews: number;
    tags: string;
    type: string;
    promotionDiscount: {
      type: string;
      value: number;
      price: {
        currentPrice: number;
        discountedPrice: number;
      };
    };
  };
  
  type ServiceMenuItem = {
    name: string;
    duration: number;
    id: string;
    category: string;
    price: string;
  };
  
  type BookingPolicy = {
    noticePeriod: number;
    lateCancellation: string;
    noShow: string;
    cancellationNotice: number;
  };
  
  type DepositPolicy = {
    metric: string;
    value: number;
  };
  
  type HouseRules = {
    childrenAllowed: boolean;
    friendsAllowed: boolean;
    petsAllowed: boolean;
  };
  
  type PagePolicies = {
    bookingPolicy: BookingPolicy;
    deposit: DepositPolicy;
    lastModified: string;
    houseRules: HouseRules;
    addedOn: string;
    lastModifiedBy: string;
  };
  
  type PaymentOption = {
    accepted: boolean;
    username: string;
  };
  
  type PaymentDetails = {
    Zelle: PaymentOption;
    CashApp: PaymentOption;
    Venmo: PaymentOption;
    isPaymentConfigured: boolean;
    paymentAccount: string;
  };
  
  type PageDetails = {
    owner: string;
    specialty: string;
    address: {
      Geometry: {
        Point: [number, number];
      };
      AdditionalInfo: string;
      TimeZone: {
        Name: string;
        Offset: number;
      };
      Categories: string[];
      Label: string;
      Country: string;
      Region: string;
      Interpolated: boolean;
    }[];
    bookingLink: {
      name: string;
      url: string;
    };
    reopenSlotsOnCancellation: boolean;
    bookingSite: string;
    acceptCashPayments: boolean;
    chargeTax: boolean;
    lastModifiedBy: string;
    policies: PagePolicies;
    pageName: string;
    addedOn: string;
    mimbbossTitle: string;
    mimbboPay: boolean;
    pageType: string;
    portfolioType: string;
    logo: string;
    currency: string;
    payment: PaymentDetails;
    lastModified: string;
    chargeDepositBeforeArrival: boolean;
    admins: string[];
    serviceMenu: ServiceMenuItem[];
    reviews?: {
      total: number;
    };
  };
  
  type PromotionDiscount = {
    type: 'flat' | 'percentage';
    value: number;
  };
  
  type Details = {
    createdBy: string;
    description: string;
    expiresIn: {
      date: string;
    };
    geohash: string;
    id: string;
    isLive: boolean;
    itemShares: number;
    itemViews: number;
    pageId: string;
    promotionDiscount: PromotionDiscount;
    title: string;
    type: 'discount' | 'last_minute' | 'lastminute';
    shortenedUrl?: string;
    mimbboss?: {
      userId: string;
      lname: string;
      fname: string;
      username: string;
    };
    page: PageDetails;
    promotionItems: {
      showcases?: {
        showcaseId: string;
        details: PromotionItemDetails;
      }[];
    };
    isExternal?: boolean;
  };
  
  export type Promotion = {
    id: string;
    details: Details;
  };
  