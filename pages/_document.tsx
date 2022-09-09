import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    public render(): JSX.Element {
        return (
            <Html lang="en">
                <Head>
                    {/* <script dangerouslySetInnerHTML={{__html: `
                    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM}');
                    `}}></script>
                    <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTAG}`}></script>
                    <script dangerouslySetInnerHTML={{__html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GTAG}');
                    gtag('event', 'conversion', {'send_to': '${process.env.NEXT_PUBLIC_GTAG}/${process.env.NEXT_PUBLIC_GTM_PAGE_VIEW}'});
                    `}}></script>
                    <script async src={`https://www.googletagmanager.com/gtag/js?${process.env.NEXT_PUBLIC_GTAG2}`}></script>
                    <script dangerouslySetInnerHTML={{__html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GTAG2}');
                    `}}>
                    </script> */}
                    <script dangerouslySetInnerHTML={{__html:`
                    !function(f,b,e,v,n,t,s)
                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)}(window, document,'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', '${process.env.NEXT_PUBLIC_FBQ}');
                    fbq('track', 'PageView');
                    `}}></script>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet"/>
                    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: `
                        {
                            "@context": "https://schema.org",
                            "@type": "LocalBusiness",
                            "image": [],
                            "name": "New Vision Debt",
                            "priceRange": "$$$",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "3857 Birch Street Suite 25",
                                "addressLocality": "Newport Beach",
                                "addressRegion": "CA",
                                "postalCode": "92660",
                                "addressCountry": "US"
                            },
                            "geo": {
                                "@type": "GeoCoordinates",
                                "latitude": 33.6636008,
                                "longitude": -117.8735437
                            },
                            "telephone": "+18009211420",
                            "openingHoursSpecification": [
                                {
                                    "@type": "OpeningHoursSpecification",
                                    "dayOfWeek": [
                                        "Monday",
                                        "Tuesday",
                                        "Wednesday",
                                        "Thursday",
                                        "Friday"
                                    ],
                                    "opens": "08:00",
                                    "closes": "17:00"
                                }
                            ]
                        }
                    `}}></script>
                    <meta name="facebook-domain-verification" content="cm5qf23sjyglf55oi0fkhi3rri6ep9"/>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                    {/* <noscript><iframe src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM}`} height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript> */}
                    <noscript><img height="1" width="1" style={{display:'none'}} alt="Facebook Img" src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_FBQ}&ev=PageView&noscript=1`}/></noscript>
                </body>
            </Html>
        );
    }
}

export default MyDocument;
