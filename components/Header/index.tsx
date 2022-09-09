import Head from 'next/head';
import { HeaderProps } from './Header.interfaces';

export function Header(props: HeaderProps) {
    return (
        <Head>
            <title>{props.title ? props.title : 'New Vision Debt'}</title>
            <meta charSet="utf-8"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="theme-color" content="#2B2F73"/>
            {typeof props.description !== 'undefined' &&
                <>
                    <meta name="description" content={props.description}/>
                    <meta property="og:description" content={props.description}/>
                    <meta property="twitter:description" content={props.description}/>
                </>
            }
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta property="og:title" content={props.title ? props.title : 'New Vision Debt'}/>
            <meta property="og:type" content="website"/>
            <meta property="og:url" content="https://www.newvisiondebtco.com"/>
            <meta property="og:image" content="https://www.newvisiondebtco.com/images/seo/home.jpg"/>
            <meta property="og:image:alt" content="Person working on debt"/>
            <meta property="og:locale" content="en_US"/>
            <meta property="og:site_name" content="New Vision Debt"/>
            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:domain" content="newvisiondebtco.com"/>
            <meta property="twitter:url" content="https://www.newvisiondebtco.com"/>
            <meta property="twitter:title" content={props.title ? props.title : 'New Vision Debt'}/>
            <meta property="twitter:image" content="https://www.newvisiondebtco.com/images/seo/home.jpg"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/images/icons/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="180x180" href="/images/icons/apple-icon-180x180.png"/>
            <link rel="apple-touch-icon" href="/images/icons/android-icon-192x192.png"/>
            <link rel="manifest" href="/manifest.json"/>
        </Head>
    );
};
