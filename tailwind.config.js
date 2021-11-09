module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        olicy: ["olicy"],
        mohave: ["Mohave", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      container: {
        center: true,
      },
      backgroundImage: {
        "circle-pattern": "url('/abstract.jpg')",
        hero: "url('/hero.jpg')",
        hero2: "url('/hero2.jpeg')",
        "mobile-hero": "url('/mobile-hero.png')",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      fontSize: {
        "display-large": [
          "var(--font-display-large)",
          { lineHeight: "var(--line-height-display-large)" },
        ],
        "display-medium": [
          "var(--font-display-medium)",
          { lineHeight: "var(--line-height-display-medium)" },
        ],
        "display-small": [
          "var(--font-display-small)",
          { lineHeight: "var(--line-height-display-small)" },
        ],
        "headline-large": [
          "var(--font-headline-large)",
          { lineHeight: "var(--line-height-headline-large)" },
        ],
        "headline-medium": [
          "var(--font-headline-medium)",
          { lineHeight: "var(--line-height-headline-medium)" },
        ],
        "headline-small": [
          "var(--font-headline-small)",
          { lineHeight: "var(--line-height-headline-small)" },
        ],

        "title-large": [
          "var(--font-title-large)",
          { lineHeight: "var(--line-height-title-large)" },
        ],
        "title-medium": [
          "var(--font-title-medium)",
          { lineHeight: "var(--line-height-title-medium)" },
        ],
        "title-small": [
          "var(--font-title-small)",
          { lineHeight: "var(--line-height-title-small)" },
        ],

        "label-large": [
          "var(--font-label-large)",
          { lineHeight: "var(--line-height-label-large)" },
        ],
        "label-medium": [
          "var(--font-label-medium)",
          { lineHeight: "var(--line-height-label-medium)" },
        ],
        "label-small": [
          "var(--font-label-small)",
          { lineHeight: "var(--line-height-label-small)" },
        ],

        "body-large": [
          "var(--font-body-large)",
          { lineHeight: "var(--line-height-body-large)" },
        ],
        "body-medium": [
          "var(--font-body-medium)",
          { lineHeight: "var(--line-height-body-medium)" },
        ],
        "body-small": [
          "var(--font-body-small)",
          { lineHeight: "var(--line-height-body-small)" },
        ],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
