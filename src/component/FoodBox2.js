import React from 'react';
import 'bulma/css/bulma.css';

import foods from "../foods.json";


function FoodBox2 (props) {
   
                return (
                    <div className="box">
                        <article className="media">
                            <div className="media-left">
                                <figure className="image is-64x64">
                                    <img src={props.image}/>
                                </figure>
                            </div>
                            <div className="media-content">
                                <div className="content">
                                    <p>
                                        <strong>{props.name}</strong> <br />
                                        <small>{props.calories} cal</small>
                                    </p>
                                </div>
                            </div>
                            <div className="media-right">
                                <div className="field has-addons">
                                    <div className="control">
                                        <input 
                                            className="input" 
                                            type="number" 
                                            // value="1" 
                                            // onChange={this.props.handleChange}
                                            onChange={props.handleChange}
                                            name={props.name}
                                            value={props.value}
                                        />
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
}

export default FoodBox2;
