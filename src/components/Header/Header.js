import React from 'react';
import './Header.css';
import { Link } from "react-router-dom"




const header = [
    { title: "Home", href: '/home'},
    { title: "Button", href: '/button'},
    { title: "Appointments", href: '/appointments'},
    { title: "Contacts", href: '/contacts'},
    { title: "About", href: '/about'},
]


function HeaderList(props) {
    const listItems = props.header.map((item, index) => 
        <li key={index}>
            <Link
                className='SectionNavigation-Item Section'
                to={ item.href }
            >
                <span className='Section-Title'>{ item.title }</span>
            </Link>
        </li>
    );
    
    return (
        <ul className="header__list">{listItems}</ul>
    );
}

class Header extends React.Component {
    
    render() {
        return (
            <header className="header">
                <div className="container">
                    <HeaderList header={header} />
                </div>
            </header>
        );
    }
}

export default Header;