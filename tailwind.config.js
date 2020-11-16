module.exports = {
    future: {
        purgeLayersByDefault: true,
        removeDeprecatedGapUtilities: true,
    },
    purge: {
        // + DESCOMENTAR PARA PRODUCCIÓN
        // enabled: true,
        // content: ['./build/**/*.html'],
    },
    theme: {
        fontFamily: {
            montserrat: ['Montserrat', 'sans-serif'],
            fira: ['Fira Sans', 'sans-serif']
        },
        extend: {
            colors: {
                magentaSM: '#E92197',
                grisSM: '#B6BAD0',
                prueba: {
                    100: '#000',
                    200: '#fff',
                    300: '#E92197',
                },
            },
            gridTemplateColumns: {
                '16': 'repeat(16, minmax(0, 1fr))',
            },
            zIndex: {
                '-1': '-1',
                '-2': '-2',
            },
        },
    },
    variants: {},
    plugins: [],
}