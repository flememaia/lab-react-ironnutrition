import React from 'react';

function AddFood(){

    return(
        <div>
            <form>
                <h1>Add Food</h1>
                <input type="text" id="text" name="newFood" placeholder="Please enter your new food description" value=""></input>
                <input type="url"  id="url" name="url" placeholder="Please enter your new food image URL" value=""></input>
                {/* //tipo submit 
                //depois do submut => WillUnmount */}
                <button type="submit" className="btn btn-primary">
                Submit
                </button>
            </form>
        </div>
    )
}

export default AddFood;