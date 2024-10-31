import { nextui } from '@nextui-org/react'
import type { Config } from 'tailwindcss'
import { lightTheme } from './src/config/theme';

const config: Config = {
  content: [
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        'sm': '0 3px 10px rgba(107, 125, 233, 0.1)',
        'md': '0 5px 10px rgba(107, 125, 233, 0.1)',
        'xl': '0 10px 20px -15px rgba(107, 125, 233, 0.9)',
      },
      colors: {
        'primary-soft' :'#f1f4fb'
      }
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        light: {
            layout: {
    
                radius: {
                    small: '5px',
                    medium: '5px',
                    large: '5px',
                }
    
            },
            colors: {
                background: '#f1f4fb',
                primary: {
                    '50': '#fffbeb',
                    '100': '#fef3c7',
                    '200': '#fde58a',
                    '300': '#fbd24e',
                    '400': '#fabe25',
                    '500': '#f49d0c',
                    '600': '#d87607',
                    '700': '#bc560a',
                    '800': '#923f0e',
                    '900': '#78340f',
                    DEFAULT:'#f49d0c',
                },
            }
        }
    }
    }),
  ],
}
export default config
