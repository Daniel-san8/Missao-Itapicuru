export default function ArticleHomeDesktop() {
    return <article className="lg:bg-brand-brown lg:text-white lg:flex lg:flex-col lg:gap-y-6 lg:border border-brand-light lg:rounded-b-[40px] lg:rounded-tr-[40px] lg:w-[1000px] lg:h-[270px] lg:absolute lg:top-[580px] lg:left-44">
        <h1 className="lg:font-poppins lg:font-bold lg:text-6xl lg:pt-5 lg:ml-10">Ninguém é grande sozinho</h1>
        <p className="lg:font-medium lg:font-montserrat lg:ml-10 lg:pr-96 lg:text-sm">
            <span className="lg:font-bold">Ajude-nos</span> a fazer mais por quem precisa! <br />
            Conheça-nos melhor e <span className="lg:font-bold">contribua do modo que seu coração preferir</span>. <br />
            “E desta maneira me esforcei para <span className="lg:font-bold">anunciar o evangelho</span>, não onde Cristo haja sido nomeado, para não edificar sobre o fundamento alheio”. <span className="lg:font-bold">(Romanos 15:20)</span>
        </p>
        <button className='lg:rounded-[40px] lg:bg-brand-light lg:text-white lg:w-24 lg:h-12 lg:font-dm-sans lg:font-bold lg:text-sm lg:mb-5 ml-10'>DOAR</button>
    </article>
}