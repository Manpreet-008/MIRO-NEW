tailwind.config = {
  theme: {
    extend: {
      boxShadow: {
        full: '0px 0px 20px rgba(0, 0, 0, 0)',
      },
      backgroundImage: {
        hero: "url(//mirojewelers.com/cdn/shop/files/mirobanner.jpg?v=5668664105493959601)",
        'hero-banner': "url(//mirojewelers.com/cdn/shop/files/bg-top-banner.png?v=16446934429424032952)",
        'hero-banner-repairs': "url(//mirojewelers.com/cdn/shop/files/hero-banner-repairs.png?v=7691360302264347576)",
        'repair-service': "url(//mirojewelers.com/cdn/shop/files/top-repair-services1.png?v=2507855101609549503)",
        'shipping-banner': "url(//mirojewelers.com/cdn/shop/files/shipping-banner-bg.WEBP?8930)",
        'contact-banner': "url(//mirojewelers.com/cdn/shop/files/contact-us-banner.jpg?v=4370067967661566064)",
        'about-banner': "url(//mirojewelers.com/cdn/shop/files/about-banner-top.WEBP?8930)",
        'lifetime-warranty-banner': "url(//mirojewelers.com/cdn/shop/files/lifetime-warranty-banner.avif)?8930)",
        'terms-condition-banner': "url(//mirojewelers.com/cdn/shop/files/terms-condition-banner.WEBP?8930)",
        'privacy-policy-banner': 'url(privacy-policy-banner.jfif)',
        'return-policy-banner': "url(//mirojewelers.com/cdn/shop/files/return-policy-banner.WEBP?8930)",
        'custom-design-banner': "url(//mirojewelers.com/cdn/shop/files/custom-design-banner.jpg?v=8020260887239423221)",
        'design-form-banner': "url(//mirojewelers.com/cdn/shop/files/design-form-banner.WEBP?8930)",
        'view-all-engagement-rings': "url(//mirojewelers.com/cdn/shop/files/view-all-engagement-rings.jfif?8930)",
        'diamond-shapes-banner': "url(//mirojewelers.com/cdn/shop/files/diamond-shapes-banner.jpg?v=1628848086477600687)",
        'book-appointment-banner': "url(//mirojewelers.com/cdn/shop/files/design-form-slide-.jpg?8930)",
        'color-swatch': "url(//mirojewelers.com/cdn/shop/files/color-swatch.png?v=11923733136510158563)",
      },
      backgroundSize: {
        fillups: '100% 100%',
      },
      transitionDuration: {
        2000: '2000ms',
      },
      animation: {
        'slide-right': 'slide-right 1s ease-in-out',
        'slide-left': 'slide-left 1s ease-in-out',
      },
      keyframes: {
        'slide-right': {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        'slide-left': {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
      },
    },
    fontSize: {
      xsm: '12px !important',
      sm: '12px !important',
      md: '14px !important',
      intermediate: '16px !important',
      lg: '18px !important',
      xl: '24px !important',
      '2xl': '32px !important',
      xxl: '42px !important',
       bigger: "52px !important",
      rare: '64px !important',
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1400px',
      larger: '1680px',
    },
    fontFamily: {
      inter: 'Inter',
      lato: 'Lato',
         Didot: "DidotLH-Roman",
Transport: "Transport Medium",
    },
    container: {
      center: true,
      padding: '0.75rem',
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1326px',
      },
    },
  },
};