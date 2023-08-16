import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px", // Small screens, tablets
      md: "768px", // Medium screens, laptops
      lg: "1024px", // Large screens
      xl: "1280px", // Extra-large screens
    },
    extend: {
      colors: {
        fcs_orange: "#EC6009",
        fcs_white: "#E9FAE5",
        fcs_black: "#061103",
        fcs_grey: "#B2C8AF",
        fcs_whiter: "#F5FDF3",
      },
      backgroundColor: {
        fcs_orange: "#EC6009",
      },
      textColor: {
        fcs_orange: "#EC6009",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      prefix: "nextui", // prefix for themes variables
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: "light", // default theme from the themes object
      defaultExtendTheme: "light", // default theme to extend on custom themes
      layout: {}, // common layout tokens (applied to all themes)
      themes: {
        light: {
          layout: {
            disabledOpacity: "0.3", // opacity-[0.3]
            radius: {
              small: "2px", // rounded-small
              medium: "4px", // rounded-medium
              large: "6px", // rounded-large
            },
            borderWidth: {
              small: "1px", // border-small
              medium: "1px", // border-medium
              large: "2px", // border-large
            }, // light theme layout tokens
            colors: {
              white: "#E9FAE5",
              black: "061103",
              orange: "EC6009",
            }, // light theme colors
          },
          dark: {
            layout: {
              disabledOpacity: "0.3", // opacity-[0.3]
              radius: {
                small: "2px", // rounded-small
                medium: "4px", // rounded-medium
                large: "6px", // rounded-large
              },
              borderWidth: {
                small: "1px", // border-small
                medium: "1px", // border-medium
                large: "2px", // border-large
              },
              colors: {
                white: "#E9FAE5",
                black: "061103",
                orange: "EC6009",
              },
            },
          },
        },
      },
    }),
  ],
};
export default config;
