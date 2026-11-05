// Single source of truth for all public contact details.
// Update here and every page (header, footer, contact page) stays in sync.

export interface PhoneNumber {
  display: string;
  /** E.164 digits for tel: / wa.me links */
  e164: string;
}

const phone = (display: string): PhoneNumber => ({
  display,
  e164: display.replace(/[^\d+]/g, ''),
});

export const contact = {
  emails: ['contactus@sanjivanifish.com', 'matin.sayed@sanjivanigroup.org.in'],
  customerCare: [phone('+91 83295 06329'), phone('+91 92845 23732')],
  bulkSales: [phone('+91 84461 10726')],
  /** Number used for the WhatsApp chat button */
  whatsapp: phone('+91 83295 06329'),
  address: {
    lines: [
      'Sanjivani Matsya Vikas Co-op. Society Ltd.',
      'Sahajanandnagar, Post-Shinganapur,',
      'Tal. Kopargaon — 423 603',
      'Dist. Ahilyanagar, Maharashtra',
    ],
    oneLine:
      'Sahajanandnagar, Post-Shinganapur, Tal. Kopargaon, Dist. Ahilyanagar, Maharashtra 423603',
  },
} as const;

export const primaryEmail = contact.emails[0];

export const telHref = (p: PhoneNumber) => `tel:${p.e164}`;

export const whatsappHref = (message = 'Namaste Sanjivani Fisheries, I would like to enquire about') =>
  `https://wa.me/${contact.whatsapp.e164.replace('+', '')}?text=${encodeURIComponent(message)}`;
