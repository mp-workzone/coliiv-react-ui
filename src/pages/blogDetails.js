import MainContent from "../components/blogDetails/mainContent";
import RelativeBlog from "../components/blogDetails/relativeBlog";
import BlogDetailsHero from "../components/blogDetailsHero";
import "../scss/blogDetails.scss";
function BlogDetaisl() {
  return (
    <>
      <BlogDetailsHero />
      <MainContent />
      <RelativeBlog />
    </>
  );
}

export default BlogDetaisl;
