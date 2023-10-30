import { ChartBarIcon, ChatIcon, HeartIcon, UploadIcon } from "@heroicons/react/outline"

export default function Tweet(){
    return (
        <div className="border-b border-gray-700">
            <TweetHeader />
            <div className="p-3 ml-16 text-gray-500 flex space-x-14">
                <ChatIcon className="w-5 cursor-pointer hover:text-green-400"/>
                <HeartIcon className="w-5 cursor-pointer hover:text-pink-500"/>
                <ChartBarIcon className="w-5 cursor-not-allowed"/>
                <UploadIcon className="w-5 cursor-not-allowed"/>
            </div>
        </div>
    )
}

export  function TweetHeader(){
    return (
        <div className="flex space-x-3 p-3 border-gray-700">
            <img src="/assets/profilePics/pfp1.png" className="w-11 h-11 rounded-full object-cover"/>
            <div>
                <div className="flex space-x-2 items-center text-gray-500 mb-1"> 
                    <span>@name</span>
                    <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                    <span>3 hours ago</span>
                </div>

                <span>Text</span>
            </div>
        </div>
    )
}