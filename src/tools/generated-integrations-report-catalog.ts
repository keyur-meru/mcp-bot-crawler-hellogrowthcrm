/**
 * Auto-generated from INTEGRATIONS_REPORT.md.
 * Source generator: scripts/generate-integrations-report-catalog.mjs
 */

export const INTEGRATIONS_REPORT_CATALOG = [
  {
    "slug": "crm-platforms",
    "title": "CRM Platforms",
    "shortLabel": "CRM Platforms",
    "integrations": [
      {
        "slug": "hubspot",
        "name": "HubSpot",
        "whatItDoes": "Two-way contact & deal sync between HubSpot and HelloGrowth CRM",
        "setupSteps": [
          "Settings → Integrations → HubSpot → \"Connect HubSpot\" → OAuth consent"
        ],
        "usefulFor": "Teams that use HubSpot and want crm platforms activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Prepare the required HubSpot credentials and permissions before connecting.",
          "Use the HelloGrowthCRM HubSpot integration path described in the report to connect relevant workflows.",
          "Surface HubSpot from the integrations directory and open the dedicated setup flow from there."
        ],
        "status": "live"
      },
      {
        "slug": "salesforce",
        "name": "Salesforce",
        "whatItDoes": "Import leads/contacts/opportunities from Salesforce, bi-directional sync",
        "setupSteps": [
          "Settings → Integrations → Salesforce → OAuth consent (login.salesforce.com)"
        ],
        "usefulFor": "Teams that use Salesforce and want crm platforms activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Prepare the required Salesforce credentials and permissions before connecting.",
          "Use the HelloGrowthCRM Salesforce integration path described in the report to connect relevant workflows.",
          "Surface Salesforce from the integrations directory and open the dedicated setup flow from there."
        ],
        "status": "live"
      },
      {
        "slug": "zoho",
        "name": "Zoho CRM",
        "whatItDoes": "Pull leads/contacts from Zoho CRM, send updates back",
        "setupSteps": [
          "Settings → Integrations → Zoho CRM → enter API token or OAuth"
        ],
        "usefulFor": "Teams that use Zoho CRM and want crm platforms activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Prepare the required Zoho CRM credentials and permissions before connecting.",
          "Use the HelloGrowthCRM Zoho CRM integration path described in the report to connect relevant workflows.",
          "Surface Zoho CRM from the integrations directory and open the dedicated setup flow from there."
        ],
        "status": "live"
      },
      {
        "slug": "pipedrive",
        "name": "Pipedrive",
        "whatItDoes": "Lead / deal / activity import + outbound sync",
        "setupSteps": [
          "Settings → Integrations → Pipedrive → paste API token (Pipedrive → Settings → Personal preferences → API)"
        ],
        "usefulFor": "Teams that use Pipedrive and want crm platforms activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Prepare the required Pipedrive credentials and permissions before connecting.",
          "Use the HelloGrowthCRM Pipedrive integration path described in the report to connect relevant workflows.",
          "Surface Pipedrive from the integrations directory and open the dedicated setup flow from there."
        ],
        "status": "live"
      },
      {
        "slug": "freshsales",
        "name": "Freshsales",
        "whatItDoes": "Two-way lead sync with Freshworks CRM",
        "setupSteps": [
          "Paste Freshsales API key + domain"
        ],
        "usefulFor": "Teams that use Freshsales and want crm platforms activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Prepare the required Freshsales credentials and permissions before connecting.",
          "Use the HelloGrowthCRM Freshsales integration path described in the report to connect relevant workflows.",
          "Surface Freshsales from the integrations directory and open the dedicated setup flow from there."
        ],
        "status": "live"
      },
      {
        "slug": "copper",
        "name": "Copper",
        "whatItDoes": "Sync contacts and pipelines with Copper CRM",
        "setupSteps": [
          "API token + user email"
        ],
        "usefulFor": "Teams that use Copper and want crm platforms activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Prepare the required Copper credentials and permissions before connecting.",
          "Use the HelloGrowthCRM Copper integration path described in the report to connect relevant workflows.",
          "Surface Copper from the integrations directory and open the dedicated setup flow from there."
        ],
        "status": "live"
      },
      {
        "slug": "insightly",
        "name": "Insightly",
        "whatItDoes": "Lead/opportunity sync",
        "setupSteps": [
          "Insightly API key (Account Settings → API)"
        ],
        "usefulFor": "Teams that use Insightly and want crm platforms activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Prepare the required Insightly credentials and permissions before connecting.",
          "Use the HelloGrowthCRM Insightly integration path described in the report to connect relevant workflows.",
          "Surface Insightly from the integrations directory and open the dedicated setup flow from there."
        ],
        "status": "live"
      },
      {
        "slug": "snov-io",
        "name": "Snov.io",
        "whatItDoes": "Find prospect emails, enrich leads",
        "setupSteps": [
          "API Client ID + Secret from Snov.io account"
        ],
        "usefulFor": "Teams that use Snov.io and want crm platforms activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Prepare the required Snov.io credentials and permissions before connecting.",
          "Use the HelloGrowthCRM Snov.io integration path described in the report to connect relevant workflows.",
          "Surface Snov.io from the integrations directory and open the dedicated setup flow from there."
        ],
        "status": "live"
      }
    ]
  },
  {
    "slug": "email-system-transactional",
    "title": "Email — System / Transactional",
    "shortLabel": "Email — System / Transactional",
    "integrations": [
      {
        "slug": "gmail",
        "name": "Gmail",
        "whatItDoes": "Send emails from CRM via user's Gmail, receive replies into CRM inbox",
        "setupSteps": [
          "Settings → Integrations → Gmail → \"Connect\" → Google OAuth (account-scoped)"
        ],
        "usefulFor": "Teams that use Gmail and want email — system / transactional activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Prepare the required Gmail credentials and permissions before connecting.",
          "Use the HelloGrowthCRM Gmail integration path described in the report to connect relevant workflows.",
          "Surface Gmail from the integrations directory and open the dedicated setup flow from there."
        ],
        "status": "live"
      },
      {
        "slug": "outlook-microsoft-365",
        "name": "Outlook / Microsoft 365 Email",
        "whatItDoes": "Same as Gmail but for Outlook / M365",
        "setupSteps": [
          "Outlook OAuth via Azure AD app"
        ],
        "usefulFor": "Teams that use Outlook / Microsoft 365 Email and want email — system / transactional activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Prepare the required Outlook / Microsoft 365 Email credentials and permissions before connecting.",
          "Use the HelloGrowthCRM Outlook / Microsoft 365 Email integration path described in the report to connect relevant workflows.",
          "Surface Outlook / Microsoft 365 Email from the integrations directory and open the dedicated setup flow from there."
        ],
        "status": "live"
      },
      {
        "slug": "sendgrid",
        "name": "SendGrid",
        "whatItDoes": "Send bulk / system / drip emails via SendGrid",
        "setupSteps": [
          "Paste SendGrid API key (with `mail.send` permission)"
        ],
        "usefulFor": "Teams that use SendGrid and want email — system / transactional activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Prepare the required SendGrid credentials and permissions before connecting.",
          "Use the HelloGrowthCRM SendGrid integration path described in the report to connect relevant workflows.",
          "Surface SendGrid from the integrations directory and open the dedicated setup flow from there."
        ],
        "status": "live"
      },
      {
        "slug": "custom-smtp",
        "name": "Custom SMTP",
        "whatItDoes": "Send via any SMTP server (your own mail server, Postmark, Mailgun, etc.)",
        "setupSteps": [
          "SMTP host, port, username, password, encryption type"
        ],
        "usefulFor": "Teams that use Custom SMTP and want email — system / transactional activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Prepare the required Custom SMTP credentials and permissions before connecting.",
          "Use the HelloGrowthCRM Custom SMTP integration path described in the report to connect relevant workflows.",
          "Surface Custom SMTP from the integrations directory and open the dedicated setup flow from there."
        ],
        "status": "live"
      }
    ]
  },
  {
    "slug": "email-marketing-and-campaigns",
    "title": "Email Marketing & Campaigns",
    "shortLabel": "Email Marketing & Campaigns",
    "integrations": [
      {
        "slug": "mailchimp",
        "name": "Mailchimp",
        "whatItDoes": "Sync contacts to Mailchimp audiences, trigger campaigns",
        "setupSteps": [
          "Mailchimp API key (audience-level scope) + data center prefix (e.g.",
          "us10)"
        ],
        "usefulFor": "Teams that use Mailchimp and want email marketing & campaigns activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM Mailchimp integration path described in the report to connect relevant workflows.",
          "Surface Mailchimp from the integrations directory and open the dedicated setup flow from there."
        ],
        "status": "live"
      },
      {
        "slug": "brevo",
        "name": "Brevo (formerly Sendinblue)",
        "whatItDoes": "Contact sync + transactional / marketing email",
        "setupSteps": [
          "Brevo API v3 key"
        ],
        "usefulFor": "Teams that use Brevo (formerly Sendinblue) and want email marketing & campaigns activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM Brevo (formerly Sendinblue) integration path described in the report to connect relevant workflows.",
          "Surface Brevo (formerly Sendinblue) from the integrations directory and open the dedicated setup flow from there."
        ],
        "status": "live"
      },
      {
        "slug": "activecampaign",
        "name": "ActiveCampaign",
        "whatItDoes": "Bi-directional contact + automation sync",
        "setupSteps": [
          "ActiveCampaign API URL + key"
        ],
        "usefulFor": "Teams that use ActiveCampaign and want email marketing & campaigns activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM ActiveCampaign integration path described in the report to connect relevant workflows.",
          "Surface ActiveCampaign from the integrations directory and open the dedicated setup flow from there."
        ],
        "status": "live"
      },
      {
        "slug": "klaviyo",
        "name": "Klaviyo",
        "whatItDoes": "eCommerce-centric email marketing sync",
        "setupSteps": [
          "Klaviyo Private API key (with profile + list write scope)"
        ],
        "usefulFor": "Teams that use Klaviyo and want email marketing & campaigns activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM Klaviyo integration path described in the report to connect relevant workflows.",
          "Surface Klaviyo from the integrations directory and open the dedicated setup flow from there."
        ],
        "status": "live"
      },
      {
        "slug": "constant-contact",
        "name": "Constant Contact",
        "whatItDoes": "Email list sync",
        "setupSteps": [
          "OAuth"
        ],
        "usefulFor": "Teams that use Constant Contact and want email marketing & campaigns activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM Constant Contact integration path described in the report to connect relevant workflows.",
          "Surface Constant Contact from the integrations directory and open the dedicated setup flow from there."
        ],
        "status": "live"
      },
      {
        "slug": "intercom",
        "name": "Intercom",
        "whatItDoes": "Sync contacts + conversations",
        "setupSteps": [
          "Intercom access token"
        ],
        "usefulFor": "Teams that use Intercom and want email marketing & campaigns activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM Intercom integration path described in the report to connect relevant workflows.",
          "Surface Intercom from the integrations directory and open the dedicated setup flow from there."
        ],
        "status": "live"
      },
      {
        "slug": "tidio",
        "name": "Tidio",
        "whatItDoes": "Live chat integration",
        "setupSteps": [
          "Tidio API key"
        ],
        "usefulFor": "Teams that use Tidio and want email marketing & campaigns activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM Tidio integration path described in the report to connect relevant workflows.",
          "Surface Tidio from the integrations directory and open the dedicated setup flow from there."
        ],
        "status": "live"
      },
      {
        "slug": "crisp",
        "name": "Crisp",
        "whatItDoes": "Live chat support",
        "setupSteps": [
          "Crisp website ID + identifier/key"
        ],
        "usefulFor": "Teams that use Crisp and want email marketing & campaigns activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM Crisp integration path described in the report to connect relevant workflows.",
          "Surface Crisp from the integrations directory and open the dedicated setup flow from there."
        ],
        "status": "live"
      }
    ]
  },
  {
    "slug": "sms-voice-telephony",
    "title": "SMS / Voice / Telephony",
    "shortLabel": "SMS / Voice / Telephony",
    "integrations": [
      {
        "slug": "twilio",
        "name": "Twilio",
        "whatItDoes": "Send SMS, place calls, WhatsApp (sandbox + production)",
        "setupSteps": [
          "Automatic on tenant (system-managed) OR connect own Twilio"
        ],
        "usefulFor": "Teams that use Twilio and want sms / voice / telephony activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Prepare the required Twilio credentials and permissions before connecting.",
          "Use the HelloGrowthCRM Twilio integration path described in the report to connect relevant workflows."
        ],
        "status": "live"
      },
      {
        "slug": "exotel",
        "name": "Exotel",
        "whatItDoes": "Click-to-call dialer (Indian telephony provider)",
        "setupSteps": [
          "Exotel SID + API key + token, virtual number"
        ],
        "usefulFor": "Teams that use Exotel and want sms / voice / telephony activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM Exotel integration path described in the report to connect relevant workflows.",
          "Surface Exotel from the integrations directory and open the dedicated setup flow from there."
        ],
        "status": "live"
      },
      {
        "slug": "myoperator",
        "name": "MyOperator",
        "whatItDoes": "Cloud telephony / IVR (India)",
        "setupSteps": [
          "MyOperator company ID + secret token"
        ],
        "usefulFor": "Teams that use MyOperator and want sms / voice / telephony activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM MyOperator integration path described in the report to connect relevant workflows.",
          "Surface MyOperator from the integrations directory and open the dedicated setup flow from there."
        ],
        "status": "live"
      },
      {
        "slug": "airtel-iq",
        "name": "Airtel IQ",
        "whatItDoes": "Airtel business cloud telephony",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Airtel IQ.",
          "Add the required credentials, webhook details, or connection information for Airtel IQ.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Airtel IQ.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams that use Airtel IQ and want sms / voice / telephony activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM Airtel IQ integration path described in the report to connect relevant workflows.",
          "Surface Airtel IQ from the integrations directory and open the dedicated setup flow from there."
        ],
        "status": "live"
      },
      {
        "slug": "whatsapp-meta",
        "name": "WhatsApp Business (Meta Cloud API)",
        "whatItDoes": "Send/receive WhatsApp via official Meta Business API",
        "setupSteps": [
          "Meta Developer App → WhatsApp product → Phone Number ID + Permanent Token + verify webhook"
        ],
        "usefulFor": "Teams that use WhatsApp Business (Meta Cloud API) and want sms / voice / telephony activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Prepare the required WhatsApp Business (Meta Cloud API) credentials and permissions before connecting.",
          "Use the HelloGrowthCRM WhatsApp Business (Meta Cloud API) integration path described in the report to connect relevant workflows."
        ],
        "status": "live"
      }
    ]
  },
  {
    "slug": "calendar-and-meetings",
    "title": "Calendar & Meetings",
    "shortLabel": "Calendar & Meetings",
    "integrations": [
      {
        "slug": "google-calendar",
        "name": "Google Calendar",
        "whatItDoes": "Sync events, create meetings with auto-Google Meet, send invites",
        "setupSteps": [
          "Google OAuth (calendar.events scope)"
        ],
        "usefulFor": "Teams that use Google Calendar and want calendar & meetings activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM Google Calendar integration path described in the report to connect relevant workflows."
        ],
        "status": "live"
      },
      {
        "slug": "outlook-calendar",
        "name": "Outlook Calendar",
        "whatItDoes": "Connects HelloGrowthCRM with Outlook Calendar for calendar & meetings workflows.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Outlook Calendar.",
          "Add the required credentials, webhook details, or connection information for Outlook Calendar.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Outlook Calendar.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams that use Outlook Calendar and want calendar & meetings activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM Outlook Calendar integration path described in the report to connect relevant workflows."
        ],
        "status": "live"
      },
      {
        "slug": "zoom",
        "name": "Zoom",
        "whatItDoes": "Create Zoom meetings from CRM",
        "setupSteps": [
          "Zoom OAuth app (account scope)"
        ],
        "usefulFor": "Teams that use Zoom and want calendar & meetings activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM Zoom integration path described in the report to connect relevant workflows.",
          "Surface Zoom from the integrations directory and open the dedicated setup flow from there."
        ],
        "status": "live"
      },
      {
        "slug": "booking-page",
        "name": "Booking page",
        "whatItDoes": "Public booking page (Calendly-like) for prospects to schedule meetings",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Booking page.",
          "Add the required credentials, webhook details, or connection information for Booking page.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Booking page.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams that use Booking page and want calendar & meetings activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM Booking page (native) integration path described in the report to connect relevant workflows.",
          "Surface Booking page (native) from the integrations directory and open the dedicated setup flow from there."
        ],
        "status": "live"
      }
    ]
  },
  {
    "slug": "payments",
    "title": "Payments",
    "shortLabel": "Payments",
    "integrations": [
      {
        "slug": "razorpay",
        "name": "Razorpay",
        "whatItDoes": "Payment links, subscriptions, OAuth for partner app",
        "setupSteps": [
          "Settings → Integrations → Razorpay → Connect (Partner OAuth) OR paste own Key ID + Secret"
        ],
        "usefulFor": "Teams that use Razorpay and want payments activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Prepare the required Razorpay credentials and permissions before connecting.",
          "Use the HelloGrowthCRM Razorpay integration path described in the report to connect relevant workflows."
        ],
        "status": "live"
      },
      {
        "slug": "stripe",
        "name": "Stripe",
        "whatItDoes": "Payment links, subscriptions",
        "setupSteps": [
          "Stripe Connect OAuth OR own API keys"
        ],
        "usefulFor": "Teams that use Stripe and want payments activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM Stripe integration path described in the report to connect relevant workflows."
        ],
        "status": "live"
      },
      {
        "slug": "paypal",
        "name": "PayPal",
        "whatItDoes": "PayPal payment links",
        "setupSteps": [
          "PayPal REST API Client ID + Secret"
        ],
        "usefulFor": "Teams that use PayPal and want payments activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM PayPal integration path described in the report to connect relevant workflows."
        ],
        "status": "live"
      },
      {
        "slug": "cashfree",
        "name": "Cashfree",
        "whatItDoes": "Indian payment gateway (UPI, cards, netbanking)",
        "setupSteps": [
          "Cashfree App ID + Secret key"
        ],
        "usefulFor": "Teams that use Cashfree and want payments activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM Cashfree integration path described in the report to connect relevant workflows.",
          "Surface Cashfree from the integrations directory and open the dedicated setup flow from there."
        ],
        "status": "live"
      },
      {
        "slug": "phonepe",
        "name": "PhonePe",
        "whatItDoes": "PhonePe payment gateway (India)",
        "setupSteps": [
          "PhonePe Merchant ID + Salt key"
        ],
        "usefulFor": "Teams that use PhonePe and want payments activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM PhonePe integration path described in the report to connect relevant workflows.",
          "Surface PhonePe from the integrations directory and open the dedicated setup flow from there."
        ],
        "status": "live"
      },
      {
        "slug": "instamojo",
        "name": "Instamojo",
        "whatItDoes": "Indian SMB payment links",
        "setupSteps": [
          "Instamojo API key + Auth token"
        ],
        "usefulFor": "Teams that use Instamojo and want payments activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM Instamojo integration path described in the report to connect relevant workflows.",
          "Surface Instamojo from the integrations directory and open the dedicated setup flow from there."
        ],
        "status": "live"
      },
      {
        "slug": "quote-payment-portal",
        "name": "Quote payment portal",
        "whatItDoes": "Public quote with embedded pay-now button (routes to Razorpay/Stripe/PayPal/Cashfree)",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Quote payment portal.",
          "Add the required credentials, webhook details, or connection information for Quote payment portal.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Quote payment portal.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams that use Quote payment portal and want payments activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM Quote payment portal (native) integration path described in the report to connect relevant workflows."
        ],
        "status": "live"
      }
    ]
  },
  {
    "slug": "lead-gen-sources",
    "title": "Lead-gen Sources",
    "shortLabel": "Lead-gen Sources",
    "integrations": [
      {
        "slug": "indiamart",
        "name": "IndiaMART",
        "whatItDoes": "Auto-pull leads from IndiaMART CRM Lead Manager",
        "setupSteps": [
          "Settings → Integrations → IndiaMART → paste IndiaMART CRM key (token from IndiaMART account)"
        ],
        "usefulFor": "Teams that use IndiaMART and want lead-gen sources activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM IndiaMART integration path described in the report to connect relevant workflows."
        ],
        "status": "live"
      },
      {
        "slug": "justdial",
        "name": "JustDial",
        "whatItDoes": "Pull leads via JustDial premium API or email forwarding",
        "setupSteps": [
          "Email forwarding setup OR JustDial API premium subscription"
        ],
        "usefulFor": "Teams that use JustDial and want lead-gen sources activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM JustDial integration path described in the report to connect relevant workflows."
        ],
        "status": "live"
      },
      {
        "slug": "tradeindia",
        "name": "TradeIndia",
        "whatItDoes": "Connects HelloGrowthCRM with TradeIndia for lead-gen sources workflows.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → TradeIndia.",
          "Add the required credentials, webhook details, or connection information for TradeIndia.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with TradeIndia.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams that use TradeIndia and want lead-gen sources activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM TradeIndia integration path described in the report to connect relevant workflows."
        ],
        "status": "live"
      },
      {
        "slug": "meta-lead-ads",
        "name": "Meta Lead Ads (Facebook / Instagram lead forms)",
        "whatItDoes": "Auto-import lead form submissions from Facebook & Instagram ads",
        "setupSteps": [
          "Connect Meta business page, grant `leads_retrieval` permission"
        ],
        "usefulFor": "Teams that use Meta Lead Ads (Facebook / Instagram lead forms) and want lead-gen sources activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM Meta Lead Ads (Facebook / Instagram lead forms) integration path described in the report to connect relevant workflows.",
          "Surface Meta Lead Ads (Facebook / Instagram lead forms) from the integrations directory and open the dedicated setup flow from there."
        ],
        "status": "live"
      },
      {
        "slug": "meta-capi",
        "name": "Meta Conversion API (CAPI)",
        "whatItDoes": "Send conversion events back to Meta Ads for attribution",
        "setupSteps": [
          "Meta Pixel ID + CAPI access token"
        ],
        "usefulFor": "Teams that use Meta Conversion API (CAPI) and want lead-gen sources activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM Meta Conversion API (CAPI) integration path described in the report to connect relevant workflows.",
          "Surface Meta Conversion API (CAPI) from the integrations directory and open the dedicated setup flow from there."
        ],
        "status": "live"
      },
      {
        "slug": "google-ads-offline",
        "name": "Google Ads (offline conversions)",
        "whatItDoes": "Upload offline conversions back to Google Ads",
        "setupSteps": [
          "Google Ads OAuth + conversion action ID"
        ],
        "usefulFor": "Teams that use Google Ads (offline conversions) and want lead-gen sources activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM Google Ads (offline conversions) integration path described in the report to connect relevant workflows.",
          "Surface Google Ads (offline conversions) from the integrations directory and open the dedicated setup flow from there."
        ],
        "status": "live"
      },
      {
        "slug": "google-forms",
        "name": "Google Forms",
        "whatItDoes": "Receive Google Forms submissions as leads",
        "setupSteps": [
          "Apps Script setup that POSTs to a HelloCRM endpoint"
        ],
        "usefulFor": "Teams that use Google Forms and want lead-gen sources activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM Google Forms integration path described in the report to connect relevant workflows.",
          "Surface Google Forms from the integrations directory and open the dedicated setup flow from there."
        ],
        "status": "live"
      },
      {
        "slug": "typeform",
        "name": "Typeform",
        "whatItDoes": "Receive Typeform submissions as leads",
        "setupSteps": [
          "OAuth OR webhook secret"
        ],
        "usefulFor": "Teams that use Typeform and want lead-gen sources activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM Typeform integration path described in the report to connect relevant workflows.",
          "Surface Typeform from the integrations directory and open the dedicated setup flow from there."
        ],
        "status": "live"
      }
    ]
  },
  {
    "slug": "chat-help-desk",
    "title": "Chat / Help Desk",
    "shortLabel": "Chat / Help Desk",
    "integrations": [
      {
        "slug": "zendesk",
        "name": "Zendesk",
        "whatItDoes": "Two-way ticket sync + customer support context on lead profile",
        "setupSteps": [
          "Zendesk OAuth OR API token + subdomain"
        ],
        "usefulFor": "Teams that use Zendesk and want chat / help desk activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM Zendesk integration path described in the report to connect relevant workflows.",
          "Surface Zendesk from the integrations directory and open the dedicated setup flow from there."
        ],
        "status": "live"
      },
      {
        "slug": "freshdesk",
        "name": "Freshdesk",
        "whatItDoes": "Connects HelloGrowthCRM with Freshdesk for chat / help desk workflows.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Freshdesk.",
          "Add the required credentials, webhook details, or connection information for Freshdesk.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Freshdesk.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams that use Freshdesk and want chat / help desk activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM Freshdesk integration path described in the report to connect relevant workflows.",
          "Surface Freshdesk from the integrations directory and open the dedicated setup flow from there."
        ],
        "status": "live"
      },
      {
        "slug": "web-chat-assistant",
        "name": "Web Chat Assistant",
        "whatItDoes": "Embeddable AI-powered chat widget on customer sites",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Web Chat Assistant.",
          "Add the required credentials, webhook details, or connection information for Web Chat Assistant.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Web Chat Assistant.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams that use Web Chat Assistant and want chat / help desk activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM Web Chat Assistant (native) integration path described in the report to connect relevant workflows."
        ],
        "status": "live"
      },
      {
        "slug": "slack",
        "name": "Slack",
        "whatItDoes": "Lead/deal notifications to Slack channels, slash commands",
        "setupSteps": [
          "Slack OAuth app install"
        ],
        "usefulFor": "Teams that use Slack and want chat / help desk activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM Slack integration path described in the report to connect relevant workflows.",
          "Surface Slack from the integrations directory and open the dedicated setup flow from there."
        ],
        "status": "live"
      },
      {
        "slug": "microsoft-teams",
        "name": "Microsoft Teams",
        "whatItDoes": "Notifications to Teams channels",
        "setupSteps": [
          "Teams app installation + webhook URL OR M365 OAuth"
        ],
        "usefulFor": "Teams that use Microsoft Teams and want chat / help desk activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM Microsoft Teams integration path described in the report to connect relevant workflows.",
          "Surface Microsoft Teams from the integrations directory and open the dedicated setup flow from there."
        ],
        "status": "live"
      },
      {
        "slug": "discord",
        "name": "Discord",
        "whatItDoes": "Discord channel notifications",
        "setupSteps": [
          "Discord webhook URL OR bot token"
        ],
        "usefulFor": "Teams that use Discord and want chat / help desk activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM Discord integration path described in the report to connect relevant workflows.",
          "Surface Discord from the integrations directory and open the dedicated setup flow from there."
        ],
        "status": "live"
      },
      {
        "slug": "telegram",
        "name": "Telegram",
        "whatItDoes": "Notifications + bot replies",
        "setupSteps": [
          "Telegram bot token via BotFather"
        ],
        "usefulFor": "Teams that use Telegram and want chat / help desk activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM Telegram integration path described in the report to connect relevant workflows."
        ],
        "status": "live"
      }
    ]
  },
  {
    "slug": "ecommerce",
    "title": "eCommerce",
    "shortLabel": "eCommerce",
    "integrations": [
      {
        "slug": "shopify",
        "name": "Shopify",
        "whatItDoes": "Sync products, orders, customers; install as Shopify App",
        "setupSteps": [
          "Install HelloCRM from Shopify App Store, OAuth grants permissions"
        ],
        "usefulFor": "Teams that use Shopify and want ecommerce activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Prepare the required Shopify credentials and permissions before connecting.",
          "Use the HelloGrowthCRM Shopify integration path described in the report to connect relevant workflows.",
          "Surface Shopify from the integrations directory and open the dedicated setup flow from there."
        ],
        "status": "live"
      },
      {
        "slug": "woocommerce",
        "name": "WooCommerce",
        "whatItDoes": "Sync WooCommerce products/orders, receive new-order webhooks",
        "setupSteps": [
          "WooCommerce REST API consumer key + secret OR install our plugin"
        ],
        "usefulFor": "Teams that use WooCommerce and want ecommerce activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM WooCommerce integration path described in the report to connect relevant workflows.",
          "Surface WooCommerce from the integrations directory and open the dedicated setup flow from there."
        ],
        "status": "live"
      },
      {
        "slug": "unicommerce",
        "name": "Unicommerce",
        "whatItDoes": "Multi-channel inventory & order management",
        "setupSteps": [
          "Unicommerce credentials"
        ],
        "usefulFor": "Teams that use Unicommerce and want ecommerce activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM Unicommerce integration path described in the report to connect relevant workflows.",
          "Surface Unicommerce from the integrations directory and open the dedicated setup flow from there."
        ],
        "status": "live"
      },
      {
        "slug": "bigcommerce",
        "name": "BigCommerce",
        "whatItDoes": "Connects HelloGrowthCRM with BigCommerce for ecommerce workflows.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → BigCommerce.",
          "Add the required credentials, webhook details, or connection information for BigCommerce.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with BigCommerce.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams that use BigCommerce and want ecommerce activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM BigCommerce integration path described in the report to connect relevant workflows."
        ],
        "status": "live"
      },
      {
        "slug": "wix",
        "name": "Wix",
        "whatItDoes": "Connects HelloGrowthCRM with Wix for ecommerce workflows.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Wix.",
          "Add the required credentials, webhook details, or connection information for Wix.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Wix.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams that use Wix and want ecommerce activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM Wix integration path described in the report to connect relevant workflows."
        ],
        "status": "live"
      }
    ]
  },
  {
    "slug": "logistics-shipping",
    "title": "Logistics / Shipping",
    "shortLabel": "Logistics / Shipping",
    "integrations": [
      {
        "slug": "shiprocket",
        "name": "Shiprocket",
        "whatItDoes": "Sync orders, generate AWBs, track shipments",
        "setupSteps": [
          "Shiprocket email + password (API mode)"
        ],
        "usefulFor": "Teams that use Shiprocket and want logistics / shipping activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM Shiprocket integration path described in the report to connect relevant workflows.",
          "Surface Shiprocket from the integrations directory and open the dedicated setup flow from there."
        ],
        "status": "live"
      },
      {
        "slug": "delhivery",
        "name": "Delhivery",
        "whatItDoes": "Indian last-mile shipping",
        "setupSteps": [
          "Delhivery API token"
        ],
        "usefulFor": "Teams that use Delhivery and want logistics / shipping activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM Delhivery integration path described in the report to connect relevant workflows.",
          "Surface Delhivery from the integrations directory and open the dedicated setup flow from there."
        ],
        "status": "live"
      },
      {
        "slug": "bluedart",
        "name": "BlueDart",
        "whatItDoes": "Indian premium courier",
        "setupSteps": [
          "BlueDart API user + token"
        ],
        "usefulFor": "Teams that use BlueDart and want logistics / shipping activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM BlueDart integration path described in the report to connect relevant workflows.",
          "Surface BlueDart from the integrations directory and open the dedicated setup flow from there."
        ],
        "status": "live"
      },
      {
        "slug": "dtdc",
        "name": "DTDC",
        "whatItDoes": "Connects HelloGrowthCRM with DTDC for logistics / shipping workflows.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → DTDC.",
          "Add the required credentials, webhook details, or connection information for DTDC.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with DTDC.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams that use DTDC and want logistics / shipping activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM DTDC integration path described in the report to connect relevant workflows."
        ],
        "status": "live"
      }
    ]
  },
  {
    "slug": "document-signing-and-pdf",
    "title": "Document Signing & PDF",
    "shortLabel": "Document Signing & PDF",
    "integrations": [
      {
        "slug": "docusign",
        "name": "DocuSign",
        "whatItDoes": "Send contracts/quotes for e-signature",
        "setupSteps": [
          "DocuSign Integration Key (developer / production)"
        ],
        "usefulFor": "Teams that use DocuSign and want document signing & pdf activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM DocuSign integration path described in the report to connect relevant workflows.",
          "Surface DocuSign from the integrations directory and open the dedicated setup flow from there."
        ],
        "status": "live"
      },
      {
        "slug": "zoho-sign",
        "name": "Zoho Sign",
        "whatItDoes": "E-signature via Zoho Sign",
        "setupSteps": [
          "Zoho OAuth"
        ],
        "usefulFor": "Teams that use Zoho Sign and want document signing & pdf activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM Zoho Sign integration path described in the report to connect relevant workflows.",
          "Surface Zoho Sign from the integrations directory and open the dedicated setup flow from there."
        ],
        "status": "live"
      },
      {
        "slug": "signeasy",
        "name": "SignEasy",
        "whatItDoes": "Lightweight e-signature",
        "setupSteps": [
          "SignEasy API token"
        ],
        "usefulFor": "Teams that use SignEasy and want document signing & pdf activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM SignEasy integration path described in the report to connect relevant workflows.",
          "Surface SignEasy from the integrations directory and open the dedicated setup flow from there."
        ],
        "status": "live"
      }
    ]
  },
  {
    "slug": "workflow-automation-platforms",
    "title": "Workflow / Automation Platforms",
    "shortLabel": "Workflow / Automation Platforms",
    "integrations": [
      {
        "slug": "zapier",
        "name": "Zapier",
        "whatItDoes": "Trigger Zaps from CRM events, receive from Zapier inbound webhooks",
        "setupSteps": [
          "Generate API key in HelloCRM → use in Zapier \"Webhooks by Zapier\" or custom Zap"
        ],
        "usefulFor": "Teams that use Zapier and want workflow / automation platforms activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM Zapier integration path described in the report to connect relevant workflows.",
          "Surface Zapier from the integrations directory and open the dedicated setup flow from there."
        ],
        "status": "live"
      },
      {
        "slug": "make-com",
        "name": "Make (formerly Integromat)",
        "whatItDoes": "Connects HelloGrowthCRM with Make (formerly Integromat) for workflow / automation platforms workflows.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Make (formerly Integromat).",
          "Add the required credentials, webhook details, or connection information for Make (formerly Integromat).",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Make (formerly Integromat).",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams that use Make (formerly Integromat) and want workflow / automation platforms activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Surface Make (formerly Integromat) from the integrations directory and open the dedicated setup flow from there."
        ],
        "status": "live"
      },
      {
        "slug": "n8n",
        "name": "n8n",
        "whatItDoes": "Connects HelloGrowthCRM with n8n for workflow / automation platforms workflows.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → n8n.",
          "Add the required credentials, webhook details, or connection information for n8n.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with n8n.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams that use n8n and want workflow / automation platforms activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Connect n8n workflows to HelloGrowthCRM without manual copy-paste.",
          "Keep workflow / automation platforms activity easier to discover for sales, RevOps, and implementation teams."
        ],
        "status": "live"
      },
      {
        "slug": "notion",
        "name": "Notion",
        "whatItDoes": "Push records to Notion databases (e.g. deal closes → log to Notion)",
        "setupSteps": [
          "Notion OAuth (workspace install)"
        ],
        "usefulFor": "Teams that use Notion and want workflow / automation platforms activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM Notion integration path described in the report to connect relevant workflows.",
          "Surface Notion from the integrations directory and open the dedicated setup flow from there."
        ],
        "status": "live"
      }
    ]
  },
  {
    "slug": "analytics-and-observability",
    "title": "Analytics & Observability",
    "shortLabel": "Analytics & Observability",
    "integrations": [
      {
        "slug": "ga4-measurement",
        "name": "Google Analytics 4 (GA4)",
        "whatItDoes": "Send custom events from CRM (lead created, deal won) to GA4",
        "setupSteps": [
          "GA4 Measurement ID + API secret"
        ],
        "usefulFor": "Teams that use Google Analytics 4 (GA4) and want analytics & observability activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM Google Analytics 4 (GA4) integration path described in the report to connect relevant workflows.",
          "Surface Google Analytics 4 (GA4) from the integrations directory and open the dedicated setup flow from there."
        ],
        "status": "live"
      },
      {
        "slug": "microsoft-clarity",
        "name": "Microsoft Clarity",
        "whatItDoes": "Session recording & heatmaps",
        "setupSteps": [
          "Auto-configured via env vars"
        ],
        "usefulFor": "Teams that use Microsoft Clarity and want analytics & observability activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM Microsoft Clarity integration path described in the report to connect relevant workflows."
        ],
        "status": "live"
      },
      {
        "slug": "datadog",
        "name": "Datadog",
        "whatItDoes": "Application performance monitoring (server-side errors)",
        "setupSteps": [
          "Datadog API key + App key + site"
        ],
        "usefulFor": "Teams that use Datadog and want analytics & observability activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM Datadog integration path described in the report to connect relevant workflows."
        ],
        "status": "live"
      },
      {
        "slug": "sentry",
        "name": "Sentry",
        "whatItDoes": "Frontend error tracking",
        "setupSteps": [
          "Auto-configured (DSN via env)"
        ],
        "usefulFor": "Teams that use Sentry and want analytics & observability activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM Sentry integration path described in the report to connect relevant workflows."
        ],
        "status": "live"
      },
      {
        "slug": "bug-reporting",
        "name": "Bug reporting",
        "whatItDoes": "Built-in bug reporting flow with screenshots",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Bug reporting.",
          "Add the required credentials, webhook details, or connection information for Bug reporting.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Bug reporting.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams that use Bug reporting and want analytics & observability activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM Bug reporting (native) integration path described in the report to connect relevant workflows."
        ],
        "status": "live"
      }
    ]
  },
  {
    "slug": "accounting-erp",
    "title": "Accounting / ERP",
    "shortLabel": "Accounting / ERP",
    "integrations": [
      {
        "slug": "quickbooks",
        "name": "QuickBooks",
        "whatItDoes": "Two-way invoice + customer sync",
        "setupSteps": [
          "QuickBooks OAuth (Intuit developer app)"
        ],
        "usefulFor": "Teams that use QuickBooks and want accounting / erp activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM QuickBooks integration path described in the report to connect relevant workflows.",
          "Surface QuickBooks from the integrations directory and open the dedicated setup flow from there."
        ],
        "status": "live"
      },
      {
        "slug": "zoho-books",
        "name": "Zoho Books",
        "whatItDoes": "Connects HelloGrowthCRM with Zoho Books for accounting / erp workflows.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Zoho Books.",
          "Add the required credentials, webhook details, or connection information for Zoho Books.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Zoho Books.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams that use Zoho Books and want accounting / erp activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM Zoho Books integration path described in the report to connect relevant workflows.",
          "Surface Zoho Books from the integrations directory and open the dedicated setup flow from there."
        ],
        "status": "live"
      },
      {
        "slug": "zoho-inventory",
        "name": "Zoho Inventory",
        "whatItDoes": "Sync products + stock with Zoho Inventory",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Zoho Inventory.",
          "Add the required credentials, webhook details, or connection information for Zoho Inventory.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Zoho Inventory.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams that use Zoho Inventory and want accounting / erp activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM Zoho Inventory integration path described in the report to connect relevant workflows.",
          "Surface Zoho Inventory from the integrations directory and open the dedicated setup flow from there."
        ],
        "status": "live"
      },
      {
        "slug": "tally",
        "name": "Tally (ERP)",
        "whatItDoes": "Sync vouchers / ledgers with Tally Prime",
        "setupSteps": [
          "Tally Prime running locally with ODBC/XML API enabled OR connector script"
        ],
        "usefulFor": "Teams that use Tally (ERP) and want accounting / erp activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM Tally (ERP) integration path described in the report to connect relevant workflows.",
          "Surface Tally (ERP) from the integrations directory and open the dedicated setup flow from there."
        ],
        "status": "live"
      },
      {
        "slug": "erpnext",
        "name": "ERPNext",
        "whatItDoes": "Sync with ERPNext (open-source ERP)",
        "setupSteps": [
          "ERPNext URL + API key + secret"
        ],
        "usefulFor": "Teams that use ERPNext and want accounting / erp activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM ERPNext integration path described in the report to connect relevant workflows.",
          "Surface ERPNext from the integrations directory and open the dedicated setup flow from there."
        ],
        "status": "live"
      },
      {
        "slug": "xero",
        "name": "Xero",
        "whatItDoes": "Connects HelloGrowthCRM with Xero for accounting / erp workflows.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Xero.",
          "Add the required credentials, webhook details, or connection information for Xero.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Xero.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams that use Xero and want accounting / erp activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM Xero integration path described in the report to connect relevant workflows."
        ],
        "status": "live"
      },
      {
        "slug": "netsuite",
        "name": "NetSuite",
        "whatItDoes": "Connects HelloGrowthCRM with NetSuite for accounting / erp workflows.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → NetSuite.",
          "Add the required credentials, webhook details, or connection information for NetSuite.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with NetSuite.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams that use NetSuite and want accounting / erp activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM NetSuite integration path described in the report to connect relevant workflows."
        ],
        "status": "live"
      }
    ]
  },
  {
    "slug": "lead-enrichment",
    "title": "Lead Enrichment",
    "shortLabel": "Lead Enrichment",
    "integrations": [
      {
        "slug": "apollo",
        "name": "Apollo.io",
        "whatItDoes": "B2B contact enrichment (job title, company, email, LinkedIn)",
        "setupSteps": [
          "Apollo API key"
        ],
        "usefulFor": "Teams that use Apollo.io and want lead enrichment activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM Apollo.io integration path described in the report to connect relevant workflows.",
          "Surface Apollo.io from the integrations directory and open the dedicated setup flow from there."
        ],
        "status": "live"
      },
      {
        "slug": "clearbit",
        "name": "Clearbit",
        "whatItDoes": "Connects HelloGrowthCRM with Clearbit for lead enrichment workflows.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Clearbit.",
          "Add the required credentials, webhook details, or connection information for Clearbit.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Clearbit.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams that use Clearbit and want lead enrichment activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM Clearbit integration path described in the report to connect relevant workflows.",
          "Surface Clearbit from the integrations directory and open the dedicated setup flow from there."
        ],
        "status": "live"
      },
      {
        "slug": "hunter",
        "name": "Hunter.io",
        "whatItDoes": "Email finder by domain + verification",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Hunter.io.",
          "Add the required credentials, webhook details, or connection information for Hunter.io.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Hunter.io.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams that use Hunter.io and want lead enrichment activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM Hunter.io integration path described in the report to connect relevant workflows.",
          "Surface Hunter.io from the integrations directory and open the dedicated setup flow from there."
        ],
        "status": "live"
      },
      {
        "slug": "lusha",
        "name": "Lusha",
        "whatItDoes": "Direct dial + contact enrichment",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Lusha.",
          "Add the required credentials, webhook details, or connection information for Lusha.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Lusha.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams that use Lusha and want lead enrichment activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM Lusha integration path described in the report to connect relevant workflows.",
          "Surface Lusha from the integrations directory and open the dedicated setup flow from there."
        ],
        "status": "live"
      },
      {
        "slug": "zoominfo",
        "name": "ZoomInfo",
        "whatItDoes": "Enterprise B2B intelligence",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → ZoomInfo.",
          "Add the required credentials, webhook details, or connection information for ZoomInfo.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with ZoomInfo.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams that use ZoomInfo and want lead enrichment activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM ZoomInfo integration path described in the report to connect relevant workflows.",
          "Surface ZoomInfo from the integrations directory and open the dedicated setup flow from there."
        ],
        "status": "live"
      }
    ]
  },
  {
    "slug": "ai-speech",
    "title": "AI / Speech",
    "shortLabel": "AI / Speech",
    "integrations": [
      {
        "slug": "openai",
        "name": "OpenAI",
        "whatItDoes": "Custom OpenAI key for tenant's AI features",
        "setupSteps": [
          "OpenAI API key"
        ],
        "usefulFor": "Teams that use OpenAI and want ai / speech activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM OpenAI integration path described in the report to connect relevant workflows.",
          "Surface OpenAI from the integrations directory and open the dedicated setup flow from there."
        ],
        "status": "live"
      },
      {
        "slug": "assemblyai",
        "name": "AssemblyAI",
        "whatItDoes": "Call transcription",
        "setupSteps": [
          "AssemblyAI API key"
        ],
        "usefulFor": "Teams that use AssemblyAI and want ai / speech activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM AssemblyAI integration path described in the report to connect relevant workflows.",
          "Surface AssemblyAI from the integrations directory and open the dedicated setup flow from there."
        ],
        "status": "live"
      },
      {
        "slug": "deepgram",
        "name": "Deepgram",
        "whatItDoes": "Real-time speech-to-text (used for live call coaching)",
        "setupSteps": [
          "Deepgram API key"
        ],
        "usefulFor": "Teams that use Deepgram and want ai / speech activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM Deepgram integration path described in the report to connect relevant workflows.",
          "Surface Deepgram from the integrations directory and open the dedicated setup flow from there."
        ],
        "status": "live"
      }
    ]
  },
  {
    "slug": "utility",
    "title": "Utility",
    "shortLabel": "Utility",
    "integrations": [
      {
        "slug": "google-sheets-sync",
        "name": "Google Sheets",
        "whatItDoes": "Read/write to Google Sheets (lead export, custom dashboards)",
        "setupSteps": [
          "Google OAuth (sheets.readwrite scope)"
        ],
        "usefulFor": "Teams that use Google Sheets and want utility activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM Google Sheets integration path described in the report to connect relevant workflows.",
          "Surface Google Sheets from the integrations directory and open the dedicated setup flow from there."
        ],
        "status": "live"
      },
      {
        "slug": "airtable",
        "name": "Airtable",
        "whatItDoes": "Sync with Airtable bases",
        "setupSteps": [
          "Airtable Personal Access Token (or OAuth)"
        ],
        "usefulFor": "Teams that use Airtable and want utility activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM Airtable integration path described in the report to connect relevant workflows.",
          "Surface Airtable from the integrations directory and open the dedicated setup flow from there."
        ],
        "status": "live"
      },
      {
        "slug": "jira",
        "name": "Jira",
        "whatItDoes": "Create Jira issues from CRM (e.g., deal blocker → engineering ticket)",
        "setupSteps": [
          "Atlassian OAuth + project ID"
        ],
        "usefulFor": "Teams that use Jira and want utility activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM Jira integration path described in the report to connect relevant workflows.",
          "Surface Jira from the integrations directory and open the dedicated setup flow from there."
        ],
        "status": "live"
      },
      {
        "slug": "linear",
        "name": "Linear",
        "whatItDoes": "Create Linear issues from CRM",
        "setupSteps": [
          "Linear OAuth"
        ],
        "usefulFor": "Teams that use Linear and want utility activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM Linear integration path described in the report to connect relevant workflows.",
          "Surface Linear from the integrations directory and open the dedicated setup flow from there."
        ],
        "status": "live"
      },
      {
        "slug": "captcha",
        "name": "reCAPTCHA / hCaptcha",
        "whatItDoes": "Bot protection on public booking / form pages",
        "setupSteps": [
          "reCAPTCHA site key + secret OR hCaptcha key"
        ],
        "usefulFor": "Teams that use reCAPTCHA / hCaptcha and want utility activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM reCAPTCHA / hCaptcha integration path described in the report to connect relevant workflows.",
          "Surface reCAPTCHA / hCaptcha from the integrations directory and open the dedicated setup flow from there."
        ],
        "status": "live"
      },
      {
        "slug": "ip-geolocation",
        "name": "IP Geolocation",
        "whatItDoes": "Enrich visitor IPs with country/city for visitor tracking",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → IP Geolocation.",
          "Add the required credentials, webhook details, or connection information for IP Geolocation.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with IP Geolocation.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams that use IP Geolocation and want utility activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Use the HelloGrowthCRM IP Geolocation integration path described in the report to connect relevant workflows.",
          "Surface IP Geolocation from the integrations directory and open the dedicated setup flow from there."
        ],
        "status": "live"
      },
      {
        "slug": "portal-integration",
        "name": "Portal Integration",
        "whatItDoes": "Generic portal integration framework (configurable)",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Portal Integration.",
          "Add the required credentials, webhook details, or connection information for Portal Integration.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Portal Integration.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams that use Portal Integration and want utility activity visible inside HelloGrowthCRM.",
        "useCases": [
          "Surface Portal Integration from the integrations directory and open the dedicated setup flow from there."
        ],
        "status": "live"
      }
    ]
  },
  {
    "slug": "backend-ready-integrations",
    "title": "Backend-ready integrations",
    "shortLabel": "Backend-ready integrations",
    "integrations": [
      {
        "slug": "squarespace",
        "name": "Squarespace",
        "whatItDoes": "Provides a backend-ready Squarespace integration path for HelloGrowthCRM, with setup intended around Website builder workflows.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Squarespace.",
          "Review your implementation scope first, because this integration is currently marked as backend ready for Website builder.",
          "Add the required credentials, webhook details, or connection information for Squarespace.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Squarespace.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams evaluating Squarespace with HelloGrowthCRM and preparing activation of Website builder flows.",
        "useCases": [
          "Evaluate Squarespace inside HelloGrowthCRM before enabling the production connector.",
          "Document backend-ready Squarespace workflows in the public integrations library."
        ],
        "status": "backend-ready"
      },
      {
        "slug": "webflow",
        "name": "Webflow",
        "whatItDoes": "Provides a backend-ready Webflow integration path for HelloGrowthCRM, with setup intended around Website builder workflows.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Webflow.",
          "Review your implementation scope first, because this integration is currently marked as backend ready for Website builder.",
          "Add the required credentials, webhook details, or connection information for Webflow.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Webflow.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams evaluating Webflow with HelloGrowthCRM and preparing activation of Website builder flows.",
        "useCases": [
          "Evaluate Webflow inside HelloGrowthCRM before enabling the production connector.",
          "Document backend-ready Webflow workflows in the public integrations library."
        ],
        "status": "backend-ready"
      },
      {
        "slug": "pardot",
        "name": "Pardot",
        "whatItDoes": "Provides a backend-ready Pardot integration path for HelloGrowthCRM, with setup intended around Marketing automation workflows.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Pardot.",
          "Review your implementation scope first, because this integration is currently marked as backend ready for Marketing automation.",
          "Add the required credentials, webhook details, or connection information for Pardot.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Pardot.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams evaluating Pardot with HelloGrowthCRM and preparing activation of Marketing automation flows.",
        "useCases": [
          "Evaluate Pardot inside HelloGrowthCRM before enabling the production connector.",
          "Document backend-ready Pardot workflows in the public integrations library."
        ],
        "status": "backend-ready"
      },
      {
        "slug": "marketo",
        "name": "Marketo",
        "whatItDoes": "Provides a backend-ready Marketo integration path for HelloGrowthCRM, with setup intended around Marketing automation workflows.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Marketo.",
          "Review your implementation scope first, because this integration is currently marked as backend ready for Marketing automation.",
          "Add the required credentials, webhook details, or connection information for Marketo.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Marketo.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams evaluating Marketo with HelloGrowthCRM and preparing activation of Marketing automation flows.",
        "useCases": [
          "Evaluate Marketo inside HelloGrowthCRM before enabling the production connector.",
          "Document backend-ready Marketo workflows in the public integrations library."
        ],
        "status": "backend-ready"
      },
      {
        "slug": "eloqua",
        "name": "Eloqua",
        "whatItDoes": "Provides a backend-ready Eloqua integration path for HelloGrowthCRM, with setup intended around Marketing automation workflows.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Eloqua.",
          "Review your implementation scope first, because this integration is currently marked as backend ready for Marketing automation.",
          "Add the required credentials, webhook details, or connection information for Eloqua.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Eloqua.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams evaluating Eloqua with HelloGrowthCRM and preparing activation of Marketing automation flows.",
        "useCases": [
          "Evaluate Eloqua inside HelloGrowthCRM before enabling the production connector.",
          "Document backend-ready Eloqua workflows in the public integrations library."
        ],
        "status": "backend-ready"
      }
    ]
  },
  {
    "slug": "real-estate",
    "title": "Real Estate",
    "shortLabel": "Real Estate",
    "integrations": [
      {
        "slug": "99acres",
        "name": "99acres",
        "whatItDoes": "Creates a planned 99acres integration page for HelloGrowthCRM so teams can discover Indian real-estate portal workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → 99acres.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for Indian real-estate portal.",
          "Add the required credentials, webhook details, or connection information for 99acres.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with 99acres.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching 99acres in the context of Indian real-estate portal use cases before implementation.",
        "useCases": [
          "Document 99acres as part of your Indian real-estate portal stack evaluation.",
          "Create a discoverable SEO landing page for 99acres while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "magicbricks",
        "name": "MagicBricks",
        "whatItDoes": "Creates a planned MagicBricks integration page for HelloGrowthCRM so teams can discover Indian real-estate portal workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → MagicBricks.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for Indian real-estate portal.",
          "Add the required credentials, webhook details, or connection information for MagicBricks.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with MagicBricks.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching MagicBricks in the context of Indian real-estate portal use cases before implementation.",
        "useCases": [
          "Document MagicBricks as part of your Indian real-estate portal stack evaluation.",
          "Create a discoverable SEO landing page for MagicBricks while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "housing-com",
        "name": "Housing.com",
        "whatItDoes": "Creates a planned Housing.com integration page for HelloGrowthCRM so teams can discover Indian real-estate portal workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Housing.com.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for Indian real-estate portal.",
          "Add the required credentials, webhook details, or connection information for Housing.com.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Housing.com.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Housing.com in the context of Indian real-estate portal use cases before implementation.",
        "useCases": [
          "Document Housing.com as part of your Indian real-estate portal stack evaluation.",
          "Create a discoverable SEO landing page for Housing.com while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "nobroker",
        "name": "NoBroker",
        "whatItDoes": "Creates a planned NoBroker integration page for HelloGrowthCRM so teams can discover Indian rental marketplace workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → NoBroker.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for Indian rental marketplace.",
          "Add the required credentials, webhook details, or connection information for NoBroker.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with NoBroker.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching NoBroker in the context of Indian rental marketplace use cases before implementation.",
        "useCases": [
          "Document NoBroker as part of your Indian rental marketplace stack evaluation.",
          "Create a discoverable SEO landing page for NoBroker while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "commonfloor",
        "name": "CommonFloor",
        "whatItDoes": "Creates a planned CommonFloor integration page for HelloGrowthCRM so teams can discover Indian real-estate portal workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → CommonFloor.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for Indian real-estate portal.",
          "Add the required credentials, webhook details, or connection information for CommonFloor.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with CommonFloor.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching CommonFloor in the context of Indian real-estate portal use cases before implementation.",
        "useCases": [
          "Document CommonFloor as part of your Indian real-estate portal stack evaluation.",
          "Create a discoverable SEO landing page for CommonFloor while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "mmt-b2b",
        "name": "MMT B2B",
        "whatItDoes": "Creates a planned MMT B2B integration page for HelloGrowthCRM so teams can discover India travel/property B2B workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → MMT B2B.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for India travel/property B2B.",
          "Add the required credentials, webhook details, or connection information for MMT B2B.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with MMT B2B.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching MMT B2B in the context of India travel/property B2B use cases before implementation.",
        "useCases": [
          "Document MMT B2B as part of your India travel/property B2B stack evaluation.",
          "Create a discoverable SEO landing page for MMT B2B while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "quikr-homes",
        "name": "Quikr Homes",
        "whatItDoes": "Creates a planned Quikr Homes integration page for HelloGrowthCRM so teams can discover Indian classifieds (real estate) workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Quikr Homes.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for Indian classifieds (real estate).",
          "Add the required credentials, webhook details, or connection information for Quikr Homes.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Quikr Homes.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Quikr Homes in the context of Indian classifieds (real estate) use cases before implementation.",
        "useCases": [
          "Document Quikr Homes as part of your Indian classifieds (real estate) stack evaluation.",
          "Create a discoverable SEO landing page for Quikr Homes while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "olx-real-estate",
        "name": "OLX Real Estate",
        "whatItDoes": "Creates a planned OLX Real Estate integration page for HelloGrowthCRM so teams can discover India classifieds (real estate) workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → OLX Real Estate.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for India classifieds (real estate).",
          "Add the required credentials, webhook details, or connection information for OLX Real Estate.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with OLX Real Estate.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching OLX Real Estate in the context of India classifieds (real estate) use cases before implementation.",
        "useCases": [
          "Document OLX Real Estate as part of your India classifieds (real estate) stack evaluation.",
          "Create a discoverable SEO landing page for OLX Real Estate while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "sulekha-real-estate",
        "name": "Sulekha Real Estate",
        "whatItDoes": "Creates a planned Sulekha Real Estate integration page for HelloGrowthCRM so teams can discover Indian local services workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Sulekha Real Estate.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for Indian local services.",
          "Add the required credentials, webhook details, or connection information for Sulekha Real Estate.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Sulekha Real Estate.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Sulekha Real Estate in the context of Indian local services use cases before implementation.",
        "useCases": [
          "Document Sulekha Real Estate as part of your Indian local services stack evaluation.",
          "Create a discoverable SEO landing page for Sulekha Real Estate while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "proptiger",
        "name": "PropTiger",
        "whatItDoes": "Creates a planned PropTiger integration page for HelloGrowthCRM so teams can discover Indian real-estate portal workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → PropTiger.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for Indian real-estate portal.",
          "Add the required credentials, webhook details, or connection information for PropTiger.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with PropTiger.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching PropTiger in the context of Indian real-estate portal use cases before implementation.",
        "useCases": [
          "Document PropTiger as part of your Indian real-estate portal stack evaluation.",
          "Create a discoverable SEO landing page for PropTiger while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "proptiger-builder",
        "name": "PropTiger Builder",
        "whatItDoes": "Creates a planned PropTiger Builder integration page for HelloGrowthCRM so teams can discover Builder-specific portal workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → PropTiger Builder.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for Builder-specific portal.",
          "Add the required credentials, webhook details, or connection information for PropTiger Builder.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with PropTiger Builder.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching PropTiger Builder in the context of Builder-specific portal use cases before implementation.",
        "useCases": [
          "Document PropTiger Builder as part of your Builder-specific portal stack evaluation.",
          "Create a discoverable SEO landing page for PropTiger Builder while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "squareyards",
        "name": "SquareYards",
        "whatItDoes": "Creates a planned SquareYards integration page for HelloGrowthCRM so teams can discover Indian real-estate portal workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → SquareYards.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for Indian real-estate portal.",
          "Add the required credentials, webhook details, or connection information for SquareYards.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with SquareYards.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching SquareYards in the context of Indian real-estate portal use cases before implementation.",
        "useCases": [
          "Document SquareYards as part of your Indian real-estate portal stack evaluation.",
          "Create a discoverable SEO landing page for SquareYards while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "makaan",
        "name": "Makaan",
        "whatItDoes": "Creates a planned Makaan integration page for HelloGrowthCRM so teams can discover Indian real-estate portal workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Makaan.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for Indian real-estate portal.",
          "Add the required credentials, webhook details, or connection information for Makaan.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Makaan.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Makaan in the context of Indian real-estate portal use cases before implementation.",
        "useCases": [
          "Document Makaan as part of your Indian real-estate portal stack evaluation.",
          "Create a discoverable SEO landing page for Makaan while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "re-locality",
        "name": "RE Locality",
        "whatItDoes": "Creates a planned RE Locality integration page for HelloGrowthCRM so teams can discover Generic locality data sync workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → RE Locality.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for Generic locality data sync.",
          "Add the required credentials, webhook details, or connection information for RE Locality.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with RE Locality.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching RE Locality in the context of Generic locality data sync use cases before implementation.",
        "useCases": [
          "Document RE Locality as part of your Generic locality data sync stack evaluation.",
          "Create a discoverable SEO landing page for RE Locality while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "realtor-com",
        "name": "Realtor.com",
        "whatItDoes": "Creates a planned Realtor.com integration page for HelloGrowthCRM so teams can discover US real-estate portal workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Realtor.com.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for US real-estate portal.",
          "Add the required credentials, webhook details, or connection information for Realtor.com.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Realtor.com.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Realtor.com in the context of US real-estate portal use cases before implementation.",
        "useCases": [
          "Document Realtor.com as part of your US real-estate portal stack evaluation.",
          "Create a discoverable SEO landing page for Realtor.com while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "zillow",
        "name": "Zillow",
        "whatItDoes": "Creates a planned Zillow integration page for HelloGrowthCRM so teams can discover US real-estate portal workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Zillow.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for US real-estate portal.",
          "Add the required credentials, webhook details, or connection information for Zillow.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Zillow.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Zillow in the context of US real-estate portal use cases before implementation.",
        "useCases": [
          "Document Zillow as part of your US real-estate portal stack evaluation.",
          "Create a discoverable SEO landing page for Zillow while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "realscout",
        "name": "Realscout",
        "whatItDoes": "Creates a planned Realscout integration page for HelloGrowthCRM so teams can discover US real-estate buyer platform workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Realscout.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for US real-estate buyer platform.",
          "Add the required credentials, webhook details, or connection information for Realscout.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Realscout.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Realscout in the context of US real-estate buyer platform use cases before implementation.",
        "useCases": [
          "Document Realscout as part of your US real-estate buyer platform stack evaluation.",
          "Create a discoverable SEO landing page for Realscout while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "real-geeks",
        "name": "Real Geeks",
        "whatItDoes": "Creates a planned Real Geeks integration page for HelloGrowthCRM so teams can discover US real-estate CRM (sync + webhook) workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Real Geeks.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for US real-estate CRM (sync + webhook).",
          "Add the required credentials, webhook details, or connection information for Real Geeks.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Real Geeks.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Real Geeks in the context of US real-estate CRM (sync + webhook) use cases before implementation.",
        "useCases": [
          "Document Real Geeks as part of your US real-estate CRM (sync + webhook) stack evaluation.",
          "Create a discoverable SEO landing page for Real Geeks while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "realpage",
        "name": "RealPage",
        "whatItDoes": "Creates a planned RealPage integration page for HelloGrowthCRM so teams can discover US property management workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → RealPage.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for US property management.",
          "Add the required credentials, webhook details, or connection information for RealPage.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with RealPage.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching RealPage in the context of US property management use cases before implementation.",
        "useCases": [
          "Document RealPage as part of your US property management stack evaluation.",
          "Create a discoverable SEO landing page for RealPage while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "rentspree",
        "name": "Rentspree",
        "whatItDoes": "Creates a planned Rentspree integration page for HelloGrowthCRM so teams can discover US rental marketplace workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Rentspree.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for US rental marketplace.",
          "Add the required credentials, webhook details, or connection information for Rentspree.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Rentspree.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Rentspree in the context of US rental marketplace use cases before implementation.",
        "useCases": [
          "Document Rentspree as part of your US rental marketplace stack evaluation.",
          "Create a discoverable SEO landing page for Rentspree while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "roomkey",
        "name": "Roomkey",
        "whatItDoes": "Creates a planned Roomkey integration page for HelloGrowthCRM so teams can discover Hospitality / rental workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Roomkey.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for Hospitality / rental.",
          "Add the required credentials, webhook details, or connection information for Roomkey.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Roomkey.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Roomkey in the context of Hospitality / rental use cases before implementation.",
        "useCases": [
          "Document Roomkey as part of your Hospitality / rental stack evaluation.",
          "Create a discoverable SEO landing page for Roomkey while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "sierra-interactive",
        "name": "Sierra Interactive",
        "whatItDoes": "Creates a planned Sierra Interactive integration page for HelloGrowthCRM so teams can discover US real-estate CRM workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Sierra Interactive.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for US real-estate CRM.",
          "Add the required credentials, webhook details, or connection information for Sierra Interactive.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Sierra Interactive.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Sierra Interactive in the context of US real-estate CRM use cases before implementation.",
        "useCases": [
          "Document Sierra Interactive as part of your US real-estate CRM stack evaluation.",
          "Create a discoverable SEO landing page for Sierra Interactive while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "skyslope",
        "name": "Skyslope",
        "whatItDoes": "Creates a planned Skyslope integration page for HelloGrowthCRM so teams can discover US real-estate transaction workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Skyslope.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for US real-estate transaction.",
          "Add the required credentials, webhook details, or connection information for Skyslope.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Skyslope.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Skyslope in the context of US real-estate transaction use cases before implementation.",
        "useCases": [
          "Document Skyslope as part of your US real-estate transaction stack evaluation.",
          "Create a discoverable SEO landing page for Skyslope while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "spark",
        "name": "Spark",
        "whatItDoes": "Creates a planned Spark integration page for HelloGrowthCRM so teams can discover US real-estate platform workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Spark.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for US real-estate platform.",
          "Add the required credentials, webhook details, or connection information for Spark.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Spark.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Spark in the context of US real-estate platform use cases before implementation.",
        "useCases": [
          "Document Spark as part of your US real-estate platform stack evaluation.",
          "Create a discoverable SEO landing page for Spark while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "trestle",
        "name": "Trestle",
        "whatItDoes": "Creates a planned Trestle integration page for HelloGrowthCRM so teams can discover Real-estate listing API workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Trestle.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for Real-estate listing API.",
          "Add the required credentials, webhook details, or connection information for Trestle.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Trestle.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Trestle in the context of Real-estate listing API use cases before implementation.",
        "useCases": [
          "Document Trestle as part of your Real-estate listing API stack evaluation.",
          "Create a discoverable SEO landing page for Trestle while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "vulcan7",
        "name": "Vulcan7",
        "whatItDoes": "Creates a planned Vulcan7 integration page for HelloGrowthCRM so teams can discover US real-estate prospecting workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Vulcan7.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for US real-estate prospecting.",
          "Add the required credentials, webhook details, or connection information for Vulcan7.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Vulcan7.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Vulcan7 in the context of US real-estate prospecting use cases before implementation.",
        "useCases": [
          "Document Vulcan7 as part of your US real-estate prospecting stack evaluation.",
          "Create a discoverable SEO landing page for Vulcan7 while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "wise-agent",
        "name": "Wise Agent",
        "whatItDoes": "Creates a planned Wise Agent integration page for HelloGrowthCRM so teams can discover US real-estate CRM workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Wise Agent.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for US real-estate CRM.",
          "Add the required credentials, webhook details, or connection information for Wise Agent.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Wise Agent.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Wise Agent in the context of US real-estate CRM use cases before implementation.",
        "useCases": [
          "Document Wise Agent as part of your US real-estate CRM stack evaluation.",
          "Create a discoverable SEO landing page for Wise Agent while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "ylopo",
        "name": "Ylopo",
        "whatItDoes": "Creates a planned Ylopo integration page for HelloGrowthCRM so teams can discover US real-estate ad platform workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Ylopo.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for US real-estate ad platform.",
          "Add the required credentials, webhook details, or connection information for Ylopo.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Ylopo.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Ylopo in the context of US real-estate ad platform use cases before implementation.",
        "useCases": [
          "Document Ylopo as part of your US real-estate ad platform stack evaluation.",
          "Create a discoverable SEO landing page for Ylopo while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "zurple",
        "name": "Zurple",
        "whatItDoes": "Creates a planned Zurple integration page for HelloGrowthCRM so teams can discover US real-estate lead-gen workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Zurple.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for US real-estate lead-gen.",
          "Add the required credentials, webhook details, or connection information for Zurple.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Zurple.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Zurple in the context of US real-estate lead-gen use cases before implementation.",
        "useCases": [
          "Document Zurple as part of your US real-estate lead-gen stack evaluation.",
          "Create a discoverable SEO landing page for Zurple while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "boldtrail",
        "name": "Boldtrail (formerly Sierra)",
        "whatItDoes": "Creates a planned Boldtrail (formerly Sierra) integration page for HelloGrowthCRM so teams can discover US real-estate workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Boldtrail (formerly Sierra).",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for US real-estate.",
          "Add the required credentials, webhook details, or connection information for Boldtrail (formerly Sierra).",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Boldtrail (formerly Sierra).",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Boldtrail (formerly Sierra) in the context of US real-estate use cases before implementation.",
        "useCases": [
          "Document Boldtrail (formerly Sierra) as part of your US real-estate stack evaluation.",
          "Create a discoverable SEO landing page for Boldtrail (formerly Sierra) while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "boomtown",
        "name": "BoomTown",
        "whatItDoes": "Creates a planned BoomTown integration page for HelloGrowthCRM so teams can discover US real-estate CRM workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → BoomTown.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for US real-estate CRM.",
          "Add the required credentials, webhook details, or connection information for BoomTown.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with BoomTown.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching BoomTown in the context of US real-estate CRM use cases before implementation.",
        "useCases": [
          "Document BoomTown as part of your US real-estate CRM stack evaluation.",
          "Create a discoverable SEO landing page for BoomTown while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "cinc",
        "name": "CINC",
        "whatItDoes": "Creates a planned CINC integration page for HelloGrowthCRM so teams can discover US real-estate CRM workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → CINC.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for US real-estate CRM.",
          "Add the required credentials, webhook details, or connection information for CINC.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with CINC.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching CINC in the context of US real-estate CRM use cases before implementation.",
        "useCases": [
          "Document CINC as part of your US real-estate CRM stack evaluation.",
          "Create a discoverable SEO landing page for CINC while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "liondesk",
        "name": "LionDesk",
        "whatItDoes": "Creates a planned LionDesk integration page for HelloGrowthCRM so teams can discover US real-estate CRM workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → LionDesk.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for US real-estate CRM.",
          "Add the required credentials, webhook details, or connection information for LionDesk.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with LionDesk.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching LionDesk in the context of US real-estate CRM use cases before implementation.",
        "useCases": [
          "Document LionDesk as part of your US real-estate CRM stack evaluation.",
          "Create a discoverable SEO landing page for LionDesk while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "lofty",
        "name": "Lofty",
        "whatItDoes": "Creates a planned Lofty integration page for HelloGrowthCRM so teams can discover US real-estate CRM workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Lofty.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for US real-estate CRM.",
          "Add the required credentials, webhook details, or connection information for Lofty.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Lofty.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Lofty in the context of US real-estate CRM use cases before implementation.",
        "useCases": [
          "Document Lofty as part of your US real-estate CRM stack evaluation.",
          "Create a discoverable SEO landing page for Lofty while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "kvcore",
        "name": "kvCORE",
        "whatItDoes": "Creates a planned kvCORE integration page for HelloGrowthCRM so teams can discover US real-estate CRM workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → kvCORE.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for US real-estate CRM.",
          "Add the required credentials, webhook details, or connection information for kvCORE.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with kvCORE.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching kvCORE in the context of US real-estate CRM use cases before implementation.",
        "useCases": [
          "Document kvCORE as part of your US real-estate CRM stack evaluation.",
          "Create a discoverable SEO landing page for kvCORE while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "top-producer",
        "name": "Top Producer",
        "whatItDoes": "Creates a planned Top Producer integration page for HelloGrowthCRM so teams can discover US real-estate CRM workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Top Producer.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for US real-estate CRM.",
          "Add the required credentials, webhook details, or connection information for Top Producer.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Top Producer.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Top Producer in the context of US real-estate CRM use cases before implementation.",
        "useCases": [
          "Document Top Producer as part of your US real-estate CRM stack evaluation.",
          "Create a discoverable SEO landing page for Top Producer while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "marketleader",
        "name": "Marketleader",
        "whatItDoes": "Creates a planned Marketleader integration page for HelloGrowthCRM so teams can discover US real-estate CRM workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Marketleader.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for US real-estate CRM.",
          "Add the required credentials, webhook details, or connection information for Marketleader.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Marketleader.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Marketleader in the context of US real-estate CRM use cases before implementation.",
        "useCases": [
          "Document Marketleader as part of your US real-estate CRM stack evaluation.",
          "Create a discoverable SEO landing page for Marketleader while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "fub",
        "name": "FUB (Follow Up Boss)",
        "whatItDoes": "Creates a planned FUB (Follow Up Boss) integration page for HelloGrowthCRM so teams can discover US real-estate CRM workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → FUB (Follow Up Boss).",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for US real-estate CRM.",
          "Add the required credentials, webhook details, or connection information for FUB (Follow Up Boss).",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with FUB (Follow Up Boss).",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching FUB (Follow Up Boss) in the context of US real-estate CRM use cases before implementation.",
        "useCases": [
          "Document FUB (Follow Up Boss) as part of your US real-estate CRM stack evaluation.",
          "Create a discoverable SEO landing page for FUB (Follow Up Boss) while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "propertybase",
        "name": "Propertybase",
        "whatItDoes": "Creates a planned Propertybase integration page for HelloGrowthCRM so teams can discover Salesforce-based real-estate CRM workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Propertybase.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for Salesforce-based real-estate CRM.",
          "Add the required credentials, webhook details, or connection information for Propertybase.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Propertybase.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Propertybase in the context of Salesforce-based real-estate CRM use cases before implementation.",
        "useCases": [
          "Document Propertybase as part of your Salesforce-based real-estate CRM stack evaluation.",
          "Create a discoverable SEO landing page for Propertybase while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "buildium",
        "name": "Buildium",
        "whatItDoes": "Creates a planned Buildium integration page for HelloGrowthCRM so teams can discover Property management workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Buildium.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for Property management.",
          "Add the required credentials, webhook details, or connection information for Buildium.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Buildium.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Buildium in the context of Property management use cases before implementation.",
        "useCases": [
          "Document Buildium as part of your Property management stack evaluation.",
          "Create a discoverable SEO landing page for Buildium while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "yardi",
        "name": "Yardi",
        "whatItDoes": "Creates a planned Yardi integration page for HelloGrowthCRM so teams can discover Property management workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Yardi.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for Property management.",
          "Add the required credentials, webhook details, or connection information for Yardi.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Yardi.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Yardi in the context of Property management use cases before implementation.",
        "useCases": [
          "Document Yardi as part of your Property management stack evaluation.",
          "Create a discoverable SEO landing page for Yardi while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "appfolio",
        "name": "Appfolio",
        "whatItDoes": "Creates a planned Appfolio integration page for HelloGrowthCRM so teams can discover Property management workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Appfolio.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for Property management.",
          "Add the required credentials, webhook details, or connection information for Appfolio.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Appfolio.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Appfolio in the context of Property management use cases before implementation.",
        "useCases": [
          "Document Appfolio as part of your Property management stack evaluation.",
          "Create a discoverable SEO landing page for Appfolio while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "showcase-idx",
        "name": "Showcase IDX",
        "whatItDoes": "Creates a planned Showcase IDX integration page for HelloGrowthCRM so teams can discover IDX listing display workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Showcase IDX.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for IDX listing display.",
          "Add the required credentials, webhook details, or connection information for Showcase IDX.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Showcase IDX.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Showcase IDX in the context of IDX listing display use cases before implementation.",
        "useCases": [
          "Document Showcase IDX as part of your IDX listing display stack evaluation.",
          "Create a discoverable SEO landing page for Showcase IDX while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "listhub",
        "name": "ListHub",
        "whatItDoes": "Creates a planned ListHub integration page for HelloGrowthCRM so teams can discover Listing distribution workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → ListHub.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for Listing distribution.",
          "Add the required credentials, webhook details, or connection information for ListHub.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with ListHub.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching ListHub in the context of Listing distribution use cases before implementation.",
        "useCases": [
          "Document ListHub as part of your Listing distribution stack evaluation.",
          "Create a discoverable SEO landing page for ListHub while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "idx-broker",
        "name": "IDX Broker",
        "whatItDoes": "Creates a planned IDX Broker integration page for HelloGrowthCRM so teams can discover IDX feeds workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → IDX Broker.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for IDX feeds.",
          "Add the required credentials, webhook details, or connection information for IDX Broker.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with IDX Broker.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching IDX Broker in the context of IDX feeds use cases before implementation.",
        "useCases": [
          "Document IDX Broker as part of your IDX feeds stack evaluation.",
          "Create a discoverable SEO landing page for IDX Broker while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "stessa",
        "name": "Stessa",
        "whatItDoes": "Creates a planned Stessa integration page for HelloGrowthCRM so teams can discover Real-estate accounting workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Stessa.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for Real-estate accounting.",
          "Add the required credentials, webhook details, or connection information for Stessa.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Stessa.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Stessa in the context of Real-estate accounting use cases before implementation.",
        "useCases": [
          "Document Stessa as part of your Real-estate accounting stack evaluation.",
          "Create a discoverable SEO landing page for Stessa while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "homebot",
        "name": "Homebot",
        "whatItDoes": "Creates a planned Homebot integration page for HelloGrowthCRM so teams can discover Homeowner CRM workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Homebot.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for Homeowner CRM.",
          "Add the required credentials, webhook details, or connection information for Homebot.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Homebot.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Homebot in the context of Homeowner CRM use cases before implementation.",
        "useCases": [
          "Document Homebot as part of your Homeowner CRM stack evaluation.",
          "Create a discoverable SEO landing page for Homebot while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "homecoin",
        "name": "Homecoin",
        "whatItDoes": "Creates a planned Homecoin integration page for HelloGrowthCRM so teams can discover DIY listing workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Homecoin.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for DIY listing.",
          "Add the required credentials, webhook details, or connection information for Homecoin.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Homecoin.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Homecoin in the context of DIY listing use cases before implementation.",
        "useCases": [
          "Document Homecoin as part of your DIY listing stack evaluation.",
          "Create a discoverable SEO landing page for Homecoin while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "snapdocs",
        "name": "Snapdocs",
        "whatItDoes": "Creates a planned Snapdocs integration page for HelloGrowthCRM so teams can discover Mortgage closing workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Snapdocs.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for Mortgage closing.",
          "Add the required credentials, webhook details, or connection information for Snapdocs.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Snapdocs.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Snapdocs in the context of Mortgage closing use cases before implementation.",
        "useCases": [
          "Document Snapdocs as part of your Mortgage closing stack evaluation.",
          "Create a discoverable SEO landing page for Snapdocs while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "encompass",
        "name": "Encompass",
        "whatItDoes": "Creates a planned Encompass integration page for HelloGrowthCRM so teams can discover Mortgage origination workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Encompass.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for Mortgage origination.",
          "Add the required credentials, webhook details, or connection information for Encompass.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Encompass.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Encompass in the context of Mortgage origination use cases before implementation.",
        "useCases": [
          "Document Encompass as part of your Mortgage origination stack evaluation.",
          "Create a discoverable SEO landing page for Encompass while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "qualia",
        "name": "Qualia",
        "whatItDoes": "Creates a planned Qualia integration page for HelloGrowthCRM so teams can discover Title & closing workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Qualia.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for Title & closing.",
          "Add the required credentials, webhook details, or connection information for Qualia.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Qualia.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Qualia in the context of Title & closing use cases before implementation.",
        "useCases": [
          "Document Qualia as part of your Title & closing stack evaluation.",
          "Create a discoverable SEO landing page for Qualia while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "bridge",
        "name": "Bridge",
        "whatItDoes": "Creates a planned Bridge integration page for HelloGrowthCRM so teams can discover Real-estate listing API workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Bridge.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for Real-estate listing API.",
          "Add the required credentials, webhook details, or connection information for Bridge.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Bridge.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Bridge in the context of Real-estate listing API use cases before implementation.",
        "useCases": [
          "Document Bridge as part of your Real-estate listing API stack evaluation.",
          "Create a discoverable SEO landing page for Bridge while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "mri-software",
        "name": "MRI Software",
        "whatItDoes": "Creates a planned MRI Software integration page for HelloGrowthCRM so teams can discover Property management workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → MRI Software.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for Property management.",
          "Add the required credentials, webhook details, or connection information for MRI Software.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with MRI Software.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching MRI Software in the context of Property management use cases before implementation.",
        "useCases": [
          "Document MRI Software as part of your Property management stack evaluation.",
          "Create a discoverable SEO landing page for MRI Software while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "sageintacct",
        "name": "Sageintacct",
        "whatItDoes": "Creates a planned Sageintacct integration page for HelloGrowthCRM so teams can discover Real-estate accounting workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Sageintacct.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for Real-estate accounting.",
          "Add the required credentials, webhook details, or connection information for Sageintacct.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Sageintacct.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Sageintacct in the context of Real-estate accounting use cases before implementation.",
        "useCases": [
          "Document Sageintacct as part of your Real-estate accounting stack evaluation.",
          "Create a discoverable SEO landing page for Sageintacct while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "dotloop",
        "name": "Dotloop",
        "whatItDoes": "Creates a planned Dotloop integration page for HelloGrowthCRM so teams can discover Transaction management workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Dotloop.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for Transaction management.",
          "Add the required credentials, webhook details, or connection information for Dotloop.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Dotloop.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Dotloop in the context of Transaction management use cases before implementation.",
        "useCases": [
          "Document Dotloop as part of your Transaction management stack evaluation.",
          "Create a discoverable SEO landing page for Dotloop while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "revaluate",
        "name": "Revaluate",
        "whatItDoes": "Creates a planned Revaluate integration page for HelloGrowthCRM so teams can discover Lead intelligence workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Revaluate.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for Lead intelligence.",
          "Add the required credentials, webhook details, or connection information for Revaluate.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Revaluate.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Revaluate in the context of Lead intelligence use cases before implementation.",
        "useCases": [
          "Document Revaluate as part of your Lead intelligence stack evaluation.",
          "Create a discoverable SEO landing page for Revaluate while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "avail",
        "name": "Avail",
        "whatItDoes": "Creates a planned Avail integration page for HelloGrowthCRM so teams can discover Rental property mgmt workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Avail.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for Rental property mgmt.",
          "Add the required credentials, webhook details, or connection information for Avail.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Avail.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Avail in the context of Rental property mgmt use cases before implementation.",
        "useCases": [
          "Document Avail as part of your Rental property mgmt stack evaluation.",
          "Create a discoverable SEO landing page for Avail while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      }
    ]
  },
  {
    "slug": "education-lms",
    "title": "Education / LMS",
    "shortLabel": "Education / LMS",
    "integrations": [
      {
        "slug": "canvas-lms",
        "name": "Canvas LMS",
        "whatItDoes": "Creates a planned Canvas LMS integration page for HelloGrowthCRM so teams can discover education / lms workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Canvas LMS.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Canvas LMS.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Canvas LMS.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Canvas LMS in the context of education / lms use cases before implementation.",
        "useCases": [
          "Document Canvas LMS as part of your education / lms stack evaluation.",
          "Create a discoverable SEO landing page for Canvas LMS while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "blackboard",
        "name": "Blackboard",
        "whatItDoes": "Creates a planned Blackboard integration page for HelloGrowthCRM so teams can discover education / lms workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Blackboard.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Blackboard.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Blackboard.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Blackboard in the context of education / lms use cases before implementation.",
        "useCases": [
          "Document Blackboard as part of your education / lms stack evaluation.",
          "Create a discoverable SEO landing page for Blackboard while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "moodle",
        "name": "Moodle",
        "whatItDoes": "Creates a planned Moodle integration page for HelloGrowthCRM so teams can discover education / lms workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Moodle.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Moodle.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Moodle.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Moodle in the context of education / lms use cases before implementation.",
        "useCases": [
          "Document Moodle as part of your education / lms stack evaluation.",
          "Create a discoverable SEO landing page for Moodle while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "thinkific",
        "name": "Thinkific",
        "whatItDoes": "Creates a planned Thinkific integration page for HelloGrowthCRM so teams can discover education / lms workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Thinkific.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Thinkific.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Thinkific.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Thinkific in the context of education / lms use cases before implementation.",
        "useCases": [
          "Document Thinkific as part of your education / lms stack evaluation.",
          "Create a discoverable SEO landing page for Thinkific while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "teachable",
        "name": "Teachable",
        "whatItDoes": "Creates a planned Teachable integration page for HelloGrowthCRM so teams can discover education / lms workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Teachable.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Teachable.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Teachable.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Teachable in the context of education / lms use cases before implementation.",
        "useCases": [
          "Document Teachable as part of your education / lms stack evaluation.",
          "Create a discoverable SEO landing page for Teachable while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "kajabi",
        "name": "Kajabi",
        "whatItDoes": "Creates a planned Kajabi integration page for HelloGrowthCRM so teams can discover education / lms workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Kajabi.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Kajabi.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Kajabi.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Kajabi in the context of education / lms use cases before implementation.",
        "useCases": [
          "Document Kajabi as part of your education / lms stack evaluation.",
          "Create a discoverable SEO landing page for Kajabi while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "podia",
        "name": "Podia",
        "whatItDoes": "Creates a planned Podia integration page for HelloGrowthCRM so teams can discover education / lms workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Podia.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Podia.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Podia.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Podia in the context of education / lms use cases before implementation.",
        "useCases": [
          "Document Podia as part of your education / lms stack evaluation.",
          "Create a discoverable SEO landing page for Podia while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      }
    ]
  },
  {
    "slug": "restaurant-pos-delivery",
    "title": "Restaurant POS / Delivery",
    "shortLabel": "Restaurant POS / Delivery",
    "integrations": [
      {
        "slug": "petpooja",
        "name": "Petpooja",
        "whatItDoes": "Creates a planned Petpooja integration page for HelloGrowthCRM so teams can discover restaurant pos / delivery workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Petpooja.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Petpooja.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Petpooja.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Petpooja in the context of restaurant pos / delivery use cases before implementation.",
        "useCases": [
          "Document Petpooja as part of your restaurant pos / delivery stack evaluation.",
          "Create a discoverable SEO landing page for Petpooja while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "posist",
        "name": "Posist",
        "whatItDoes": "Creates a planned Posist integration page for HelloGrowthCRM so teams can discover restaurant pos / delivery workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Posist.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Posist.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Posist.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Posist in the context of restaurant pos / delivery use cases before implementation.",
        "useCases": [
          "Document Posist as part of your restaurant pos / delivery stack evaluation.",
          "Create a discoverable SEO landing page for Posist while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "limetray",
        "name": "Limetray",
        "whatItDoes": "Creates a planned Limetray integration page for HelloGrowthCRM so teams can discover restaurant pos / delivery workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Limetray.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Limetray.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Limetray.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Limetray in the context of restaurant pos / delivery use cases before implementation.",
        "useCases": [
          "Document Limetray as part of your restaurant pos / delivery stack evaluation.",
          "Create a discoverable SEO landing page for Limetray while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "urbanpiper",
        "name": "Urbanpiper",
        "whatItDoes": "Creates a planned Urbanpiper integration page for HelloGrowthCRM so teams can discover restaurant pos / delivery workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Urbanpiper.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Urbanpiper.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Urbanpiper.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Urbanpiper in the context of restaurant pos / delivery use cases before implementation.",
        "useCases": [
          "Document Urbanpiper as part of your restaurant pos / delivery stack evaluation.",
          "Create a discoverable SEO landing page for Urbanpiper while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "zomato-partner",
        "name": "Zomato Partner",
        "whatItDoes": "Creates a planned Zomato Partner integration page for HelloGrowthCRM so teams can discover restaurant pos / delivery workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Zomato Partner.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Zomato Partner.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Zomato Partner.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Zomato Partner in the context of restaurant pos / delivery use cases before implementation.",
        "useCases": [
          "Document Zomato Partner as part of your restaurant pos / delivery stack evaluation.",
          "Create a discoverable SEO landing page for Zomato Partner while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "swiggy-partner",
        "name": "Swiggy Partner",
        "whatItDoes": "Creates a planned Swiggy Partner integration page for HelloGrowthCRM so teams can discover restaurant pos / delivery workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Swiggy Partner.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Swiggy Partner.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Swiggy Partner.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Swiggy Partner in the context of restaurant pos / delivery use cases before implementation.",
        "useCases": [
          "Document Swiggy Partner as part of your restaurant pos / delivery stack evaluation.",
          "Create a discoverable SEO landing page for Swiggy Partner while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "toast-pos",
        "name": "Toast POS",
        "whatItDoes": "Creates a planned Toast POS integration page for HelloGrowthCRM so teams can discover restaurant pos / delivery workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Toast POS.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Toast POS.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Toast POS.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Toast POS in the context of restaurant pos / delivery use cases before implementation.",
        "useCases": [
          "Document Toast POS as part of your restaurant pos / delivery stack evaluation.",
          "Create a discoverable SEO landing page for Toast POS while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "tella",
        "name": "Tella",
        "whatItDoes": "Creates a planned Tella integration page for HelloGrowthCRM so teams can discover restaurant pos / delivery workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Tella.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Tella.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Tella.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Tella in the context of restaurant pos / delivery use cases before implementation.",
        "useCases": [
          "Document Tella as part of your restaurant pos / delivery stack evaluation.",
          "Create a discoverable SEO landing page for Tella while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      }
    ]
  },
  {
    "slug": "hospitality",
    "title": "Hospitality",
    "shortLabel": "Hospitality",
    "integrations": [
      {
        "slug": "cloudbeds",
        "name": "Cloudbeds",
        "whatItDoes": "Creates a planned Cloudbeds integration page for HelloGrowthCRM so teams can discover hospitality workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Cloudbeds.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Cloudbeds.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Cloudbeds.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Cloudbeds in the context of hospitality use cases before implementation.",
        "useCases": [
          "Document Cloudbeds as part of your hospitality stack evaluation.",
          "Create a discoverable SEO landing page for Cloudbeds while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "mews",
        "name": "Mews",
        "whatItDoes": "Creates a planned Mews integration page for HelloGrowthCRM so teams can discover hospitality workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Mews.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Mews.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Mews.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Mews in the context of hospitality use cases before implementation.",
        "useCases": [
          "Document Mews as part of your hospitality stack evaluation.",
          "Create a discoverable SEO landing page for Mews while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "oyo",
        "name": "OYO",
        "whatItDoes": "Creates a planned OYO integration page for HelloGrowthCRM so teams can discover hospitality workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → OYO.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for OYO.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with OYO.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching OYO in the context of hospitality use cases before implementation.",
        "useCases": [
          "Document OYO as part of your hospitality stack evaluation.",
          "Create a discoverable SEO landing page for OYO while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      }
    ]
  },
  {
    "slug": "pharma-healthcare",
    "title": "Pharma / Healthcare",
    "shortLabel": "Pharma / Healthcare",
    "integrations": [
      {
        "slug": "1mg",
        "name": "1mg",
        "whatItDoes": "Creates a planned 1mg integration page for HelloGrowthCRM so teams can discover pharma / healthcare workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → 1mg.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for 1mg.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with 1mg.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching 1mg in the context of pharma / healthcare use cases before implementation.",
        "useCases": [
          "Document 1mg as part of your pharma / healthcare stack evaluation.",
          "Create a discoverable SEO landing page for 1mg while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "pharmeasy",
        "name": "PharmEasy",
        "whatItDoes": "Creates a planned PharmEasy integration page for HelloGrowthCRM so teams can discover pharma / healthcare workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → PharmEasy.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for PharmEasy.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with PharmEasy.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching PharmEasy in the context of pharma / healthcare use cases before implementation.",
        "useCases": [
          "Document PharmEasy as part of your pharma / healthcare stack evaluation.",
          "Create a discoverable SEO landing page for PharmEasy while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "netmeds",
        "name": "Netmeds",
        "whatItDoes": "Creates a planned Netmeds integration page for HelloGrowthCRM so teams can discover pharma / healthcare workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Netmeds.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Netmeds.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Netmeds.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Netmeds in the context of pharma / healthcare use cases before implementation.",
        "useCases": [
          "Document Netmeds as part of your pharma / healthcare stack evaluation.",
          "Create a discoverable SEO landing page for Netmeds while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "practo",
        "name": "Practo",
        "whatItDoes": "Creates a planned Practo integration page for HelloGrowthCRM so teams can discover pharma / healthcare workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Practo.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Practo.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Practo.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Practo in the context of pharma / healthcare use cases before implementation.",
        "useCases": [
          "Document Practo as part of your pharma / healthcare stack evaluation.",
          "Create a discoverable SEO landing page for Practo while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      }
    ]
  },
  {
    "slug": "hr-payroll",
    "title": "HR / Payroll",
    "shortLabel": "HR / Payroll",
    "integrations": [
      {
        "slug": "justworks",
        "name": "Justworks",
        "whatItDoes": "Creates a planned Justworks integration page for HelloGrowthCRM so teams can discover hr / payroll workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Justworks.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Justworks.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Justworks.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Justworks in the context of hr / payroll use cases before implementation.",
        "useCases": [
          "Document Justworks as part of your hr / payroll stack evaluation.",
          "Create a discoverable SEO landing page for Justworks while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "paylocity",
        "name": "Paylocity",
        "whatItDoes": "Creates a planned Paylocity integration page for HelloGrowthCRM so teams can discover hr / payroll workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Paylocity.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Paylocity.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Paylocity.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Paylocity in the context of hr / payroll use cases before implementation.",
        "useCases": [
          "Document Paylocity as part of your hr / payroll stack evaluation.",
          "Create a discoverable SEO landing page for Paylocity while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "paycom",
        "name": "Paycom",
        "whatItDoes": "Creates a planned Paycom integration page for HelloGrowthCRM so teams can discover hr / payroll workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Paycom.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Paycom.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Paycom.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Paycom in the context of hr / payroll use cases before implementation.",
        "useCases": [
          "Document Paycom as part of your hr / payroll stack evaluation.",
          "Create a discoverable SEO landing page for Paycom while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "trinet",
        "name": "TriNet",
        "whatItDoes": "Creates a planned TriNet integration page for HelloGrowthCRM so teams can discover hr / payroll workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → TriNet.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for TriNet.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with TriNet.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching TriNet in the context of hr / payroll use cases before implementation.",
        "useCases": [
          "Document TriNet as part of your hr / payroll stack evaluation.",
          "Create a discoverable SEO landing page for TriNet while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      }
    ]
  },
  {
    "slug": "indian-kyc-identity",
    "title": "Indian KYC / Identity",
    "shortLabel": "Indian KYC / Identity",
    "integrations": [
      {
        "slug": "aadhaar-esign",
        "name": "Aadhaar eSign",
        "whatItDoes": "Creates a planned Aadhaar eSign integration page for HelloGrowthCRM so teams can discover Government e-signature workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Aadhaar eSign.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for Government e-signature.",
          "Add the required credentials, webhook details, or connection information for Aadhaar eSign.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Aadhaar eSign.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Aadhaar eSign in the context of Government e-signature use cases before implementation.",
        "useCases": [
          "Document Aadhaar eSign as part of your Government e-signature stack evaluation.",
          "Create a discoverable SEO landing page for Aadhaar eSign while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "digilocker",
        "name": "DigiLocker",
        "whatItDoes": "Creates a planned DigiLocker integration page for HelloGrowthCRM so teams can discover Government document wallet workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → DigiLocker.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for Government document wallet.",
          "Add the required credentials, webhook details, or connection information for DigiLocker.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with DigiLocker.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching DigiLocker in the context of Government document wallet use cases before implementation.",
        "useCases": [
          "Document DigiLocker as part of your Government document wallet stack evaluation.",
          "Create a discoverable SEO landing page for DigiLocker while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "hyperverge",
        "name": "Hyperverge",
        "whatItDoes": "Creates a planned Hyperverge integration page for HelloGrowthCRM so teams can discover KYC verification workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Hyperverge.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for KYC verification.",
          "Add the required credentials, webhook details, or connection information for Hyperverge.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Hyperverge.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Hyperverge in the context of KYC verification use cases before implementation.",
        "useCases": [
          "Document Hyperverge as part of your KYC verification stack evaluation.",
          "Create a discoverable SEO landing page for Hyperverge while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "karza",
        "name": "Karza",
        "whatItDoes": "Creates a planned Karza integration page for HelloGrowthCRM so teams can discover KYC + business verification workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Karza.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for KYC + business verification.",
          "Add the required credentials, webhook details, or connection information for Karza.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Karza.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Karza in the context of KYC + business verification use cases before implementation.",
        "useCases": [
          "Document Karza as part of your KYC + business verification stack evaluation.",
          "Create a discoverable SEO landing page for Karza while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "signzy",
        "name": "Signzy",
        "whatItDoes": "Creates a planned Signzy integration page for HelloGrowthCRM so teams can discover Digital KYC workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Signzy.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for Digital KYC.",
          "Add the required credentials, webhook details, or connection information for Signzy.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Signzy.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Signzy in the context of Digital KYC use cases before implementation.",
        "useCases": [
          "Document Signzy as part of your Digital KYC stack evaluation.",
          "Create a discoverable SEO landing page for Signzy while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "verify-pan",
        "name": "Verify PAN",
        "whatItDoes": "Creates a planned Verify PAN integration page for HelloGrowthCRM so teams can discover PAN card verification workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Verify PAN.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for PAN card verification.",
          "Add the required credentials, webhook details, or connection information for Verify PAN.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Verify PAN.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Verify PAN in the context of PAN card verification use cases before implementation.",
        "useCases": [
          "Document Verify PAN as part of your PAN card verification stack evaluation.",
          "Create a discoverable SEO landing page for Verify PAN while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "verify-gstin",
        "name": "Verify GSTIN",
        "whatItDoes": "Creates a planned Verify GSTIN integration page for HelloGrowthCRM so teams can discover GST number lookup workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Verify GSTIN.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for GST number lookup.",
          "Add the required credentials, webhook details, or connection information for Verify GSTIN.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Verify GSTIN.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Verify GSTIN in the context of GST number lookup use cases before implementation.",
        "useCases": [
          "Document Verify GSTIN as part of your GST number lookup stack evaluation.",
          "Create a discoverable SEO landing page for Verify GSTIN while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      }
    ]
  },
  {
    "slug": "indian-banking-and-payment",
    "title": "Indian Banking & Payment",
    "shortLabel": "Indian Banking & Payment",
    "integrations": [
      {
        "slug": "hdfc-smarthub",
        "name": "HDFC SmartHub",
        "whatItDoes": "Creates a planned HDFC SmartHub integration page for HelloGrowthCRM so teams can discover HDFC merchant gateway workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → HDFC SmartHub.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for HDFC merchant gateway.",
          "Add the required credentials, webhook details, or connection information for HDFC SmartHub.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with HDFC SmartHub.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching HDFC SmartHub in the context of HDFC merchant gateway use cases before implementation.",
        "useCases": [
          "Document HDFC SmartHub as part of your HDFC merchant gateway stack evaluation.",
          "Create a discoverable SEO landing page for HDFC SmartHub while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "icici-eazypay",
        "name": "ICICI Eazypay",
        "whatItDoes": "Creates a planned ICICI Eazypay integration page for HelloGrowthCRM so teams can discover ICICI merchant gateway workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → ICICI Eazypay.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for ICICI merchant gateway.",
          "Add the required credentials, webhook details, or connection information for ICICI Eazypay.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with ICICI Eazypay.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching ICICI Eazypay in the context of ICICI merchant gateway use cases before implementation.",
        "useCases": [
          "Document ICICI Eazypay as part of your ICICI merchant gateway stack evaluation.",
          "Create a discoverable SEO landing page for ICICI Eazypay while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "axis-payments",
        "name": "Axis Payments",
        "whatItDoes": "Creates a planned Axis Payments integration page for HelloGrowthCRM so teams can discover Axis Bank payments workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Axis Payments.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for Axis Bank payments.",
          "Add the required credentials, webhook details, or connection information for Axis Payments.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Axis Payments.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Axis Payments in the context of Axis Bank payments use cases before implementation.",
        "useCases": [
          "Document Axis Payments as part of your Axis Bank payments stack evaluation.",
          "Create a discoverable SEO landing page for Axis Payments while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "razorpay-x",
        "name": "Razorpay-X",
        "whatItDoes": "Creates a planned Razorpay-X integration page for HelloGrowthCRM so teams can discover Razorpay business banking workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Razorpay-X.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for Razorpay business banking.",
          "Add the required credentials, webhook details, or connection information for Razorpay-X.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Razorpay-X.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Razorpay-X in the context of Razorpay business banking use cases before implementation.",
        "useCases": [
          "Document Razorpay-X as part of your Razorpay business banking stack evaluation.",
          "Create a discoverable SEO landing page for Razorpay-X while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "khatabook",
        "name": "Khatabook",
        "whatItDoes": "Creates a planned Khatabook integration page for HelloGrowthCRM so teams can discover SMB digital ledger workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Khatabook.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for SMB digital ledger.",
          "Add the required credentials, webhook details, or connection information for Khatabook.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Khatabook.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Khatabook in the context of SMB digital ledger use cases before implementation.",
        "useCases": [
          "Document Khatabook as part of your SMB digital ledger stack evaluation.",
          "Create a discoverable SEO landing page for Khatabook while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "vyapar",
        "name": "Vyapar",
        "whatItDoes": "Creates a planned Vyapar integration page for HelloGrowthCRM so teams can discover SMB accounting workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Vyapar.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for SMB accounting.",
          "Add the required credentials, webhook details, or connection information for Vyapar.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Vyapar.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Vyapar in the context of SMB accounting use cases before implementation.",
        "useCases": [
          "Document Vyapar as part of your SMB accounting stack evaluation.",
          "Create a discoverable SEO landing page for Vyapar while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "cleartax",
        "name": "ClearTax",
        "whatItDoes": "Creates a planned ClearTax integration page for HelloGrowthCRM so teams can discover Tax filing workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → ClearTax.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for Tax filing.",
          "Add the required credentials, webhook details, or connection information for ClearTax.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with ClearTax.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching ClearTax in the context of Tax filing use cases before implementation.",
        "useCases": [
          "Document ClearTax as part of your Tax filing stack evaluation.",
          "Create a discoverable SEO landing page for ClearTax while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "profitbooks",
        "name": "ProfitBooks",
        "whatItDoes": "Creates a planned ProfitBooks integration page for HelloGrowthCRM so teams can discover SMB accounting workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → ProfitBooks.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for SMB accounting.",
          "Add the required credentials, webhook details, or connection information for ProfitBooks.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with ProfitBooks.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching ProfitBooks in the context of SMB accounting use cases before implementation.",
        "useCases": [
          "Document ProfitBooks as part of your SMB accounting stack evaluation.",
          "Create a discoverable SEO landing page for ProfitBooks while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "finbox",
        "name": "Finbox",
        "whatItDoes": "Creates a planned Finbox integration page for HelloGrowthCRM so teams can discover Lending APIs workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Finbox.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for Lending APIs.",
          "Add the required credentials, webhook details, or connection information for Finbox.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Finbox.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Finbox in the context of Lending APIs use cases before implementation.",
        "useCases": [
          "Document Finbox as part of your Lending APIs stack evaluation.",
          "Create a discoverable SEO landing page for Finbox while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "setu",
        "name": "Setu",
        "whatItDoes": "Creates a planned Setu integration page for HelloGrowthCRM so teams can discover Open banking workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Setu.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for Open banking.",
          "Add the required credentials, webhook details, or connection information for Setu.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Setu.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Setu in the context of Open banking use cases before implementation.",
        "useCases": [
          "Document Setu as part of your Open banking stack evaluation.",
          "Create a discoverable SEO landing page for Setu while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      }
    ]
  },
  {
    "slug": "latam",
    "title": "LATAM",
    "shortLabel": "LATAM",
    "integrations": [
      {
        "slug": "mercadolibre",
        "name": "MercadoLibre",
        "whatItDoes": "Creates a planned MercadoLibre integration page for HelloGrowthCRM so teams can discover latam workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → MercadoLibre.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for MercadoLibre.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with MercadoLibre.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching MercadoLibre in the context of latam use cases before implementation.",
        "useCases": [
          "Document MercadoLibre as part of your latam stack evaluation.",
          "Create a discoverable SEO landing page for MercadoLibre while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "mercadopago",
        "name": "MercadoPago",
        "whatItDoes": "Creates a planned MercadoPago integration page for HelloGrowthCRM so teams can discover latam workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → MercadoPago.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for MercadoPago.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with MercadoPago.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching MercadoPago in the context of latam use cases before implementation.",
        "useCases": [
          "Document MercadoPago as part of your latam stack evaluation.",
          "Create a discoverable SEO landing page for MercadoPago while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "picpay",
        "name": "PicPay (Brazil payment)",
        "whatItDoes": "Creates a planned PicPay (Brazil payment) integration page for HelloGrowthCRM so teams can discover latam workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → PicPay (Brazil payment).",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for PicPay (Brazil payment).",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with PicPay (Brazil payment).",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching PicPay (Brazil payment) in the context of latam use cases before implementation.",
        "useCases": [
          "Document PicPay (Brazil payment) as part of your latam stack evaluation.",
          "Create a discoverable SEO landing page for PicPay (Brazil payment) while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "pagseguro",
        "name": "PagSeguro",
        "whatItDoes": "Creates a planned PagSeguro integration page for HelloGrowthCRM so teams can discover latam workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → PagSeguro.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for PagSeguro.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with PagSeguro.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching PagSeguro in the context of latam use cases before implementation.",
        "useCases": [
          "Document PagSeguro as part of your latam stack evaluation.",
          "Create a discoverable SEO landing page for PagSeguro while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "tiendanube",
        "name": "Tiendanube (Argentina ecom)",
        "whatItDoes": "Creates a planned Tiendanube (Argentina ecom) integration page for HelloGrowthCRM so teams can discover latam workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Tiendanube (Argentina ecom).",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Tiendanube (Argentina ecom).",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Tiendanube (Argentina ecom).",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Tiendanube (Argentina ecom) in the context of latam use cases before implementation.",
        "useCases": [
          "Document Tiendanube (Argentina ecom) as part of your latam stack evaluation.",
          "Create a discoverable SEO landing page for Tiendanube (Argentina ecom) while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "linio",
        "name": "Linio",
        "whatItDoes": "Creates a planned Linio integration page for HelloGrowthCRM so teams can discover latam workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Linio.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Linio.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Linio.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Linio in the context of latam use cases before implementation.",
        "useCases": [
          "Document Linio as part of your latam stack evaluation.",
          "Create a discoverable SEO landing page for Linio while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      }
    ]
  },
  {
    "slug": "middle-east",
    "title": "Middle East",
    "shortLabel": "Middle East",
    "integrations": [
      {
        "slug": "hyperpay",
        "name": "HyperPay",
        "whatItDoes": "Creates a planned HyperPay integration page for HelloGrowthCRM so teams can discover middle east workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → HyperPay.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for HyperPay.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with HyperPay.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching HyperPay in the context of middle east use cases before implementation.",
        "useCases": [
          "Document HyperPay as part of your middle east stack evaluation.",
          "Create a discoverable SEO landing page for HyperPay while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "paytabs",
        "name": "PayTabs",
        "whatItDoes": "Creates a planned PayTabs integration page for HelloGrowthCRM so teams can discover middle east workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → PayTabs.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for PayTabs.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with PayTabs.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching PayTabs in the context of middle east use cases before implementation.",
        "useCases": [
          "Document PayTabs as part of your middle east stack evaluation.",
          "Create a discoverable SEO landing page for PayTabs while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "tamara",
        "name": "Tamara (BNPL)",
        "whatItDoes": "Creates a planned Tamara (BNPL) integration page for HelloGrowthCRM so teams can discover middle east workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Tamara (BNPL).",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Tamara (BNPL).",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Tamara (BNPL).",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Tamara (BNPL) in the context of middle east use cases before implementation.",
        "useCases": [
          "Document Tamara (BNPL) as part of your middle east stack evaluation.",
          "Create a discoverable SEO landing page for Tamara (BNPL) while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "tabby",
        "name": "Tabby (BNPL)",
        "whatItDoes": "Creates a planned Tabby (BNPL) integration page for HelloGrowthCRM so teams can discover middle east workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Tabby (BNPL).",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Tabby (BNPL).",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Tabby (BNPL).",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Tabby (BNPL) in the context of middle east use cases before implementation.",
        "useCases": [
          "Document Tabby (BNPL) as part of your middle east stack evaluation.",
          "Create a discoverable SEO landing page for Tabby (BNPL) while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "salla",
        "name": "Salla",
        "whatItDoes": "Creates a planned Salla integration page for HelloGrowthCRM so teams can discover middle east workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Salla.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Salla.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Salla.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Salla in the context of middle east use cases before implementation.",
        "useCases": [
          "Document Salla as part of your middle east stack evaluation.",
          "Create a discoverable SEO landing page for Salla while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "zid",
        "name": "Zid",
        "whatItDoes": "Creates a planned Zid integration page for HelloGrowthCRM so teams can discover middle east workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Zid.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Zid.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Zid.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Zid in the context of middle east use cases before implementation.",
        "useCases": [
          "Document Zid as part of your middle east stack evaluation.",
          "Create a discoverable SEO landing page for Zid while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "bayt",
        "name": "Bayt (jobs)",
        "whatItDoes": "Creates a planned Bayt (jobs) integration page for HelloGrowthCRM so teams can discover middle east workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Bayt (jobs).",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Bayt (jobs).",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Bayt (jobs).",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Bayt (jobs) in the context of middle east use cases before implementation.",
        "useCases": [
          "Document Bayt (jobs) as part of your middle east stack evaluation.",
          "Create a discoverable SEO landing page for Bayt (jobs) while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      }
    ]
  },
  {
    "slug": "apac",
    "title": "APAC",
    "shortLabel": "APAC",
    "integrations": [
      {
        "slug": "lazada",
        "name": "Lazada",
        "whatItDoes": "Creates a planned Lazada integration page for HelloGrowthCRM so teams can discover apac workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Lazada.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Lazada.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Lazada.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Lazada in the context of apac use cases before implementation.",
        "useCases": [
          "Document Lazada as part of your apac stack evaluation.",
          "Create a discoverable SEO landing page for Lazada while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "shopee",
        "name": "Shopee",
        "whatItDoes": "Creates a planned Shopee integration page for HelloGrowthCRM so teams can discover apac workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Shopee.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Shopee.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Shopee.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Shopee in the context of apac use cases before implementation.",
        "useCases": [
          "Document Shopee as part of your apac stack evaluation.",
          "Create a discoverable SEO landing page for Shopee while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "tokopedia",
        "name": "Tokopedia",
        "whatItDoes": "Creates a planned Tokopedia integration page for HelloGrowthCRM so teams can discover apac workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Tokopedia.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Tokopedia.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Tokopedia.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Tokopedia in the context of apac use cases before implementation.",
        "useCases": [
          "Document Tokopedia as part of your apac stack evaluation.",
          "Create a discoverable SEO landing page for Tokopedia while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "line",
        "name": "LINE (chat - Japan/Asia)",
        "whatItDoes": "Creates a planned LINE (chat - Japan/Asia) integration page for HelloGrowthCRM so teams can discover apac workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → LINE (chat - Japan/Asia).",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for LINE (chat - Japan/Asia).",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with LINE (chat - Japan/Asia).",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching LINE (chat - Japan/Asia) in the context of apac use cases before implementation.",
        "useCases": [
          "Document LINE (chat - Japan/Asia) as part of your apac stack evaluation.",
          "Create a discoverable SEO landing page for LINE (chat - Japan/Asia) while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "kakaotalk",
        "name": "KakaoTalk (Korea)",
        "whatItDoes": "Creates a planned KakaoTalk (Korea) integration page for HelloGrowthCRM so teams can discover apac workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → KakaoTalk (Korea).",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for KakaoTalk (Korea).",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with KakaoTalk (Korea).",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching KakaoTalk (Korea) in the context of apac use cases before implementation.",
        "useCases": [
          "Document KakaoTalk (Korea) as part of your apac stack evaluation.",
          "Create a discoverable SEO landing page for KakaoTalk (Korea) while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      }
    ]
  },
  {
    "slug": "advanced-sales-enrichment",
    "title": "Advanced Sales / Enrichment",
    "shortLabel": "Advanced Sales / Enrichment",
    "integrations": [
      {
        "slug": "6sense",
        "name": "6sense",
        "whatItDoes": "Creates a planned 6sense integration page for HelloGrowthCRM so teams can discover Account-based marketing intelligence workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → 6sense.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for Account-based marketing intelligence.",
          "Add the required credentials, webhook details, or connection information for 6sense.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with 6sense.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching 6sense in the context of Account-based marketing intelligence use cases before implementation.",
        "useCases": [
          "Document 6sense as part of your Account-based marketing intelligence stack evaluation.",
          "Create a discoverable SEO landing page for 6sense while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "cognism",
        "name": "Cognism",
        "whatItDoes": "Creates a planned Cognism integration page for HelloGrowthCRM so teams can discover Sales intelligence workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Cognism.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for Sales intelligence.",
          "Add the required credentials, webhook details, or connection information for Cognism.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Cognism.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Cognism in the context of Sales intelligence use cases before implementation.",
        "useCases": [
          "Document Cognism as part of your Sales intelligence stack evaluation.",
          "Create a discoverable SEO landing page for Cognism while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "coresignal",
        "name": "Coresignal",
        "whatItDoes": "Creates a planned Coresignal integration page for HelloGrowthCRM so teams can discover B2B data API workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Coresignal.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for B2B data API.",
          "Add the required credentials, webhook details, or connection information for Coresignal.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Coresignal.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Coresignal in the context of B2B data API use cases before implementation.",
        "useCases": [
          "Document Coresignal as part of your B2B data API stack evaluation.",
          "Create a discoverable SEO landing page for Coresignal while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "crunchbase-pro",
        "name": "Crunchbase Pro",
        "whatItDoes": "Creates a planned Crunchbase Pro integration page for HelloGrowthCRM so teams can discover Company data workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Crunchbase Pro.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for Company data.",
          "Add the required credentials, webhook details, or connection information for Crunchbase Pro.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Crunchbase Pro.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Crunchbase Pro in the context of Company data use cases before implementation.",
        "useCases": [
          "Document Crunchbase Pro as part of your Company data stack evaluation.",
          "Create a discoverable SEO landing page for Crunchbase Pro while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "demandbase",
        "name": "Demandbase",
        "whatItDoes": "Creates a planned Demandbase integration page for HelloGrowthCRM so teams can discover ABM platform workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Demandbase.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for ABM platform.",
          "Add the required credentials, webhook details, or connection information for Demandbase.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Demandbase.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Demandbase in the context of ABM platform use cases before implementation.",
        "useCases": [
          "Document Demandbase as part of your ABM platform stack evaluation.",
          "Create a discoverable SEO landing page for Demandbase while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "leadiq",
        "name": "LeadIQ",
        "whatItDoes": "Creates a planned LeadIQ integration page for HelloGrowthCRM so teams can discover Prospecting tool workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → LeadIQ.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for Prospecting tool.",
          "Add the required credentials, webhook details, or connection information for LeadIQ.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with LeadIQ.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching LeadIQ in the context of Prospecting tool use cases before implementation.",
        "useCases": [
          "Document LeadIQ as part of your Prospecting tool stack evaluation.",
          "Create a discoverable SEO landing page for LeadIQ while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "bombora",
        "name": "Bombora",
        "whatItDoes": "Creates a planned Bombora integration page for HelloGrowthCRM so teams can discover Intent data workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Bombora.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for Intent data.",
          "Add the required credentials, webhook details, or connection information for Bombora.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Bombora.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Bombora in the context of Intent data use cases before implementation.",
        "useCases": [
          "Document Bombora as part of your Intent data stack evaluation.",
          "Create a discoverable SEO landing page for Bombora while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "phantombuster",
        "name": "Phantombuster",
        "whatItDoes": "Creates a planned Phantombuster integration page for HelloGrowthCRM so teams can discover LinkedIn automation workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Phantombuster.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for LinkedIn automation.",
          "Add the required credentials, webhook details, or connection information for Phantombuster.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Phantombuster.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Phantombuster in the context of LinkedIn automation use cases before implementation.",
        "useCases": [
          "Document Phantombuster as part of your LinkedIn automation stack evaluation.",
          "Create a discoverable SEO landing page for Phantombuster while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "texau",
        "name": "TexAU",
        "whatItDoes": "Creates a planned TexAU integration page for HelloGrowthCRM so teams can discover Scraping automation workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → TexAU.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for Scraping automation.",
          "Add the required credentials, webhook details, or connection information for TexAU.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with TexAU.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching TexAU in the context of Scraping automation use cases before implementation.",
        "useCases": [
          "Document TexAU as part of your Scraping automation stack evaluation.",
          "Create a discoverable SEO landing page for TexAU while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "owler-pro",
        "name": "Owler Pro",
        "whatItDoes": "Creates a planned Owler Pro integration page for HelloGrowthCRM so teams can discover Company intelligence workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Owler Pro.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for Company intelligence.",
          "Add the required credentials, webhook details, or connection information for Owler Pro.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Owler Pro.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Owler Pro in the context of Company intelligence use cases before implementation.",
        "useCases": [
          "Document Owler Pro as part of your Company intelligence stack evaluation.",
          "Create a discoverable SEO landing page for Owler Pro while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "mojodialer",
        "name": "MojoDialer",
        "whatItDoes": "Creates a planned MojoDialer integration page for HelloGrowthCRM so teams can discover Sales dialer workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → MojoDialer.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for Sales dialer.",
          "Add the required credentials, webhook details, or connection information for MojoDialer.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with MojoDialer.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching MojoDialer in the context of Sales dialer use cases before implementation.",
        "useCases": [
          "Document MojoDialer as part of your Sales dialer stack evaluation.",
          "Create a discoverable SEO landing page for MojoDialer while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      }
    ]
  },
  {
    "slug": "marketing-automation",
    "title": "Marketing Automation",
    "shortLabel": "Marketing Automation",
    "integrations": [
      {
        "slug": "hubspot-marketing",
        "name": "HubSpot Marketing",
        "whatItDoes": "Creates a planned HubSpot Marketing integration page for HelloGrowthCRM so teams can discover marketing automation workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → HubSpot Marketing.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for HubSpot Marketing.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with HubSpot Marketing.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching HubSpot Marketing in the context of marketing automation use cases before implementation.",
        "useCases": [
          "Document HubSpot Marketing as part of your marketing automation stack evaluation.",
          "Create a discoverable SEO landing page for HubSpot Marketing while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "drift",
        "name": "Drift",
        "whatItDoes": "Creates a planned Drift integration page for HelloGrowthCRM so teams can discover marketing automation workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Drift.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Drift.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Drift.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Drift in the context of marketing automation use cases before implementation.",
        "useCases": [
          "Document Drift as part of your marketing automation stack evaluation.",
          "Create a discoverable SEO landing page for Drift while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "outreach",
        "name": "Outreach",
        "whatItDoes": "Creates a planned Outreach integration page for HelloGrowthCRM so teams can discover marketing automation workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Outreach.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Outreach.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Outreach.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Outreach in the context of marketing automation use cases before implementation.",
        "useCases": [
          "Document Outreach as part of your marketing automation stack evaluation.",
          "Create a discoverable SEO landing page for Outreach while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "salesloft",
        "name": "Salesloft",
        "whatItDoes": "Creates a planned Salesloft integration page for HelloGrowthCRM so teams can discover marketing automation workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Salesloft.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Salesloft.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Salesloft.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Salesloft in the context of marketing automation use cases before implementation.",
        "useCases": [
          "Document Salesloft as part of your marketing automation stack evaluation.",
          "Create a discoverable SEO landing page for Salesloft while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "lemlist",
        "name": "Lemlist",
        "whatItDoes": "Creates a planned Lemlist integration page for HelloGrowthCRM so teams can discover marketing automation workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Lemlist.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Lemlist.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Lemlist.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Lemlist in the context of marketing automation use cases before implementation.",
        "useCases": [
          "Document Lemlist as part of your marketing automation stack evaluation.",
          "Create a discoverable SEO landing page for Lemlist while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "smartlead",
        "name": "Smartlead",
        "whatItDoes": "Creates a planned Smartlead integration page for HelloGrowthCRM so teams can discover marketing automation workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Smartlead.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Smartlead.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Smartlead.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Smartlead in the context of marketing automation use cases before implementation.",
        "useCases": [
          "Document Smartlead as part of your marketing automation stack evaluation.",
          "Create a discoverable SEO landing page for Smartlead while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "instantly",
        "name": "Instantly",
        "whatItDoes": "Creates a planned Instantly integration page for HelloGrowthCRM so teams can discover marketing automation workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Instantly.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Instantly.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Instantly.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Instantly in the context of marketing automation use cases before implementation.",
        "useCases": [
          "Document Instantly as part of your marketing automation stack evaluation.",
          "Create a discoverable SEO landing page for Instantly while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "bombbomb",
        "name": "Bombbomb (video)",
        "whatItDoes": "Creates a planned Bombbomb (video) integration page for HelloGrowthCRM so teams can discover marketing automation workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Bombbomb (video).",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Bombbomb (video).",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Bombbomb (video).",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Bombbomb (video) in the context of marketing automation use cases before implementation.",
        "useCases": [
          "Document Bombbomb (video) as part of your marketing automation stack evaluation.",
          "Create a discoverable SEO landing page for Bombbomb (video) while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "reachdesk",
        "name": "Reachdesk (gifting)",
        "whatItDoes": "Creates a planned Reachdesk (gifting) integration page for HelloGrowthCRM so teams can discover marketing automation workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Reachdesk (gifting).",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Reachdesk (gifting).",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Reachdesk (gifting).",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Reachdesk (gifting) in the context of marketing automation use cases before implementation.",
        "useCases": [
          "Document Reachdesk (gifting) as part of your marketing automation stack evaluation.",
          "Create a discoverable SEO landing page for Reachdesk (gifting) while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "sendoso",
        "name": "Sendoso (gifting)",
        "whatItDoes": "Creates a planned Sendoso (gifting) integration page for HelloGrowthCRM so teams can discover marketing automation workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Sendoso (gifting).",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Sendoso (gifting).",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Sendoso (gifting).",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Sendoso (gifting) in the context of marketing automation use cases before implementation.",
        "useCases": [
          "Document Sendoso (gifting) as part of your marketing automation stack evaluation.",
          "Create a discoverable SEO landing page for Sendoso (gifting) while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      }
    ]
  },
  {
    "slug": "helpdesk-customer-success",
    "title": "Helpdesk / Customer Success",
    "shortLabel": "Helpdesk / Customer Success",
    "integrations": [
      {
        "slug": "chatwoot",
        "name": "ChatWoot",
        "whatItDoes": "Creates a planned ChatWoot integration page for HelloGrowthCRM so teams can discover helpdesk / customer success workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → ChatWoot.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for ChatWoot.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with ChatWoot.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching ChatWoot in the context of helpdesk / customer success use cases before implementation.",
        "useCases": [
          "Document ChatWoot as part of your helpdesk / customer success stack evaluation.",
          "Create a discoverable SEO landing page for ChatWoot while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "helpscout",
        "name": "Helpscout",
        "whatItDoes": "Creates a planned Helpscout integration page for HelloGrowthCRM so teams can discover helpdesk / customer success workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Helpscout.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Helpscout.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Helpscout.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Helpscout in the context of helpdesk / customer success use cases before implementation.",
        "useCases": [
          "Document Helpscout as part of your helpdesk / customer success stack evaluation.",
          "Create a discoverable SEO landing page for Helpscout while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "front",
        "name": "Front",
        "whatItDoes": "Creates a planned Front integration page for HelloGrowthCRM so teams can discover helpdesk / customer success workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Front.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Front.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Front.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Front in the context of helpdesk / customer success use cases before implementation.",
        "useCases": [
          "Document Front as part of your helpdesk / customer success stack evaluation.",
          "Create a discoverable SEO landing page for Front while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "chiltipiper",
        "name": "Chiltipiper",
        "whatItDoes": "Creates a planned Chiltipiper integration page for HelloGrowthCRM so teams can discover helpdesk / customer success workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Chiltipiper.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Chiltipiper.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Chiltipiper.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Chiltipiper in the context of helpdesk / customer success use cases before implementation.",
        "useCases": [
          "Document Chiltipiper as part of your helpdesk / customer success stack evaluation.",
          "Create a discoverable SEO landing page for Chiltipiper while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "servicecloud",
        "name": "ServiceCloud",
        "whatItDoes": "Creates a planned ServiceCloud integration page for HelloGrowthCRM so teams can discover helpdesk / customer success workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → ServiceCloud.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for ServiceCloud.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with ServiceCloud.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching ServiceCloud in the context of helpdesk / customer success use cases before implementation.",
        "useCases": [
          "Document ServiceCloud as part of your helpdesk / customer success stack evaluation.",
          "Create a discoverable SEO landing page for ServiceCloud while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "olark",
        "name": "Olark",
        "whatItDoes": "Creates a planned Olark integration page for HelloGrowthCRM so teams can discover helpdesk / customer success workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Olark.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Olark.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Olark.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Olark in the context of helpdesk / customer success use cases before implementation.",
        "useCases": [
          "Document Olark as part of your helpdesk / customer success stack evaluation.",
          "Create a discoverable SEO landing page for Olark while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "smartsupp",
        "name": "Smartsupp",
        "whatItDoes": "Creates a planned Smartsupp integration page for HelloGrowthCRM so teams can discover helpdesk / customer success workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Smartsupp.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Smartsupp.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Smartsupp.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Smartsupp in the context of helpdesk / customer success use cases before implementation.",
        "useCases": [
          "Document Smartsupp as part of your helpdesk / customer success stack evaluation.",
          "Create a discoverable SEO landing page for Smartsupp while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "tawkto",
        "name": "Tawkto",
        "whatItDoes": "Creates a planned Tawkto integration page for HelloGrowthCRM so teams can discover helpdesk / customer success workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Tawkto.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Tawkto.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Tawkto.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Tawkto in the context of helpdesk / customer success use cases before implementation.",
        "useCases": [
          "Document Tawkto as part of your helpdesk / customer success stack evaluation.",
          "Create a discoverable SEO landing page for Tawkto while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "userlytics",
        "name": "Userlytics",
        "whatItDoes": "Creates a planned Userlytics integration page for HelloGrowthCRM so teams can discover helpdesk / customer success workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Userlytics.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Userlytics.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Userlytics.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Userlytics in the context of helpdesk / customer success use cases before implementation.",
        "useCases": [
          "Document Userlytics as part of your helpdesk / customer success stack evaluation.",
          "Create a discoverable SEO landing page for Userlytics while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "asknicely",
        "name": "AskNicely",
        "whatItDoes": "Creates a planned AskNicely integration page for HelloGrowthCRM so teams can discover helpdesk / customer success workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → AskNicely.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for AskNicely.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with AskNicely.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching AskNicely in the context of helpdesk / customer success use cases before implementation.",
        "useCases": [
          "Document AskNicely as part of your helpdesk / customer success stack evaluation.",
          "Create a discoverable SEO landing page for AskNicely while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      }
    ]
  },
  {
    "slug": "sales-engagement-dialer",
    "title": "Sales Engagement / Dialer",
    "shortLabel": "Sales Engagement / Dialer",
    "integrations": [
      {
        "slug": "aircall",
        "name": "Aircall",
        "whatItDoes": "Creates a planned Aircall integration page for HelloGrowthCRM so teams can discover Cloud telephony workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Aircall.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for Cloud telephony.",
          "Add the required credentials, webhook details, or connection information for Aircall.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Aircall.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Aircall in the context of Cloud telephony use cases before implementation.",
        "useCases": [
          "Document Aircall as part of your Cloud telephony stack evaluation.",
          "Create a discoverable SEO landing page for Aircall while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "ringcentral",
        "name": "RingCentral",
        "whatItDoes": "Creates a planned RingCentral integration page for HelloGrowthCRM so teams can discover Cloud telephony workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → RingCentral.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for Cloud telephony.",
          "Add the required credentials, webhook details, or connection information for RingCentral.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with RingCentral.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching RingCentral in the context of Cloud telephony use cases before implementation.",
        "useCases": [
          "Document RingCentral as part of your Cloud telephony stack evaluation.",
          "Create a discoverable SEO landing page for RingCentral while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "dialpad",
        "name": "Dialpad",
        "whatItDoes": "Creates a planned Dialpad integration page for HelloGrowthCRM so teams can discover Cloud telephony workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Dialpad.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for Cloud telephony.",
          "Add the required credentials, webhook details, or connection information for Dialpad.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Dialpad.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Dialpad in the context of Cloud telephony use cases before implementation.",
        "useCases": [
          "Document Dialpad as part of your Cloud telephony stack evaluation.",
          "Create a discoverable SEO landing page for Dialpad while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "8x8",
        "name": "8x8",
        "whatItDoes": "Creates a planned 8x8 integration page for HelloGrowthCRM so teams can discover Cloud telephony workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → 8x8.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for Cloud telephony.",
          "Add the required credentials, webhook details, or connection information for 8x8.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with 8x8.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching 8x8 in the context of Cloud telephony use cases before implementation.",
        "useCases": [
          "Document 8x8 as part of your Cloud telephony stack evaluation.",
          "Create a discoverable SEO landing page for 8x8 while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "justcall",
        "name": "JustCall",
        "whatItDoes": "Creates a planned JustCall integration page for HelloGrowthCRM so teams can discover Sales dialer workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → JustCall.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for Sales dialer.",
          "Add the required credentials, webhook details, or connection information for JustCall.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with JustCall.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching JustCall in the context of Sales dialer use cases before implementation.",
        "useCases": [
          "Document JustCall as part of your Sales dialer stack evaluation.",
          "Create a discoverable SEO landing page for JustCall while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "openphone",
        "name": "OpenPhone",
        "whatItDoes": "Creates a planned OpenPhone integration page for HelloGrowthCRM so teams can discover Cloud telephony workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → OpenPhone.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for Cloud telephony.",
          "Add the required credentials, webhook details, or connection information for OpenPhone.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with OpenPhone.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching OpenPhone in the context of Cloud telephony use cases before implementation.",
        "useCases": [
          "Document OpenPhone as part of your Cloud telephony stack evaluation.",
          "Create a discoverable SEO landing page for OpenPhone while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "plivo",
        "name": "Plivo",
        "whatItDoes": "Creates a planned Plivo integration page for HelloGrowthCRM so teams can discover SMS / voice API workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Plivo.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for SMS / voice API.",
          "Add the required credentials, webhook details, or connection information for Plivo.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Plivo.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Plivo in the context of SMS / voice API use cases before implementation.",
        "useCases": [
          "Document Plivo as part of your SMS / voice API stack evaluation.",
          "Create a discoverable SEO landing page for Plivo while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "knowlarity",
        "name": "Knowlarity",
        "whatItDoes": "Creates a planned Knowlarity integration page for HelloGrowthCRM so teams can discover India IVR workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Knowlarity.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for India IVR.",
          "Add the required credentials, webhook details, or connection information for Knowlarity.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Knowlarity.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Knowlarity in the context of India IVR use cases before implementation.",
        "useCases": [
          "Document Knowlarity as part of your India IVR stack evaluation.",
          "Create a discoverable SEO landing page for Knowlarity while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "goto-connect",
        "name": "GoTo Connect",
        "whatItDoes": "Creates a planned GoTo Connect integration page for HelloGrowthCRM so teams can discover UCaaS workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → GoTo Connect.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for UCaaS.",
          "Add the required credentials, webhook details, or connection information for GoTo Connect.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with GoTo Connect.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching GoTo Connect in the context of UCaaS use cases before implementation.",
        "useCases": [
          "Document GoTo Connect as part of your UCaaS stack evaluation.",
          "Create a discoverable SEO landing page for GoTo Connect while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "vonage",
        "name": "Vonage",
        "whatItDoes": "Creates a planned Vonage integration page for HelloGrowthCRM so teams can discover Communication API workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Vonage.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for Communication API.",
          "Add the required credentials, webhook details, or connection information for Vonage.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Vonage.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Vonage in the context of Communication API use cases before implementation.",
        "useCases": [
          "Document Vonage as part of your Communication API stack evaluation.",
          "Create a discoverable SEO landing page for Vonage while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "bandwidth",
        "name": "Bandwidth",
        "whatItDoes": "Creates a planned Bandwidth integration page for HelloGrowthCRM so teams can discover Voice API workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Bandwidth.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for Voice API.",
          "Add the required credentials, webhook details, or connection information for Bandwidth.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Bandwidth.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Bandwidth in the context of Voice API use cases before implementation.",
        "useCases": [
          "Document Bandwidth as part of your Voice API stack evaluation.",
          "Create a discoverable SEO landing page for Bandwidth while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "sinch",
        "name": "Sinch",
        "whatItDoes": "Creates a planned Sinch integration page for HelloGrowthCRM so teams can discover Communication platform workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Sinch.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for Communication platform.",
          "Add the required credentials, webhook details, or connection information for Sinch.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Sinch.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Sinch in the context of Communication platform use cases before implementation.",
        "useCases": [
          "Document Sinch as part of your Communication platform stack evaluation.",
          "Create a discoverable SEO landing page for Sinch while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "telnyx",
        "name": "Telnyx",
        "whatItDoes": "Creates a planned Telnyx integration page for HelloGrowthCRM so teams can discover Voice/SMS API workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Telnyx.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for Voice/SMS API.",
          "Add the required credentials, webhook details, or connection information for Telnyx.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Telnyx.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Telnyx in the context of Voice/SMS API use cases before implementation.",
        "useCases": [
          "Document Telnyx as part of your Voice/SMS API stack evaluation.",
          "Create a discoverable SEO landing page for Telnyx while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "servetel",
        "name": "Servetel",
        "whatItDoes": "Creates a planned Servetel integration page for HelloGrowthCRM so teams can discover India telephony workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Servetel.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for India telephony.",
          "Add the required credentials, webhook details, or connection information for Servetel.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Servetel.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Servetel in the context of India telephony use cases before implementation.",
        "useCases": [
          "Document Servetel as part of your India telephony stack evaluation.",
          "Create a discoverable SEO landing page for Servetel while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "tata-tele",
        "name": "Tata Tele",
        "whatItDoes": "Creates a planned Tata Tele integration page for HelloGrowthCRM so teams can discover India enterprise tel workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Tata Tele.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for India enterprise tel.",
          "Add the required credentials, webhook details, or connection information for Tata Tele.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Tata Tele.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Tata Tele in the context of India enterprise tel use cases before implementation.",
        "useCases": [
          "Document Tata Tele as part of your India enterprise tel stack evaluation.",
          "Create a discoverable SEO landing page for Tata Tele while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "ozonetel",
        "name": "Ozonetel",
        "whatItDoes": "Creates a planned Ozonetel integration page for HelloGrowthCRM so teams can discover India contact center workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Ozonetel.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for India contact center.",
          "Add the required credentials, webhook details, or connection information for Ozonetel.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Ozonetel.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Ozonetel in the context of India contact center use cases before implementation.",
        "useCases": [
          "Document Ozonetel as part of your India contact center stack evaluation.",
          "Create a discoverable SEO landing page for Ozonetel while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "textmagic",
        "name": "Textmagic",
        "whatItDoes": "Creates a planned Textmagic integration page for HelloGrowthCRM so teams can discover SMS marketing workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Textmagic.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for SMS marketing.",
          "Add the required credentials, webhook details, or connection information for Textmagic.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Textmagic.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Textmagic in the context of SMS marketing use cases before implementation.",
        "useCases": [
          "Document Textmagic as part of your SMS marketing stack evaluation.",
          "Create a discoverable SEO landing page for Textmagic while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "telr",
        "name": "Telr",
        "whatItDoes": "Creates a planned Telr integration page for HelloGrowthCRM so teams can discover UAE payment + SMS workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Telr.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for UAE payment + SMS.",
          "Add the required credentials, webhook details, or connection information for Telr.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Telr.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Telr in the context of UAE payment + SMS use cases before implementation.",
        "useCases": [
          "Document Telr as part of your UAE payment + SMS stack evaluation.",
          "Create a discoverable SEO landing page for Telr while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "clicksend",
        "name": "ClickSend",
        "whatItDoes": "Creates a planned ClickSend integration page for HelloGrowthCRM so teams can discover SMS / direct mail workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → ClickSend.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for SMS / direct mail.",
          "Add the required credentials, webhook details, or connection information for ClickSend.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with ClickSend.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching ClickSend in the context of SMS / direct mail use cases before implementation.",
        "useCases": [
          "Document ClickSend as part of your SMS / direct mail stack evaluation.",
          "Create a discoverable SEO landing page for ClickSend while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      }
    ]
  },
  {
    "slug": "email-calendar-extras",
    "title": "Email / Calendar Extras",
    "shortLabel": "Email / Calendar Extras",
    "integrations": [
      {
        "slug": "calendly",
        "name": "Calendly (oauth+webhook)",
        "whatItDoes": "Creates a planned Calendly (oauth+webhook) integration page for HelloGrowthCRM so teams can discover email / calendar extras workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Calendly (oauth+webhook).",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Calendly (oauth+webhook).",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Calendly (oauth+webhook).",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Calendly (oauth+webhook) in the context of email / calendar extras use cases before implementation.",
        "useCases": [
          "Document Calendly (oauth+webhook) as part of your email / calendar extras stack evaluation.",
          "Create a discoverable SEO landing page for Calendly (oauth+webhook) while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "cal-com",
        "name": "Cal.com",
        "whatItDoes": "Creates a planned Cal.com integration page for HelloGrowthCRM so teams can discover email / calendar extras workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Cal.com.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Cal.com.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Cal.com.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Cal.com in the context of email / calendar extras use cases before implementation.",
        "useCases": [
          "Document Cal.com as part of your email / calendar extras stack evaluation.",
          "Create a discoverable SEO landing page for Cal.com while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "acuity",
        "name": "Acuity",
        "whatItDoes": "Creates a planned Acuity integration page for HelloGrowthCRM so teams can discover email / calendar extras workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Acuity.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Acuity.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Acuity.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Acuity in the context of email / calendar extras use cases before implementation.",
        "useCases": [
          "Document Acuity as part of your email / calendar extras stack evaluation.",
          "Create a discoverable SEO landing page for Acuity while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "tidycal",
        "name": "TidyCal",
        "whatItDoes": "Creates a planned TidyCal integration page for HelloGrowthCRM so teams can discover email / calendar extras workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → TidyCal.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for TidyCal.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with TidyCal.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching TidyCal in the context of email / calendar extras use cases before implementation.",
        "useCases": [
          "Document TidyCal as part of your email / calendar extras stack evaluation.",
          "Create a discoverable SEO landing page for TidyCal while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "savvycal",
        "name": "SavvyCal",
        "whatItDoes": "Creates a planned SavvyCal integration page for HelloGrowthCRM so teams can discover email / calendar extras workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → SavvyCal.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for SavvyCal.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with SavvyCal.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching SavvyCal in the context of email / calendar extras use cases before implementation.",
        "useCases": [
          "Document SavvyCal as part of your email / calendar extras stack evaluation.",
          "Create a discoverable SEO landing page for SavvyCal while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "youcanbookme",
        "name": "YouCanBookMe",
        "whatItDoes": "Creates a planned YouCanBookMe integration page for HelloGrowthCRM so teams can discover email / calendar extras workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → YouCanBookMe.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for YouCanBookMe.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with YouCanBookMe.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching YouCanBookMe in the context of email / calendar extras use cases before implementation.",
        "useCases": [
          "Document YouCanBookMe as part of your email / calendar extras stack evaluation.",
          "Create a discoverable SEO landing page for YouCanBookMe while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "oncehub",
        "name": "OnceHub",
        "whatItDoes": "Creates a planned OnceHub integration page for HelloGrowthCRM so teams can discover email / calendar extras workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → OnceHub.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for OnceHub.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with OnceHub.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching OnceHub in the context of email / calendar extras use cases before implementation.",
        "useCases": [
          "Document OnceHub as part of your email / calendar extras stack evaluation.",
          "Create a discoverable SEO landing page for OnceHub while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "reclaimai",
        "name": "ReclaimAI",
        "whatItDoes": "Creates a planned ReclaimAI integration page for HelloGrowthCRM so teams can discover email / calendar extras workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → ReclaimAI.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for ReclaimAI.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with ReclaimAI.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching ReclaimAI in the context of email / calendar extras use cases before implementation.",
        "useCases": [
          "Document ReclaimAI as part of your email / calendar extras stack evaluation.",
          "Create a discoverable SEO landing page for ReclaimAI while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      }
    ]
  },
  {
    "slug": "esign-document",
    "title": "ESign / Document",
    "shortLabel": "ESign / Document",
    "integrations": [
      {
        "slug": "adobe-sign",
        "name": "Adobe Sign",
        "whatItDoes": "Creates a planned Adobe Sign integration page for HelloGrowthCRM so teams can discover esign / document workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Adobe Sign.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Adobe Sign.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Adobe Sign.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Adobe Sign in the context of esign / document use cases before implementation.",
        "useCases": [
          "Document Adobe Sign as part of your esign / document stack evaluation.",
          "Create a discoverable SEO landing page for Adobe Sign while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "dropboxsign",
        "name": "DropboxSign (formerly HelloSign)",
        "whatItDoes": "Creates a planned DropboxSign (formerly HelloSign) integration page for HelloGrowthCRM so teams can discover esign / document workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → DropboxSign (formerly HelloSign).",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for DropboxSign (formerly HelloSign).",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with DropboxSign (formerly HelloSign).",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching DropboxSign (formerly HelloSign) in the context of esign / document use cases before implementation.",
        "useCases": [
          "Document DropboxSign (formerly HelloSign) as part of your esign / document stack evaluation.",
          "Create a discoverable SEO landing page for DropboxSign (formerly HelloSign) while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "pandadoc",
        "name": "PandaDoc",
        "whatItDoes": "Creates a planned PandaDoc integration page for HelloGrowthCRM so teams can discover esign / document workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → PandaDoc.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for PandaDoc.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with PandaDoc.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching PandaDoc in the context of esign / document use cases before implementation.",
        "useCases": [
          "Document PandaDoc as part of your esign / document stack evaluation.",
          "Create a discoverable SEO landing page for PandaDoc while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "proposify",
        "name": "Proposify",
        "whatItDoes": "Creates a planned Proposify integration page for HelloGrowthCRM so teams can discover esign / document workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Proposify.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Proposify.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Proposify.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Proposify in the context of esign / document use cases before implementation.",
        "useCases": [
          "Document Proposify as part of your esign / document stack evaluation.",
          "Create a discoverable SEO landing page for Proposify while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "qwilr",
        "name": "Qwilr",
        "whatItDoes": "Creates a planned Qwilr integration page for HelloGrowthCRM so teams can discover esign / document workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Qwilr.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Qwilr.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Qwilr.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Qwilr in the context of esign / document use cases before implementation.",
        "useCases": [
          "Document Qwilr as part of your esign / document stack evaluation.",
          "Create a discoverable SEO landing page for Qwilr while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "betterproposals",
        "name": "BetterProposals",
        "whatItDoes": "Creates a planned BetterProposals integration page for HelloGrowthCRM so teams can discover esign / document workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → BetterProposals.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for BetterProposals.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with BetterProposals.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching BetterProposals in the context of esign / document use cases before implementation.",
        "useCases": [
          "Document BetterProposals as part of your esign / document stack evaluation.",
          "Create a discoverable SEO landing page for BetterProposals while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "notarize",
        "name": "Notarize",
        "whatItDoes": "Creates a planned Notarize integration page for HelloGrowthCRM so teams can discover esign / document workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Notarize.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Notarize.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Notarize.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Notarize in the context of esign / document use cases before implementation.",
        "useCases": [
          "Document Notarize as part of your esign / document stack evaluation.",
          "Create a discoverable SEO landing page for Notarize while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      }
    ]
  },
  {
    "slug": "storage-file",
    "title": "Storage / File",
    "shortLabel": "Storage / File",
    "integrations": [
      {
        "slug": "dropbox",
        "name": "Dropbox",
        "whatItDoes": "Creates a planned Dropbox integration page for HelloGrowthCRM so teams can discover storage / file workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Dropbox.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Dropbox.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Dropbox.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Dropbox in the context of storage / file use cases before implementation.",
        "useCases": [
          "Document Dropbox as part of your storage / file stack evaluation.",
          "Create a discoverable SEO landing page for Dropbox while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "box",
        "name": "Box",
        "whatItDoes": "Creates a planned Box integration page for HelloGrowthCRM so teams can discover storage / file workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Box.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Box.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Box.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Box in the context of storage / file use cases before implementation.",
        "useCases": [
          "Document Box as part of your storage / file stack evaluation.",
          "Create a discoverable SEO landing page for Box while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "google-drive",
        "name": "Google Drive (oauth)",
        "whatItDoes": "Creates a planned Google Drive (oauth) integration page for HelloGrowthCRM so teams can discover storage / file workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Google Drive (oauth).",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Google Drive (oauth).",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Google Drive (oauth).",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Google Drive (oauth) in the context of storage / file use cases before implementation.",
        "useCases": [
          "Document Google Drive (oauth) as part of your storage / file stack evaluation.",
          "Create a discoverable SEO landing page for Google Drive (oauth) while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "loom",
        "name": "Loom (video)",
        "whatItDoes": "Creates a planned Loom (video) integration page for HelloGrowthCRM so teams can discover storage / file workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Loom (video).",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Loom (video).",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Loom (video).",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Loom (video) in the context of storage / file use cases before implementation.",
        "useCases": [
          "Document Loom (video) as part of your storage / file stack evaluation.",
          "Create a discoverable SEO landing page for Loom (video) while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "vidyard",
        "name": "Vidyard (video)",
        "whatItDoes": "Creates a planned Vidyard (video) integration page for HelloGrowthCRM so teams can discover storage / file workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Vidyard (video).",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Vidyard (video).",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Vidyard (video).",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Vidyard (video) in the context of storage / file use cases before implementation.",
        "useCases": [
          "Document Vidyard (video) as part of your storage / file stack evaluation.",
          "Create a discoverable SEO landing page for Vidyard (video) while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "wistia",
        "name": "Wistia (video)",
        "whatItDoes": "Creates a planned Wistia (video) integration page for HelloGrowthCRM so teams can discover storage / file workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Wistia (video).",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Wistia (video).",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Wistia (video).",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Wistia (video) in the context of storage / file use cases before implementation.",
        "useCases": [
          "Document Wistia (video) as part of your storage / file stack evaluation.",
          "Create a discoverable SEO landing page for Wistia (video) while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      }
    ]
  },
  {
    "slug": "webhook-workflow",
    "title": "Webhook / Workflow",
    "shortLabel": "Webhook / Workflow",
    "integrations": [
      {
        "slug": "workato",
        "name": "Workato",
        "whatItDoes": "Creates a planned Workato integration page for HelloGrowthCRM so teams can discover webhook / workflow workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Workato.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Workato.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Workato.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Workato in the context of webhook / workflow use cases before implementation.",
        "useCases": [
          "Document Workato as part of your webhook / workflow stack evaluation.",
          "Create a discoverable SEO landing page for Workato while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "tray-io",
        "name": "Tray.io",
        "whatItDoes": "Creates a planned Tray.io integration page for HelloGrowthCRM so teams can discover webhook / workflow workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Tray.io.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Tray.io.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Tray.io.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Tray.io in the context of webhook / workflow use cases before implementation.",
        "useCases": [
          "Document Tray.io as part of your webhook / workflow stack evaluation.",
          "Create a discoverable SEO landing page for Tray.io while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "boomi",
        "name": "Boomi",
        "whatItDoes": "Creates a planned Boomi integration page for HelloGrowthCRM so teams can discover webhook / workflow workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Boomi.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Boomi.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Boomi.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Boomi in the context of webhook / workflow use cases before implementation.",
        "useCases": [
          "Document Boomi as part of your webhook / workflow stack evaluation.",
          "Create a discoverable SEO landing page for Boomi while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "snaplogic",
        "name": "Snaplogic",
        "whatItDoes": "Creates a planned Snaplogic integration page for HelloGrowthCRM so teams can discover webhook / workflow workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Snaplogic.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Snaplogic.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Snaplogic.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Snaplogic in the context of webhook / workflow use cases before implementation.",
        "useCases": [
          "Document Snaplogic as part of your webhook / workflow stack evaluation.",
          "Create a discoverable SEO landing page for Snaplogic while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "coda",
        "name": "Coda",
        "whatItDoes": "Creates a planned Coda integration page for HelloGrowthCRM so teams can discover webhook / workflow workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Coda.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Coda.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Coda.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Coda in the context of webhook / workflow use cases before implementation.",
        "useCases": [
          "Document Coda as part of your webhook / workflow stack evaluation.",
          "Create a discoverable SEO landing page for Coda while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "hightouch",
        "name": "Hightouch",
        "whatItDoes": "Creates a planned Hightouch integration page for HelloGrowthCRM so teams can discover webhook / workflow workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Hightouch.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Hightouch.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Hightouch.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Hightouch in the context of webhook / workflow use cases before implementation.",
        "useCases": [
          "Document Hightouch as part of your webhook / workflow stack evaluation.",
          "Create a discoverable SEO landing page for Hightouch while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "census",
        "name": "Census",
        "whatItDoes": "Creates a planned Census integration page for HelloGrowthCRM so teams can discover webhook / workflow workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Census.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Census.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Census.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Census in the context of webhook / workflow use cases before implementation.",
        "useCases": [
          "Document Census as part of your webhook / workflow stack evaluation.",
          "Create a discoverable SEO landing page for Census while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "rudderstack",
        "name": "Rudderstack",
        "whatItDoes": "Creates a planned Rudderstack integration page for HelloGrowthCRM so teams can discover webhook / workflow workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Rudderstack.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Rudderstack.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Rudderstack.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Rudderstack in the context of webhook / workflow use cases before implementation.",
        "useCases": [
          "Document Rudderstack as part of your webhook / workflow stack evaluation.",
          "Create a discoverable SEO landing page for Rudderstack while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "segment",
        "name": "Segment (source + destination)",
        "whatItDoes": "Creates a planned Segment (source + destination) integration page for HelloGrowthCRM so teams can discover webhook / workflow workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Segment (source + destination).",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Segment (source + destination).",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Segment (source + destination).",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Segment (source + destination) in the context of webhook / workflow use cases before implementation.",
        "useCases": [
          "Document Segment (source + destination) as part of your webhook / workflow stack evaluation.",
          "Create a discoverable SEO landing page for Segment (source + destination) while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      }
    ]
  },
  {
    "slug": "survey-nps-feedback",
    "title": "Survey / NPS / Feedback",
    "shortLabel": "Survey / NPS / Feedback",
    "integrations": [
      {
        "slug": "surveymonkey",
        "name": "SurveyMonkey",
        "whatItDoes": "Creates a planned SurveyMonkey integration page for HelloGrowthCRM so teams can discover survey / nps / feedback workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → SurveyMonkey.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for SurveyMonkey.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with SurveyMonkey.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching SurveyMonkey in the context of survey / nps / feedback use cases before implementation.",
        "useCases": [
          "Document SurveyMonkey as part of your survey / nps / feedback stack evaluation.",
          "Create a discoverable SEO landing page for SurveyMonkey while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "qualtrics",
        "name": "Qualtrics",
        "whatItDoes": "Creates a planned Qualtrics integration page for HelloGrowthCRM so teams can discover survey / nps / feedback workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Qualtrics.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Qualtrics.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Qualtrics.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Qualtrics in the context of survey / nps / feedback use cases before implementation.",
        "useCases": [
          "Document Qualtrics as part of your survey / nps / feedback stack evaluation.",
          "Create a discoverable SEO landing page for Qualtrics while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "delighted",
        "name": "Delighted",
        "whatItDoes": "Creates a planned Delighted integration page for HelloGrowthCRM so teams can discover survey / nps / feedback workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Delighted.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Delighted.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Delighted.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Delighted in the context of survey / nps / feedback use cases before implementation.",
        "useCases": [
          "Document Delighted as part of your survey / nps / feedback stack evaluation.",
          "Create a discoverable SEO landing page for Delighted while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "wootric",
        "name": "Wootric",
        "whatItDoes": "Creates a planned Wootric integration page for HelloGrowthCRM so teams can discover survey / nps / feedback workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Wootric.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Wootric.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Wootric.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Wootric in the context of survey / nps / feedback use cases before implementation.",
        "useCases": [
          "Document Wootric as part of your survey / nps / feedback stack evaluation.",
          "Create a discoverable SEO landing page for Wootric while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "survicate",
        "name": "Survicate",
        "whatItDoes": "Creates a planned Survicate integration page for HelloGrowthCRM so teams can discover survey / nps / feedback workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Survicate.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Survicate.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Survicate.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Survicate in the context of survey / nps / feedback use cases before implementation.",
        "useCases": [
          "Document Survicate as part of your survey / nps / feedback stack evaluation.",
          "Create a discoverable SEO landing page for Survicate while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      }
    ]
  },
  {
    "slug": "project-task-management",
    "title": "Project / Task Management",
    "shortLabel": "Project / Task Management",
    "integrations": [
      {
        "slug": "clickup",
        "name": "ClickUp",
        "whatItDoes": "Creates a planned ClickUp integration page for HelloGrowthCRM so teams can discover project / task management workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → ClickUp.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for ClickUp.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with ClickUp.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching ClickUp in the context of project / task management use cases before implementation.",
        "useCases": [
          "Document ClickUp as part of your project / task management stack evaluation.",
          "Create a discoverable SEO landing page for ClickUp while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "asana",
        "name": "Asana",
        "whatItDoes": "Creates a planned Asana integration page for HelloGrowthCRM so teams can discover project / task management workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Asana.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Asana.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Asana.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Asana in the context of project / task management use cases before implementation.",
        "useCases": [
          "Document Asana as part of your project / task management stack evaluation.",
          "Create a discoverable SEO landing page for Asana while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "basecamp",
        "name": "Basecamp",
        "whatItDoes": "Creates a planned Basecamp integration page for HelloGrowthCRM so teams can discover project / task management workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Basecamp.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Basecamp.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Basecamp.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Basecamp in the context of project / task management use cases before implementation.",
        "useCases": [
          "Document Basecamp as part of your project / task management stack evaluation.",
          "Create a discoverable SEO landing page for Basecamp while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "monday-com",
        "name": "Monday.com",
        "whatItDoes": "Creates a planned Monday.com integration page for HelloGrowthCRM so teams can discover project / task management workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Monday.com.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Monday.com.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Monday.com.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Monday.com in the context of project / task management use cases before implementation.",
        "useCases": [
          "Document Monday.com as part of your project / task management stack evaluation.",
          "Create a discoverable SEO landing page for Monday.com while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "wrike",
        "name": "Wrike",
        "whatItDoes": "Creates a planned Wrike integration page for HelloGrowthCRM so teams can discover project / task management workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Wrike.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Wrike.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Wrike.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Wrike in the context of project / task management use cases before implementation.",
        "useCases": [
          "Document Wrike as part of your project / task management stack evaluation.",
          "Create a discoverable SEO landing page for Wrike while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "smartsheet",
        "name": "Smartsheet",
        "whatItDoes": "Creates a planned Smartsheet integration page for HelloGrowthCRM so teams can discover project / task management workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Smartsheet.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Smartsheet.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Smartsheet.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Smartsheet in the context of project / task management use cases before implementation.",
        "useCases": [
          "Document Smartsheet as part of your project / task management stack evaluation.",
          "Create a discoverable SEO landing page for Smartsheet while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "teamwork",
        "name": "Teamwork",
        "whatItDoes": "Creates a planned Teamwork integration page for HelloGrowthCRM so teams can discover project / task management workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Teamwork.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Teamwork.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Teamwork.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Teamwork in the context of project / task management use cases before implementation.",
        "useCases": [
          "Document Teamwork as part of your project / task management stack evaluation.",
          "Create a discoverable SEO landing page for Teamwork while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "ms-dynamics-365",
        "name": "MS Dynamics 365",
        "whatItDoes": "Creates a planned MS Dynamics 365 integration page for HelloGrowthCRM so teams can discover project / task management workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → MS Dynamics 365.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for MS Dynamics 365.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with MS Dynamics 365.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching MS Dynamics 365 in the context of project / task management use cases before implementation.",
        "useCases": [
          "Document MS Dynamics 365 as part of your project / task management stack evaluation.",
          "Create a discoverable SEO landing page for MS Dynamics 365 while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      }
    ]
  },
  {
    "slug": "other-vertical-misc",
    "title": "Other Vertical / Misc",
    "shortLabel": "Other Vertical / Misc",
    "integrations": [
      {
        "slug": "adobesign",
        "name": "AdobeSign",
        "whatItDoes": "Creates a planned AdobeSign integration page for HelloGrowthCRM so teams can discover other vertical / misc workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → AdobeSign.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for AdobeSign.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with AdobeSign.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching AdobeSign in the context of other vertical / misc use cases before implementation.",
        "useCases": [
          "Document AdobeSign as part of your other vertical / misc stack evaluation.",
          "Create a discoverable SEO landing page for AdobeSign while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "atlassian-connect",
        "name": "Atlassian Connect",
        "whatItDoes": "Creates a planned Atlassian Connect integration page for HelloGrowthCRM so teams can discover other vertical / misc workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Atlassian Connect.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Atlassian Connect.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Atlassian Connect.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Atlassian Connect in the context of other vertical / misc use cases before implementation.",
        "useCases": [
          "Document Atlassian Connect as part of your other vertical / misc stack evaluation.",
          "Create a discoverable SEO landing page for Atlassian Connect while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "authzero",
        "name": "AuthZero (Auth0)",
        "whatItDoes": "Creates a planned AuthZero (Auth0) integration page for HelloGrowthCRM so teams can discover other vertical / misc workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → AuthZero (Auth0).",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for AuthZero (Auth0).",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with AuthZero (Auth0).",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching AuthZero (Auth0) in the context of other vertical / misc use cases before implementation.",
        "useCases": [
          "Document AuthZero (Auth0) as part of your other vertical / misc stack evaluation.",
          "Create a discoverable SEO landing page for AuthZero (Auth0) while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "buffer",
        "name": "Buffer (social)",
        "whatItDoes": "Creates a planned Buffer (social) integration page for HelloGrowthCRM so teams can discover other vertical / misc workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Buffer (social).",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Buffer (social).",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Buffer (social).",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Buffer (social) in the context of other vertical / misc use cases before implementation.",
        "useCases": [
          "Document Buffer (social) as part of your other vertical / misc stack evaluation.",
          "Create a discoverable SEO landing page for Buffer (social) while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "hootsuite",
        "name": "Hootsuite (social)",
        "whatItDoes": "Creates a planned Hootsuite (social) integration page for HelloGrowthCRM so teams can discover other vertical / misc workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Hootsuite (social).",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Hootsuite (social).",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Hootsuite (social).",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Hootsuite (social) in the context of other vertical / misc use cases before implementation.",
        "useCases": [
          "Document Hootsuite (social) as part of your other vertical / misc stack evaluation.",
          "Create a discoverable SEO landing page for Hootsuite (social) while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "mattermost",
        "name": "Mattermost (chat)",
        "whatItDoes": "Creates a planned Mattermost (chat) integration page for HelloGrowthCRM so teams can discover other vertical / misc workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Mattermost (chat).",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Mattermost (chat).",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Mattermost (chat).",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Mattermost (chat) in the context of other vertical / misc use cases before implementation.",
        "useCases": [
          "Document Mattermost (chat) as part of your other vertical / misc stack evaluation.",
          "Create a discoverable SEO landing page for Mattermost (chat) while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "rocket-chat",
        "name": "Rocket.Chat",
        "whatItDoes": "Creates a planned Rocket.Chat integration page for HelloGrowthCRM so teams can discover other vertical / misc workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Rocket.Chat.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Rocket.Chat.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Rocket.Chat.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Rocket.Chat in the context of other vertical / misc use cases before implementation.",
        "useCases": [
          "Document Rocket.Chat as part of your other vertical / misc stack evaluation.",
          "Create a discoverable SEO landing page for Rocket.Chat while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "appfollow",
        "name": "AppFollow",
        "whatItDoes": "Creates a planned AppFollow integration page for HelloGrowthCRM so teams can discover other vertical / misc workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → AppFollow.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for AppFollow.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with AppFollow.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching AppFollow in the context of other vertical / misc use cases before implementation.",
        "useCases": [
          "Document AppFollow as part of your other vertical / misc stack evaluation.",
          "Create a discoverable SEO landing page for AppFollow while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "posthog",
        "name": "Posthog",
        "whatItDoes": "Creates a planned Posthog integration page for HelloGrowthCRM so teams can discover other vertical / misc workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Posthog.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Posthog.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Posthog.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Posthog in the context of other vertical / misc use cases before implementation.",
        "useCases": [
          "Document Posthog as part of your other vertical / misc stack evaluation.",
          "Create a discoverable SEO landing page for Posthog while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "mixpanel",
        "name": "Mixpanel",
        "whatItDoes": "Creates a planned Mixpanel integration page for HelloGrowthCRM so teams can discover other vertical / misc workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Mixpanel.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Mixpanel.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Mixpanel.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Mixpanel in the context of other vertical / misc use cases before implementation.",
        "useCases": [
          "Document Mixpanel as part of your other vertical / misc stack evaluation.",
          "Create a discoverable SEO landing page for Mixpanel while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "amplitude",
        "name": "Amplitude",
        "whatItDoes": "Creates a planned Amplitude integration page for HelloGrowthCRM so teams can discover other vertical / misc workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Amplitude.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Amplitude.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Amplitude.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Amplitude in the context of other vertical / misc use cases before implementation.",
        "useCases": [
          "Document Amplitude as part of your other vertical / misc stack evaluation.",
          "Create a discoverable SEO landing page for Amplitude while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "fullstory",
        "name": "Fullstory",
        "whatItDoes": "Creates a planned Fullstory integration page for HelloGrowthCRM so teams can discover other vertical / misc workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Fullstory.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Fullstory.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Fullstory.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Fullstory in the context of other vertical / misc use cases before implementation.",
        "useCases": [
          "Document Fullstory as part of your other vertical / misc stack evaluation.",
          "Create a discoverable SEO landing page for Fullstory while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "replicate",
        "name": "Replicate (ML)",
        "whatItDoes": "Creates a planned Replicate (ML) integration page for HelloGrowthCRM so teams can discover other vertical / misc workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Replicate (ML).",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Replicate (ML).",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Replicate (ML).",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Replicate (ML) in the context of other vertical / misc use cases before implementation.",
        "useCases": [
          "Document Replicate (ML) as part of your other vertical / misc stack evaluation.",
          "Create a discoverable SEO landing page for Replicate (ML) while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "anthropic",
        "name": "Anthropic",
        "whatItDoes": "Creates a planned Anthropic integration page for HelloGrowthCRM so teams can discover other vertical / misc workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Anthropic.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Anthropic.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Anthropic.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Anthropic in the context of other vertical / misc use cases before implementation.",
        "useCases": [
          "Document Anthropic as part of your other vertical / misc stack evaluation.",
          "Create a discoverable SEO landing page for Anthropic while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "openai-gpt",
        "name": "OpenAI GPT",
        "whatItDoes": "Creates a planned OpenAI GPT integration page for HelloGrowthCRM so teams can discover other vertical / misc workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → OpenAI GPT.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for OpenAI GPT.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with OpenAI GPT.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching OpenAI GPT in the context of other vertical / misc use cases before implementation.",
        "useCases": [
          "Document OpenAI GPT as part of your other vertical / misc stack evaluation.",
          "Create a discoverable SEO landing page for OpenAI GPT while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "groq",
        "name": "Groq",
        "whatItDoes": "Creates a planned Groq integration page for HelloGrowthCRM so teams can discover other vertical / misc workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Groq.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Groq.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Groq.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Groq in the context of other vertical / misc use cases before implementation.",
        "useCases": [
          "Document Groq as part of your other vertical / misc stack evaluation.",
          "Create a discoverable SEO landing page for Groq while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "mistral",
        "name": "Mistral",
        "whatItDoes": "Creates a planned Mistral integration page for HelloGrowthCRM so teams can discover other vertical / misc workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Mistral.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Mistral.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Mistral.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Mistral in the context of other vertical / misc use cases before implementation.",
        "useCases": [
          "Document Mistral as part of your other vertical / misc stack evaluation.",
          "Create a discoverable SEO landing page for Mistral while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "cohere",
        "name": "Cohere",
        "whatItDoes": "Creates a planned Cohere integration page for HelloGrowthCRM so teams can discover other vertical / misc workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Cohere.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Cohere.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Cohere.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Cohere in the context of other vertical / misc use cases before implementation.",
        "useCases": [
          "Document Cohere as part of your other vertical / misc stack evaluation.",
          "Create a discoverable SEO landing page for Cohere while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "perplexity",
        "name": "Perplexity",
        "whatItDoes": "Creates a planned Perplexity integration page for HelloGrowthCRM so teams can discover other vertical / misc workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Perplexity.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Perplexity.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Perplexity.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Perplexity in the context of other vertical / misc use cases before implementation.",
        "useCases": [
          "Document Perplexity as part of your other vertical / misc stack evaluation.",
          "Create a discoverable SEO landing page for Perplexity while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "hugging-face",
        "name": "Hugging Face",
        "whatItDoes": "Creates a planned Hugging Face integration page for HelloGrowthCRM so teams can discover other vertical / misc workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Hugging Face.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Hugging Face.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Hugging Face.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Hugging Face in the context of other vertical / misc use cases before implementation.",
        "useCases": [
          "Document Hugging Face as part of your other vertical / misc stack evaluation.",
          "Create a discoverable SEO landing page for Hugging Face while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "pinecone",
        "name": "Pinecone (vector DB)",
        "whatItDoes": "Creates a planned Pinecone (vector DB) integration page for HelloGrowthCRM so teams can discover other vertical / misc workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Pinecone (vector DB).",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Pinecone (vector DB).",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Pinecone (vector DB).",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Pinecone (vector DB) in the context of other vertical / misc use cases before implementation.",
        "useCases": [
          "Document Pinecone (vector DB) as part of your other vertical / misc stack evaluation.",
          "Create a discoverable SEO landing page for Pinecone (vector DB) while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "weaviate",
        "name": "Weaviate",
        "whatItDoes": "Creates a planned Weaviate integration page for HelloGrowthCRM so teams can discover other vertical / misc workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Weaviate.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Weaviate.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Weaviate.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Weaviate in the context of other vertical / misc use cases before implementation.",
        "useCases": [
          "Document Weaviate as part of your other vertical / misc stack evaluation.",
          "Create a discoverable SEO landing page for Weaviate while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "qdrant",
        "name": "Qdrant",
        "whatItDoes": "Creates a planned Qdrant integration page for HelloGrowthCRM so teams can discover other vertical / misc workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Qdrant.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for Qdrant.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Qdrant.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Qdrant in the context of other vertical / misc use cases before implementation.",
        "useCases": [
          "Document Qdrant as part of your other vertical / misc stack evaluation.",
          "Create a discoverable SEO landing page for Qdrant while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "langsmith",
        "name": "LangSmith",
        "whatItDoes": "Creates a planned LangSmith integration page for HelloGrowthCRM so teams can discover other vertical / misc workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → LangSmith.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for LangSmith.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with LangSmith.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching LangSmith in the context of other vertical / misc use cases before implementation.",
        "useCases": [
          "Document LangSmith as part of your other vertical / misc stack evaluation.",
          "Create a discoverable SEO landing page for LangSmith while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "geminiext",
        "name": "GeminiExt",
        "whatItDoes": "Creates a planned GeminiExt integration page for HelloGrowthCRM so teams can discover other vertical / misc workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → GeminiExt.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for GeminiExt.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with GeminiExt.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching GeminiExt in the context of other vertical / misc use cases before implementation.",
        "useCases": [
          "Document GeminiExt as part of your other vertical / misc stack evaluation.",
          "Create a discoverable SEO landing page for GeminiExt while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "for-each-new-integration",
        "name": "For each new integration",
        "whatItDoes": "Creates a planned For each new integration integration page for HelloGrowthCRM so teams can discover other vertical / misc workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → For each new integration.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for For each new integration.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with For each new integration.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching For each new integration in the context of other vertical / misc use cases before implementation.",
        "useCases": [
          "Document For each new integration as part of your other vertical / misc stack evaluation.",
          "Create a discoverable SEO landing page for For each new integration while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "the-standard-pattern-is",
        "name": "the standard pattern is:",
        "whatItDoes": "Creates a planned the standard pattern is: integration page for HelloGrowthCRM so teams can discover other vertical / misc workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → the standard pattern is:.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for the standard pattern is:.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with the standard pattern is:.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching the standard pattern is: in the context of other vertical / misc use cases before implementation.",
        "useCases": [
          "Document the standard pattern is: as part of your other vertical / misc stack evaluation.",
          "Create a discoverable SEO landing page for the standard pattern is: while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      }
    ]
  },
  {
    "slug": "steps-for-engineering",
    "title": "Steps for engineering",
    "shortLabel": "Steps for engineering",
    "integrations": [
      {
        "slug": "2-add-config-to-oauth-providers-ts-registry-authorize-url",
        "name": "2. **Add config to `oauth-providers.ts` registry** (when consolidation is done) — authorize URL",
        "whatItDoes": "Creates a planned 2. **Add config to `oauth-providers.ts` registry** (when consolidation is done) — authorize URL integration page for HelloGrowthCRM so teams can discover steps for engineering workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → 2. **Add config to `oauth-providers.ts` registry** (when consolidation is done) — authorize URL.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for 2. **Add config to `oauth-providers.ts` registry** (when consolidation is done) — authorize URL.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with 2. **Add config to `oauth-providers.ts` registry** (when consolidation is done) — authorize URL.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching 2. **Add config to `oauth-providers.ts` registry** (when consolidation is done) — authorize URL in the context of steps for engineering use cases before implementation.",
        "useCases": [
          "Document 2. **Add config to `oauth-providers.ts` registry** (when consolidation is done) — authorize URL as part of your steps for engineering stack evaluation.",
          "Create a discoverable SEO landing page for 2. **Add config to `oauth-providers.ts` registry** (when consolidation is done) — authorize URL while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "token-url",
        "name": "token URL",
        "whatItDoes": "Creates a planned token URL integration page for HelloGrowthCRM so teams can discover steps for engineering workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → token URL.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for token URL.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with token URL.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching token URL in the context of steps for engineering use cases before implementation.",
        "useCases": [
          "Document token URL as part of your steps for engineering stack evaluation.",
          "Create a discoverable SEO landing page for token URL while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "scopes",
        "name": "scopes",
        "whatItDoes": "Creates a planned scopes integration page for HelloGrowthCRM so teams can discover steps for engineering workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → scopes.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for scopes.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with scopes.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching scopes in the context of steps for engineering use cases before implementation.",
        "useCases": [
          "Document scopes as part of your steps for engineering stack evaluation.",
          "Create a discoverable SEO landing page for scopes while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "4-add-usehook-src-hooks-use-provider-integration-ts-exposing-connect",
        "name": "4. **Add useHook** `src/hooks/use<Provider>Integration.ts` exposing `connect()`",
        "whatItDoes": "Creates a planned 4. **Add useHook** `src/hooks/use<Provider>Integration.ts` exposing `connect()` integration page for HelloGrowthCRM so teams can discover steps for engineering workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → 4. **Add useHook** `src/hooks/use<Provider>Integration.ts` exposing `connect()`.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for 4. **Add useHook** `src/hooks/use<Provider>Integration.ts` exposing `connect()`.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with 4. **Add useHook** `src/hooks/use<Provider>Integration.ts` exposing `connect()`.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching 4. **Add useHook** `src/hooks/use<Provider>Integration.ts` exposing `connect()` in the context of steps for engineering use cases before implementation.",
        "useCases": [
          "Document 4. **Add useHook** `src/hooks/use<Provider>Integration.ts` exposing `connect()` as part of your steps for engineering stack evaluation.",
          "Create a discoverable SEO landing page for 4. **Add useHook** `src/hooks/use<Provider>Integration.ts` exposing `connect()` while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "disconnect",
        "name": "`disconnect()`",
        "whatItDoes": "Creates a planned `disconnect()` integration page for HelloGrowthCRM so teams can discover steps for engineering workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → `disconnect()`.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for `disconnect()`.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with `disconnect()`.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching `disconnect()` in the context of steps for engineering use cases before implementation.",
        "useCases": [
          "Document `disconnect()` as part of your steps for engineering stack evaluation.",
          "Create a discoverable SEO landing page for `disconnect()` while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "isconnected",
        "name": "`isConnected`",
        "whatItDoes": "Creates a planned `isConnected` integration page for HelloGrowthCRM so teams can discover steps for engineering workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → `isConnected`.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for `isConnected`.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with `isConnected`.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching `isConnected` in the context of steps for engineering use cases before implementation.",
        "useCases": [
          "Document `isConnected` as part of your steps for engineering stack evaluation.",
          "Create a discoverable SEO landing page for `isConnected` while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "5-add-a-row-to-tenant-integrations-table-when-user-connects-with-provider",
        "name": "5. **Add a row to `tenant_integrations` table** when user connects (with `provider`",
        "whatItDoes": "Creates a planned 5. **Add a row to `tenant_integrations` table** when user connects (with `provider` integration page for HelloGrowthCRM so teams can discover steps for engineering workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → 5. **Add a row to `tenant_integrations` table** when user connects (with `provider`.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for 5. **Add a row to `tenant_integrations` table** when user connects (with `provider`.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with 5. **Add a row to `tenant_integrations` table** when user connects (with `provider`.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching 5. **Add a row to `tenant_integrations` table** when user connects (with `provider` in the context of steps for engineering use cases before implementation.",
        "useCases": [
          "Document 5. **Add a row to `tenant_integrations` table** when user connects (with `provider` as part of your steps for engineering stack evaluation.",
          "Create a discoverable SEO landing page for 5. **Add a row to `tenant_integrations` table** when user connects (with `provider` while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "tenant-id",
        "name": "`tenant_id`",
        "whatItDoes": "Creates a planned `tenant_id` integration page for HelloGrowthCRM so teams can discover steps for engineering workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → `tenant_id`.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for `tenant_id`.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with `tenant_id`.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching `tenant_id` in the context of steps for engineering use cases before implementation.",
        "useCases": [
          "Document `tenant_id` as part of your steps for engineering stack evaluation.",
          "Create a discoverable SEO landing page for `tenant_id` while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "credentials-json",
        "name": "`credentials` JSON",
        "whatItDoes": "Creates a planned `credentials` JSON integration page for HelloGrowthCRM so teams can discover steps for engineering workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → `credentials` JSON.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for `credentials` JSON.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with `credentials` JSON.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching `credentials` JSON in the context of steps for engineering use cases before implementation.",
        "useCases": [
          "Document `credentials` JSON as part of your steps for engineering stack evaluation.",
          "Create a discoverable SEO landing page for `credentials` JSON while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "is-active",
        "name": "`is_active`)",
        "whatItDoes": "Creates a planned `is_active`) integration page for HelloGrowthCRM so teams can discover steps for engineering workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → `is_active`).",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for `is_active`).",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with `is_active`).",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching `is_active`) in the context of steps for engineering use cases before implementation.",
        "useCases": [
          "Document `is_active`) as part of your steps for engineering stack evaluation.",
          "Create a discoverable SEO landing page for `is_active`) while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      }
    ]
  },
  {
    "slug": "what-customers-see",
    "title": "What customers see",
    "shortLabel": "What customers see",
    "integrations": [
      {
        "slug": "after-connect-status-flips",
        "name": "- After connect: status flips",
        "whatItDoes": "Creates a planned - After connect: status flips integration page for HelloGrowthCRM so teams can discover what customers see workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → - After connect: status flips.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for - After connect: status flips.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with - After connect: status flips.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching - After connect: status flips in the context of what customers see use cases before implementation.",
        "useCases": [
          "Document - After connect: status flips as part of your what customers see stack evaluation.",
          "Create a discoverable SEO landing page for - After connect: status flips while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "and-integration-appears-in-the-relevant-module",
        "name": "and integration appears in the relevant module (e.g. HubSpot contacts appear in Sales → Contacts → Sources)",
        "whatItDoes": "Creates a planned and integration appears in the relevant module (e.g. HubSpot contacts appear in Sales → Contacts → Sources) integration page for HelloGrowthCRM so teams can discover what customers see workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → and integration appears in the relevant module (e.g. HubSpot contacts appear in Sales → Contacts → Sources).",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for and integration appears in the relevant module (e.g. HubSpot contacts appear in Sales → Contacts → Sources).",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with and integration appears in the relevant module (e.g. HubSpot contacts appear in Sales → Contacts → Sources).",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching and integration appears in the relevant module (e.g. HubSpot contacts appear in Sales → Contacts → Sources) in the context of what customers see use cases before implementation.",
        "useCases": [
          "Document and integration appears in the relevant module (e.g. HubSpot contacts appear in Sales → Contacts → Sources) as part of your what customers see stack evaluation.",
          "Create a discoverable SEO landing page for and integration appears in the relevant module (e.g. HubSpot contacts appear in Sales → Contacts → Sources) while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "tab",
        "name": "Tab",
        "whatItDoes": "Creates a planned Tab integration page for HelloGrowthCRM so teams can discover # Integrations workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Tab.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for # Integrations.",
          "Add the required credentials, webhook details, or connection information for Tab.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Tab.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Tab in the context of # Integrations use cases before implementation.",
        "useCases": [
          "Document Tab as part of your # Integrations stack evaluation.",
          "Create a discoverable SEO landing page for Tab while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "crm",
        "name": "CRM",
        "whatItDoes": "Creates a planned CRM integration page for HelloGrowthCRM so teams can discover 8 workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → CRM.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for 8.",
          "Add the required credentials, webhook details, or connection information for CRM.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with CRM.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching CRM in the context of 8 use cases before implementation.",
        "useCases": [
          "Document CRM as part of your 8 stack evaluation.",
          "Create a discoverable SEO landing page for CRM while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "email",
        "name": "Email",
        "whatItDoes": "Creates a planned Email integration page for HelloGrowthCRM so teams can discover 4 workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Email.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for 4.",
          "Add the required credentials, webhook details, or connection information for Email.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Email.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Email in the context of 4 use cases before implementation.",
        "useCases": [
          "Document Email as part of your 4 stack evaluation.",
          "Create a discoverable SEO landing page for Email while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "email-marketing",
        "name": "Email Marketing",
        "whatItDoes": "Creates a planned Email Marketing integration page for HelloGrowthCRM so teams can discover 8 workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Email Marketing.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for 8.",
          "Add the required credentials, webhook details, or connection information for Email Marketing.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Email Marketing.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Email Marketing in the context of 8 use cases before implementation.",
        "useCases": [
          "Document Email Marketing as part of your 8 stack evaluation.",
          "Create a discoverable SEO landing page for Email Marketing while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "sms-voice",
        "name": "SMS / Voice",
        "whatItDoes": "Creates a planned SMS / Voice integration page for HelloGrowthCRM so teams can discover 5 workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → SMS / Voice.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for 5.",
          "Add the required credentials, webhook details, or connection information for SMS / Voice.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with SMS / Voice.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching SMS / Voice in the context of 5 use cases before implementation.",
        "useCases": [
          "Document SMS / Voice as part of your 5 stack evaluation.",
          "Create a discoverable SEO landing page for SMS / Voice while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "calendar",
        "name": "Calendar",
        "whatItDoes": "Creates a planned Calendar integration page for HelloGrowthCRM so teams can discover 3 workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Calendar.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for 3.",
          "Add the required credentials, webhook details, or connection information for Calendar.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Calendar.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Calendar in the context of 3 use cases before implementation.",
        "useCases": [
          "Document Calendar as part of your 3 stack evaluation.",
          "Create a discoverable SEO landing page for Calendar while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "payment",
        "name": "Payment",
        "whatItDoes": "Creates a planned Payment integration page for HelloGrowthCRM so teams can discover 7 workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Payment.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for 7.",
          "Add the required credentials, webhook details, or connection information for Payment.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Payment.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Payment in the context of 7 use cases before implementation.",
        "useCases": [
          "Document Payment as part of your 7 stack evaluation.",
          "Create a discoverable SEO landing page for Payment while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "chat-support",
        "name": "Chat / Support",
        "whatItDoes": "Creates a planned Chat / Support integration page for HelloGrowthCRM so teams can discover 6 workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Chat / Support.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for 6.",
          "Add the required credentials, webhook details, or connection information for Chat / Support.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Chat / Support.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Chat / Support in the context of 6 use cases before implementation.",
        "useCases": [
          "Document Chat / Support as part of your 6 stack evaluation.",
          "Create a discoverable SEO landing page for Chat / Support while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "ecommerce",
        "name": "eCommerce",
        "whatItDoes": "Creates a planned eCommerce integration page for HelloGrowthCRM so teams can discover 5 workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → eCommerce.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for 5.",
          "Add the required credentials, webhook details, or connection information for eCommerce.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with eCommerce.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching eCommerce in the context of 5 use cases before implementation.",
        "useCases": [
          "Document eCommerce as part of your 5 stack evaluation.",
          "Create a discoverable SEO landing page for eCommerce while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "logistics",
        "name": "Logistics",
        "whatItDoes": "Creates a planned Logistics integration page for HelloGrowthCRM so teams can discover 4 workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Logistics.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for 4.",
          "Add the required credentials, webhook details, or connection information for Logistics.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Logistics.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Logistics in the context of 4 use cases before implementation.",
        "useCases": [
          "Document Logistics as part of your 4 stack evaluation.",
          "Create a discoverable SEO landing page for Logistics while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "lead-sources",
        "name": "Lead Sources",
        "whatItDoes": "Creates a planned Lead Sources integration page for HelloGrowthCRM so teams can discover 6 workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Lead Sources.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for 6.",
          "Add the required credentials, webhook details, or connection information for Lead Sources.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Lead Sources.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Lead Sources in the context of 6 use cases before implementation.",
        "useCases": [
          "Document Lead Sources as part of your 6 stack evaluation.",
          "Create a discoverable SEO landing page for Lead Sources while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "accounting",
        "name": "Accounting",
        "whatItDoes": "Creates a planned Accounting integration page for HelloGrowthCRM so teams can discover 7 workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Accounting.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for 7.",
          "Add the required credentials, webhook details, or connection information for Accounting.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Accounting.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Accounting in the context of 7 use cases before implementation.",
        "useCases": [
          "Document Accounting as part of your 7 stack evaluation.",
          "Create a discoverable SEO landing page for Accounting while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "enrichment",
        "name": "Enrichment",
        "whatItDoes": "Creates a planned Enrichment integration page for HelloGrowthCRM so teams can discover 5 workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Enrichment.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for 5.",
          "Add the required credentials, webhook details, or connection information for Enrichment.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Enrichment.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Enrichment in the context of 5 use cases before implementation.",
        "useCases": [
          "Document Enrichment as part of your 5 stack evaluation.",
          "Create a discoverable SEO landing page for Enrichment while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "document",
        "name": "Document",
        "whatItDoes": "Creates a planned Document integration page for HelloGrowthCRM so teams can discover 3 workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Document.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for 3.",
          "Add the required credentials, webhook details, or connection information for Document.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Document.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Document in the context of 3 use cases before implementation.",
        "useCases": [
          "Document Document as part of your 3 stack evaluation.",
          "Create a discoverable SEO landing page for Document while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "workflow",
        "name": "Workflow",
        "whatItDoes": "Creates a planned Workflow integration page for HelloGrowthCRM so teams can discover 4 workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Workflow.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for 4.",
          "Add the required credentials, webhook details, or connection information for Workflow.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Workflow.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Workflow in the context of 4 use cases before implementation.",
        "useCases": [
          "Document Workflow as part of your 4 stack evaluation.",
          "Create a discoverable SEO landing page for Workflow while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "analytics",
        "name": "Analytics",
        "whatItDoes": "Creates a planned Analytics integration page for HelloGrowthCRM so teams can discover 4 workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Analytics.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for 4.",
          "Add the required credentials, webhook details, or connection information for Analytics.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Analytics.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Analytics in the context of 4 use cases before implementation.",
        "useCases": [
          "Document Analytics as part of your 4 stack evaluation.",
          "Create a discoverable SEO landing page for Analytics while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "other",
        "name": "Other",
        "whatItDoes": "Creates a planned Other integration page for HelloGrowthCRM so teams can discover ~6 workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Other.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for ~6.",
          "Add the required credentials, webhook details, or connection information for Other.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Other.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Other in the context of ~6 use cases before implementation.",
        "useCases": [
          "Document Other as part of your ~6 stack evaluation.",
          "Create a discoverable SEO landing page for Other while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "type",
        "name": "Type",
        "whatItDoes": "Creates a planned Type integration page for HelloGrowthCRM so teams can discover Auth method workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → Type.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for Auth method.",
          "Add the required credentials, webhook details, or connection information for Type.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with Type.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching Type in the context of Auth method use cases before implementation.",
        "useCases": [
          "Document Type as part of your Auth method stack evaluation.",
          "Create a discoverable SEO landing page for Type while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "oauth-integrations",
        "name": "**OAuth integrations**",
        "whatItDoes": "Creates a planned **OAuth integrations** integration page for HelloGrowthCRM so teams can discover OAuth 2.0 (3-legged) workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → **OAuth integrations**.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for OAuth 2.0 (3-legged).",
          "Add the required credentials, webhook details, or connection information for **OAuth integrations**.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with **OAuth integrations**.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching **OAuth integrations** in the context of OAuth 2.0 (3-legged) use cases before implementation.",
        "useCases": [
          "Document **OAuth integrations** as part of your OAuth 2.0 (3-legged) stack evaluation.",
          "Create a discoverable SEO landing page for **OAuth integrations** while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "api-key-integrations",
        "name": "**API key integrations**",
        "whatItDoes": "Creates a planned **API key integrations** integration page for HelloGrowthCRM so teams can discover Stored API key workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → **API key integrations**.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for Stored API key.",
          "Add the required credentials, webhook details, or connection information for **API key integrations**.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with **API key integrations**.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching **API key integrations** in the context of Stored API key use cases before implementation.",
        "useCases": [
          "Document **API key integrations** as part of your Stored API key stack evaluation.",
          "Create a discoverable SEO landing page for **API key integrations** while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "webhook-integrations",
        "name": "**Webhook integrations**",
        "whatItDoes": "Creates a planned **Webhook integrations** integration page for HelloGrowthCRM so teams can discover Shared secret + signature workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → **Webhook integrations**.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for Shared secret + signature.",
          "Add the required credentials, webhook details, or connection information for **Webhook integrations**.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with **Webhook integrations**.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching **Webhook integrations** in the context of Shared secret + signature use cases before implementation.",
        "useCases": [
          "Document **Webhook integrations** as part of your Shared secret + signature stack evaluation.",
          "Create a discoverable SEO landing page for **Webhook integrations** while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "polling-integrations",
        "name": "**Polling integrations**",
        "whatItDoes": "Creates a planned **Polling integrations** integration page for HelloGrowthCRM so teams can discover Cron-triggered sync workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → **Polling integrations**.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for Cron-triggered sync.",
          "Add the required credentials, webhook details, or connection information for **Polling integrations**.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with **Polling integrations**.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching **Polling integrations** in the context of Cron-triggered sync use cases before implementation.",
        "useCases": [
          "Document **Polling integrations** as part of your Cron-triggered sync stack evaluation.",
          "Create a discoverable SEO landing page for **Polling integrations** while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "bidirectional-sync",
        "name": "**Bidirectional sync**",
        "whatItDoes": "Creates a planned **Bidirectional sync** integration page for HelloGrowthCRM so teams can discover OAuth + Webhook workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → **Bidirectional sync**.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded for OAuth + Webhook.",
          "Add the required credentials, webhook details, or connection information for **Bidirectional sync**.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with **Bidirectional sync**.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching **Bidirectional sync** in the context of OAuth + Webhook use cases before implementation.",
        "useCases": [
          "Document **Bidirectional sync** as part of your OAuth + Webhook stack evaluation.",
          "Create a discoverable SEO landing page for **Bidirectional sync** while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "journey-runner-every-5-min",
        "name": "- `journey-runner` — every 5 min",
        "whatItDoes": "Creates a planned - `journey-runner` — every 5 min integration page for HelloGrowthCRM so teams can discover what customers see workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → - `journey-runner` — every 5 min.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for - `journey-runner` — every 5 min.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with - `journey-runner` — every 5 min.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching - `journey-runner` — every 5 min in the context of what customers see use cases before implementation.",
        "useCases": [
          "Document - `journey-runner` — every 5 min as part of your what customers see stack evaluation.",
          "Create a discoverable SEO landing page for - `journey-runner` — every 5 min while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "processes-journey-enrollments",
        "name": "processes journey enrollments",
        "whatItDoes": "Creates a planned processes journey enrollments integration page for HelloGrowthCRM so teams can discover what customers see workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → processes journey enrollments.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for processes journey enrollments.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with processes journey enrollments.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching processes journey enrollments in the context of what customers see use cases before implementation.",
        "useCases": [
          "Document processes journey enrollments as part of your what customers see stack evaluation.",
          "Create a discoverable SEO landing page for processes journey enrollments while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "lead-automation-engine-every-5-min",
        "name": "- `lead-automation-engine` — every 5 min",
        "whatItDoes": "Creates a planned - `lead-automation-engine` — every 5 min integration page for HelloGrowthCRM so teams can discover what customers see workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → - `lead-automation-engine` — every 5 min.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for - `lead-automation-engine` — every 5 min.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with - `lead-automation-engine` — every 5 min.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching - `lead-automation-engine` — every 5 min in the context of what customers see use cases before implementation.",
        "useCases": [
          "Document - `lead-automation-engine` — every 5 min as part of your what customers see stack evaluation.",
          "Create a discoverable SEO landing page for - `lead-automation-engine` — every 5 min while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "runs-lead-automation-rules",
        "name": "runs lead automation rules",
        "whatItDoes": "Creates a planned runs lead automation rules integration page for HelloGrowthCRM so teams can discover what customers see workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → runs lead automation rules.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for runs lead automation rules.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with runs lead automation rules.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching runs lead automation rules in the context of what customers see use cases before implementation.",
        "useCases": [
          "Document runs lead automation rules as part of your what customers see stack evaluation.",
          "Create a discoverable SEO landing page for runs lead automation rules while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "smart-lead-routing-every-5-min",
        "name": "- `smart-lead-routing` — every 5 min",
        "whatItDoes": "Creates a planned - `smart-lead-routing` — every 5 min integration page for HelloGrowthCRM so teams can discover what customers see workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → - `smart-lead-routing` — every 5 min.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for - `smart-lead-routing` — every 5 min.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with - `smart-lead-routing` — every 5 min.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching - `smart-lead-routing` — every 5 min in the context of what customers see use cases before implementation.",
        "useCases": [
          "Document - `smart-lead-routing` — every 5 min as part of your what customers see stack evaluation.",
          "Create a discoverable SEO landing page for - `smart-lead-routing` — every 5 min while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "auto-assigns-inbound-leads",
        "name": "auto-assigns inbound leads",
        "whatItDoes": "Creates a planned auto-assigns inbound leads integration page for HelloGrowthCRM so teams can discover what customers see workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → auto-assigns inbound leads.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for auto-assigns inbound leads.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with auto-assigns inbound leads.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching auto-assigns inbound leads in the context of what customers see use cases before implementation.",
        "useCases": [
          "Document auto-assigns inbound leads as part of your what customers see stack evaluation.",
          "Create a discoverable SEO landing page for auto-assigns inbound leads while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "task-due-reminders-hourly",
        "name": "- `task-due-reminders` — hourly",
        "whatItDoes": "Creates a planned - `task-due-reminders` — hourly integration page for HelloGrowthCRM so teams can discover what customers see workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → - `task-due-reminders` — hourly.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for - `task-due-reminders` — hourly.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with - `task-due-reminders` — hourly.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching - `task-due-reminders` — hourly in the context of what customers see use cases before implementation.",
        "useCases": [
          "Document - `task-due-reminders` — hourly as part of your what customers see stack evaluation.",
          "Create a discoverable SEO landing page for - `task-due-reminders` — hourly while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "sends-task-due-reminders",
        "name": "sends task due reminders",
        "whatItDoes": "Creates a planned sends task due reminders integration page for HelloGrowthCRM so teams can discover what customers see workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → sends task due reminders.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for sends task due reminders.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with sends task due reminders.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching sends task due reminders in the context of what customers see use cases before implementation.",
        "useCases": [
          "Document sends task due reminders as part of your what customers see stack evaluation.",
          "Create a discoverable SEO landing page for sends task due reminders while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "send-meeting-reminders-hourly",
        "name": "- `send-meeting-reminders` — hourly",
        "whatItDoes": "Creates a planned - `send-meeting-reminders` — hourly integration page for HelloGrowthCRM so teams can discover what customers see workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → - `send-meeting-reminders` — hourly.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for - `send-meeting-reminders` — hourly.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with - `send-meeting-reminders` — hourly.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching - `send-meeting-reminders` — hourly in the context of what customers see use cases before implementation.",
        "useCases": [
          "Document - `send-meeting-reminders` — hourly as part of your what customers see stack evaluation.",
          "Create a discoverable SEO landing page for - `send-meeting-reminders` — hourly while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "meeting-reminders-15-min-before",
        "name": "meeting reminders 15 min before",
        "whatItDoes": "Creates a planned meeting reminders 15 min before integration page for HelloGrowthCRM so teams can discover what customers see workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → meeting reminders 15 min before.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for meeting reminders 15 min before.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with meeting reminders 15 min before.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching meeting reminders 15 min before in the context of what customers see use cases before implementation.",
        "useCases": [
          "Document meeting reminders 15 min before as part of your what customers see stack evaluation.",
          "Create a discoverable SEO landing page for meeting reminders 15 min before while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "daily-health-report-daily-6-am-tenant-timezone",
        "name": "- `daily-health-report` — daily 6 AM tenant timezone",
        "whatItDoes": "Creates a planned - `daily-health-report` — daily 6 AM tenant timezone integration page for HelloGrowthCRM so teams can discover what customers see workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → - `daily-health-report` — daily 6 AM tenant timezone.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for - `daily-health-report` — daily 6 AM tenant timezone.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with - `daily-health-report` — daily 6 AM tenant timezone.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching - `daily-health-report` — daily 6 AM tenant timezone in the context of what customers see use cases before implementation.",
        "useCases": [
          "Document - `daily-health-report` — daily 6 AM tenant timezone as part of your what customers see stack evaluation.",
          "Create a discoverable SEO landing page for - `daily-health-report` — daily 6 AM tenant timezone while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "email-digest",
        "name": "email digest",
        "whatItDoes": "Creates a planned email digest integration page for HelloGrowthCRM so teams can discover what customers see workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → email digest.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for email digest.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with email digest.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching email digest in the context of what customers see use cases before implementation.",
        "useCases": [
          "Document email digest as part of your what customers see stack evaluation.",
          "Create a discoverable SEO landing page for email digest while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "chat-inactivity-check-every-10-min",
        "name": "- `chat-inactivity-check` — every 10 min",
        "whatItDoes": "Creates a planned - `chat-inactivity-check` — every 10 min integration page for HelloGrowthCRM so teams can discover what customers see workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → - `chat-inactivity-check` — every 10 min.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for - `chat-inactivity-check` — every 10 min.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with - `chat-inactivity-check` — every 10 min.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching - `chat-inactivity-check` — every 10 min in the context of what customers see use cases before implementation.",
        "useCases": [
          "Document - `chat-inactivity-check` — every 10 min as part of your what customers see stack evaluation.",
          "Create a discoverable SEO landing page for - `chat-inactivity-check` — every 10 min while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "marks-idle-chat-conversations",
        "name": "marks idle chat conversations",
        "whatItDoes": "Creates a planned marks idle chat conversations integration page for HelloGrowthCRM so teams can discover what customers see workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → marks idle chat conversations.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for marks idle chat conversations.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with marks idle chat conversations.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching marks idle chat conversations in the context of what customers see use cases before implementation.",
        "useCases": [
          "Document marks idle chat conversations as part of your what customers see stack evaluation.",
          "Create a discoverable SEO landing page for marks idle chat conversations while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "kupe-reconcile-stuck-calls-every-5-min",
        "name": "- `kupe-reconcile-stuck-calls` — every 5 min",
        "whatItDoes": "Creates a planned - `kupe-reconcile-stuck-calls` — every 5 min integration page for HelloGrowthCRM so teams can discover what customers see workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → - `kupe-reconcile-stuck-calls` — every 5 min.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for - `kupe-reconcile-stuck-calls` — every 5 min.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with - `kupe-reconcile-stuck-calls` — every 5 min.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching - `kupe-reconcile-stuck-calls` — every 5 min in the context of what customers see use cases before implementation.",
        "useCases": [
          "Document - `kupe-reconcile-stuck-calls` — every 5 min as part of your what customers see stack evaluation.",
          "Create a discoverable SEO landing page for - `kupe-reconcile-stuck-calls` — every 5 min while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "fixes-stale-call-records",
        "name": "fixes stale call records",
        "whatItDoes": "Creates a planned fixes stale call records integration page for HelloGrowthCRM so teams can discover what customers see workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → fixes stale call records.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for fixes stale call records.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with fixes stale call records.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching fixes stale call records in the context of what customers see use cases before implementation.",
        "useCases": [
          "Document fixes stale call records as part of your what customers see stack evaluation.",
          "Create a discoverable SEO landing page for fixes stale call records while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "kupe-context-cleanup-daily",
        "name": "- `kupe-context-cleanup` — daily",
        "whatItDoes": "Creates a planned - `kupe-context-cleanup` — daily integration page for HelloGrowthCRM so teams can discover what customers see workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → - `kupe-context-cleanup` — daily.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for - `kupe-context-cleanup` — daily.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with - `kupe-context-cleanup` — daily.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching - `kupe-context-cleanup` — daily in the context of what customers see use cases before implementation.",
        "useCases": [
          "Document - `kupe-context-cleanup` — daily as part of your what customers see stack evaluation.",
          "Create a discoverable SEO landing page for - `kupe-context-cleanup` — daily while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "removes-expired-context",
        "name": "removes expired context",
        "whatItDoes": "Creates a planned removes expired context integration page for HelloGrowthCRM so teams can discover what customers see workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → removes expired context.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for removes expired context.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with removes expired context.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching removes expired context in the context of what customers see use cases before implementation.",
        "useCases": [
          "Document removes expired context as part of your what customers see stack evaluation.",
          "Create a discoverable SEO landing page for removes expired context while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "webhooks-retry-processor-every-1-min",
        "name": "- `webhooks-retry-processor` — every 1 min",
        "whatItDoes": "Creates a planned - `webhooks-retry-processor` — every 1 min integration page for HelloGrowthCRM so teams can discover what customers see workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → - `webhooks-retry-processor` — every 1 min.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for - `webhooks-retry-processor` — every 1 min.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with - `webhooks-retry-processor` — every 1 min.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching - `webhooks-retry-processor` — every 1 min in the context of what customers see use cases before implementation.",
        "useCases": [
          "Document - `webhooks-retry-processor` — every 1 min as part of your what customers see stack evaluation.",
          "Create a discoverable SEO landing page for - `webhooks-retry-processor` — every 1 min while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "retries-failed-outbound-webhooks",
        "name": "retries failed outbound webhooks",
        "whatItDoes": "Creates a planned retries failed outbound webhooks integration page for HelloGrowthCRM so teams can discover what customers see workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → retries failed outbound webhooks.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for retries failed outbound webhooks.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with retries failed outbound webhooks.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching retries failed outbound webhooks in the context of what customers see use cases before implementation.",
        "useCases": [
          "Document retries failed outbound webhooks as part of your what customers see stack evaluation.",
          "Create a discoverable SEO landing page for retries failed outbound webhooks while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "all-integrations-provider-functions-in-part-3-are-scaffolded-with-webhook-receivers-plus-oauth-handlers-plus-sync-stubs-to-bring-any-one-of-them-live",
        "name": "All `integrations-<provider>-*` functions in Part 3 are scaffolded with webhook receivers + (where applicable) OAuth handlers + sync stubs. To bring any one of them live",
        "whatItDoes": "Creates a planned All `integrations-<provider>-*` functions in Part 3 are scaffolded with webhook receivers + (where applicable) OAuth handlers + sync stubs. To bring any one of them live integration page for HelloGrowthCRM so teams can discover what customers see workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → All `integrations-<provider>-*` functions in Part 3 are scaffolded with webhook receivers + (where applicable) OAuth handlers + sync stubs. To bring any one of them live.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for All `integrations-<provider>-*` functions in Part 3 are scaffolded with webhook receivers + (where applicable) OAuth handlers + sync stubs. To bring any one of them live.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with All `integrations-<provider>-*` functions in Part 3 are scaffolded with webhook receivers + (where applicable) OAuth handlers + sync stubs. To bring any one of them live.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching All `integrations-<provider>-*` functions in Part 3 are scaffolded with webhook receivers + (where applicable) OAuth handlers + sync stubs. To bring any one of them live in the context of what customers see use cases before implementation.",
        "useCases": [
          "Document All `integrations-<provider>-*` functions in Part 3 are scaffolded with webhook receivers + (where applicable) OAuth handlers + sync stubs. To bring any one of them live as part of your what customers see stack evaluation.",
          "Create a discoverable SEO landing page for All `integrations-<provider>-*` functions in Part 3 are scaffolded with webhook receivers + (where applicable) OAuth handlers + sync stubs. To bring any one of them live while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "follow-the-steps-in-part-4",
        "name": "follow the steps in Part 4.",
        "whatItDoes": "Creates a planned follow the steps in Part 4. integration page for HelloGrowthCRM so teams can discover what customers see workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → follow the steps in Part 4..",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for follow the steps in Part 4..",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with follow the steps in Part 4..",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching follow the steps in Part 4. in the context of what customers see use cases before implementation.",
        "useCases": [
          "Document follow the steps in Part 4. as part of your what customers see stack evaluation.",
          "Create a discoverable SEO landing page for follow the steps in Part 4. while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "170-native-functions-ai",
        "name": "- **~170 native** functions (AI",
        "whatItDoes": "Creates a planned - **~170 native** functions (AI integration page for HelloGrowthCRM so teams can discover what customers see workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → - **~170 native** functions (AI.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for - **~170 native** functions (AI.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with - **~170 native** functions (AI.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching - **~170 native** functions (AI in the context of what customers see use cases before implementation.",
        "useCases": [
          "Document - **~170 native** functions (AI as part of your what customers see stack evaluation.",
          "Create a discoverable SEO landing page for - **~170 native** functions (AI while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "system",
        "name": "system",
        "whatItDoes": "Creates a planned system integration page for HelloGrowthCRM so teams can discover what customers see workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → system.",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for system.",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with system.",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching system in the context of what customers see use cases before implementation.",
        "useCases": [
          "Document system as part of your what customers see stack evaluation.",
          "Create a discoverable SEO landing page for system while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      },
      {
        "slug": "etc",
        "name": "etc.)",
        "whatItDoes": "Creates a planned etc.) integration page for HelloGrowthCRM so teams can discover what customers see workflows in the public integrations directory.",
        "setupSteps": [
          "Open HelloGrowthCRM and go to Settings → Integrations → etc.).",
          "Review your implementation scope first, because this integration is currently marked as scaffolded.",
          "Add the required credentials, webhook details, or connection information for etc.).",
          "Map the fields or workflow events you want HelloGrowthCRM to exchange with etc.).",
          "Run a test connection and confirm data appears as expected before using it in production."
        ],
        "usefulFor": "Teams researching etc.) in the context of what customers see use cases before implementation.",
        "useCases": [
          "Document etc.) as part of your what customers see stack evaluation.",
          "Create a discoverable SEO landing page for etc.) while implementation is still planned or partial."
        ],
        "status": "scaffolded"
      }
    ]
  }
];
