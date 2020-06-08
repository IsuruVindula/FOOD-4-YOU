import React, { Component } from 'react';
import './App.css';
import Recipe from './Components/Recipe';
import {recipes} from './tempList';
import RecipeList from './Components/RecipeList';
import RecipeDetails from './Components/RecipeDetails';
import t from './test';
import t2 from './test2';


class App extends Component{
  
  //  p = t.getCompatibility('Avengers Endgame');
  state = {
    recipes: recipes,
    url: "copy the api url"
  }

  // async getRecipes(){ //when we click the page , its needs some time to load. So tghats why we use async function
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
    // console.log(this.state.recipes);
    return(
      <React.Fragment>
      <RecipeList recipes={this.state.recipes}/>
        {/* <RecipeDetails></RecipeDetails> */}
      </React.Fragment>
    )
  }
  
}

// const asyncApiCall = async () => {
//   const response = await t.getCompatibility('Avengers Endgame')

//   console.log(response.data.data.Compatibility.heading)
//   console.log(response.data.data.Compatibility)
//  }

// asyncApiCall()


export default App;
