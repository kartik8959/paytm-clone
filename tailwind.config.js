tailwind.config = {
    theme: {
        screens: {
            sm: '450px',

            md: '768px',

            lg: '1024px',

            xl: '1280px',

            '2xl': '1536px',
        },
        extend: {
            colors: {
                "paytm-green": '#00baf2',
                "paytm-blue": "#0d3e80",
                "paytm-grey": "#f6f6f6"
            }
        },
        fontWeight: {
            hairline: 100,
            'extra-light': 100,
            thin: 200,
            light: 300,
            normal: 400,
            medium: 500,
            xl: 510,
            semibold: 650,
            bold: 700,
            extrabold: 800,
            'extra-bold': 800,
            black: 900,
        }
    }
}
