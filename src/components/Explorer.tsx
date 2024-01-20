'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import ChevronRight from '../components/icons/ChevronRight';

const explorerItems = [
	{
		name: 'home.jsx',
		path: '/',
		icon: 'react_icon.svg'
	},
	{
		name: 'about.html',
		path: '/about',
		icon: 'html_icon.svg'
	},
	{
		name: 'contact.css',
		path: '/contact',
		icon: 'css_icon.svg'
	},
	{
		name: 'projects.js',
		path: '/projects',
		icon: 'js_icon.svg'
	},
	{
		name: 'articles.json',
		path: '/articles',
		icon: 'json_icon.svg'
	},
	{
		name: 'github.md',
		path: '/github',
		icon: 'markdown_icon.svg'
	}
];

const Explorer = () => {
	const [ portfolioOpen, setPortfolioOpen ] = useState(true);

	return (
		<div className="bg-[#1f2428] w-[18vw] text-[rgb(225,228,232)] border-r-[color:var(--explorer-border)] border-r border-solid">
			<p className="font-light uppercase text-[0.9rem] tracking-[1px] mb-3 px-3 py-2">Explorer</p>
			<div>
				<input
					type="checkbox"
					className="absolute opacity-0 z-[-1]"
					id="portfolio-checkbox"
					checked={portfolioOpen}
					onChange={() => setPortfolioOpen(!portfolioOpen)}
				/>
				<label
					htmlFor="portfolio-checkbox"
					className="uppercase font-[bold] text-[0.8rem] tracking-[1px] flex items-center cursor-pointer px-2 py-0"
				>
					<ChevronRight
						className="transition-transform duration-[0.2s]"
						style={portfolioOpen ? { transform: 'rotate(90deg)' } : {}}
					/>
					Portfolio
				</label>
				<div
					className="cursor-pointer px-0 py-2"
					style={portfolioOpen ? { display: 'block' } : { display: 'none' }}
				>
					{explorerItems.map((item) => (
						<Link href={item.path} key={item.name}>
							<div className="hover:bg-[#24292e] flex items-center text-sm px-4 py-[0.2rem]">
								<Image src={`/${item.icon}`} alt={item.name} height={18} width={18} />{' '}
								<p className="ml-[5px]">{item.name}</p>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default Explorer;
