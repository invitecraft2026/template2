/**
 * CENTRAL WEDDING CONFIGURATION
 * Every editable detail of the invitation lives here.
 * Replace the placeholder values below with the real wedding details.
 */

export type WeddingEvent = {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  icon: "crescent" | "rings" | "lantern" | "dinner";
};

export const wedding = {
  bride: {
    firstName: "Zoya",
    fullName: "Zoya Rahman",
    parents: "Daughter of Mr. Faisal Rahman & Mrs. Sameera Faisal",
  },

  groom: {
    firstName: "Rayyan",
    fullName: "Rayyan Farooq",
    parents: "Son of Mr. Farooq Ahmed & Mrs. Shabana Farooq",
  },

  initials: "Z & R",

  /** Human readable date + time */
  date: "Sunday, 21 March 2027",

  dayName: "Sunday",
  dayNumber: "21",
  monthName: "March",
  year: "2027",

  time: "11:00 AM onwards",

  /** Used by countdown + calendar */
  dateISO: "2027-03-21T11:00:00",
  endISO: "2027-03-21T16:00:00",

  welcomeLine: "Together with our families",

  welcomeTitle: "Nikkah Ceremony",

  welcomeJoin: "of",

  venue: {
    name: "The Grand Orchid Convention Centre",
    address: "Kakkanad, Kochi, Kerala 682030",
    mapsQuery: "The Grand Orchid Convention Centre, Kakkanad, Kochi",
  },

  events: [
    {
      id: "mehndi",
      title: "Mehndi Evening",
      date: "Friday, 19 March 2027",
      time: "6:00 PM",
      venue: "Rahman Residence, Kochi",
      icon: "lantern",
    },

    {
      id: "nikah",
      title: "Nikkah Ceremony",
      date: "Sunday, 21 March 2027",
      time: "11:00 AM",
      venue: "The Grand Orchid Convention Centre",
      icon: "crescent",
    },

    {
      id: "reception",
      title: "Wedding Reception",
      date: "Sunday, 21 March 2027",
      time: "12:30 PM",
      venue: "The Grand Orchid Convention Centre",
      icon: "rings",
    },

    {
      id: "dinner",
      title: "Walima Dinner",
      date: "Monday, 22 March 2027",
      time: "7:00 PM",
      venue: "Royal Garden Banquet Hall, Kochi",
      icon: "dinner",
    },
  ] satisfies WeddingEvent[],

  dressCode: {
    description:
      "We invite you to celebrate with us in elegant traditional attire inspired by warm, romantic and earthy tones.",

    colors: [
      {
        name: "Ivory",
        hex: "#F8F3E9",
      },
      {
        name: "Champagne",
        hex: "#D9C19C",
      },
      {
        name: "Dusty Rose",
        hex: "#CFA6A3",
      },
      {
        name: "Burgundy",
        hex: "#6B2637",
      },
      {
        name: "Mauve",
        hex: "#A8808A",
      },
      {
        name: "Sage",
        hex: "#A8B09A",
      },
      {
        name: "Warm Brown",
        hex: "#7A5A48",
      },
    ],
  },

  invitationMessage:
    "With immense joy and gratitude, together with our families, we warmly invite you to witness the beginning of our forever and share in the blessings, laughter and beautiful memories of our special day.",

  quote:
    "“And He placed between you affection and mercy.” — Quran 30:21",

  guestInformation: [
    {
      title: "Arrival",
      body: "We kindly request our guests to arrive at least 20 minutes before the Nikkah ceremony begins.",
    },

    {
      title: "Dress Code",
      body: "Elegant traditional or formal attire in soft earthy, burgundy, champagne and neutral tones is warmly encouraged.",
    },

    {
      title: "Family",
      body: "Families and children are warmly welcome to join us in celebrating this beautiful occasion.",
    },

    {
      title: "Parking",
      body: "Complimentary guest parking will be available at the venue. Venue staff will be present to assist you on arrival.",
    },

    {
      title: "Photography",
      body: "We would love for you to enjoy the ceremony with us. Kindly avoid flash photography during the Nikkah.",
    },

    {
      title: "Gifts",
      body: "Your presence, prayers and blessings are the greatest gifts we could ask for.",
    },
  ],

  /** Optional background music */
  musicSrc: "",

  footer: {
    signOff: "With Love & Duas,",
    thanks:
      "We look forward to celebrating this beautiful beginning with you.",
  },
} as const;

export type Wedding = typeof wedding;
