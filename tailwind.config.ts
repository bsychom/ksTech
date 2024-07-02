import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.css",
  ],
  theme: {
    extend: {},
    backgroundImage: {
      'bg-one': "url('/images/background/first.svg')",
      'bg-two': "url('/images/background/second.svg')",
      'bg-thre': "url('/images/background/third.svg')",
      'bg-for': "url('/images/background/for.svg')",
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
export default config;