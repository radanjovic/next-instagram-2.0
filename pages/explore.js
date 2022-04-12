import Header from '../components/Header';
import Head from 'next/head';
import Explore from '../components/Explore';
import NotSignedIn from '../components/NotSignedIn';
import { useSession } from 'next-auth/react';

export default function ExplorePage() {
    const {data: session} = useSession();
    return <>
        <Head>
            <title>Explore - Instagram 2.0</title>
        </Head>
        <Header />
        {session ? <Explore /> : <NotSignedIn />}
    </>
}