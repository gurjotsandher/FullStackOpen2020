import React from 'react';
import Part from './Part';

export const Content = (props) => {
    let myContent = props.parts;

    return (
        <div>
            <Part name={myContent[0].name} />
            <Part name={myContent[1].name} />
            <Part name={myContent[2].name} />
        </div>
    )
}