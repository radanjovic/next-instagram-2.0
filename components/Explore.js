import { useEffect, useState } from "react";
import {HeartIcon, ChatIcon} from '@heroicons/react/solid';


export default function Explore() {

    return <>
        <div className="max-w-5xl mx-auto my-10 flex gap-2 flex-wrap justify-between items-center">
            <div className="flex  items-center justify-between">
                <div className="container">                    
                    <img className="image" src='https://api.lorem.space/image?w=300&h=300' />
                    <div className="middle">
                        <div className="text"><div><HeartIcon className="exploreIcon" /> <span>{Math.floor(Math.random() * (2500 - 1 + 1)) + 1}</span></div> <div><ChatIcon className="exploreIcon" /> <span>{Math.floor(Math.random() * (2500 - 1 + 1)) + 1}</span></div></div>
                    </div>
                </div>
                <div className="container">                    
                    <img className="image" src='https://api.lorem.space/image/face?w=300&h=300' />
                    <div className="middle">
                        <div className="text"><div><HeartIcon className="exploreIcon" /> <span>{Math.floor(Math.random() * (2500 - 1 + 1)) + 1}</span></div> <div><ChatIcon className="exploreIcon" /> <span>{Math.floor(Math.random() * (2500 - 1 + 1)) + 1}</span></div></div>
                    </div>
                </div>
                <div className="container">                    
                    <img className="image" src='https://api.lorem.space/image/fashion?w=300&h=300' />
                    <div className="middle">
                        <div className="text "><div><HeartIcon className="exploreIcon " /> <span>{Math.floor(Math.random() * (2500 - 1 + 1)) + 1}</span></div> <div><ChatIcon className="exploreIcon" /> <span>{Math.floor(Math.random() * (2500 - 1 + 1)) + 1}</span></div></div>
                    </div>
                </div>
            </div>     
            <div className="flex  items-center justify-between">
                <div className="container">                    
                    <img className="image" src='https://api.lorem.space/image/shoes?w=300&h=300' />
                    <div className="middle">
                        <div className="text"><div><HeartIcon className="exploreIcon" /> <span>{Math.floor(Math.random() * (2500 - 1 + 1)) + 1}</span></div> <div><ChatIcon className="exploreIcon" /> <span>{Math.floor(Math.random() * (2500 - 1 + 1)) + 1}</span></div></div>
                    </div>
                </div>
                <div className="container">                    
                    <img className="image" src='https://api.lorem.space/image/furniture?w=300&h=300' />
                    <div className="middle">
                        <div className="text"><div><HeartIcon className="exploreIcon" /> <span>{Math.floor(Math.random() * (2500 - 1 + 1)) + 1}</span></div> <div><ChatIcon className="exploreIcon" /> <span>{Math.floor(Math.random() * (2500 - 1 + 1)) + 1}</span></div></div>
                    </div>
                </div>
                <div className="container">                    
                    <img className="image" src='https://api.lorem.space/image/pizza?w=300&h=300' />
                    <div className="middle">
                        <div className="text "><div><HeartIcon className="exploreIcon " /> <span>{Math.floor(Math.random() * (2500 - 1 + 1)) + 1}</span></div> <div><ChatIcon className="exploreIcon" /> <span>{Math.floor(Math.random() * (2500 - 1 + 1)) + 1}</span></div></div>
                    </div>
                </div>
            </div>     
            <div className="flex  items-center justify-between">
                <div className="container">                    
                    <img className="image" src='https://api.lorem.space/image/burger?w=300&h=300' />
                    <div className="middle">
                        <div className="text"><div><HeartIcon className="exploreIcon" /> <span>{Math.floor(Math.random() * (2500 - 1 + 1)) + 1}</span></div> <div><ChatIcon className="exploreIcon" /> <span>{Math.floor(Math.random() * (2500 - 1 + 1)) + 1}</span></div></div>
                    </div>
                </div>
                <div className="container">                    
                    <img className="image" src='https://api.lorem.space/image/drink?w=300&h=300' />
                    <div className="middle">
                        <div className="text"><div><HeartIcon className="exploreIcon" /> <span>{Math.floor(Math.random() * (2500 - 1 + 1)) + 1}</span></div> <div><ChatIcon className="exploreIcon" /> <span>{Math.floor(Math.random() * (2500 - 1 + 1)) + 1}</span></div></div>
                    </div>
                </div>
                <div className="container">                    
                    <img className="image" src='https://api.lorem.space/image/car?w=300&h=300' />
                    <div className="middle">
                        <div className="text "><div><HeartIcon className="exploreIcon " /> <span>{Math.floor(Math.random() * (2500 - 1 + 1)) + 1}</span></div> <div><ChatIcon className="exploreIcon" /> <span>{Math.floor(Math.random() * (2500 - 1 + 1)) + 1}</span></div></div>
                    </div>
                </div>
            </div>     
            <div className="flex  items-center justify-between">
                <div className="container">                    
                    <img className="image" src='https://api.lorem.space/image/house?w=300&h=300' />
                    <div className="middle">
                        <div className="text"><div><HeartIcon className="exploreIcon" /> <span>{Math.floor(Math.random() * (2500 - 1 + 1)) + 1}</span></div> <div><ChatIcon className="exploreIcon" /> <span>{Math.floor(Math.random() * (2500 - 1 + 1)) + 1}</span></div></div>
                    </div>
                </div>
                <div className="container">                    
                    <img className="image" src={`https://picsum.photos/id/${Math.floor(Math.random() * (1000 - 1 + 1)) + 1}/300`} />
                    <div className="middle">
                        <div className="text"><div><HeartIcon className="exploreIcon" /> <span>{Math.floor(Math.random() * (2500 - 1 + 1)) + 1}</span></div> <div><ChatIcon className="exploreIcon" /> <span>{Math.floor(Math.random() * (2500 - 1 + 1)) + 1}</span></div></div>
                    </div>
                </div>
                <div className="container">                    
                    <img className="image" src={`https://picsum.photos/id/${Math.floor(Math.random() * (1000 - 1 + 1)) + 1}/300`} />
                    <div className="middle">
                        <div className="text "><div><HeartIcon className="exploreIcon " /> <span>{Math.floor(Math.random() * (2500 - 1 + 1)) + 1}</span></div> <div><ChatIcon className="exploreIcon" /> <span>{Math.floor(Math.random() * (2500 - 1 + 1)) + 1}</span></div></div>
                    </div>
                </div>
            </div>     
            <div className="flex  items-center justify-between">
                <div className="container">                    
                    <img className="image" src={`https://picsum.photos/id/${Math.floor(Math.random() * (1000 - 1 + 1)) + 1}/300`} />
                    <div className="middle">
                        <div className="text"><div><HeartIcon className="exploreIcon" /> <span>{Math.floor(Math.random() * (2500 - 1 + 1)) + 1}</span></div> <div><ChatIcon className="exploreIcon" /> <span>{Math.floor(Math.random() * (2500 - 1 + 1)) + 1}</span></div></div>
                    </div>
                </div>
                <div className="container">                    
                    <img className="image" src={`https://picsum.photos/id/${Math.floor(Math.random() * (1000 - 1 + 1)) + 1}/300`} />
                    <div className="middle">
                        <div className="text"><div><HeartIcon className="exploreIcon" /> <span>{Math.floor(Math.random() * (2500 - 1 + 1)) + 1}</span></div> <div><ChatIcon className="exploreIcon" /> <span>{Math.floor(Math.random() * (2500 - 1 + 1)) + 1}</span></div></div>
                    </div>
                </div>
                <div className="container">                    
                    <img className="image" src={`https://picsum.photos/id/${Math.floor(Math.random() * (1000 - 1 + 1)) + 1}/300`} />
                    <div className="middle">
                        <div className="text "><div><HeartIcon className="exploreIcon " /> <span>{Math.floor(Math.random() * (2500 - 1 + 1)) + 1}</span></div> <div><ChatIcon className="exploreIcon" /> <span>{Math.floor(Math.random() * (2500 - 1 + 1)) + 1}</span></div></div>
                    </div>
                </div>
            </div>     
            
        </div>
    </>
}