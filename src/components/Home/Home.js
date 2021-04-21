import React from 'react';
import './Home.css';
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
    slidesToShow: 2,
    slidesToScroll: 1
};

class Home extends React.Component {
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

export default Home;