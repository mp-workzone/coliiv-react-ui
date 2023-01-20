import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ApartmentFigure from "../assets/001.TIP1.webp";
import ApartmentFigure2 from "../assets/005.TIP2.webp";
import "../scss/apartments.scss";
function Apartments() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 4,
        centerPadding: "60px",
        centerMode: true,
        beforeChange: () => (dragging = true),
        afterChange: () => (dragging = false),
        responsive: [
            {
                breakpoint: 1480,
                settings: {
                    slidesToShow: 3,
                    speed: 500,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "0",
                },
            },
        ],
    };

    let dragging = false;

    const carouseData = [
        {
            title: `Studio<span>Loft</span>`,
            thumb: ApartmentFigure,
            category: "SL",
            link: "/apartments/stdio-loft",
        },
        {
            title: `Apartamento<span>1H – 1B</span>`,
            thumb: ApartmentFigure2,
            category: "A1",
            link: "/apartments/1h-1b",
        },
        {
            title: `Apartamento<span>2H – 2B</span>`,
            thumb: ApartmentFigure,
            category: "A2",
            link: "/apartments/2h-2b",
        },
        {
            title: `Apartamento<span>2H – 2B Plus</span>`,
            thumb: ApartmentFigure2,
            category: "A2+",
            link: "/apartments/2h-2b-plus",
        },
        {
            title: `Studio<span>Loft</span>`,
            thumb: ApartmentFigure,
            category: "SL",
            link: "/apartments/stdio-loft",
        },
        {
            title: `Apartamento<span>1H – 1B</span>`,
            thumb: ApartmentFigure2,
            category: "A1",
            link: "/apartments/1h-1b",
        },
        {
            title: `Apartamento<span>2H – 2B</span>`,
            thumb: ApartmentFigure,
            category: "A2",
            link: "/apartments/2h-2b",
        },
        {
            title: `Apartamento<span>2H – 2B Plus</span>`,
            thumb: ApartmentFigure2,
            category: "A2+",
            link: "/apartments/2h-2b-plus",
        },
    ];

    return (
        <div className='apartments-list'>
            <div className='apartment-carousel'>
                <Slider {...settings}>
                    {carouseData.map((item, index) => (
                        <Link
                            onClick={(e) => dragging && e.preventDefault()}
                            to={item.link}
                            className='apartment-carousel__item'
                        >
                            <div className='apartment-carousel__title'>
                                <h1
                                    dangerouslySetInnerHTML={{
                                        __html: item.title,
                                    }}
                                />
                            </div>
                            <figure>
                                <img src={item.thumb} alt='' />
                            </figure>
                            <h4 className='category'>{item.category}</h4>
                        </Link>
                    ))}
                </Slider>
                <div className='apartment-carousel__text'>
                    <h4 className='apartment-carousel__title'>apartamentos</h4>
                    <p className='apartment-carousel__subtitle'>
                        Desliza arriba/abajo para ver los apartamentos
                    </p>
                </div>
            </div>

            <div className='apartments-footer'>
                <div className='container-alt'>
                    <ul>
                        <li>
                            <a href='/'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='13.539'
                                    height='26.099'
                                    viewBox='0 0 13.539 26.099'
                                >
                                    <path
                                        id='Path_2934'
                                        data-name='Path 2934'
                                        d='M-38.413-1407.247c.439.034.878.067,1.316.1.3.025.606.054.916.081v4.151c-.125,0-.241,0-.356,0-.875.013-1.752,0-2.625.046a1.636,1.636,0,0,0-1.736,1.716c-.051,1.136-.011,2.276-.011,3.452h4.575l-.6,4.653H-40.92v11.9h-4.8v-11.885h-4v-4.645h4c0-.131,0-.229,0-.328.005-1.215-.025-2.432.025-3.646a5.812,5.812,0,0,1,1.524-3.9,5.306,5.306,0,0,1,2.872-1.537c.3-.062.6-.106.9-.158Z'
                                        transform='translate(49.72 1407.247)'
                                        fill='#737373'
                                    />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href='/'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='26.052'
                                    height='18.278'
                                    viewBox='0 0 26.052 18.278'
                                >
                                    <g
                                        id='Group_1932'
                                        data-name='Group 1932'
                                        transform='translate(0 0)'
                                    >
                                        <path
                                            id='Path_2505'
                                            data-name='Path 2505'
                                            d='M1099.354-1325.117c2.682.1,5.365.2,8.047.321a13.737,13.737,0,0,1,1.882.227,3.282,3.282,0,0,1,2.744,2.869,31.258,31.258,0,0,1,.4,6.592c-.051,1.542-.2,3.083-.349,4.62a3.453,3.453,0,0,1-1.574,2.743,4.422,4.422,0,0,1-1.986.57,73.723,73.723,0,0,1-8.1.333c-2.711-.014-5.423-.1-8.133-.183a22.724,22.724,0,0,1-2.641-.271,3.194,3.194,0,0,1-2.777-2.759c-.194-1.156-.3-2.329-.385-3.5a37.784,37.784,0,0,1,.058-5.745,21.36,21.36,0,0,1,.358-2.655,3.278,3.278,0,0,1,3-2.692,71.184,71.184,0,0,1,7.634-.387c.606-.01,1.211,0,1.817,0Zm-2.513,13.079,6.771-3.9-6.771-3.9Z'
                                            transform='translate(-1086.399 1325.117)'
                                            fill='#737373'
                                        />
                                    </g>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href='/'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='26.052'
                                    height='26.099'
                                    viewBox='0 0 26.052 26.099'
                                >
                                    <g
                                        id='Group_1931'
                                        data-name='Group 1931'
                                        transform='translate(0)'
                                    >
                                        <path
                                            id='Path_2502'
                                            data-name='Path 2502'
                                            d='M501.206-1399.545v10.507c-.015.117-.032.233-.046.35-.069.573-.1,1.154-.214,1.717a6.7,6.7,0,0,1-4.325,5.2,10.03,10.03,0,0,1-3.577.582c-2.762.028-5.524.054-8.286.039a17.439,17.439,0,0,1-4.055-.337,6.688,6.688,0,0,1-4.721-3.774,9.332,9.332,0,0,1-.781-3.944c-.03-2.821-.061-5.643-.039-8.464a25.785,25.785,0,0,1,.254-3.554,6.617,6.617,0,0,1,2.645-4.464,7.926,7.926,0,0,1,4.332-1.454c.626-.044,1.253-.07,1.88-.1h7.8c.609.034,1.219.066,1.828.1a8.683,8.683,0,0,1,3.088.687,6.8,6.8,0,0,1,4.059,5.553C501.12-1400.455,501.155-1400,501.206-1399.545Zm-13.021,16.1v-.04c.688,0,1.378.021,2.065,0,1.485-.053,2.981-.036,4.451-.219a4.256,4.256,0,0,0,3.863-3.4,11.013,11.013,0,0,0,.281-2.447q.067-3.977.04-7.955a26.1,26.1,0,0,0-.19-3.151,4.346,4.346,0,0,0-3.646-3.927,15.325,15.325,0,0,0-2.734-.247c-2.286-.038-4.573-.031-6.859-.024a22.95,22.95,0,0,0-3.889.212,4.369,4.369,0,0,0-3.764,3.582,14.54,14.54,0,0,0-.25,2.606c-.045,2.09-.061,4.182-.038,6.272.016,1.477.055,2.959.2,4.427a4.319,4.319,0,0,0,2.074,3.4,5.543,5.543,0,0,0,2.768.772C484.429-1383.518,486.307-1383.487,488.185-1383.441Z'
                                            transform='translate(-475.154 1407.247)'
                                            fill='#737373'
                                        />
                                        <path
                                            id='Path_2503'
                                            data-name='Path 2503'
                                            d='M599.1-1276.207a6.712,6.712,0,0,1,6.725-6.7,6.7,6.7,0,0,1,6.69,6.727,6.71,6.71,0,0,1-6.708,6.687A6.72,6.72,0,0,1,599.1-1276.207Zm6.7,4.354a4.333,4.333,0,0,0,4.359-4.326,4.334,4.334,0,0,0-4.32-4.366,4.335,4.335,0,0,0-4.372,4.339A4.334,4.334,0,0,0,605.794-1271.853Z'
                                            transform='translate(-592.764 1289.258)'
                                            fill='#737373'
                                        />
                                        <path
                                            id='Path_2504'
                                            data-name='Path 2504'
                                            d='M839.382-1317.112a1.556,1.556,0,0,1-1.586,1.551,1.566,1.566,0,0,1-1.538-1.577,1.556,1.556,0,0,1,1.564-1.547A1.548,1.548,0,0,1,839.382-1317.112Z'
                                            transform='translate(-817.805 1323.212)'
                                            fill='#737373'
                                        />
                                    </g>
                                </svg>
                            </a>
                        </li>
                    </ul>

                    <div className='copy-right'>© 2022 DRIM STAY</div>
                </div>
            </div>
        </div>
    );
}

export default Apartments;
