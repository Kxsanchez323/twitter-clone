import { DotsHorizontalIcon, SearchIcon } from "@heroicons/react/outline";
import { BadgeCheckIcon } from "@heroicons/react/solid";

export default function Trending() {
  return (
    <div className=" hidden lg:flex flex-col ml-7 mt-4">
      <div className="flex space-x-3 bg-white bg-opacity-10 w-[300px] h-[44px] p-3 rounded-3xl">
        <SearchIcon className="w-6 text-gray-600" />
        <input
          className="bg-transparent focus:outline-none placeholder:text-gray-600"
          placeholder="Search Twitter"
        />
      </div>
      <div className="w-[300px] h-[500px] bg-white bg-opacity-10 rounded-3xl mt-3">
        <h1 className="font-bold text-xl p-3">What's Happening</h1>
        <div className="p-3 relative">
        <DotsHorizontalIcon className="w-5 text-gray-600 absolute right-4"/>
          <p className="text-xs text-gray-500">Trending in US</p>
          <h1 className="text-[15px] font-bold" >China</h1>
          <p className="text-xs text-gray-500">340K Tweets</p>
        </div>
        <div className="p-3 relative">
        <DotsHorizontalIcon className="w-5 text-gray-600 absolute right-4"/>
          <p className="text-xs text-gray-500">Trending in Florida</p>
          <h1 className="text-[15px] font-bold" >Voting</h1>
          <p className="text-xs text-gray-500">20K Tweets</p>
        </div>
        <div className="p-3 relative">
        <DotsHorizontalIcon className="w-5 text-gray-600 absolute right-4"/>
          <p className="text-xs text-gray-500">Trending in Apopka</p>
          <h1 className="text-[15px] font-bold" >RAIN GO AWAY</h1>
          <p className="text-xs text-gray-500">5K Tweets</p>
        </div>
        <div className="p-3 relative">
        <DotsHorizontalIcon className="w-5 text-gray-600 absolute right-4"/>
          <p className="text-xs text-gray-500">Trending</p>
          <h1 className="text-[15px] font-bold">NVIDA</h1>
          <p className="text-xs text-gray-500">100K Tweets</p>
        </div>
        <div className="p-3 relative">
        <DotsHorizontalIcon className="w-5 text-gray-600 absolute right-4"/>
          <p className="text-xs text-gray-500">Trending</p>
          <h1 className="text-[15px] font-bold" >FNAF Movie</h1>
          <p className="text-xs text-gray-500">500K Tweets</p>
        </div>
        <div className="p-3 relative">
        <DotsHorizontalIcon className="w-5 text-gray-600 absolute right-4"/>
          <p className="text-xs text-gray-500">Trending</p>
          <h1 className="text-[15px] font-bold" >SHAGGY?</h1>
          <p className="text-xs text-gray-500">700K Tweets</p>
        </div>
      </div>

      <div className="w-[300px] h-[500px] bg-white bg-opacity-10 rounded-3xl mt-3">
        <h1 className="font-bold text-xl p-3">Who to Follow</h1>

        <div className="flex justify-between p-3"> 
            <div className="flex space-x-3 p-3">
                <img src="/assets/Arnold.png" className="w-11 h-11 object-cover rounded-full"/>
                <div>
                <div className="flex space-x-1">
                    <h1 className="font-bold">Arnold</h1>
                    <BadgeCheckIcon className="w-[18px] text-blue-400"/>
                </div>
                <h1 className="text-[12px] text-gray-500 mt-1">@Schwarzenegger</h1>
                </div>
            </div>
            <button className="bg-white text-black text-sm w-20 h-8 rounded-3xl font-bold">
                Follow
            </button>
        </div>
        <div className="flex justify-between p-3"> 
            <div className="flex space-x-3 p-3">
                <img src="/assets/GORDON.png" className="w-11 h-11 object-cover rounded-full"/>
                <div>
                <div className="flex space-x-1">
                    <h1 className="font-bold">Gordan Ramsay</h1>
                    <BadgeCheckIcon className="w-[18px] text-blue-400"/>
                </div>
                <h1 className="text-[12px] text-gray-500 mt-1">@GordonRamsay</h1>
                </div>
            </div>
            <button className="bg-white text-black text-sm w-20 h-8 rounded-3xl font-bold">
                Follow
            </button>
        </div>
        <div className="flex justify-between p-3"> 
            <div className="flex space-x-3 p-3">
                <img src="/assets/JEFF.png" className="w-11 h-11 object-cover rounded-full"/>
                <div>
                <div className="flex space-x-1">
                    <h1 className="font-bold">Jeff Hardy</h1>
                    <BadgeCheckIcon className="w-[18px] text-blue-400"/>
                </div>
                <h1 className="text-[12px] text-gray-500 mt-1">@JEFFHARDYBRAND</h1>
                </div>
            </div>
            <button className="bg-white text-black text-sm w-20 h-8 rounded-3xl font-bold">
                Follow
            </button>
        </div>
      </div>
    </div>
  );
}
