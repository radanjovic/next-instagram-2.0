import { getProviders, signIn } from 'next-auth/react';
import Head from 'next/head';
import Header from '../../components/Header';

export default function SignIn({providers}) {
    return <>
        <Head>
            <title>Sign In - Instagram 2.0</title>
        </Head>
        <Header />
        <div className='flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center'>
            <img className='w-80' src='https://links.papareact.com/ocw' alt='logo' />
            <p className='font-xs italic'>
                This is not a real app, but a mock dummy clone app made for the purposes
                of learning web development with Next.js
            </p>
            <div className='mt-40 '>
                {Object.values(providers).map(provider => (
                    <div key={provider.name}>
                        <button className='p-3 bg-blue-500 rounded-lg text-white' onClick={() => signIn(provider.id, {callbackUrl: '/'})}>Sign in with {provider.name}</button>
                    </div>
                ))}
            </div>
        </div>
    </>
}

export async function getServerSideProps() {
    const providers = await getProviders();

    return {
        props: {
            providers
        }
    }
}