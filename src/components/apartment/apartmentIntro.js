
function ApartmentIntro({introContent}) {
    return (
        <section className='apartment-intro'>
            <div className='figure'>
                <span className='figure__text' dangerouslySetInnerHTML={{__html: introContent.figureText}}/>
                <img src={introContent.figure} alt={introContent.figureAlt} />
            </div>
            <div className='container-alt'>
                <div className='apartment-intro-content'>
                    <div className={`title ${introContent.titleClass ? introContent.titleClass : ''}`}>
                        <h2 dangerouslySetInnerHTML={{__html: introContent.title}}/>
                    </div>
                    <p>
                        {introContent.descroption}
                    </p>
                </div>
            </div>
        </section>
    );
}

export default ApartmentIntro;
