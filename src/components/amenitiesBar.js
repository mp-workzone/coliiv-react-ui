import BarGarden from "../assets/bar-garden.jpg";
import BarImg from "../assets/bar.jpg";
import Plant from "../assets/plant05.webp";
function Bar() {
    return (
        <>
            {/* bar start */}
            <section className='counter-lobby facility facility-after'>
                <div className='facility__figure'>
                    <img src={BarImg} alt='' />
                </div>
                <h1 className='facility__title title-primary'>BAR</h1>
                <div className='scrollbar'>
                    <div className='count-no'>08</div>
                    <div className='scrollbar__inner top-part'></div>
                    <div className='scrollbar__inner bottom-part'></div>
                    <div className='total-count'>12</div>
                </div>
            </section>
            {/* bar end*/}

            {/* barBlog01 start */}
            <section className='facility-blog top info-blog left-space'>
                <div className='inner-section'>
                    <div className='info-blog__text-area'>
                        <div className='slice portrait bar-portrait'></div>
                        <h2 className='info-blog__title'>
                            Eu euismod nunc integer vel pellentesque lorem
                        </h2>
                        <h4 className='dsc'>
                            Vivamus vel sem dignissim, auctor eros sed,
                            dignissim odio. Pellentesque tortor diam, posuere a
                            nibh eget, vehicula sollicitudin lorem. Suspendisse
                            potenti. Proin a elit purus.
                            <span className='dsc'>
                                Nulla eu sagittis quam. Mauris viverra nulla eu
                                dolor rhoncus, et porttitor libero ultrices.
                                Nunc justo metus, consequat eget libero eu,
                                rutrum vestibulum nunc.
                            </span>
                        </h4>
                    </div>
                    <div className='info-blog__figure min-height'>
                        <img src={BarImg} alt='' />
                    </div>
                </div>
            </section>

            {/*  barBlog01 end */}

            {/*  barBlog02 start */}
            <section className='facility-blog bottom info-blog right-space'>
                <div className='garden-plant'>
                    <img src={Plant} alt='' />
                </div>
                <div className='inner-section responsive-reverse'>
                    <div className='info-blog__figure maximum'>
                        <img src={BarGarden} alt='' />
                    </div>
                    <div className='info-blog__text-area'>
                        <h2 className='title-primary'>Gradería</h2>
                        <h4 className='dsc'>
                            Vestibulum ante ipsum primis in faucibus orci luctus
                            et ultrices posuere cubilia curae; In sed mi
                            laoreet, mattis nulla faucibus, sollicitudin dolor.
                        </h4>
                    </div>
                </div>
            </section>
            {/*  barBlog02 end */}
        </>
    );
}

export default Bar;
