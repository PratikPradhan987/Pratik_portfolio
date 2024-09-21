import ErrorIcon from './icons/ErrorIcon';
import WarningIcon from './icons/WarningIcon';
import BellIcon from './icons/BellIcon';
import CheckIcon from './icons/CheckIcon';
import NextjsIcon from './icons/NextjsIcon';
import SourceControlIcon from './icons/SourceControlIcon';

const Bottombar = () => {
	return (
		<footer className="bg-stone-600 h-[25px] border-t-[color:var(--bottombar-border)] text-[rgb(225,228,232)] flex items-center justify-between text-[0.8rem] px-2 py-0 border-t border-solid">
			<div className="flex items-center">
				<a
					href="https://github.com/itsnitinr/vscode-portfolio"
					target="_blank"
					rel="noreferrer noopener"
					className="text-[white] no-underline flex h-6 items-center cursor-pointer mr-2 px-[0.2rem] py-0"
				>
					<SourceControlIcon className="mr-1" />
					<p>main</p>
				</a>
				<div className="flex items-center">
					<ErrorIcon className="mr-1" />
					<p className="">0</p>&nbsp;&nbsp;
					<WarningIcon className="mr-1" />
					<p>0</p>
				</div>
			</div>
			<div className="flex items-center">
				<div className="flex h-6 items-center cursor-pointer mr-2 px-[0.2rem] py-0">
					<NextjsIcon className="mr-1" />
					<p>Powered by Next.js</p>
				</div>
				<div className="flex h-6 items-center cursor-pointer mr-2 px-[0.2rem] py-0">
					<CheckIcon className="mr-1" />
					<p>Prettier</p>
				</div>
				<div className="flex h-6 items-center cursor-pointer mr-2 px-[0.2rem] py-0">
					<BellIcon />
				</div>
			</div>
		</footer>
	);
};

export default Bottombar;
