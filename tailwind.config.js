const config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateColumns: {
        "main-lg": "224px minmax(0, 1fr)",
      },
      colors: {
        primary: "#2F404F",
        accent: "#3894A1",
        "primary-100": "#e8eaec",
        "primary-200": "#909aa3",
        "primary-300": "#54636f",
        "primary-400": "#2f404f",
        "primary-500": "#202d38",
        "primary-600": "#19242e",
        "primary-700": "#121b23",
        "accent-100": "#d9e9ec",
        "accent-200": "#a1c9cf",
        "accent-300": "#7ab4bd",
        "accent-400": "#3894a1",
        "accent-500": "#276d76",
        "accent-600": "#17484e",
        "accent-700": "#08262a",
        text: "#212524",
        "text-dark": "#e8f0ed",
        "base-primary": "#f0f1ee",
        "base-secondary": "#fafbfa",
        "base-primary-dark": "#080808",
        "base-secondary-dark": "#141414",
      },
    },
  },
  plugins: [],
};
export default config;
