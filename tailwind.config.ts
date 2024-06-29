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
      padding: {
        xl: "50px",
        '2xl':"90px",
      },
      screens: {
        sm: '600px',
        md: '728px',
        lg: '1150px',
        xl: '1455px',
        '2xl': '1696px',
        '3xl': '1921px',
      },
    },
  },
  plugins: [],
};
export default config;