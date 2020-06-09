import React,{ Component } from "react";
import {recipe} from '../tempDetails';


export default class RecipeDetails extends Component{
constructor(props){
    super(props)

    this.state = {
        recipe: recipe,
        url: 'copy the api url id= {this.props.id }'
    };
}



  async componentDidMount(){ //this is a build in method. Executes when app component mount
      try{
      const data = await fetch(this.state.url).then((value) =>{console.log(value);}, (error)=>{console.log(error);})
      const jasonData = await data.json();
      this.setState({recipes:jasonData.recipes})
    }catch(error){
      console.error(error);
    }
  }

    render(){
        const {image_url, publisher, publisher_url, source_url, title, ingredients} = this.state.recipe;

        return(
        <React.Fragment>
            <div className="container">
            <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
            <button type="button" className="btn btn-warning mb-5 text-capitalized">back to recipe list</button>
            <img src={image_url} className="d-block w-100" alt="recipe"></img>
            </div>
            {/* details */}
            <div className="col-10 mx-auto col-md-6 my-3">
            <h6 className="text-upppercase">{title}</h6>
            <h6 className="text-warning text-capitalize tex-slanted">provided by {publisher}</h6>
            <a href={publisher_url} target="_blank"  rel="noopener noreferrer" className="btn btn-primary mt-2 text-capitalized">publisher webpage</a>
            <a href={source_url} target="_blank"  rel="noopener noreferrer" className="btn btn-success mt-2 mx-3 text-capitalized">Recipe URL</a>
            <ul className="list-group mt-4">
            <h2 className="mt-3 mb-4">Ingredients</h2>
            {
                ingredients.map((item, index)=>{
                    return(
                        <li key={index} className="list-group-item text-slanted">
                            {item}
                        </li>
                    )
                })
            }
            </ul>
            </div>
            </div>
            </div>
        </React.Fragment>
        );
    }
}