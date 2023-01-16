
import IconScrollNext from "../../assets/scroll-next.svg";

function ApartmentHero({heroContent}) {
    return (
        <section className='aparetment-hero'>
        <figure>
            <img src={heroContent.figure} alt={heroContent.figureAlt} />
        </figure>
        <div className='hero-title'>
            <h1 dangerouslySetInnerHTML={{__html: heroContent.title}} />
            <div className='bg-text' dangerouslySetInnerHTML={{__html: heroContent.titleBgText}}/>
        </div>
        <a href="/" className='more-apartment'>
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
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                    />
                    <path
                        id='Path_2508'
                        data-name='Path 2508'
                        d='M-19913.137-13770.146l-8,8,8,8'
                        transform='translate(19921.133 13774.188)'
                        fill='none'
                        stroke='#fff'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                    />
                </g>
            </svg>
        </a>
        <div className='scroll-next'>
            <img src={IconScrollNext} alt='' />
        </div>
    </section>
    );
}

export default ApartmentHero;
