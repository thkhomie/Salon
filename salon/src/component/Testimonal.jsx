import { useRef, useState } from "react";
import { TESTIMONALS } from "../data/Data"
import TestimonalCard from "./card/TestimonalCard"
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri'
import Pagination from "./Pagination/Pagination"
import Slider from "react-slick";

export default function Testimonal() {
    const sliderRef = useRef()
    const [currentSlide, setCurrentSlide] = useState(0)

    const setting = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 800,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 769,
                setting: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ], beforeChange: (index) => {
            setCurrentSlide(index);
        }
    };

    function slideRight() {
        sliderRef.current.slickNext();
    }

    function slideLeft() {
        sliderRef.current.slickPrev();
    }
    return (
        <div className="max-w-[1200px] py-16 mx-auto">
            <h2 className="text-headingColor text-2xl font-semibold text-center mb-10">Review</h2>

            <div className="relative mb-7 px-5 md:px-10">
                <Slider ref={sliderRef} {...setting}>
                    {TESTIMONALS.map((item) => (
                        <TestimonalCard
                            key={item.id}
                            imgUrl={item.imgUrl}
                            name={item.name}
                            review={item.review} />
                    ))}
                </Slider>
                <button className="arrow-btn left-1 md:left-5 lg:left-2" onClick={slideLeft}>
                    <RiArrowLeftSLine size={24} />
                </button>

                <button className="arrow-btn right-1 md:right-5 lg:right-2" onClick={slideRight}>
                    <RiArrowRightSLine size={24} />
                </button>
                <Pagination active={currentSlide} />

            </div>



        </div>
    )
}