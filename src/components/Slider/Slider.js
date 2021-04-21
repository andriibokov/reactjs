import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.css';


export default function SimpleSlider(props) {

    function SliderList(props) {
        const listItems = props.list.map((item, index) => 
            <div key={ index }>
                <img src={ item.url } alt={ item.alt }/>
            </div>
        )
        return (
            <Slider {...props.settings}>{listItems}</Slider>
        );
    }

    return (
        <div className="container">
                <SliderList 
                    list={props.list}
                    settings={props.settings}
                />
        </div>
    );
}