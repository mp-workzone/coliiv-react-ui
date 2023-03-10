import { Link } from "react-router-dom";
function BlogItem({ blog, cssClass }) {
  return (
    <section className={`info-blog blog ${cssClass}`}>
      <div className={blog.class}>
        <img src={blog.sideImg} alt="" />
      </div>
      <div className="container-alt">
        <div className={`inner-section ${blog.direction}`}>
          <div className="info-blog__text-area">
            <h2 className="info-blog__title">{blog.title}</h2>
            <h4 className="blog-time">{blog.time}</h4>
            <div
              className="dsc"
              dangerouslySetInnerHTML={{ __html: blog.dscription }}
            />
            <div>
              <Link to="/blog/blog-details" className="more-link">
                {blog.link}
              </Link>
            </div>
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
