'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import FilesIcon from './icons/FilesIcon';
import GithubIcon from './icons/GithubIcon';
import CodeIcon from './icons/CodeIcon';
import PencilIcon from './icons/PencilIcon';
import MailIcon from './icons/MailIcon';
import AccountIcon from './icons/AccountIcon';
import SettingsIcon from './icons/SettingsIcon';

const sidebarTopItems = [
	{
		Icon: FilesIcon,
		path: '/'
	},
	{
		Icon: GithubIcon,
		path: '/github'
	},
	{
		Icon: CodeIcon,
		path: '/projects'
	},
	{
		Icon: PencilIcon,
		path: '/articles'
	},
	{
		Icon: MailIcon,
		path: '/contact'
	}
];

const sidebarBottomItems = [
	{
		Icon: AccountIcon,
		path: '/about'
	},
	{
		Icon: SettingsIcon,
		path: '/settings'
	}
];

const Sidebar = () => {
	const pathname = usePathname();

	return (
		<aside className="bg-[#24292e] flex flex-col justify-between w-[4.5vw] min-w-[40px] h-[calc(100vh_-_30px_-_25px)]">
			<div className="">
				{sidebarTopItems.map(({ Icon, path }) => (
					<Link href={path} key={path}>
						<div
							className={`'hover:bg-[#1f2428] cursor-pointer w-full' ${pathname === path &&
								'border-l-[color:var(--accent-color)] border-l-2 border-solid'}`}
						>
							<Icon
								fill={pathname === path ? 'rgb(225, 228, 232)' : 'rgb(106, 115, 125)'}
								className="h-12 w-12 block mx-auto my-0 px-0 py-[0.65rem]"
							/>
						</div>
					</Link>
				))}
			</div>
			<div className="">
				{sidebarBottomItems.map(({ Icon, path }) => (
					<div key={path} className="cursor-pointer w-full">
						<Link href={path} key={path}>
							<Icon
								fill={pathname === path ? 'rgb(225, 228, 232)' : 'rgb(106, 115, 125)'}
								className="h-12 w-12 block mx-auto my-0 px-0 py-[0.65rem]"
							/>
						</Link>
					</div>
				))}
			</div>
		</aside>
	);
};

export default Sidebar;
