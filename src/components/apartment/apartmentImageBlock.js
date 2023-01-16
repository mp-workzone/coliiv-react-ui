function ApartmentImageBlock({ figure }) {
    return (
        <section className='apartment-figure-block'>
            <img src={figure.src} alt={figure.alt} />
        </section>
    );
}

export default ApartmentImageBlock;
