import Head from 'next/head';
import Header from '../components/Header';
import NotSignedIn from '../components/NotSignedIn';
import { useSession } from 'next-auth/react';
import Chat from '../components/Chat';


export default function DirectPage() {
    const {data:session} = useSession();


    return <>
            <Head>
                <title>Direct Messages - Instagram 2.0</title>
            </Head>
        <Header />
        {session ? <Chat /> : <NotSignedIn />}
    </>
}