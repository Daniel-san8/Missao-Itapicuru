import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        ['brand-brown']: 'var(--brand-brown)',
        ['brand-beige']: 'var(--brand-beige)',
        ['primary-white']: 'var(--primary-white)',
        ['brand-light']: 'var(--brand-light)',
      },
      fontFamily: {
        poppins: 'var(--poppins)',
      },
    },
  },
  plugins: [],
} satisfies Config;
