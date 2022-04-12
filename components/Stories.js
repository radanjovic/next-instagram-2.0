import {faker} from '@faker-js/faker';
import { useEffect, useState } from 'react';
import Story from './Story';
import { useSession } from 'next-auth/react';

export default function Stories() {
    const [users, setUsers] = useState([]);
    const {data: session} = useSession();

    useEffect( () => {
        const suggestions = [...Array(20)].map((_,i) => {
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

    return (
        <div className='flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-300'>
            {session && <Story key={session.user.email} img={session.user.image} username={session.user.username} />}
            {users.map(user => {
                return(
                    <Story key={user.id} img={user.avatar} username={user.username} />
                )
            })}
        </div>
    )
}