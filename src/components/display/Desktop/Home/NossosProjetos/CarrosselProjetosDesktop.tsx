"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { CustomArrowProps } from "react-slick";

import { ICardProjects } from "@/models/card.interface";
import CardCarrosselProjetosDesktop from "./CardCarroselProjetosDesktop";
import React from "react";

const cardProjects: ICardProjects[] = [
    { title: "Entendes o que lês?", description: "Alfabetização de jovens e adultos" },
    { title: "Delas é o Reino", description: "Ministério infantil" },
    { title: "Lâmpada para os meus pés", description: "Futebol feminino" },
    { title: "Belém", description: "Padaria comunitária" },
    { title: "Salfona", description: "Escola de música para crianças, jovens e adultos" },
];

const CustomPrevArrow: React.FC<CustomArrowProps> = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="absolute left-[-40px] top-2/3 transform -translate-y-1/2 text-white text-3xl cursor-pointer"
        >
            ❮
        </button>
    );
};

const CustomNextArrow: React.FC<CustomArrowProps> = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="absolute right-[-40px] top-2/3 transform -translate-y-1/2 text-white text-3xl cursor-pointer"
        >
            ❯
        </button>
    );
};

export default function CarrosselProjetosDesktop() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        centerMode: true,
        centerPadding: "0px"
    };

    return (
        <Slider {...settings} className="lg:mx-auto lg:max-w-[1024px] lg:pt-32">
            {cardProjects.map(({ title, description }, index) => {
                return (
                    <div key={index} className="slide-container">
                        <CardCarrosselProjetosDesktop title={title} description={description} />
                    </div>
                );
            })}
        </Slider>
    );
}

