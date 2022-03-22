const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'wave-pattern': "url('/rbm/wave10.png')",
                'footer-texture': "url('/rbm/wave.svg')",
                'icon': "url('/rbm/iconbg.png')",
            },
            fontFamily: {
                sans: ['Poppins', ...defaultTheme.fontFamily.sans]
            }
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            gray: colors.gray,
            blue: colors.blue,
            'dark-blue': '#0B5387',
            'electric-blue': '#168FCB',
            'dark-green': '#7A972B',
            'green': '#AEC734',
            'light-green': '#CCED2D',
            'orange': '#F29416',
            'red': '#DC472F',
            'yellow': '#FEE13B',
            'dark-grey': '#393939',
        },
    },
    plugins: [],
}
