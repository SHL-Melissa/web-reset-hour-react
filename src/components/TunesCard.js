import React from 'react'

export default function TunesCard(props) {
    return (
        <div class='tuneCard'>
            <h3>{props.tune.name}</h3>
            <img src={props.tune.img} alt={props.tune.name} />
        </div>
    )
}
