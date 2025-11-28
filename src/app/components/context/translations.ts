// Define the Language type centrally here to avoid circular dependencies
export type Language = "en" | "pl";

export const dictionary = {
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      about: "About",
      contact: "Contact",
    },
    hero: {
      bio: "Hello, I’m passionate about creating clean, responsive, and visually sharp interfaces. \nLet’s create!",
    },
    // NEW SECTION: Projects Table Headers
    projects: {
      headerProject: "Projects",
      headerTech: "Tech",
      headerDate: "Date",
    },
    footer: {
      ctaTitle: "Curious about what we can create together?",
      ctaSubtitle: "Let’s bring something extraordinary to life!",
      btn: "Get in Touch",
      status: "Available For Work",
      copyright: "All Rights Reserved",
      designedBy: "Designed & Built by Xebec13",
      links: {
        github: "Github",
        linkedin: "Linkedin"
      }
    },
    form: {
      title: "Shoot Request",
      namePlaceholder: "Your Name",
      emailPlaceholder: "Your Email",
      msgPlaceholder: "Tell me about your project...",
      btnSend: "Send Message",
      btnSending: "Sending...",
      successTitle: "Message Sent!",
      successMsg: "Thank you for reaching out. I'll get back to you shortly.",
      errorMsg: "Something went wrong. Please try again later."
    }
  },
  pl: {
    nav: {
      home: "Start",
      projects: "Projekty",
      about: "O mnie",
      contact: "Kontakt",
    },
    hero: {
      bio: "Cześć! Pasjonuję się tworzeniem czystych, responsywnych i dopracowanych wizualnie interfejsów. Stwórzmy coś razem!",
    },
    // NEW SECTION: Projects Table Headers
    projects: {
      headerProject: "Projekty",
      headerTech: "Technologie",
      headerDate: "Data",
    },
    footer: {
      ctaTitle: "Ciekawy, co możemy razem stworzyć?",
      ctaSubtitle: "Zrealizujmy wspólnie coś niezwykłego!",
      btn: "Napisz do mnie",
      status: "Dostępny do współpracy",
      copyright: "Wszelkie prawa zastrzeżone",
      designedBy: "Projekt i wykonanie: Xebec13",
      links: {
        github: "Github",
        linkedin: "Linkedin"
      }
    },
    form: {
      title: "Wyślij zgłoszenie",
      namePlaceholder: "Twoje Imię",
      emailPlaceholder: "Twój Email",
      msgPlaceholder: "Opisz swój projekt...",
      btnSend: "Wyślij Wiadomość",
      btnSending: "Wysyłanie...",
      successTitle: "Wiadomość Wysłana!",
      successMsg: "Dziękuję za kontakt. Odpiszę najszybciej jak to możliwe.",
      errorMsg: "Coś poszło nie tak. Spróbuj ponownie później."
    }
  }
};