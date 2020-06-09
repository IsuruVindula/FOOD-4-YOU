import React, { Component } from 'react';
import './App.css';
import Recipe from './Components/Recipe';
import {recipes} from './tempList';
import RecipeList from './Components/RecipeList';
import RecipeDetails from './Components/RecipeDetails';


class App extends Component{
  
  state = {
    recipes: recipes,
    url: "copy the api url",
    details_id: 3538 
  }

  // async getRecipes(){ //when we click the page , its needs some time to load. So thats why we use async function
  //   try{
  //     const data = await fetch(this.state.url).then((value) =>{console.log(value);}, (error)=>{console.log(error);})
  //     const jasonData = await data.json();
  //     this.setState({recipes:jasonData.recipes})
  //   }catch(error){
  //     console.error(error);
  //   }
  // }

  // componentDidMount(){ //this is a build in method. Executes when app component mount
  //   this.getRecipes();
  // }

  render() {

    return(
      <React.Fragment>
        {/* <RecipeList recipes={this.state.recipes}/> */}
        <RecipeDetails id={this.state.details_id}/>
      </React.Fragment>
    )
  }
}



export default App;
