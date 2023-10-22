export default function Tweet(){
    return (
        <div>
            <TweetHeader />

        </div>
    )
}

export  function TweetHeader(){
    return (
        <div className="flex space-x-3 p-3 border-b border-gray-700">
            <img src="/assets/profilePics/pfp1.png" className="w-11 h-11 rounded-full object-cover"/>
            <div>
                <div>
                    <span></span>
                </div>
            </div>
        </div>
    )
}