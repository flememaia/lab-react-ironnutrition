import React from 'react';

import foods from "../foods.json"
import FoodBox2 from './FoodBox2';

class Food extends React.Component {
    
    state = {
        foods: [...foods],
        newFood: {name: "",
        calories: 0,
        image: "",
        quantity: 0},
    }
    
    // //newFood vem do input 
    // handleAddNewFood = (event) => {
    //     this.setState({ [event.target.name]: event.target.value });
    //   };
    
    // addNewFood = () => {
    //     const clone = [...foods]
    //     clone.push(newFood)
    //     this.setState({ foods: clone});
    // };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
      };

    render(){
        return(
            <div>
                {this.state.foods.map((eachFood) => {
                    return(
                        <div>
                            <FoodBox2 
                                image={eachFood.image} 
                                name={eachFood.name} 
                                calories={eachFood.calories} 
                                value={eachFood.quantity} 
                                handleChange={this.handleChange}
                            />
                        </div>
                    )})
                }
            </div>
        )
    }
} 

export default Food;