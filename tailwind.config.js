module.exports = {
    mode: 'jit',
    purge: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            container: {
                center: true,
                padding: {
                    DEFAULT: '1rem',
                },
            },
            textColor: {
                primary: '#fff',
            },
            colors: {
                gray: {
                    900: '#191919',
                    800: '#212121',
                },
            },
            backgroundColor: (theme) => ({
                primary: '#212121',
                secondary: '#ffed4a',
                danger: '#e3342f',
            }),
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
