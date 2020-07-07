import React from 'react';

const Best = (props) => {
    const data = props.data;
    const anecdotes = props.anecdotes;
    let max = 0;
    let quote = 'No votes taken.';

    for(let i = 0; i < 6; i++){
        if(data[i] > max){
            max = data[i]
            quote = anecdotes[i];
        }
    }

    return(
        <div>
            <p>{quote}</p>
            <p>The vote leader has: {max}</p>
        </div>
    )
}

export default Best;
