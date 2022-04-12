import '../styles/globals.css';
import {SessionProvider} from 'next-auth/react';
import {RecoilRoot} from 'recoil';
import Head from 'next/head';

export default function MyApp({Component, pageProps: {session, ...pageProps}}) {
    return (
        <SessionProvider session={session}>
        <RecoilRoot>
            <Head>
                <title>Instagram 2.0</title>
                <link rel='icon' href='/favicon.ico' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <meta name='author' content='Radan Jovic' />
            </Head>
            <Component {...pageProps} />
        </RecoilRoot>
        </SessionProvider>
    )
}