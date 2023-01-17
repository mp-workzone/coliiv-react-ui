import { useEffect } from "react";
import BlogContent from "../components/blogContent";
import InstaCarousel from "../components/blogInstaCarousel";
import "../css/blog.css";

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
