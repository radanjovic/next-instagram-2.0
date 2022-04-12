import {faker} from '@faker-js/faker';
import {useState, useEffect} from 'react';
import PostNSI from './PostNSI';
import {signIn} from 'next-auth/react';

export default function NotSignedIn() {
    const [posts, setPosts] = useState([]);

    useEffect( () => {
        const suggestions = [...Array(3)].map((_,i) => {
            const name = faker.name.findName();
            const image = `https://picsum.photos/id/${Math.floor(Math.random() * (1000 - 1 + 1)) + 1}/700`;
            return {
                name,
                username: faker.internet.userName(name),
                avatar: faker.internet.avatar(),
                image,
                caption: 'Log into you Instagram account to see more posts',
                id: i
            }
        });
        setPosts(suggestions);
    }, []);


    return <>
        <div className='max-w-6xl my-5'>
            <div className='m-3 text-center'>
                <p className='text-2xl my-5 font-serif'>Log Into Your Instagram Profile to See More Posts Like This...</p>
                <button className='border bg-blue-500 hover:bg-blue-600 py-1 px-4 text-white text-xl my-2 rounded-md' onClick={signIn}>Log In</button>
            </div>
            {posts.map(post => <PostNSI key={post.id} id={post.id} username={post.username} userImg={post.avatar} img={post.image} caption={post.caption} />)}
        </div>
    </>
}