const colors = require('tailwindcss/colors');

module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.html', './src/**/*.js'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: (theme) => ({
                patronFondo: "url('./assets/img/patronFondo.png')",
            }),
            fontFamily: {
                montserrat: 'Montserrat, sans-serif',
            },
            colors: {
                teal: colors.teal,
                magenta: {
                    100: '#FFF5F7',
                    200: '#FED7E2',
                    300: '#FBB6CE',
                    400: '#F687B3',
                    500: '#ED64A6',
                    600: '#D53F8C',
                    700: '#B83280',
                    800: '#97266D',
                    900: '#702459',
                },
                legacyGray: {
                    100: '#F7FAFC',
                    200: '#EDF2F7',
                    300: '#E2E8F0',
                    400: '#CBD5E0',
                    500: '#A0AEC0',
                    600: '#718096',
                    700: '#4A5568',
                    800: '#2D3748',
                    900: '#1A202C',
                },
                blueGray: colors.blueGray,
                fuchsia: colors.fuchsia,
            },
            lineHeight: {
                28: '7rem',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/forms')],
};
