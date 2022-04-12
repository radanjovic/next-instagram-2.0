import { useSession } from 'next-auth/react';
import {PencilAltIcon, ChatAlt2Icon} from '@heroicons/react/outline';
import {faker} from '@faker-js/faker';
import { useEffect, useState } from 'react';


export default function Chat() {
    const {data:session} = useSession();
    const [users, setUsers] = useState([]);

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

    return <>
        <div className='my-3  border border-gray-300 flex items-start justify-between max-w-4xl mx-auto'>
            <div className='md:w-[40%]'>
                <div className='flex items-center justify-between py-6 border-r border-b'>
                    <div className='text-center font-semibold flex-1'>{session?.user?.username}</div>
                    <div className='pr-2 cursor-pointer'><PencilAltIcon className='h-6 w-6' /></div>
                </div>
                <div className='border-r'>
                    {users.map(user => <div className='flex py-2 items-center cursor-pointer hover:bg-gray-200'>
                        <img className='m-1 h-14 w-14 rounded-full p-[1.5px] border-2 object-contain cursor-pointer' src={user.avatar} alt='profile pic' />
                        <div className='ml-2'>
                            <p className={`text-md ${user.id === 0 && 'font-bold'} ${user.id === 1 && 'font-bold'} ${user.id === 2 && 'font-bold'}`}>{user.name}</p>
                            <p className='text-sm text-gray-600'>Active {Math.floor(Math.random() * (60 - 1 + 1)) + 1} minutes ago</p>
                        </div>
                    </div>)}
                </div>
                
            </div>
            <div className='md:w-[60%] border-gray-300 text-center flex flex-col min-h-screen items-center justify-center'>
                <div className='text-center mx-auto flex w-20'><ChatAlt2Icon className='h-20' /></div>
                <div>
                    <h3 className='font-bold text-3xl my-2'>Your Messages</h3>
                    <p className='italic text-gray-700 my-2'>Send private photos or messages to friends or groups</p>
                </div>
                <div>
                    <button className='border border-blue-500 bg-blue-500 py-1 px-2 my-2 text-white hover:bg-blue-600 rounded-sm' type='button'>Send Message</button>
                </div>
            </div>
        </div>
    </>
}