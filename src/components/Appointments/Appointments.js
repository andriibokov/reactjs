import React from 'react';
import './Appointments.css';
import Header from "../Header/Header"
import SimpleSlider from "../Slider/Slider"


const listImg = [
    { url:'/images/image1.jpg', alt: 'image1'},
    { url:'/images/image2.jpg', alt: 'image1'},
    { url:'/images/image3.jpg', alt: 'image1'},
    { url:'/images/image8.jpg', alt: 'image1'},
    { url:'/images/image9.jpg', alt: 'image1'},
    { url:'/images/image10.jpg', alt: 'image1'}
]

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

class Appointments extends React.Component {
    render() {
        return (
            <main>
                <Header/>
                <SimpleSlider 
                    list={listImg}
                    settings={settings}
                />
            </main>
        );
    }
}

export default Appointments;