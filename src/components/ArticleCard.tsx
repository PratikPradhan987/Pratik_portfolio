import Image from 'next/image';
import EyeIcon from '../components/icons/EyeIcon';
import HeartIcon from '../components/icons/HeartIcon';
import CommentIcon from '../components/icons/CommentIcon';

const ArticleCard = ({ article }: any) => {
	return (
		<a
			href={article.url}
			target="_blank"
			rel="noopener noreferrer"
			className="bg-[#1f2428] flex flex-col no-underline text-[white] transition-all duration-[0.3s] p-3 rounded-[5px] hover:shadow-[5px_5px_10px_rgba(0,0,0,0.3)] "
		>
			<Image src={article.cover_image} alt={article.title} width={300} height={150} />
			<div className="px-0 py-4">
				<h3 className="text-[color:var(--accent-color)] text-[1.2rem] mb-4">{article.title}</h3>
				<p>{article.description}</p>
			</div>
			<div className="flex text-[1] mt-auto">
				<div className="flex items-center mr-4">
					<EyeIcon className="text-[#f9826c] h-[15px] w-[25px] mr-1" /> {article.page_views_count}
				</div>
				<div className="flex items-center mr-4">
					<HeartIcon className="text-[#f9826c] h-[15px] w-[25px] mr-1" /> {article.public_reactions_count}
				</div>
				<div className="flex items-center mr-4">
					<CommentIcon className="text-[#f9826c] h-[15px] w-[25px] mr-1" /> {article.comments_count}
				</div>
			</div>
		</a>
	);
};

export default ArticleCard;
