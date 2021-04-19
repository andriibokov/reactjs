
import React from 'react';
import './App.css';
import Button from './components/Button/Button'



class Calc extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Calc</h1>
        <ul>
          <Button />
        </ul>
      </div>
    );
  }
}


export default Calc;
