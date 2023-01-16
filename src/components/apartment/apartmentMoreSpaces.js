import Slider from "react-slick";
import MoreSpaceFigure from "../../assets/more-sp.webp";
import MoreSpaces from "../../assets/more-spaces.webp";
function ApartmentMoreSpaces({ figure }) {
    const settings3 = {
        dots: false,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
    };
    return (

        <section className='more-spaces'>
        <img className='shape-top' src={MoreSpaceFigure} alt='' />
        <div className='title'>
            <h2>Más espacios</h2>
        </div>

        <div className='more-spaces-gallery'>
            <Slider {...settings3}>
                <div className='more-spaces-gallery__item'>
                    <img src={MoreSpaces} alt='' />
                    <div className='text'>
                        <span>Apartamento 1H – 1B</span>

                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='50.957'
                            height='27.691'
                            viewBox='0 0 50.957 27.691'
                        >
                            <g
                                id='Group_1918'
                                data-name='Group 1918'
                                transform='translate(-49 -6286.754)'
                            >
                                <path
                                    id='Path_2507'
                                    data-name='Path 2507'
                                    d='M-19585-13840.523v11.711a3.853,3.853,0,0,0,1,2.244,3.826,3.826,0,0,0,2.588,1h43.916'
                                    transform='translate(19635 20128.277)'
                                    fill='none'
                                    stroke='#fff'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                />
                                <path
                                    id='Path_2508'
                                    data-name='Path 2508'
                                    d='M-19921.133-13770.146l10.09,10.089-10.09,10.089'
                                    transform='translate(20010 20063)'
                                    fill='none'
                                    stroke='#fff'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                />
                            </g>
                        </svg>
                    </div>
                </div>
                <div className='more-spaces-gallery__item'>
                    <img src={MoreSpaces} alt='' />
                    <div className='text'>
                        <span>Apartamento 1H – 1B</span>

                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='50.957'
                            height='27.691'
                            viewBox='0 0 50.957 27.691'
                        >
                            <g
                                id='Group_1918'
                                data-name='Group 1918'
                                transform='translate(-49 -6286.754)'
                            >
                                <path
                                    id='Path_2507'
                                    data-name='Path 2507'
                                    d='M-19585-13840.523v11.711a3.853,3.853,0,0,0,1,2.244,3.826,3.826,0,0,0,2.588,1h43.916'
                                    transform='translate(19635 20128.277)'
                                    fill='none'
                                    stroke='#fff'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                />
                                <path
                                    id='Path_2508'
                                    data-name='Path 2508'
                                    d='M-19921.133-13770.146l10.09,10.089-10.09,10.089'
                                    transform='translate(20010 20063)'
                                    fill='none'
                                    stroke='#fff'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                />
                            </g>
                        </svg>
                    </div>
                </div>
            </Slider>
        </div>
        <div className='ver-todos'>
            <a href='/' className='ver-todos'>
                <span class='svg-group'>
                    <svg
                        class='rotate-infinite'
                        xmlns='http://www.w3.org/2000/svg'
                        width='127.576'
                        height='127.576'
                        viewBox='0 0 127.576 127.576'
                    >
                        <g
                            id='scroll-down'
                            transform='translate(-308.364 -234.091)'
                        >
                            <path
                                class='path-rotate'
                                data-name='Path 2497'
                                d='M309.364,297.879a62.786,62.786,0,1,0,21.578-47.373'
                                fill='none'
                                stroke='#9eb255'
                                strokeMiterlimit='10'
                                strokeWidth='2'
                            ></path>
                        </g>
                    </svg>
                    <svg
                        class='svg-alt'
                        xmlns='http://www.w3.org/2000/svg'
                        width='127.576'
                        height='127.576'
                        viewBox='0 0 127.576 127.576'
                    >
                        <g
                            id='scroll-down'
                            transform='translate(-308.364 -234.091)'
                        >
                            <path
                                data-name='Path 2499'
                                d='M590.2,531.917l19.19-19.636H592.023v-8.7h33v32.592h-8.3V518.354l-19.839,19.839Z'
                                transform='translate(893.036 -309.73) rotate(90)'
                                fill='none'
                                stroke='#9eb255'
                                strokeMiterlimit='10'
                                strokeWidth='2'
                            ></path>
                        </g>
                    </svg>
                </span>
                <span className='text'>VER TODOS</span>
            </a>
        </div>
    </section>
    );
}

export default ApartmentMoreSpaces;
