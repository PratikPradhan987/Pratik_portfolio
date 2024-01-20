import Image from 'next/image';

const Titlebar = () => {
	return (
		<section className="bg-[#1f2428] h-[30px] flex items-center justify-center text-white text-[0.85rem] px-2 py-0 border-b-[#191d20] border-b border-solid">
			<Image src="/vscode_icon.svg" alt="VSCode Icon" height={15} width={15} className="" />
			<div className="flex-1 flex ml-2 mr-auto ">
				<p className="hidden lg:flex cursor-pointer px-2 py-0">File</p>
				<p className="hidden lg:flex cursor-pointer px-2 py-0">Go</p>
				<p className="hidden lg:flex cursor-pointer px-2 py-0">View</p>
				<p className="hidden lg:flex cursor-pointer px-2 py-0">Edit</p>
				<p className="hidden lg:flex cursor-pointer px-2 py-0">Run</p>
				<p className="hidden lg:flex cursor-pointer px-2 py-0">Terminal</p>
				<p className="hidden lg:flex cursor-pointer px-2 py-0">Help</p>
			</div>
			<p className="flex-[4] lg:flex-1 text-center">NoisyBoy - Visual Studio Code</p>
			<div className="flex-1 flex items-center ml-auto">
				<span className="h-[13px] w-[13px] cursor-pointer rounded-[50%] ml-auto bg-[#f1fa8c]" />
				<span className="h-[13px] w-[13px] cursor-pointer ml-2 rounded-[50%] bg-[#50fa7b]" />
				<span className="h-[13px] w-[13px] cursor-pointer ml-2 rounded-[50%] bg-[#ff5555]" />
			</div>
		</section>
	);
};

export default Titlebar;
