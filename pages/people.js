import Header from '../components/Header';
import PeopleSuggestions from '../components/PeopleSuggestions';
import NotSignedIn from '../components/NotSignedIn';
import { useSession } from 'next-auth/react';
import Head from 'next/head';

export default function PeoplePage() {
    const {data: session} = useSession();

    return <>
        <Head>
            <title>People - Instagram 2.0</title>
        </Head>
        <Header />
        {session ? <PeopleSuggestions /> : <NotSignedIn />}
    </>
}