
function ApartmentIntro({introContent}) {
    return (
        <section className='apartment-intro'>
            <div className='figure'>
                <span className='figure__text' dangerouslySetInnerHTML={{__html: introContent.figureText}}/>
                <img src={introContent.figure} alt={introContent.figureAlt} />
            </div>
            <div className='container-alt'>
                <div className='apartment-intro-content'>
                    <div className='title'>
                        <h2 dangerouslySetInnerHTML={{__html: introContent.title}}/>
                    </div>
                    <p>
                        El Studio Loft te ofrece amet, consectetur adipiscing
                        elit. Phasellus vestibulum nisl sed faucibus consequat.
                        Aliquam in leo metus. Fusce at orci auctor ante
                        malesuada feugiat.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default ApartmentIntro;
