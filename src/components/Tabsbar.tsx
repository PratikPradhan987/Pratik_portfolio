import Tab from './Tab';

const Tabsbar = () => {
	return (
		<div className="flex overflow-x-auto bg-[#1f2428]">
			<Tab icon="/react_icon.svg" filename="home.jsx" path="/" />
			<Tab icon="/html_icon.svg" filename="about.html" path="/about" />
			<Tab icon="/css_icon.svg" filename="contact.css" path="/contact" />
			<Tab icon="/js_icon.svg" filename="projects.js" path="/projects" />
			<Tab icon="/json_icon.svg" filename="articles.json" path="/articles" />
			<Tab icon="/markdown_icon.svg" filename="github.md" path="/github" />
		</div>
	);
};

export default Tabsbar;