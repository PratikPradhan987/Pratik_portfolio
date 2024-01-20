'use client';

import Sidebar from './Sidebar';
import Explorer from './Explorer';
import Bottombar from './Bottombar';
import Tabsbar from './Tabsbar';
import Titlebar from './Titlebar';
import { usePathname } from 'next/navigation';
import styles from '../../public/styles/Layout.module.css';

const Layout = ({
	children
}: Readonly<{
	children: React.ReactNode;
}>) => {
	const pathname = usePathname();

	// set scroll to top of main content on url pathname change

	return (
		<div>
			<Titlebar />
			<div className="flex ">
				<Sidebar />
				<Explorer />
				<div style={{ width: '100%' }}>
					<Tabsbar />
					<main className="text-[#efefef] flex-1 h-[85vh] overflow-y-auto scroll-smooth">{children}</main>
				</div>
			</div>
			<Bottombar />
		</div>
	);
};

export default Layout;
