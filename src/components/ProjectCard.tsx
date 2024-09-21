type projectType = {
	id: number;
	image: string;
	name: string;
	description: string;
	source_code: string;
	demo: string;
};
const ProjectCard = ({ project }: any) => {
	return (
		<div className="bg-[#1f2428] flex flex-col cursor-pointer rounded-[20px] hover:shadow-[4px_4px_10px_rgba(0,0,0,0.1)]">
			{/* <Image src={project.image} height={300} width={600} alt={project.name} /> */}
			<iframe src={project.image} height={250} />

			<div className="p-4 rounded-[0_0_20px_20px] flex flex-col space-y-4">
				<h3>{project.name}</h3>
				<p>{project.description}</p>
				{/* <div className=" flex flex-wrap mt-2 mb-4 mx-0">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs transition-all duration-[0.2s] ml-0 mr-2 mt-2 mb-0 px-2 py-[0.2rem] rounded-[20px]">
              {tag}
            </span>
          ))}
        </div> */}
				<div className="flex gap-4">
					{project.source_code && (
						<a
							href={project.source_code}
							target="_blank"
							rel="noopener noreferrer"
							className="p-2  rounded-xl cursor-pointer text-[white] bg-gray-700 hover:shadow-orange-300 shadow"
						>
							Source Code
						</a>
					)}
					<a
						href={project.demo}
						target="_blank"
						rel="noopener noreferrer"
						className="p-2  rounded-xl cursor-pointer text-[white] bg-gray-700 hover:shadow-orange-300 shadow"
					>
						Live Demo
					</a>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
