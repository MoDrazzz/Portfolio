declare namespace NodeJS {
  interface ProcessEnv {
    CONTENTFUL_SPACE_ID: string;
    CONTENTFUL_CONTENT_DELIVERY_TOKEN: string;
    NEXT_PUBLIC_EMAILJS_SERVICE_ID: string;
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: string;
    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: string;
    REVALIDATE_SECRET_TOKEN: string;
  }
}
