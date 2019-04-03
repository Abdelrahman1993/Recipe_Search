import React from "react";
const Form = (props)=>{

    return (
        <form onSubmit={props.getRecipe} className="text-center">
            <input type="text" name="recipeName" />
            <button className="form__button"> search </button>
        </form>
    );

}
export default Form;