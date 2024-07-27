export const routes = {
  admin: {
    dashboard: '/admin',
    profile: '/admin/profile',
    addToServiceProviders: '/admin/add-to-service-providers',
    profileCreation: '/admin/profile/profile-creation',
    registers: '/admin/registers',
    customer: '/admin/registers/customer',
    individual: '/admin/registers/individual',
    organization: '/admin/registers/organization',
    serviceProvider: '/admin/registers/service-provider',
    requisitions: '/admin/registers/requisitions',
    assignServiceProvider: '/admin/service-providers/assign-service-provider',
    quotations: '/admin/quotations',
    analyzeQuotations: '/admin/quotations/analyzeQuotations',
    evaluate: '/admin/quotations/evaluateQuotations',
  },

  serviceProvider: {
    fundi: {
      dashboard: '/service-provider/fundi/dashboard',

      // requisitions
      requisitions: '/service-provider/fundi/requisitions',
      rfqEmergency: '/service-provider/fundi/requisitions/rfqs/emergency',
      rfqStandardOne: '/service-provider/fundi/requisitions/rfqs/standard-one',

      // quotations
      // makeQuotation: '/service-provider/fundi/make-quotation',
      // quotations: '/service-provider/quotations/fundi',
      quotationDetails: '/service-provider/quotations/quotation-details/fundi',   

      // jobs
      jobs: '/service-provider/fundi/jobs',
      activeJobs: '/service-provider/fundi/jobs/active',
      completedJobs: '/service-provider/fundi/jobs/completed',
      jobDetails: '/service-provider/fundi/jobs/active/details',
      completeJobDetails: '/service-provider/fundi/jobs/completed/report',

      // reviews
      reviews: '/service-provider/fundi/reviews',
      viewReview: '/service-provider/fundi/reviews/view',


      
      // profile
      profile: '/service-provider/fundi/profile',

      // create profile
      createProfile: '/service-provider/profile/create/fundi',
      requiredDetails: '/service-provider/profile/create/fundi/required-details',

      // edit profile
      editProfile: '/service-provider/profile/edit',
      accountDetails: '/service-provider/profile/account-details',
      uploads: '/service-provider/profile/uploads',
      evaluationForm: '/service-provider/profile/evaluation-form',
      // contactDetails: '/service-provider/profile/edit/fundi/contact-details',

    },

    professional: {
      dashboard: '/service-provider/professional/dashboard',

      // requisitions
      requisitions: '/service-provider/professional/requisitions',
      rfqStandardOne: '/service-provider/professional/requisitions/rfqs/standard-one',
      rfqStandardTWo: '/service-provider/professional/requisitions/rfqs/standard-two',
      rfqStandardTWoMakeQuotation: '/service-provider/professional/requisitions/rfqs/standard-two/make-quotation',

      // quotations
      quotations: '/service-provider/professional/quotations',
      quotationDetails: '/service-provider/quotations/quotation-details/fundi',   

      // jobs
      activeJobs: '/service-provider/professional/jobs/active',
      completedJobs: '/service-provider/professional/jobs/completed',
      jobDetails: '/service-provider/professional/jobs/active/details',

      reviews: '/service-provider/professional/reviews',

      profile: '/service-provider/professional/profile',
      accountDetails: '/service-provider/professional/profile/account-details',
      uploads: '/service-provider/professional/profile/uploads'
    },

    contractor: {
      dashboard: '/service-provider/contractor/dashboard',

      // requisitions
      requisitions: '/service-provider/contractor/requisitions',
      rfqStandardOne: '/service-provider/contractor/requisitions/rfqs/standard-one',
      rfqStandardTWo: '/service-provider/contractor/requisitions/rfqs/standard-two',

      // quotations
      quotations: '/service-provider/contractor/quotations',

      // jobs
      activeJobs: '/service-provider/contractor/jobs/active',
      completedJobs: '/service-provider/contractor/jobs/completed',
      jobDetails: '/service-provider/contractor/jobs/active/details',
      jobReport: '/service-provider/contractor/jobs/completed/report',

      reviews: '/service-provider/contractor/reviews',
      viewReview: '/service-provider/contractor/reviews/view',

      profile: '/service-provider/contractor/profile',
      accountDetails: '/service-provider/contractor/profile/account-details',
      uploads: '/service-provider/contractor/profile/uploads',

    }
  },





  eCommerce: {
    dashboard: '/ecommerce',
    products: '/ecommerce/products',
    createProduct: '/ecommerce/products/create',
    productDetails: (slug: string) => `/ecommerce/products/${slug}`,
    ediProduct: (slug: string) => `/ecommerce/products/${slug}/edit`,
    categories: '/ecommerce/categories',
    createCategory: '/ecommerce/categories/create',
    editCategory: (id: string) => `/ecommerce/categories/${id}/edit`,
    orders: '/ecommerce/orders',
    createOrder: '/ecommerce/orders/create',
    orderDetails: (id: string) => `/ecommerce/orders/${id}`,
    editOrder: (id: string) => `/ecommerce/orders/${id}/edit`,
    reviews: '/ecommerce/reviews',
    shop: '/ecommerce/shop',
    cart: '/ecommerce/cart',
    checkout: '/ecommerce/checkout',
    trackingId: (id: string) => `/ecommerce/tracking/${id}`,
  },
  searchAndFilter: {
    realEstate: '/search/real-estate',
    nft: '/search/nft',
    flight: '/search/flight',
  },
  support: {
    dashboard: '/support',
    inbox: '/support/inbox',
    supportCategory: (category: string) => `/support/inbox/${category}`,
    messageDetails: (id: string) => `/support/inbox/${id}`,
    snippets: '/support/snippets',
    createSnippet: '/support/snippets/create',
    viewSnippet: (id: string) => `/support/snippets/${id}`,
    editSnippet: (id: string) => `/support/snippets/${id}/edit`,
    templates: '/support/templates',
    createTemplate: '/support/templates/create',
    viewTemplate: (id: string) => `/support/templates/${id}`,
    editTemplate: (id: string) => `/support/templates/${id}/edit`,
  },
  logistics: {
    dashboard: '/logistics',
    shipmentList: '/logistics/shipments',
    customerProfile: '/logistics/customer-profile',
    createShipment: '/logistics/shipments/create',
    editShipment: (id: string) => `/logistics/shipments/${id}/edit`,
    shipmentDetails: (id: string) => `/logistics/shipments/${id}`,
    tracking: (id: string) => `/logistics/tracking/${id}`,
  },
  appointment: {
    dashboard: '/appointment',
    appointmentList: '/appointment/list',
  },
  executive: {
    dashboard: '/executive',
  },
  jobBoard: {
    dashboard: '/job-board',
  },
  analytics: '/analytics',
  financial: {
    dashboard: '/financial',
  },
  file: {
    dashboard: '/file',
    manager: '/file-manager',
    upload: '/file-manager/upload',
    create: '/file-manager/create',
  },
  pos: {
    index: '/point-of-sale',
  },
  eventCalendar: '/event-calendar',
  rolesPermissions: '/roles-permissions',
  invoice: {
    home: '/invoice',
    create: '/invoice/create',
    details: (id: string) => `/invoice/${id}`,
    edit: (id: string) => `/invoice/${id}/edit`,
    builder: '/invoice/builder',
  },
  widgets: {
    cards: '/widgets/cards',
    icons: '/widgets/icons',
    charts: '/widgets/charts',
    maps: '/widgets/maps',
    banners: '/widgets/banners',
  },
  tables: {
    basic: '/tables/basic',
    collapsible: '/tables/collapsible',
    enhanced: '/tables/enhanced',
    pagination: '/tables/pagination',
    search: '/tables/search',
    stickyHeader: '/tables/sticky-header',
    tanTable: '/tables/tan-table',
    tanTableResizable: '/tables/tan-table-resizable',
    tanTableDnD: '/tables/tan-table-dnd',
    tanTablePinning: '/tables/tan-table-pinning',
    tanTableEnhanced: '/tables/tan-table-enhanced',
    tanTableCollapsible: '/tables/tan-table-collapsible',
  },
  multiStep: '/multi-step',
  forms: {
    profileSettings: '/forms/profile-settings',
    notificationPreference: '/forms/profile-settings/notification',
    personalInformation: '/forms/profile-settings/profile',
    newsletter: '/forms/newsletter',
  },
  emailTemplates: '/email-templates',
  profile: '/profile',
  welcome: '/welcome',
  comingSoon: '/coming-soon',
  accessDenied: '/access-denied',
  notFound: '/not-found',
  maintenance: '/maintenance',
  blank: '/blank',
  auth: {
    signUp4: '/auth/sign-up-4',
    // sign in
    signIn1: '/auth/sign-in-1',
    signIn2: '/auth/sign-in-2',
    signIn3: '/auth/sign-in-3',
    signIn4: '/auth/sign-in-4',
    signIn5: '/auth/sign-in-5',
    // forgot password
    forgotPassword1: '/auth/forgot-password-1',
    forgotPassword2: '/auth/forgot-password-2',
    forgotPassword3: '/auth/forgot-password-3',
    forgotPassword4: '/auth/forgot-password-4',
    forgotPassword5: '/auth/forgot-password-5',
    // OTP
    otp1: '/auth/otp-1',
    otp2: '/auth/otp-2',
    otp3: '/auth/otp-3',
    otp4: '/auth/otp-4',
    otp5: '/auth/otp-5',
  },
  signIn: '/signin',
};
