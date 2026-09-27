export declare const initPixel: () => void;
export declare const markFacebookEntry: () => void;
export declare const track: (event: string, data?: any) => void;
export declare const trackPurchaseIfFromFacebook: (data: any) => void;
export declare const trackGooglePurchase: (orderData?: any, ticketNumber?: string | number, customerData?: any) => void;
export declare const trackGoogleWhatsAppClick: (orderData?: any) => void;
export declare const trackGoogleBeginCheckout: (value?: number | string) => void;
