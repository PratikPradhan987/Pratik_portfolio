import Image from "next/image";

function Google() {
	return (
        <>		<div className="flex justify-center h-[75vh] flex-col relative">

        <div className="flex justify-between text-sm text-gray-700 bg-white">
        <div className="flex items-center">
          <a className="block p-3">About</a>
          <a className="block p-3">Store</a>
        </div>
        <div className="flex items-center">
          <a className="block p-3">Gmail</a>
          <a className="block p-3">Images</a>
          <Image alt="my phtot" height={50} width={50} className="rounded-full block " src="https://avatars.githubusercontent.com/u/71559227?s=400&u=ac0a1dfae1421ca4e021ea7cd5c87d308c250d61&v=4"/>
        </div>
      </div>
      
      <div className="flex justify-center pt-20 bg-white">
        <div>
          <img className="w-2/3 ml-auto mr-auto mb-6" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"/>
          <div className="flex border border-gray-200 rounded-full p-4 shadow text-xl">
            <div>🕵️‍</div>
            <input type="text" className="w-full outline-none px-3"/>
            <div>🎤</div>
          </div>
          <div className="mt-8 text-center">
            <button className="mr-3 bg-gray-200 border border-gray-300 py-3 px-4 rounded hover:bg-gray-400 hover:border-gray-500">Google Search</button>
            <button className="bg-gray-200 border border-gray-300 py-3 px-4 rounded hover:bg-gray-400 hover:border-gray-500">{"I'm"} Feeling Lucky</button>
          </div>
        </div>
      </div>
      
      <div className=" bg-white bg-gray-200 border-t w-full flex justify-between text-gray-600 text-xs">
        <div className="flex">
          <a className="block p-3">Advertising</a>
          <a className="block p-3">Business</a>
          <a className="block p-3">How Search Works</a>
        </div>
        <div className="flex">
          <a className="block p-3">Privacy</a>
          <a className="block p-3">Terms</a>
          <a className="block p-3">Settings</a>
        </div>
      </div>
      </div>
        </>
      
        );
}

export default Google;
