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
        ['brand-beige-2']: 'var(--brand-beige-2)',
        ['primary-white']: 'var(--primary-white)',
        ['brand-light']: 'var(--brand-light)',
        ['gray-paragraph']: 'var(--gray-paragraph)',
        ['heat-text-home']: 'var(--heat-text-home)'
      },
      fontFamily: {
        poppins: 'var(--poppins)',
        ['dm-sans']: 'var(--dm-sans)',
        montserrat: 'var(--montserrat)',
      },
      backgroundImage: {
        criancaHome: "url('/assets/criancaHome.png')",
        cardOneSobreNos: "url('/assets/cardOneSobreNos.png')",
        cardTwoSobreNos: "url('/assets/cardTwoSobreNos.png')",
        cardThreeSobreNos: "url('/assets/cardThreeSobreNos.png')",
        mainHomeDesktop: "url('/assets/homeDesktop/mainHomeDesktop.png')"
      },
      textShadow: {
        custom: '0 4px 4px 4px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
} satisfies Config;
