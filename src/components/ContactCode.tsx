const contactItems = [
	{
		social: 'website',
		link: 'pratik-portfolio-snowy.',
		href: 'https://pratik-portfolio-snowy.vercel.app/'
	},
	{
		social: 'email',
		link: 'pratikpradhan8250gmail.com',
		href: 'mailto:pratikpradhan8250gmail.com'
	},
	{
		social: 'github',
		link: 'PratikPradhan987',
		href: 'https://github.com/PratikPradhan987'
	},
	{
		social: 'linkedin',
		link: 'Pratik',
		href: 'https://www.linkedin.com/in/Pratik/'
	},
	{
		social: 'twitter',
		link: 'pratik',
		href: 'https://www.twitter.com/pratik'
	},
	{
		social: 'instagram',
		link: 'pratik',
		href: 'https://www.instagram.com/pratik'
	},
	// {
	// 	social: 'polywork',
	// 	link: 'pratik',
	// 	href: 'https://www.polywork.com/pratik'
	// },
	// {
	// 	social: 'telegram',
	// 	link: 'pratik',
	// 	href: 'https://t.me/pratik'
	// },
	// {
	// 	social: 'codepen',
	// 	link: 'pratik',
	// 	href: 'https://codepen.io/pratik'
	// },
	// {
	// 	social: 'codesandbox',
	// 	link: 'pratik',
	// 	href: 'https://codesandbox.io/u/pratik'
	// }
];

const ContactCode = () => {
	return (
		<div className="text-[1.2rem] leading-8">
			<p className="before:content-[counter(line)] text-[grey] mr-4">
				<span className="text-[#f9826c]">.socials</span> &#123;
			</p>
			{contactItems.slice(0, 8).map((item, index) => (
				<p className="content-[counter(line)] text-[grey] mr-4" key={index}>
					&nbsp;&nbsp;&nbsp;{item.social}:{' '}
					<a
						className="text-[#f9826c] no-underline hover:underline"
						href={item.href}
						target="_blank"
						rel="noopener"
					>
						{item.link}
					</a>
					;
				</p>
			))}
			{contactItems.slice(8, contactItems.length).map((item, index) => (
				<p className="before:content-[counter(line)] text-[grey] mr-4" key={index}>
					&nbsp;&nbsp;{item.social}:{' '}
					<a href={item.href} target="_blank" rel="noopener">
						{item.link}
					</a>
					;
				</p>
			))}
			<p className="before:content-[counter(line)] text-[grey] mr-4">&#125;</p>
		</div>
	);
};

export default ContactCode;
