//imports
import { Card } from "../Card";
import { Container } from "./styles";

import {useState, useEffect} from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import {register} from 'swiper/element/bundle';

register();
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


export function Section({title}) {

    const [slidePerView, setSlidePerView ] = useState(3);

    useEffect(()=> {

        function handleResize(){
            if(window.innerWidth < 720){
                setSlidePerView(1);
            }
            else {
                setSlidePerView(3);
            }
        }

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }

    }, [])

    const divStyle = {
        margin: '0px 0px 20px 30px',
        width: '80%',
        padding: '0px 0px 0px 4.5rem'
        };


    return (
        <Container>

            <h2>
                {title}
            </h2>

            <Swiper
            slidesPerView={slidePerView}
            navigation

            style={divStyle}
            >
            <SwiperSlide>
                <div className="slide-item">
                    {<Card/>}
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide-item">
                    <Card/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide-item">
                    <Card/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide-item">
                    <Card/>
                </div>
            </SwiperSlide>
            </Swiper>
    </Container>
  );
}