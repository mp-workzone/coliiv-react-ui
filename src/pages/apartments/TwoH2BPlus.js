import Slider from "react-slick";
import StudioLofFeatureFigure from "../../assets/2h-2b-feature.webp";
import AboutFigure from "../../assets/2h-2b-plus.webp";
import Apartment from "../../assets/apartment-1.webp";
import MapGallery1 from "../../assets/apartment-map.webp";
import Gallery1 from "../../assets/apt-gal-01.webp";
import MoreSpaceFigure from "../../assets/more-sp.webp";
import MoreSpaces from "../../assets/more-spaces.webp";
import IconScrollNext from "../../assets/scroll-next.svg";
import StudioLoftHero from "../../assets/stdio-loft.webp";
import "../../css/stdio-loft.css";
const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
};
const settings3 = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
};
const settings2 = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};
function TwoH2BPlus() {
    return (
        <div className='apartment-page apartment-page--stdio apartment-page--2h-plus'>
            <section className='aparetment-hero'>
                <figure>
                    <img src={StudioLoftHero} alt='' />
                </figure>
                <div className='hero-title'>
                    <h1>
                        <span>Apartamento</span>
                        <span className='lt'>2H - 2B PLUS</span>
                    </h1>
                    <div className='bg-text'>A2<span className="sub">+</span></div>
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
            <section className='apartment-about has-circle'>
                <div className='figure'>
                    <span className="figure__text">A2<span className="sub">+</span></span>
                    <img src={AboutFigure} alt='' />
                </div>
                <div className='container-alt'>
                    <div className='apartment-about-content'>
                        <div className='title'>
                            <h2>
                                Un nuevo hogar
                                todo <span className='alt'>una nueva vida</span>
                            </h2>
                        </div>
                        <p>
                        Apartamento te ofrece amet, consectetur adipiscing elit. Phasellus vestibulum nisl sed faucibus consequat. Aliquam in leo metus. Fusce at orci auctor ante malesuada feugiat.
                        </p>
                    </div>
                </div>
            </section>

            <section className='apartment-figure-block'>
                <img src={Apartment} alt='' />
            </section>

            <section className='apartment-features' style={{paddingTop: "340px"}}>
                <div className='container-alt'>
                    <div className='title has-border-left'>
                        <h2> 
                            verdadera <span>comodidad</span>
                        </h2>
                    </div>
                    <div className='features-list'>
                        <img
                            className='shape-ovelay'
                            src={StudioLofFeatureFigure}
                            alt=''
                        />
                        <ul>
                            <li>
                                <div className='icon'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='80.373'
                                        height='41.709'
                                        viewBox='0 0 80.373 41.709'
                                    >
                                        <g
                                            id='Group_1911'
                                            data-name='Group 1911'
                                            transform='translate(-803.543 -459.541)'
                                        >
                                            <path
                                                id='Path_2509'
                                                data-name='Path 2509'
                                                d='M882.667,521.6a8.246,8.246,0,0,1-1.626,3.848,7.189,7.189,0,0,1-5.319,2.693c-.2.012-.4.028-.7.049,0,1.268.006,2.5,0,3.731a6.191,6.191,0,0,1-1.219,3.909,5.857,5.857,0,0,1-4.646,2.348c-.424.014-.849,0-1.365,0,0,.555-.013,1.029,0,1.5.02.564-.24.873-.8.877-1.368.011-2.736.014-4.1,0a.712.712,0,0,1-.767-.831c.011-.477,0-.955,0-1.487h-36.78c0,.475-.011.97,0,1.463a.739.739,0,0,1-.822.859q-2.014.017-4.028,0a.734.734,0,0,1-.821-.857c.014-.475,0-.951,0-1.426a19.909,19.909,0,0,1-2.767-.3,5.914,5.914,0,0,1-4.472-6.03c-.016-1.235,0-2.469,0-3.482a27.286,27.286,0,0,1-3.905-1.284,7.113,7.113,0,0,1-3.5-8.006,7.266,7.266,0,0,1,14.313,1.964c.018,1.7,0,3.391,0,5.153h48.727c.012-.25.031-.517.036-.784.034-1.822-.014-3.65.117-5.465a7.078,7.078,0,0,1,4.956-6.034,7.3,7.3,0,0,1,7.67,2.131,8.97,8.97,0,0,1,1.805,3.938Z'
                                                transform='translate(0 -40.566)'
                                                fill='none'
                                                stroke='#737373'
                                                stroke-linecap='round'
                                                stroke-linejoin='round'
                                                stroke-width='2.5'
                                            />
                                            <path
                                                id='Path_2510'
                                                data-name='Path 2510'
                                                d='M898.573,469.934c-4.943,2.115-5.982,5.165-5.508,9.953H852.94c0-.905,0-.809,0-1.714a8.126,8.126,0,0,0-2.284-5.984,31.109,31.109,0,0,0-3.225-2.478,13.044,13.044,0,0,1,2.646-4.957,14.056,14.056,0,0,1,11.18-5.189c7.818-.027,15.637-.04,23.455,0a14.212,14.212,0,0,1,13.722,9.862C898.481,469.578,898.517,469.73,898.573,469.934Z'
                                                transform='translate(-29.23 1.227)'
                                                fill='none'
                                                stroke='#737373'
                                                stroke-linecap='round'
                                                stroke-linejoin='round'
                                                stroke-width='2.5'
                                            />
                                        </g>
                                    </svg>
                                </div>
                                <h3>Unidad amoblada</h3>
                                <p>Espacio con muebles de alta gama.</p>
                            </li>
                            <li>
                                <div className='icon'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='55.774'
                                        height='42.5'
                                        viewBox='0 0 55.774 42.5'
                                    >
                                        <g
                                            id='Group_1912'
                                            data-name='Group 1912'
                                            transform='translate(-572.838 -103.434)'
                                        >
                                            <path
                                                id='Path_2511'
                                                data-name='Path 2511'
                                                d='M574.088,118.549a5.569,5.569,0,0,1,1.737-2.693,37.76,37.76,0,0,1,9.315-7.213,33.956,33.956,0,0,1,32.685.478,34.869,34.869,0,0,1,8.4,6.715,3.523,3.523,0,0,1,.444,4.44,3.459,3.459,0,0,1-4.143,1.375,4.517,4.517,0,0,1-1.566-1.058,30.121,30.121,0,0,0-6.44-5.2A26.747,26.747,0,0,0,582.05,119.7c-.562.563-1.145,1.108-1.687,1.69a3.569,3.569,0,0,1-6.193-1.615.969.969,0,0,0-.082-.189Z'
                                                transform='translate(0 0)'
                                                fill='none'
                                                stroke='#737373'
                                                stroke-width='2.5'
                                            />
                                            <path
                                                id='Path_2512'
                                                data-name='Path 2512'
                                                d='M637.164,165.921a19.871,19.871,0,0,1,10.144,2.729,22.448,22.448,0,0,1,6.075,5.2,3.838,3.838,0,0,1-5.4,5.337c-.826-.68-1.57-1.459-2.363-2.18a12.525,12.525,0,0,0-17.425.473c-.661.66-1.307,1.337-1.987,1.977a3.872,3.872,0,0,1-6.522-1.735,3.636,3.636,0,0,1,.918-3.649,29.511,29.511,0,0,1,6.679-5.626A21.191,21.191,0,0,1,637.164,165.921Z'
                                                transform='translate(-35.874 -48.339)'
                                                fill='none'
                                                stroke='#737373'
                                                stroke-width='2.5'
                                            />
                                            <path
                                                id='Path_2513'
                                                data-name='Path 2513'
                                                d='M683.866,241.89a6.209,6.209,0,1,1-6.183-6.234A6.229,6.229,0,0,1,683.866,241.89Z'
                                                transform='translate(-76.861 -103.396)'
                                                fill='none'
                                                stroke='#737373'
                                                stroke-width='2.5'
                                            />
                                        </g>
                                    </svg>
                                </div>
                                <h3>Wifi</h3>
                                <p>Conexión gratis de alta velocidad.</p>
                            </li>
                            <li>
                                <div className='icon'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='38.254'
                                        height='43.841'
                                        viewBox='0 0 38.254 43.841'
                                    >
                                        <g
                                            id='Group_1913'
                                            data-name='Group 1913'
                                            transform='translate(-919.407 -103.676)'
                                        >
                                            <path
                                                id='Path_2514'
                                                data-name='Path 2514'
                                                d='M923.728,106.926H953.4a.421.421,0,0,0,.1.051,3.331,3.331,0,0,1,2.918,3.319c.049,1.492.011,2.987.009,4.48a.319.319,0,0,1-.04.1H920.7c0-1.574-.017-3.117.006-4.66a3.266,3.266,0,0,1,1.3-2.56A4.162,4.162,0,0,1,923.728,106.926Zm26.737,5.544h0c.4,0,.8.014,1.194,0a1.125,1.125,0,0,0,.013-2.247q-1.212-.037-2.427,0a1.1,1.1,0,0,0-1.07,1.136,1.117,1.117,0,0,0,1.1,1.115C949.668,112.482,950.067,112.47,950.465,112.47Z'
                                                transform='translate(-0.034 -2)'
                                                fill='none'
                                                stroke='#737373'
                                                stroke-linecap='round'
                                                stroke-linejoin='round'
                                                stroke-width='2.5'
                                            />
                                            <path
                                                id='Path_2515'
                                                data-name='Path 2515'
                                                d='M956.387,164.2c.007.143.017.269.017.394q0,12.613,0,25.225a3.334,3.334,0,0,1-1.944,3.279,3.862,3.862,0,0,1-1.6.355q-14.331.031-28.663.012a3.4,3.4,0,0,1-3.537-3.372c-.007-.128-.007-.257-.007-.386q0-12.516,0-25.032V164.2Zm-28.893,14.543a11.029,11.029,0,1,0,10.829-11.089A11.05,11.05,0,0,0,927.495,178.741Z'
                                                transform='translate(0 -47.197)'
                                                fill='none'
                                                stroke='#737373'
                                                stroke-linecap='round'
                                                stroke-linejoin='round'
                                                stroke-width='2.5'
                                            />
                                            <path
                                                id='Path_2517'
                                                data-name='Path 2517'
                                                d='M971.773,241.482c.266.152.511.294.759.432a4.232,4.232,0,0,0,4.439-.011,3.223,3.223,0,0,1,1.992-.578,2.766,2.766,0,0,1,1.248.475,4.245,4.245,0,0,0,3.261.632,6.848,6.848,0,0,0,1.341-.5,8.444,8.444,0,0,0,.786-.443,6.927,6.927,0,0,1-13.825,0Z'
                                                transform='translate(-40.157 -108.965)'
                                                fill='none'
                                                stroke='#737373'
                                                stroke-linecap='round'
                                                stroke-linejoin='round'
                                                stroke-width='2.5'
                                            />
                                        </g>
                                    </svg>
                                </div>
                                <h3>zona de Lavandería</h3>
                                <p>Tu ropa limpia en el mismo lugar.</p>
                            </li>
                            <li>
                                <div className='icon'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='25.502'
                                        height='43.103'
                                        viewBox='0 0 25.502 43.103'
                                    >
                                        <g
                                            id='Group_1914'
                                            data-name='Group 1914'
                                            transform='translate(-1323.392 -105.283)'
                                        >
                                            <path
                                                id='Path_2518'
                                                data-name='Path 2518'
                                                d='M1327.838,212.317a9.1,9.1,0,0,1-1.588-.674,3.548,3.548,0,0,1-1.608-3.139q0-5.969,0-11.938v-9.033h23v.425q0,10.227,0,20.454a3.667,3.667,0,0,1-3.116,3.854.461.461,0,0,0-.1.05Zm3.359-18.423v-1.52c0-.025,0-.051,0-.076a1.17,1.17,0,0,0-1.156-1.167,1.154,1.154,0,0,0-1.151,1.168q-.019,1.539,0,3.078a1.154,1.154,0,1,0,2.307,0C1331.2,194.881,1331.2,194.387,1331.2,193.893Z'
                                                transform='translate(-0.001 -65.18)'
                                                fill='none'
                                                stroke='#737373'
                                                stroke-linejoin='round'
                                                stroke-width='2.5'
                                            />
                                            <path
                                                id='Path_2519'
                                                data-name='Path 2519'
                                                d='M1324.642,119.333v-2.081q0-2.909,0-5.817a3.7,3.7,0,0,1,3.865-3.878q7.661,0,15.323,0a3.651,3.651,0,0,1,3.8,3.7c.029,2.611.008,5.222.007,7.833,0,.073-.012.146-.02.24Zm4.24-5.729v1.444c0,.025,0,.051,0,.076a1.156,1.156,0,1,0,2.31.012q.013-1.52,0-3.04a1.154,1.154,0,1,0-2.307-.012C1328.875,112.59,1328.884,113.1,1328.883,113.6Z'
                                                transform='translate(0 -1.021)'
                                                fill='none'
                                                stroke='#737373'
                                                stroke-linejoin='round'
                                                stroke-width='2.5'
                                            />
                                        </g>
                                    </svg>
                                </div>
                                <h3>Cocina privada</h3>
                                <p>Artículos básicos para su hogar.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className='apartment-gallery'>
                <Slider {...settings}>
                    <div className='apartment-gallery__item'>
                        <img src={Gallery1} alt='' />
                    </div>
                    <div className='apartment-gallery__item'>
                        <img src={Gallery1} alt='' />
                    </div>
                    <div className='apartment-gallery__item'>
                        <img src={Gallery1} alt='' />
                    </div>
                    <div className='apartment-gallery__item'>
                        <img src={Gallery1} alt='' />
                    </div>
                </Slider>
            </section>

            <section className='apartment-map'>
                <div className='container'>
                    <div className='title apartment-title'>
                        <h2>
                            plano <span>de planta</span>
                        </h2>
                    </div>

                    <div className='apartment-map__gallery'>
                        <div className='apartment-map__gallery__info'>
                            <p>Apartamento en piso impar</p>
                        </div>
                        <div className='apartment-map__gallery__slides'>
                            <Slider {...settings2}>
                                <div className='apartment-map__gallery__slide'>
                                    <img src={MapGallery1} alt='' />
                                </div>
                                <div className='apartment-map__gallery__slide'>
                                    <img src={MapGallery1} alt='' />
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>

            <section className='more-spaces'>
                <img className="shape-top" src={MoreSpaceFigure} alt="" />
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
                                            stroke-linecap='round'
                                            stroke-linejoin='round'
                                            stroke-width='2'
                                        />
                                        <path
                                            id='Path_2508'
                                            data-name='Path 2508'
                                            d='M-19921.133-13770.146l10.09,10.089-10.09,10.089'
                                            transform='translate(20010 20063)'
                                            fill='none'
                                            stroke='#fff'
                                            stroke-linecap='round'
                                            stroke-linejoin='round'
                                            stroke-width='2'
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
                                            stroke-linecap='round'
                                            stroke-linejoin='round'
                                            stroke-width='2'
                                        />
                                        <path
                                            id='Path_2508'
                                            data-name='Path 2508'
                                            d='M-19921.133-13770.146l10.09,10.089-10.09,10.089'
                                            transform='translate(20010 20063)'
                                            fill='none'
                                            stroke='#fff'
                                            stroke-linecap='round'
                                            stroke-linejoin='round'
                                            stroke-width='2'
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
                                        stroke-miterlimit='10'
                                        stroke-width='2'
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
                                        stroke-miterlimit='10'
                                        stroke-width='2'
                                    ></path>
                                </g>
                            </svg>
                        </span>
                        <span className="text">VER TODOS</span>
                    </a>
                </div>
            </section>
        </div>
    );
}

export default TwoH2BPlus;
