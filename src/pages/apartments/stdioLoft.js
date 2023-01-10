import IconScrollNext from "../../assets/scroll-next.svg";
import AboutFigure from "../../assets/stdio-lofg-ab.png";
import StudioLoftHero from "../../assets/stdio-loft.webp";
import "../../css/stdio-loft.css";
function StdioLoft() {
    return (
        <div className="apartment-page apartment-page--stdio">
            <section className='aparetment-hero'>
                <figure>
                    <img src={StudioLoftHero} alt='' />
                </figure>
                <div className='hero-title'>
                    <h1>
                        <span>Studio</span>
                        <span className="lt">Loft</span>
                    </h1>
                    <div className='bg-text'>SL</div>
                </div>
                <div className='more-apartment'>
                    <span>Ver apartamentos</span>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='40.799'
                        height='22.448'
                        viewBox='0 0 40.799 22.448'
                    >
                        <g
                            id='Group_1840'
                            data-name='Group 1840'
                            transform='translate(0.998 1)'
                        >
                            <path
                                id='Path_2507'
                                data-name='Path 2507'
                                d='M-19547.352-13840.522v9.281a3.056,3.056,0,0,1-.793,1.778,3.033,3.033,0,0,1-2.051.792h-34.8'
                                transform='translate(19586.152 13840.522)'
                                fill='none'
                                stroke='#fff'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                stroke-width='2'
                            />
                            <path
                                id='Path_2508'
                                data-name='Path 2508'
                                d='M-19913.137-13770.146l-8,8,8,8'
                                transform='translate(19921.133 13774.188)'
                                fill='none'
                                stroke='#fff'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                stroke-width='2'
                            />
                        </g>
                    </svg>
                </div>
                <div className='scroll-next'>
                    <img src={IconScrollNext} alt='' />
                </div>
            </section>
            <section className="apartment-about">
              <div className="figure">
                <span>SL</span>
                <img src={AboutFigure} alt="" />
              </div>
                <div className="container-alt">
                  <div className="title">
                    <h2>Disfrútalo todo <span>con estilo</span></h2>
                  </div>
                  <p>El Studio Loft te ofrece amet, consectetur adipiscing elit. Phasellus vestibulum nisl sed faucibus consequat. Aliquam in leo metus. Fusce at orci auctor ante malesuada feugiat. </p>
                </div>
            </section>
        </div>
    );
}

export default StdioLoft;
