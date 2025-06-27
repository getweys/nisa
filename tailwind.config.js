// /** @type {import('tailwindcss').Config} */
// const defaultConfig = require("shadcn/ui/tailwind.config")

// module.exports = {
//   ...defaultConfig,
//   content: [
//     ...defaultConfig.content,
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//     "*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     ...defaultConfig.theme,
//     extend: {
//       ...defaultConfig.theme.extend,
//       colors: {
//         ...defaultConfig.theme.extend.colors,
//         primary: "#F7547F",
//         dark: "#212121",
//         pink: {
//           500: "#F7547F",
//           600: "#e63d6b",
//           50: "#fef7f7",
//           100: "#fee2e2",
//         },
//         secondary: {
//           DEFAULT: "#F7547F",
//           foreground: "#ffffff",
//         },
//         destructive: {
//           DEFAULT: "#ef4444",
//           foreground: "#ffffff",
//         },
//         muted: {
//           DEFAULT: "#e5e7eb",
//           foreground: "#6b7280",
//         },
//         accent: {
//           DEFAULT: "#2563eb",
//           foreground: "#ffffff",
//         },
//         popover: {
//           DEFAULT: "#ffffff",
//           foreground: "#111827",
//         },
//         card: {
//           DEFAULT: "#ffffff",
//           foreground: "#111827",
//         },
//       },
//       fontFamily: {
//         sans: ["Open Sans", "sans-serif"],
//       },
//       fontWeight: {
//         thin: "100",
//         extralight: "200",
//         light: "300",
//         normal: "400",
//         medium: "500",
//         semibold: "600",
//         bold: "700",
//         extrabold: "800",
//         black: "900",
//       },
//       animation: {
//         fadeInUp: "fadeInUp 0.6s ease-out",
//         "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
//       },
//       borderRadius: {
//         lg: "var(--radius)",
//         md: "calc(var(--radius) - 2px)",
//         sm: "calc(var(--radius) - 4px)",
//       },
//     },
//   },
//   plugins: [...defaultConfig.plugins, require("tailwindcss-animate")],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}", // Add if using src directory
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        // Add other colors as needed
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"), // Required for shadcn-ui animations
  ],
};
