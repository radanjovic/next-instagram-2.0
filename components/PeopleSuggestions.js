import {faker} from '@faker-js/faker';
import { useState, useEffect } from 'react';

export default function PeopleSuggestions() {
    const [users, setUsers] = useState([]);
    const [names, setNames] = useState([]);

    useEffect( () => {
        const randomNames = [...Array(30)].map((_,i) => {
            return faker.name.findName();
        });
        setNames(randomNames);
    }, []);

    console.log(names);

    useEffect( () => {
        const suggestions = [...Array(15)].map((_,i) => {
            const name = faker.name.findName();
            return {
                name,
                username: faker.internet.userName(name),
                avatar: faker.internet.avatar(),
                id: i
            }
        });
        setUsers(suggestions);
    }, []);

    return <div className='max-w-2xl my-10 mx-auto'>
        <p className='font-semibold text-lg mb-5'>Suggested</p>
        {users.map(user => <div className='flex items-center justify-between my-3'>
            <img className='w-14 h-14 rounded-full cursor-pointer' src={user.avatar} alt='profile pic' />
            <div className='flex-1 pl-5'>
                <p className='font-semibold text-sm cursor-pointer'>{user.username}</p>
                <p className='text-xs text-gray-400'>{user.name}</p>
                <p className='text-xs text-gray-400'>{user.id === 3 ? 'New to Instagram' : `Followed by ${names[Math.floor(Math.random() * (names.length - 0 + 1)) + 0]} and ${Math.floor(Math.random() * (10 - 1 + 1)) + 1} more`}</p>
            </div>
            <div>
                <button className='cursor-pointer border border-blue-500 bg-blue-500 hover:bg-blue-600 text-sm text-white font-semibold px-3 py-1 rounded-sm' type='button'>Follow</button>
            </div>
        </div>)}
    </div>
}