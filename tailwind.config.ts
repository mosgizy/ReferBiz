import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'focus-color': '',
        'primary-btn': '#FFA500',
        header: '#101828',
        'text-color': '#475467',
        log: '#8BC34A',
        'fade-gray': '#F9FAFB',
        'light-gray': '#F2F4F7',
        gray: '#344054',
        'gray-500': '#667085',
        'gray-400': '#98A2B3',
        'gray-200': '#EAECF0',
        'green-500':'#8BC34A'
      },
      fontSize: {},
      backgroundImage: {
        'focus-bg': 'linear-gradient(180deg, #4C6B29 0%, #638A35 100%);',
      },
      backgroundColor: {},
      boxShadow: {
        'btn-shadow': '2px 2px 0px 0px #3A521F',
        'google': '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
        dropdownShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)',
      },
    },
  },
  plugins: [],
};
export default config;
