'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
type TabType = {
	icon: string;
	filename: string;
	path: string;
};
const Tab = ({ icon, filename, path }: TabType) => {
	const pathname = usePathname();

	return (
		<Link href={path}>
			<div
				className={`'text-[#ececec] flex items-center border border-[color:var(--tab-border)] text-[0.9rem] cursor-pointer px-5 py-2 border-solid' ${pathname ===
					path && 'bg-[#24292e] border-t-[color:var(--accent-color)] border-b-[none] border-t border-solid'}`}
			>
				<Image src={icon} alt={filename} height={18} width={18} />
				<p className="ml-[5px]">{filename}</p>
			</div>
		</Link>
	);
};

export default Tab;
