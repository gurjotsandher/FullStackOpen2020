import React from 'react';

const Button = (props) => {

    const handleEvent = (e) => {
        const value = e.target.value;
        props.onChange(value);
    }

  return (
    <div>
        <button name="Good" value="G" onClick={handleEvent}>Good</button>
        <button name="Neutral" value="N" onClick={handleEvent}>Neutral</button>
        <button name="Bad" value="B" onClick={handleEvent}>Bad</button>
    </div>
  );
}

export default Button;
