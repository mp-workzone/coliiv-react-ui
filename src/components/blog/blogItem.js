import { Link } from "react-router-dom";
function BlogItem({ blog }) {
  return (
    <section className="info-blog blog blog01 top">
      <div className="container-alt">
        <div className="inner-section">
          <div className="info-blog__text-area">
            <h2 className="info-blog__title">{blog.title}</h2>
            <h4 className="blog-time">{blog.time}</h4>
            <div
              className="dsc"
              dangerouslySetInnerHTML={{ __html: blog.dscription }}
            />
            <Link to="/blog/blog-details" className="more-link">
              {blog.link}
            </Link>
          </div>
          <div className="info-blog__figure">
            <img src={blog.thumb} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default BlogItem;
