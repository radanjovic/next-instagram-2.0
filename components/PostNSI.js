import { BookmarkIcon, ChatIcon, DotsHorizontalIcon, EmojiHappyIcon, HeartIcon, PaperAirplaneIcon } from "@heroicons/react/outline";

export default function PostNSI({id, username, userImg, img, caption}) {
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

            <div className="flex justify-between px-4 pt-4">
                <div className="flex space-x-4 ">
                    <HeartIcon className="postBtn" />
                    <ChatIcon className="postBtn" />
                    <PaperAirplaneIcon className="postBtn rotate-45" />
                </div>
                <BookmarkIcon className="postBtn" />
            </div>
            
            <div>
                <p className="p-5 truncate">
                <p className="font-bold mb-1">{Math.floor(Math.random() * (100 - 2 + 1)) + 2} likes</p>
                <span className="font-bold mr-1">{username} </span>{caption}
                </p>
            </div>

           <div>
                <form className="flex items-center p-4">
                    <EmojiHappyIcon className="h-7"/>
                    <input placeholder="Log in to add comments" type='text' className="border-none flex-1 focus:ring-0 outline-none" disabled />
                    <button type='button' className="font-semibold text-blue-400">Post</button>
                </form>
            </div>
        </div>
    )
}