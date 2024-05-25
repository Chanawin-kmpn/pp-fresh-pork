/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xxsm: "375px",
        xsm: "420px",
      },
      fontFamily: {
        sans: ["Noto Sans Thai", "sans-serif"],
      },
      fontSize: {
        // Heading font sizes
        h1: ["56px", { lineHeight: "61.6px", letterSpacing: "0px" }],
        h2: ["48px", { lineHeight: "52.8px", letterSpacing: "0px" }],
        h3: ["40px", { lineHeight: "44px", letterSpacing: "0px" }],
        h4: ["32px", { lineHeight: "35.2px", letterSpacing: "0px" }],
        h5: ["24px", { lineHeight: "26.4px", letterSpacing: "0px" }],
        h6: ["20px", { lineHeight: "22px", letterSpacing: "0px" }],

        // Body font sizes
        sm: ["14px", { lineHeight: "19.6px", letterSpacing: "0px" }],
        nm: ["16px", { lineHeight: "22.4px", letterSpacing: "0px" }],
        md: ["18px", { lineHeight: "25.2px", letterSpacing: "0px" }],
        lg: ["20px", { lineHeight: "28px", letterSpacing: "0px" }],
      },
      spacing: {
        para: "1em", // Assuming 1em typically equals the current font size in height
      },
      fontWeight: {
        normal: "400",
        bold: "700",
      },
      backgroundImage: {
        "left-bt-meat": "url('/assets/images/background/left-bt-meat-bg.png')",
        "right-t-meat": "url('/assets/images/background/right-t-meat-bg.png')",
      },
    },
    colors: {
      // Brand Colors
      primary: "#4A0000",
      secondary: "#A81620",
      third: "#FFB20F",

      // State Colors
      info: "#2F80ED",
      success: "#27AE60",
      warning: "#E2B93B",
      error: "#EB5757",

      // Black Colors
      black1: "#000000",
      black2: "#1D1D1D",
      black3: "#282828",
      white: "#FFFFFF",

      // Grey Colors
      gray1: "#333333",
      gray2: "#4F4F4F",
      gray3: "#828282",
      gray4: "#BDBDBD",
      gray5: "#E0E0E0",
    },
  },
  plugins: [],
};
