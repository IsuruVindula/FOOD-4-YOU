import React,{ Component } from "react";
import Recipe from "./Recipe";
import ReciepResearch from "./RecipeSearch";


export default class RecipeList extends Component{
    render(){
        const {recipes, handleDetails, value, error, handleChange, handleSubmit} = this.props;

        return(
       <React.Fragment>
            <ReciepResearch value={value} handleChange={handleChange} handleSubmit={handleSubmit} />
                <div className="container my-5">
                {/* title */}
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
                            <h1 className="text-slanted"> recipe list</h1>
                        </div>
                    </div>
                    {/* end of title */}
                    <div className="row">
                    {
                        error? <h1 className="tex-danger text-center"> {error} </h1> :

                        recipes.map( (recipe)=>{
                            return(
                                <Recipe key={recipe.recipe_id} recipe={recipe} handleDetails={()=>handleDetails(0, recipe.recipe_id)}/>
                            )
                        })
                    }
                    </div>
                </div>
        </React.Fragment>
        )
    }
}