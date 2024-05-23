//import type { Config } from "tailwindcss";

//const config: Config = {
//  content: [
//    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//  ],
//  theme: {
//    colors: {
//     'pearl' : '#d9ecea',
//     'peach' : '#f68080',
//      'gunmetal' : '#5f5f5f',
//      'tshirt' : '#334f5a',
//    },
//    extend: {
//    },
//  },
//  plugins: [],
//};
//export default config;

import type { Config } from "tailwindcss";
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      pearl : '#d9ecea',
      peach: '#f68080',
      gunmetal: '#5f5f5f',
      tshirt: '#334f5a',
    },
    extend: {},
  },
  plugins: [],
}