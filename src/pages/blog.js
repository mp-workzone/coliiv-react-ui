import { useEffect } from "react";
import BlogContent from "../components/blog/blogContent";
import InstaCarousel from "../components/blog/blogInstaCarousel";
import "../scss/blog.scss";

function Blog() {
  useEffect(() => {
    document.body.classList.add("header-light");
    return () => {
      document.body.classList.remove("header-light");
    };
  }, []);
  return (
    <>
      <BlogContent />
      <InstaCarousel />
    </>
  );
}

export default Blog;
