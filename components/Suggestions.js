import {faker} from '@faker-js/faker';
import { useEffect, useState } from 'react';
import {useRouter} from 'next/router';

export default function Suggestions() {
    const router = useRouter();
    const [suggestions, setSuggestions] = useState([]);

    useEffect( () => {
        const dummy = [...Array(5)].map((_,i) => {
            const name = faker.name.findName();
            return {
                name,
                username: faker.internet.userName(name),
                avatar: faker.internet.avatar(),
                company: faker.company.companyName(),
                id: i
            }
        });

        setSuggestions(dummy);
    }, []);

    return (
        <div className='mt-4 ml-10'>
            <div className='flex justify-between text-sm mb-5'>
                <h3 className='text-sm font-bold text-gray-400'>Suggestions for you:</h3>
                <button onClick={() => router.push('/people')} className='text-gray-600 font-semibold'>See All</button>
            </div>

            {suggestions.map(user => (<div key={user.id} className='flex items-center justify-between mt-3'>
                <img src={user.avatar} alt='profile pic' className='w-10 h-10 rounded-full border p-[2px]' />
                <div className='flex-1 ml-4'>
                    <h2 className='font-semibold text-sm'>{user.username}</h2>
                    <h3 className='text-xs text-gray-400 truncate'>Works at {user.company}</h3>
                </div>
                <button className='text-blue-400 text-xs font-bold'>Follow</button>
            </div>))}
        </div>
    )
}