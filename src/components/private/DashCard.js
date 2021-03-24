import React from 'react'

export default function DashCard(props) {

      if (!props.tune.spouse) {
    return (
        <div class='tuneCard'>
            <h3>{props.tune.name}</h3>
            <img src={props.tune.img} alt={props.tune.name} />
            <p>Birth Day: {props.tune.birthDay}</p>
            <p>Voiced by: {props.tune.voice}</p>
            <p>Single Pringle Tune</p>
        </div>
    )
  }

    return (
        <div class='tuneCard'>
            <h3>{props.tune.name}</h3>
            <img src={props.tune.img} alt={props.tune.name} />
            <p>Birth Day: {props.tune.birthDay}</p>
            <p>Voiced by: {props.tune.voice}</p>
            <p>Spouse: {props.tune.spouse}</p>
        </div>
    )
}
