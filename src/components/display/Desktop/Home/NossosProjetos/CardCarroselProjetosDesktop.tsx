import CheckedIcon from "../../../../../../public/svg/CheckedIcon";


interface ICarrosselProjetos {
    title: string;
    description: string;
}

export default function CardCarrosselProjetosDesktop({ title, description }: ICarrosselProjetos) {
    return <div className="bg-white w-80 h-64 rounded-[30px] text-center">
        <div className="pt-8">
            <CheckedIcon className="ml-5 bg-brand-light rounded-full p-[2px]" />
        </div>
        <div className="mt-32 font-poppins text-base">
            <p className="font-bold">{title}</p>
            <p className="font-medium">({description})</p>
        </div>
    </div>
}