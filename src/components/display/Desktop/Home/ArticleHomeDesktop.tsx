export default function ArticleHomeDesktop() {
    return <article className="bg-brand-brown text-white flex flex-col gap-y-6 border border-brand-light rounded-b-[40px] rounded-tr-[40px] w-[1000px] h-[270px] absolute top-[580px] left-44">
        <h1 className="font-poppins font-bold text-6xl pt-5 ml-10">Ninguém é grande sozinho</h1>
        <p className="font-medium font-montserrat ml-10 pr-96 text-sm">
            <span className="font-bold">Ajude-nos</span> a fazer mais por quem precisa! <br />
            Conheça-nos melhor e <span className="font-bold">contribua do modo que seu coração preferir</span>. <br />
            “E desta maneira me esforcei para <span className="font-bold">anunciar o evangelho</span>, não onde Cristo haja sido nomeado, para não edificar sobre o fundamento alheio”. <span className="font-bold">(Romanos 15:20)</span>
        </p>
        <button className='lg:rounded-[40px] lg:bg-brand-light lg:text-white lg:w-24 lg:h-12 lg:font-dm-sans lg:font-bold lg:text-sm mb-5 ml-10'>DOAR</button>
    </article>
}