import React from 'react';
import './Button.css';

class Button extends React.Component {
    render() {
        return (
            <li>
                <button 
                    onClick={() => alert('111')}
                />
            </li>
        );
    }
}

export default Button;