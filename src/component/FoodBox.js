// img comida
// nome
// calorias
// input com quantidade 
// botão pra adicionar na lista ao lado

import React from 'react';
import 'bulma/css/bulma.css';

import foods from "../foods.json";


class FoodBox extends React.Component {


    render (){
        return (
            <div>
                {foods.map(eachFood => {
                return (
                    <div className="box">
                        <article className="media">
                            <div className="media-left">
                                <figure className="image is-64x64">
                                    <img src={eachFood.image} />
                                </figure>
                            </div>
                            <div className="media-content">
                                <div className="content">
                                    <p>
                                        <strong>{eachFood.name}</strong> <br />
                                        <small>{eachFood.calories} cal</small>
                                    </p>
                                </div>
                            </div>
                            <div className="media-right">
                                <div className="field has-addons">
                                    <div className="control">
                                        <input className="input" type="number" value="1" />
                                    </div>
                                    <div className="control">
                                        <button className="button is-info">
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                )
                })}
            </div>
        )
    }
}

export default FoodBox;