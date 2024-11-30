import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mypink:"#F98585",
        myblack:"#21243D",
        myfooter:"#FAF5F5",
        recentBackground:"#F4E2E2",
        bgellipse: "#AA9F9F4F",
        background: "#CFA6A61C;",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
