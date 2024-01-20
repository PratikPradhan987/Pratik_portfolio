import Illustration from '@/components/Illustration';
import Link from 'next/link';

export default function Home() {
	return (
		<div className="flex justify-center h-[75vh] flex-col relative">
			<div className="lg:text-[8.5rem] text-[5rem] leading-[1.1] text-[rgba(56, 58, 61, 0.35)] absolute z-[1]">
				<h1>I BUILD</h1>
				<h1>WEBSITES</h1>
			</div>
			<div className="z-[2] flex text-[color:#f9826c] justify-between items-center">
				<div className="lg:px-12 lg:py-0">
					<h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-white font-bold">
						{/* <h1 className="text-[#eee] lg:text-8xl text-[3.5rem] font-medium mb-2"> */}
						Noisy Boy
					</h1>
					<h6 className="lg:text-5xl lg:mb-20 w-max overflow-hidden text-[#0b0303] text-2xl font-light relative mb-12 ">
						Full Stack Web Developer
					</h6>
					<Link href="/projects">
						<button className="lg:text-[2rem] bg-[#f9826c] hover:shadow-[5px_5px_10px_rgba(0,0,0,0.5)] text-xl text-[#eee] font-semibold cursor-pointer mr-6 px-4 py-2 border-[none]">
							View Work
						</button>
					</Link>
					<Link href="/contact">
						<button className="lg:text-[2rem] bg-transparent hover:shadow-[5px_5px_10px_rgba(0,0,0,0.5)] text-xl text-[#eee] border-[color:var(--accent-color)] cursor-pointer px-4 py-2 border-2 border-solid">
							Contact Me
						</button>
					</Link>
				</div>
				<Illustration className="h-[500px] w-[460px]" />
			</div>
		</div>
	);
}
// export async function getStaticProps() {
// 	return {
// 		props: { title: 'Home' }
// 	};
// }
