import React from 'react';
import {Link} from 'react-router-dom';

const Recipes = (props)=>{
    // console.log(props.recipes);

    return(
        <div className="container">
            <div className="row">
                {
                    props.recipes.map((recipe)=>{
                        return (

                            <div className="col-md-4" key={recipe.recipe_id}>
                                <div className="recipes__box mt-3">
                                    
                                    <img className="recipe__box-img" src={recipe.image_url} alt={recipe.title} />
                                    
                                    <div className="recipes__text">
                                        <h5 className="recipes__title">
                                         {recipe.title.length < 20 ? recipe.title : recipe.title.substring(0,25)+"...."} 
                                         </h5>
                                        <p className="recipes__subtitle">
                                            Publisher: <span>{recipe.publisher}</span>
                                        </p>
                                    </div>

                                    <button className="recipe_buttons">
                                        <Link to={{ 
                                            pathname: `/recipe/${recipe.recipe_id}`,
                                            state: {recipe: recipe}
                                        }}>View Recipe</Link>
                                    </button>

                                </div>
                            </div>
                        )
                    })
                }       
            </div>
        </div>
    )
}

export default Recipes;