import CheckedIcon from "../../../../../../public/svg/CheckedIcon";


interface ICarrosselProjetos {
    title: string;
    description: string;
}

export default function CardCarrosselProjetosDesktop({ title, description }: ICarrosselProjetos) {
    return <div className="lg:bg-white lg:w-80 lg:h-64 lg:rounded-[30px] lg:text-center">
        <div className="lg:pt-8">
            <CheckedIcon className="lg:ml-5 lg:bg-brand-light lg:rounded-full lg:p-[2px]" />
        </div>
        <div className="lg:mt-32 lg:font-poppins lg:text-base">
            <p className="lg:font-bold">{title}</p>
            <p className="lg:font-medium">({description})</p>
        </div>
    </div>
}