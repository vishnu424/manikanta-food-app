/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      jeko: ['Jeko'],
      jekoBold: ['Jeko-Bold'],
      jekoMedium: ['Jeko Medium'],
      jekoSemibold: ['Jeko Semibold'],
      jekoExtrabold: ['Jeko ExtraBold'],
    },
    fontSize: {
      xxs: '10px',
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '22px',
      '3xl': '24px',
      '4xl': '28px',
      '5xl': '32px',
      '6xl': '38px',
      '7xl': '44px',
      '8xl': '52px',
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }
      md: '768px',
      // => @media (min-width: 768px) { ... }
      lg: '1024px',
      // => @media (min-width: 1024px) { ... }
      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      'mobile-320': { max: '320px' },
      // => @media (max-width: 320px) { ... }
      'mobile-375': { max: '375px' },
      // => @media (max-width: 375px) { ... }
      'mobile-425': { max: '425px' },
      // => @media (max-width: 425px) { ... }
      'tablet-768': { max: '768px' },
      tablet: { max: '820px' },
      // => @media (max-width: 640px) { ... }
      laptop: { max: '1024px' },
      // => @media (max-width: 1024px) { ... }
      desktop: { max: '1280px' },
      // => @media (max-width: 1280px) { ... }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '0.5rem',
        lg: '2rem',
      },
    },
    extend: {
      colors: {
        primary: '#DB2430',
        primary2: '#FF525C',
        primary3: '#ff525c1a',
        secondary: '#F8D8CF',
        secondary2: '#F0CBC0',
        chef: {
          red: '#DB2430',
          lite: '#FF525C',
          bold: '#B82E3F',
          bean: '#B8A198',
        },
        black: '#000000',
        white: {
          DEFAULT: '#FFFFFF',
        },
        grey: {
          DEFAULT: '#BEBEBE',
          dark: '#848484',
          disable: '#cccccc',
          lite: '#EAEDF2',
          liter: '#DEDEDE',
        },
        off: {
          white: '#F8F8F8',
          grey: '#F5F6F9',
        },
        rhubarb: {
          DEFAULT: '#460019',
          lite: '#F1ECEE',
          dark: '#3E0719',
        },
        apricot: {
          DEFAULT: '#FFD7CD',
          lite: '#FFF5F2',
        },
        tofu: {
          DEFAULT: '#E9DFD7',
          lite: '#FDF2E7',
          dark: '#F4D8B7',
        },
        bean: {
          DEFAULT: '#BEA096',
          lite: '#F1E4DF',
        },
        marble: {
          DEFAULT: '#EBEEF0',
          lite: '#EDF8FF',
        },
        eggshell: {
          DEFAULT: '#C3CDC8',
          lite: '#ECF4EF',
        },
        grape: '#6B3B9B',
        blueberry: '#1B6DBE',
        beetroot: '#DA1858',
        kale: '#2C7D4B',
        error: {
          DEFAULT: '#9B001C',
          container: '#FFEFED',
          lite: '#FFEFE0',
        },
        caution: {
          DEFAULT: '#BB5A00',
          container: '#FFD5AE',
        },
        attention: {
          DEFAULT: '#006CED',
          container: '#9DCEFF',
        },
        success: {
          DEFAULT: '#6CCB5F',
          secondary: '#2C7D4B',
          container: '#E6F2ED',
          copy: '#008A22',
          secondary1: '#0B8724',
        },
        plan: {
          custom: '#F4D8B7',
          wlp: '#FFC5B5',
          calorie: '#ADD2EB',
          muscle: '#A4DBBA',
        },
        solitude: {
          DEFAULT: '#E2E8F0',
        },
        neutrals: {
          liteGrey: '#DEDEDE',
        },
        blue: {
          DEFAULT: '#F5FBFF',
          lite: '#EAF4FF',
        },
      },
      borderRadius: {
        32: '32px',
        47: '47px',
        57: '57px',
        64: '64px',
      },
      boxShadow: {
        '3xl':
          ' 0px 32px 64px rgba(0, 0, 0, 0.1876), 0px 2px 21px rgba(0, 0, 0, 0.1474)',
        '4xl': '0px 0px 40px 6px rgba(154, 154, 154, 0.3)',
      },
    },
  },
  plugins: [
    // eslint-disable-next-line global-require
    require('@tailwindcss/line-clamp'),
    // eslint-disable-next-line global-require
    require('tailwind-scrollbar'),
    /* eslint-disable global-require */
  ],
  variants: {
    scrollbar: ['rounded'],
  },
};
