import Illustration from '@/components/Illustration';
import Link from 'next/link';

export default function Home() {
	return (
		<div className=' flex justify-center h-[80vh] flex-col relative'>
			<div className="lg:text-[8.5rem] text-[5rem] leading-[1.1] text-[rgba(56, 58, 61, 0.35)]  z-[1] bg-black bg-opacity-40 w-full">
				<h1 className=" text-center font-bold">I BUILD
					<span className="text-orange-500"> WEBSITES</span>
				</h1>
				<h6 className="lg:px-12 lg:py-0 lg:text-5xl text-center font-bold lg:mb-20 w-max overflow-hidden text-[#0b0303] text-2xl relative mb-12 ">
					Full Stack Web Developer
				</h6>
			</div>
			<div className="z-[2] flex justify-between items-center pt-20">
				<div className="lg:px-12 lg:py-0">
					{/* <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-white font-bold">
						<h1 className="text-[#eee] lg:text-8xl text-[3.5rem] font-medium mb-2">
						Noisy Boy
					</h1> */}
					<div>
						<Link href="/projects">
							<button className="text-3xl font-semibold rounded-md bg-blue-300 text-black hover:shadow-blue-500  cursor-pointer mr-6 px-4 py-2 border-[none]">
								View Work
							</button>
						</Link>
						<Link href="/contact">
							<button className="text-3xl font-semibold rounded-md bg-blue-300 text-black hover:shadow-blue-500 border-[color:var(--accent-color)] cursor-pointer px-4 py-2 border-2 border-solid">
								Contact Me
							</button>
						</Link>
					</div>

				</div>
				{/* <Illustration className="h-[500px] w-[460px]" /> */}
			</div>
		</div>
	);
}
// export async function getStaticProps() {
// 	return {
// 		props: { title: 'Home' }
// 	};
// }
