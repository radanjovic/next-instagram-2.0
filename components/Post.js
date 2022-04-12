import { BookmarkIcon, ChatIcon, DotsHorizontalIcon, EmojiHappyIcon, HeartIcon, PaperAirplaneIcon } from "@heroicons/react/outline";
import {HeartIcon as HeartIconFilled } from '@heroicons/react/solid';
import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, serverTimestamp, setDoc } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Moment from "react-moment";

export default function Post({id, username, userImg, img, caption}) {
    const {data: session} = useSession();
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');
    const [likes, setLikes] = useState([]);
    const [hasLiked, setHasLiked] = useState(false);

    useEffect( () => {
        return onSnapshot(query(collection(db, 'posts', id, 'comments'), orderBy('timestamp', 'desc')), snapshot => {
            setComments(snapshot.docs);
        });
    }, [db, id]);

    useEffect( () => {
        return onSnapshot(collection(db, 'posts', id, 'likes'), snapshot => {
            setLikes(snapshot.docs);
        });
    }, [db, id]);

    useEffect( () => 
        setHasLiked(likes.findIndex(like => like.id === session?.user?.uid) !== -1)
    , [likes])

    async function likePost() {
        if (hasLiked) {
            await deleteDoc(doc(db, 'posts', id, 'likes', session.user.uid))
        } else {
            await setDoc(doc(db, 'posts', id, 'likes', session.user.uid), {
            username: session.user.username,
        });
        }
        
    }

    async function sendComment(e) {
        e.preventDefault();
        const commentToSend = comment;
        setComment('');

        await addDoc(collection(db, 'posts', id, 'comments'), {
            comment: commentToSend,
            username: session.user.username,
            userImage: session.user.image,
            timestamp: serverTimestamp()
        })
    }

    return (
        <div className="bg-white my-7 border rounded-sm">
            <div className="flex items-center p-5">
                <img className="rounded-full h-12 w-12 object-contain border p-1 mr-3 cursor-pointer" src={userImg} alt='profile pic' />
                <p className="flex-1 font-bold cursor-pointer">{username}</p>
                <DotsHorizontalIcon className="h-5 cursor-pointer" />
            </div>

            <div>
                <img src={img} alt='post' className="object-cover w-full " />
            </div>

            {session && <div className="flex justify-between px-4 pt-4">
                <div className="flex space-x-4 ">
                    {hasLiked ? <HeartIconFilled onClick={likePost} className="postBtn text-red-600" /> : <HeartIcon onClick={likePost} className="postBtn" />}
                    <ChatIcon className="postBtn" />
                    <PaperAirplaneIcon className="postBtn rotate-45" />
                </div>
                <BookmarkIcon className="postBtn" />
            </div>}
            


            <div>
                <p className="p-5 truncate">
                {likes.length > 0 && (
                    <p className="font-bold mb-1">{likes.length} {likes.length === 1 ? 'like' : 'likes'}</p>
                )}
                    <span className="font-bold mr-1">{username} </span>{caption}
                </p>
            </div>

            {comments.length > 0 && (
                <div className="ml-10 h-20 overflow-y-scroll scrollbar-thumb-gray-400 scrollbar-thin">
                    {comments.map(comment => (
                        <div key={comment.id} className='flex items-center space-x-2 mb-3'>
                            <img className="h-7 rounded-full" src={comment.data().userImage} alt='asdf' />
                            <p className="text-sm flex-1"><span className="font-bold pr-2">{comment.data().username}</span>{comment.data().comment}</p>
                            <Moment className="pr-5 text-xs text-gray-500" fromNow>{comment.data().timestamp?.toDate()}</Moment>
                        </div>
                    ))}
                </div>
            )}

            {session && <div>
                <form className="flex items-center p-4" onSubmit={sendComment}>
                    <EmojiHappyIcon className="h-7"/>
                    <input onChange={e => setComment(e.target.value)} value={comment} placeholder="Add a comment..." type='text' className="border-none flex-1 focus:ring-0 outline-none" />
                    <button type='submit' disabled={!comment.trim()} className="font-semibold text-blue-400">Post</button>
                </form>
            </div>}
        </div>
    )
}