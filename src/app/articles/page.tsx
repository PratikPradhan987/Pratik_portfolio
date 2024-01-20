import ArticleCard from "@/components/ArticleCard";

const articles = [
    {
      id: 1 , article: {
      url: "", 
      cover_image: "", 
      title: "",
      description: "",
      page_views_count:"",
      public_reactions_count:"",
      comments_count: "",
    } 
  },
  {
    id: 2 , article: {
    url: "", 
    cover_image: "", 
    title: "",
    description: "",
    page_views_count:"",
    public_reactions_count:"",
    comments_count: "",
  } 
},
{
  id: 3 , article: {
  url: "", 
  cover_image: "", 
  title: "",
  description: "",
  page_views_count:"",
  public_reactions_count:"",
  comments_count: "",
} 
},
]

const ArticlesPage = () => {
  return (
    <>
      <h3>
        Recent Posts from{' '}
        <a
          href="https://dev.to/itsnitinr"
          target="_blank"
          rel="noopener"
          className="cursor-pointer text-[white] no-underline bg-[linear-gradient(_120deg,var(--accent-color)_100%,var(--accent-color)_100%_)] bg-no-repeat bg-[100%_0.2em] transition-[background-size] duration-[0.25s] ease-[ease-in] hover:bg-[100%_88%]"
        >
          dev.to
        </a>
      </h3>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 mt-6">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </>
  );
};



export default ArticlesPage;
